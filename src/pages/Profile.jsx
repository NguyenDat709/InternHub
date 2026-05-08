import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Award, Briefcase, GraduationCap, Code, Star, Edit2, Plus, Github, Linkedin,
  ExternalLink, Heart, MessageSquare, Eye, TrendingUp, CheckCircle2, Upload, Zap
} from 'lucide-react';

const skills = ['Flutter', 'React', 'Figma', 'Python', 'Node.js', 'TypeScript', 'Firebase', 'Docker'];
const badges = [
  { icon: Code, label: 'Top Coder', color: 'blue', desc: 'Hoàn thành 5+ thách thức code' },
  { icon: Star, label: 'Creative Thinker', color: 'amber', desc: 'Được bình chọn ý tưởng tốt nhất' },
  { icon: Award, label: 'Team Player', color: 'emerald', desc: 'Tham gia 3+ dự án nhóm' },
  { icon: TrendingUp, label: 'Fast Learner', color: 'purple', desc: 'Hoàn thành 10+ khóa học' },
];

const projects = [
  {
    id: 1, title: 'SpendWise - Chi tiêu thông minh',
    desc: 'Ứng dụng quản lý chi tiêu cá nhân với biểu đồ phân tích thông minh.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop',
    tech: ['Flutter', 'Riverpod', 'Hive'], likes: 42, views: 310, comments: 12,
    link: '#',
  },
  {
    id: 2, title: 'EduConnect Platform',
    desc: 'Nền tảng kết nối giáo viên và học sinh với tính năng học trực tuyến.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop',
    tech: ['React', 'Node.js', 'Socket.io'], likes: 28, views: 189, comments: 7,
    link: '#',
  },
];

const experiences = [
  { company: 'FPT Software', role: 'Flutter Intern', period: 'Jun 2024 – Sep 2024', logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=80&h=80&fit=crop' },
];

const education = [
  { school: 'ĐH Bách Khoa TP.HCM', major: 'Khoa học Máy tính', period: '2022 – 2026', gpa: '3.6/4.0' },
];

const profileCompletion = [
  { label: 'Ảnh đại diện', done: true },
  { label: 'Thông tin cơ bản', done: true },
  { label: 'Kỹ năng (5+)', done: true },
  { label: 'Kinh nghiệm', done: true },
  { label: 'Dự án showcase', done: true },
  { label: 'CV đính kèm', done: false },
  { label: 'Liên kết GitHub', done: false },
];

const badgeColors = {
  blue: 'bg-blue-50 border-blue-200 text-blue-700',
  amber: 'bg-amber-50 border-amber-200 text-amber-700',
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  purple: 'bg-purple-50 border-purple-200 text-purple-700',
};

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const completionScore = Math.round((profileCompletion.filter(p => p.done).length / profileCompletion.length) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      {/* Cover + Avatar */}
      <Card className="overflow-hidden">
        <div className="h-36 bg-gradient-to-r from-primary via-primary/80 to-accent/60 relative">
          <Button variant="ghost" size="sm" className="absolute top-3 right-3 text-white hover:bg-white/20 rounded-full gap-1.5 text-xs">
            <Edit2 className="w-3.5 h-3.5" />Thay ảnh bìa
          </Button>
        </div>
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-start gap-4 -mt-12">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-card shadow-xl">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face" />
                <AvatarFallback className="text-2xl">NA</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-card">
                <Upload className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
            <div className="flex-1 mt-14 sm:mt-14">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h1 className="text-2xl font-bold font-space">Nguyễn Văn A</h1>
                  <p className="text-muted-foreground mt-0.5">Sinh viên CNTT • ĐH Bách Khoa HCM</p>
                  <p className="text-sm mt-2 text-muted-foreground max-w-lg">
                    Đam mê phát triển mobile app và web, đang tìm kiếm cơ hội thực tập để áp dụng kỹ năng vào thực tế.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-4.5 h-4.5 w-[18px] h-[18px]" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-[18px] h-[18px]" /></a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-full gap-1.5" onClick={() => setEditing(!editing)}>
                    <Edit2 className="w-3.5 h-3.5" />Chỉnh sửa
                  </Button>
                  <Button size="sm" className="rounded-full gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />Xem hồ sơ công khai
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Profile completion */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm">Độ hoàn thiện hồ sơ</h3>
          </div>
          <span className="text-lg font-bold text-primary font-space">{completionScore}%</span>
        </div>
        <Progress value={completionScore} className="h-2 mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {profileCompletion.map((item, i) => (
            <div key={i} className={`flex items-center gap-1.5 text-xs ${item.done ? 'text-emerald-600' : 'text-muted-foreground'}`}>
              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${item.done ? 'text-emerald-500' : 'text-muted-foreground/50'}`} />
              {item.label}
            </div>
          ))}
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview">
        <TabsList className="bg-card border rounded-xl p-1 w-full grid grid-cols-4">
          <TabsTrigger value="overview" className="rounded-lg text-xs sm:text-sm">Tổng quan</TabsTrigger>
          <TabsTrigger value="projects" className="rounded-lg text-xs sm:text-sm">Dự án</TabsTrigger>
          <TabsTrigger value="badges" className="rounded-lg text-xs sm:text-sm">Huy hiệu</TabsTrigger>
          <TabsTrigger value="activity" className="rounded-lg text-xs sm:text-sm">Hoạt động</TabsTrigger>
        </TabsList>

        {/* Overview */}
        <TabsContent value="overview" className="space-y-4 mt-4">
          {/* Skills */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2"><Code className="w-4 h-4 text-primary" /><h3 className="font-semibold">Kỹ năng</h3></div>
              <Button variant="ghost" size="sm" className="text-xs text-primary gap-1"><Plus className="w-3.5 h-3.5" />Thêm</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <Badge key={i} variant="secondary" className="rounded-full px-3 py-1 text-sm">{s}</Badge>
              ))}
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /><h3 className="font-semibold">Kinh nghiệm</h3></div>
              <Button variant="ghost" size="sm" className="text-xs text-primary gap-1"><Plus className="w-3.5 h-3.5" />Thêm</Button>
            </div>
            {experiences.map((exp, i) => (
              <div key={i} className="flex items-center gap-4">
                <Avatar className="w-11 h-11 rounded-xl">
                  <AvatarImage src={exp.logo} />
                  <AvatarFallback className="rounded-xl">{exp.company[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-sm">{exp.role}</h4>
                  <p className="text-xs text-muted-foreground">{exp.company} • {exp.period}</p>
                </div>
              </div>
            ))}
          </Card>

          {/* Education */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-3"><GraduationCap className="w-4 h-4 text-primary" /><h3 className="font-semibold">Học vấn</h3></div>
            {education.map((edu, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{edu.school}</h4>
                  <p className="text-xs text-muted-foreground">{edu.major} • {edu.period}</p>
                  <Badge variant="secondary" className="text-xs mt-1 rounded-full">GPA: {edu.gpa}</Badge>
                </div>
              </div>
            ))}
          </Card>
        </TabsContent>

        {/* Projects */}
        <TabsContent value="projects" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map(proj => (
              <Card key={proj.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{proj.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {proj.tech.map((t, i) => <Badge key={i} variant="secondary" className="text-[10px] rounded-full px-2">{t}</Badge>)}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{proj.likes}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{proj.views}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{proj.comments}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs gap-1 text-primary">
                      <ExternalLink className="w-3.5 h-3.5" />Xem
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            <Card className="border-2 border-dashed border-primary/20 flex items-center justify-center h-64 cursor-pointer hover:border-primary/40 transition-colors">
              <div className="text-center">
                <Plus className="w-8 h-8 text-primary/40 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Thêm dự án mới</p>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Badges */}
        <TabsContent value="badges" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {badges.map((badge, i) => (
              <Card key={i} className={`p-5 border ${badgeColors[badge.color]}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/60`}>
                    <badge.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{badge.label}</h3>
                    <p className="text-xs mt-0.5 opacity-75">{badge.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Activity */}
        <TabsContent value="activity" className="mt-4">
          <Card className="p-5">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />Thống kê hoạt động
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Bài đăng', value: '12', icon: MessageSquare },
                { label: 'Lượt thích', value: '248', icon: Heart },
                { label: 'Thách thức', value: '5', icon: Zap },
                { label: 'Điểm uy tín', value: '70%', icon: Award },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-secondary/50">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <div className="text-2xl font-bold font-space">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}