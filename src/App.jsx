import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from '@/pages/Home';
import Jobs from '@/pages/Jobs';
import Mentors from '@/pages/Mentors';
import Challenges from '@/pages/Challenges';
import Messages from '@/pages/Messages';
import Notifications from '@/pages/Notifications';
import Profile from '@/pages/Profile';
import AppLayout from '@/components/layout/AppLayout';
import MentorLayout from '@/components/layout/MentorLayout';
import CompanyLayout from '@/components/layout/CompanyLayout';
import MentorDashboard from '@/pages/mentor/MentorDashboard';
import MentorStudents from '@/pages/mentor/MentorStudents';
import MentorSessions from '@/pages/mentor/MentorSessions';
import MentorEarnings from '@/pages/mentor/MentorEarnings';
import CompanyDashboard from '@/pages/company/CompanyDashboard';
import CompanyJobs from '@/pages/company/CompanyJobs';
import CompanyCandidates from '@/pages/company/CompanyCandidates';
import CompanyChallenges from '@/pages/company/CompanyChallenges';
import CompanyAnalytics from '@/pages/company/CompanyAnalytics';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<AppLayout><Home /></AppLayout>} />
      <Route path="/jobs" element={<AppLayout><Jobs /></AppLayout>} />
      <Route path="/mentors" element={<AppLayout><Mentors /></AppLayout>} />
      <Route path="/challenges" element={<AppLayout><Challenges /></AppLayout>} />
      <Route path="/messages" element={<AppLayout><Messages /></AppLayout>} />
      <Route path="/notifications" element={<AppLayout><Notifications /></AppLayout>} />
      <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
      {/* Mentor Portal */}
      <Route path="/mentor/dashboard" element={<MentorLayout><MentorDashboard /></MentorLayout>} />
      <Route path="/mentor/students" element={<MentorLayout><MentorStudents /></MentorLayout>} />
      <Route path="/mentor/sessions" element={<MentorLayout><MentorSessions /></MentorLayout>} />
      <Route path="/mentor/earnings" element={<MentorLayout><MentorEarnings /></MentorLayout>} />
      {/* Company Portal */}
      <Route path="/company/dashboard" element={<CompanyLayout><CompanyDashboard /></CompanyLayout>} />
      <Route path="/company/jobs" element={<CompanyLayout><CompanyJobs /></CompanyLayout>} />
      <Route path="/company/candidates" element={<CompanyLayout><CompanyCandidates /></CompanyLayout>} />
      <Route path="/company/challenges" element={<CompanyLayout><CompanyChallenges /></CompanyLayout>} />
      <Route path="/company/analytics" element={<CompanyLayout><CompanyAnalytics /></CompanyLayout>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App