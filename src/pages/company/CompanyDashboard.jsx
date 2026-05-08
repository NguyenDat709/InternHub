import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Briefcase, Eye, TrendingUp, Zap, Clock, Star, ChevronRight, Plus, CheckCircle2, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts';

const viewData = [
  { day: 'T2', views: 120 }, { day: 'T3', views: 180 }, { day: 'T4', views: 150 },
  { day: 'T5', views: 240 }, { day: 'T6', views: 310 }, { day: 'T7', views: 290 }, { day: 'CN', views: 200 },
];
const applicantData = [
  { month: 'T3', count: 28 }, { month: 'T4', count: 45 }, { month: 'T5', count: 38 },
  { month: 'T6', count: 62 },
];

const topCandidates = [
  { name: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face', role: 'Flutter Developer', match: 95, badge: 'Top Coder', school: 'Bách Khoa HCM' },
  { name: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', role: 'Flutter Developer', match: 91, badge: 'Creative', school: 'ĐH FPT' },
  { name: 'Lê Minh C', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', role: 'Frontend Intern', match: 88, badge: 'Team Player', school: 'ĐH RMIT' },
];

const activeJobs = [
  { title: 'Flutter Developer Intern', applicants: 48, views: 312, deadline: '30/06', status: 'hot' },
  { title: 'Frontend Engineer Intern', applicants: 120, views: 891, deadline: '25/06', status: 'active' },
  { title: 'Data Analyst Intern', applicants: 22, views: 145, deadline: '20/06', status: 'active' },
];

const stats = [
  { label: 'Tổng ứng viên', value: '190', sub: '+28 tuần này', icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Tin đang đăng', value: '3', sub: '2 đang hot', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Lượt xem CV', value: '1.2K', sub: '+15% tuần này', icon: Eye, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Tỉ lệ phỏng vấn', value: '12%', sub: 'Tốt hơn TB ngành', icon: TrendingUp, color: 'text-violet-600', bg: 'bg-violet-50' },
];

export default function CompanyDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold font-space">Tổng quan tuyển dụng 🏢</h1>
          <p className="text-muted-foreground mt-1">FPT Software • Hôm nay có <span className="font-semibold text-destructive">8 ứng viên mới</span> và <span className="font-semibold text-primary">1 thách thức đang chạy</span>.</p>
        </div>
        <Link to="/company/jobs">
          <Button className="rounded-full gap-2">
            <Plus className="w-4 h-4" />Đăng tin mới
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold font-space mt-1">{stat.value}</p>
                <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />{stat.sub}
                </p>
              </div>
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Views chart */}
        <Card className="p-5">
          <h3 className="font-semibold mb-4 flex items-center gap-2"><Eye className="w-4 h-4 text-primary" />Lượt xem tin tuần này</h3>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={viewData}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="views" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#colorViews)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Applicants chart */}
        <Card className="p-5">
          <h3 className="font-semibold mb-4 flex items-center gap-2"><Users className="w-4 h-4 text-primary" />Ứng viên 4 tháng gần đây</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={applicantData} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Active jobs */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" />Tin đang đăng</h3>
          <Link to="/company/jobs">
            <Button variant="ghost" size="sm" className="text-xs text-primary gap-1">Quản lý <ChevronRight className="w-3.5 h-3.5" /></Button>
          </Link>
        </div>
        <div className="space-y-3">
          {activeJobs.map((job, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl border hover:border-primary/30 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">{job.title}</h4>
                  {job.status === 'hot' && <Badge className="text-[10px] bg-destructive/10 text-destructive border-0">🔥 Hot</Badge>}
                </div>
                <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{job.applicants} ứng viên</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{job.views} lượt xem</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />HN: {job.deadline}</span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="rounded-full text-xs">Xem ứng viên</Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Top candidates */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />Top ứng viên AI đề xuất
          </h3>
          <Link to="/company/candidates">
            <Button variant="ghost" size="sm" className="text-xs text-primary gap-1">Xem tất cả <ChevronRight className="w-3.5 h-3.5" /></Button>
          </Link>
        </div>
        <div className="space-y-3">
          {topCandidates.map((c, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl border hover:border-primary/30 transition-colors">
              <div className="relative">
                <Avatar className="w-11 h-11">
                  <AvatarImage src={c.avatar} />
                  <AvatarFallback>{c.name[0]}</AvatarFallback>
                </Avatar>
                <span className="absolute -top-1 -left-1 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-card">
                  {i + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">{c.name}</span>
                  <Badge className="text-[10px] bg-blue-50 text-blue-700 border-0 rounded-full">{c.badge}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{c.school}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="font-bold text-sm text-primary">{c.match}% phù hợp</div>
                <div className="flex gap-1.5 mt-1.5">
                  <Button size="sm" className="rounded-full text-xs h-7 gap-1">
                    <UserCheck className="w-3 h-3" />Mời
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full text-xs h-7">Xem</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}