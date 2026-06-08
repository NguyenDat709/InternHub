import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, GraduationCap, ChevronRight } from 'lucide-react';
import JobCard from './JobCard';
import MentorCard from './MentorCard';
import { feedApi } from '@/api/feedApi';
import { useQuery } from '@tanstack/react-query';
const jobs = [
  {
    title: 'Flutter Developer Intern',
    company: 'FPT Software',
    logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=80&h=80&fit=crop',
    location: 'Hồ Chí Minh',
    posted: '2 ngày trước',
    matchScore: 95,
    skills: ['Flutter', 'Dart', 'REST API'],
  },
  {
    title: 'Frontend Engineer Intern',
    company: 'Shopee Vietnam',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
    location: 'Hồ Chí Minh',
    posted: '1 ngày trước',
    matchScore: 88,
    skills: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Data Analyst Intern',
    company: 'VNG Corporation',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop',
    location: 'Hà Nội',
    posted: '3 ngày trước',
    matchScore: 72,
    skills: ['Python', 'SQL', 'Tableau'],
  },
];
const mentors = [
  {
    name: 'Anh Trần Minh Đức',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    role: 'Senior Developer',
    company: 'Momo',
    rating: 4.9,
    reviews: 47,
    online: true,
  },
  {
    name: 'Chị Nguyễn Thanh Hà',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face',
    role: 'Product Manager',
    company: 'Tiki',
    rating: 4.8,
    reviews: 32,
    online: true,
  },
  {
    name: 'Anh Phạm Hoàng Long',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face',
    role: 'Tech Lead',
    company: 'VNPay',
    rating: 4.7,
    reviews: 28,
    online: false,
  },
];
export default function OpportunitySidebar() {
   
  return (
    <div className="space-y-4">
      {/* Hot Jobs */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <h4 className="text-sm font-semibold">Vị trí Hot dành cho bạn</h4>
          </div>
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary -mr-2">
            Tất cả
            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </Button>
        </div>
        <div className="space-y-2.5">
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </Card>

      {/* Mentors */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            <h4 className="text-sm font-semibold">Chợ Mentor</h4>
          </div>
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary -mr-2">
            Xem thêm
            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </Button>
        </div>
        <div className="space-y-2.5">
          {mentors.map((mentor, i) => (
            <MentorCard key={i} mentor={mentor} />
          ))}
        </div>
      </Card>
    </div>
  );
}