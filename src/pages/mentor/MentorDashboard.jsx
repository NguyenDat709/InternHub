import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  Users, Calendar, Star, DollarSign, TrendingUp, Clock, ChevronRight,
  CheckCircle2, MessageSquare, Zap, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const earningsData = [
  { month: 'T1', amount: 3200000 },
  { month: 'T2', amount: 4100000 },
  { month: 'T3', amount: 3800000 },
  { month: 'T4', amount: 5200000 },
  { month: 'T5', amount: 4900000 },
  { month: 'T6', amount: 6100000 },
];

const upcomingSessions = [
  { student: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face', topic: 'Flutter State Management', time: 'Hôm nay, 14:00', duration: '60 phút', type: 'online' },
  { student: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', topic: 'Review code dự án cuối kỳ', time: 'Ngày mai, 10:00', duration: '45 phút', type: 'online' },
  { student: 'Phạm Văn C', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', topic: 'Career Path: Mobile vs Web', time: 'Thứ 5, 16:30', duration: '30 phút', type: 'offline' },
];

const recentRequests = [
  { student: 'Lê Thị D', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face', skill: 'React Native', message: 'Mình muốn học cách build app thương mại điện tử với React Native, có thể hướng dẫn mình không ạ?', time: '2 giờ trước' },
  { student: 'Hoàng Văn E', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face', skill: 'Dart/Flutter', message: 'Cần mentor giúp hiểu về Riverpod và clean architecture trong Flutter.', time: '5 giờ trước' },
];

const stats = [
  { label: 'Học viên hiện tại', value: '12', sub: '+2 tuần này', icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Buổi dạy tháng này', value: '28', sub: '+6 vs tháng trước', icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Đánh giá trung bình', value: '4.9', sub: '47 đánh giá', icon: Star, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Thu nhập tháng này', value: '6.1M', sub: '+24% vs tháng trước', icon: DollarSign, color: 'text-violet-600', bg: 'bg-violet-50' },
];

export default function MentorDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold font-space">Chào buổi sáng, Anh Đức! 👋</h1>
          <p className="text-muted-foreground mt-1">Bạn có <span className="font-semibold text-primary">3 buổi dạy</span> hôm nay và <span className="font-semibold text-destructive">2 yêu cầu mới</span> đang chờ.</p>
        </div>
        <Link to="/mentor/sessions">
          <Button className="rounded-full gap-2">
            <Calendar className="w-4 h-4" />Xem lịch dạy
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Chart */}
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Thu nhập 6 tháng qua</h3>
            <Badge variant="secondary" className="text-xs rounded-full">VNĐ</Badge>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={earningsData}>
              <defs>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={v => [`${(v / 1000000).toFixed(1)}M VNĐ`, 'Thu nhập']} />
              <Area type="monotone" dataKey="amount" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#colorEarnings)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Profile Health */}
        <Card className="p-5">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />Hiệu quả Mentor
          </h3>
          {[
            { label: 'Tỷ lệ phản hồi', value: 98, color: 'bg-emerald-500' },
            { label: 'Hài lòng học viên', value: 96, color: 'bg-primary' },
            { label: 'Đúng giờ', value: 100, color: 'bg-amber-500' },
            { label: 'Hoàn thành mục tiêu', value: 82, color: 'bg-violet-500' },
          ].map((item, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-semibold">{item.value}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Upcoming Sessions */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" />Buổi dạy sắp tới</h3>
          <Link to="/mentor/sessions">
            <Button variant="ghost" size="sm" className="text-xs text-primary gap-1">Xem tất cả <ChevronRight className="w-3.5 h-3.5" /></Button>
          </Link>
        </div>
        <div className="space-y-3">
          {upcomingSessions.map((session, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl border hover:border-primary/30 transition-colors">
              <Avatar className="w-10 h-10">
                <AvatarImage src={session.avatar} />
                <AvatarFallback>{session.student[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">{session.student}</p>
                <p className="text-xs text-muted-foreground">{session.topic}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-medium flex items-center gap-1 justify-end">
                  <Clock className="w-3 h-3 text-primary" />{session.time}
                </p>
                <p className="text-xs text-muted-foreground">{session.duration}</p>
              </div>
              <Badge variant={session.type === 'online' ? 'default' : 'secondary'} className="text-[10px] rounded-full shrink-0">
                {session.type === 'online' ? 'Online' : 'Offline'}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* New Requests */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2"><MessageSquare className="w-4 h-4 text-primary" />Yêu cầu mới</h3>
          <Badge className="bg-destructive text-destructive-foreground text-xs rounded-full">{recentRequests.length} mới</Badge>
        </div>
        <div className="space-y-3">
          {recentRequests.map((req, i) => (
            <div key={i} className="p-4 rounded-xl border bg-card hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={req.avatar} />
                  <AvatarFallback>{req.student[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{req.student}</span>
                    <Badge variant="secondary" className="text-[10px] rounded-full">{req.skill}</Badge>
                    <span className="text-[10px] text-muted-foreground ml-auto">{req.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{req.message}</p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="rounded-full text-xs h-7 gap-1">
                      <CheckCircle2 className="w-3 h-3" />Chấp nhận
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full text-xs h-7">Xem hồ sơ</Button>
                    <Button size="sm" variant="ghost" className="rounded-full text-xs h-7 text-muted-foreground">Từ chối</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}