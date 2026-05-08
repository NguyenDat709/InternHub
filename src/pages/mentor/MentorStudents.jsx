import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, MessageSquare, Calendar, Star, TrendingUp, BookOpen, CheckCircle2, Clock, ChevronRight } from 'lucide-react';

const students = [
  {
    id: 1, name: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&h=160&fit=crop&crop=face',
    school: 'ĐH Bách Khoa HCM', skill: 'Flutter', sessions: 8, totalSessions: 12,
    progress: 68, rating: 4.8, lastSession: '2 ngày trước', goal: 'Intern tại Momo',
    status: 'active', nextSession: 'Hôm nay, 14:00',
    milestones: ['Cài đặt môi trường', 'Dart cơ bản', 'Flutter Widget', 'State Management'],
    doneMilestones: 3,
  },
  {
    id: 2, name: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face',
    school: 'ĐH FPT', skill: 'Flutter', sessions: 5, totalSessions: 8,
    progress: 45, rating: 4.9, lastSession: 'Hôm qua', goal: 'Hoàn thành app SpendWise',
    status: 'active', nextSession: 'Ngày mai, 10:00',
    milestones: ['Dart nâng cao', 'Riverpod', 'Firebase', 'Publish App'],
    doneMilestones: 2,
  },
  {
    id: 3, name: 'Phạm Văn C', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face',
    school: 'ĐH RMIT', skill: 'React Native', sessions: 10, totalSessions: 10,
    progress: 100, rating: 5.0, lastSession: '1 tuần trước', goal: 'Intern tại Shopee',
    status: 'completed', nextSession: null,
    milestones: ['Setup', 'Navigation', 'API Integration', 'Deploy'],
    doneMilestones: 4,
  },
  {
    id: 4, name: 'Lê Thị D', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face',
    school: 'ĐH Kinh tế HCM', skill: 'React Native', sessions: 2, totalSessions: 10,
    progress: 15, rating: null, lastSession: '3 ngày trước', goal: 'Xây dựng app bán hàng',
    status: 'new', nextSession: 'Thứ 6, 15:00',
    milestones: ['JS nâng cao', 'React cơ bản', 'React Native', 'Deploy'],
    doneMilestones: 0,
  },
];

const statusConfig = {
  active: { label: 'Đang học', color: 'bg-primary/10 text-primary border-primary/20' },
  completed: { label: 'Hoàn thành', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  new: { label: 'Mới', color: 'bg-amber-50 text-amber-700 border-amber-200' },
};

export default function MentorStudents() {
  const [selected, setSelected] = useState(students[0]);
  const [search, setSearch] = useState('');

  const filtered = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-space">Học viên của tôi</h1>
        <Button className="rounded-full gap-2" size="sm">
          <BookOpen className="w-4 h-4" />Tạo lộ trình học
        </Button>
      </div>

      <div className="flex gap-6">
        {/* List */}
        <div className="w-80 shrink-0 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input className="pl-9 h-9 text-sm rounded-lg" placeholder="Tìm học viên..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          {filtered.map(student => (
            <Card key={student.id} onClick={() => setSelected(student)}
              className={`p-4 cursor-pointer transition-all hover:border-primary/40 ${selected?.id === student.id ? 'border-primary shadow-md shadow-primary/10' : ''}`}>
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={student.avatar} />
                  <AvatarFallback>{student.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{student.name}</span>
                    <Badge className={`text-[10px] border ${statusConfig[student.status].color}`}>{statusConfig[student.status].label}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{student.school}</p>
                  <div className="mt-2">
                    <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                      <span>Tiến độ</span><span>{student.progress}%</span>
                    </div>
                    <Progress value={student.progress} className="h-1" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Detail */}
        {selected && (
          <div className="flex-1 space-y-4">
            {/* Header */}
            <Card className="p-5">
              <div className="flex items-start gap-5">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selected.avatar} />
                  <AvatarFallback className="text-xl">{selected.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold font-space">{selected.name}</h2>
                      <p className="text-muted-foreground text-sm">{selected.school}</p>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <Badge variant="secondary" className="rounded-full">{selected.skill}</Badge>
                        <span className="text-muted-foreground">Mục tiêu: <span className="text-foreground font-medium">{selected.goal}</span></span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="rounded-full gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />Nhắn tin
                      </Button>
                      {selected.nextSession && (
                        <Button size="sm" variant="outline" className="rounded-full gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />Đặt lịch
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3 mt-5 p-3 rounded-xl bg-secondary/40">
                <div className="text-center">
                  <div className="text-lg font-bold">{selected.sessions}/{selected.totalSessions}</div>
                  <div className="text-xs text-muted-foreground">Buổi đã dạy</div>
                </div>
                <div className="text-center border-x">
                  <div className="text-lg font-bold">{selected.progress}%</div>
                  <div className="text-xs text-muted-foreground">Tiến độ</div>
                </div>
                <div className="text-center border-r">
                  <div className="text-lg font-bold">{selected.rating ?? '—'}</div>
                  <div className="text-xs text-muted-foreground">Đánh giá</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-primary">{selected.nextSession ?? 'Hoàn thành'}</div>
                  <div className="text-xs text-muted-foreground">Buổi tiếp theo</div>
                </div>
              </div>
            </Card>

            {/* Milestones */}
            <Card className="p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" />Lộ trình học</h3>
              <div className="space-y-3">
                {selected.milestones.map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0
                      ${i < selected.doneMilestones ? 'bg-emerald-500' : i === selected.doneMilestones ? 'bg-primary' : 'bg-secondary'}`}>
                      {i < selected.doneMilestones
                        ? <CheckCircle2 className="w-4 h-4 text-white" />
                        : <span className="text-xs font-bold text-white">{i + 1}</span>
                      }
                    </div>
                    <div className={`flex-1 p-3 rounded-lg border text-sm font-medium
                      ${i < selected.doneMilestones ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
                        i === selected.doneMilestones ? 'bg-primary/5 border-primary/20 text-primary' :
                          'bg-secondary/50 border-transparent text-muted-foreground'}`}>
                      {m}
                    </div>
                    {i < selected.doneMilestones && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                    {i === selected.doneMilestones && <Clock className="w-4 h-4 text-primary shrink-0" />}
                  </div>
                ))}
              </div>
            </Card>

            {/* Session notes */}
            <Card className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary" />Ghi chú buổi dạy gần nhất</h3>
              <div className="p-3 rounded-lg bg-secondary/50 text-sm text-muted-foreground leading-relaxed">
                Học viên đã nắm được khái niệm Provider và Consumer. Cần ôn lại phần ChangeNotifierProvider. 
                Bài tập: Xây dựng mini counter app dùng Riverpod. Tiến bộ tốt, cần thực hành thêm.
              </div>
              <Button variant="ghost" size="sm" className="mt-2 text-xs text-primary gap-1">
                Xem lịch sử <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}