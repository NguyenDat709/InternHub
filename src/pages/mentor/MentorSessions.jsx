import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Video, MapPin, Plus, ChevronLeft, ChevronRight, CheckCircle2, X } from 'lucide-react';

const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
const hours = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

const sessions = [
  { id: 1, day: 0, hour: '14:00', student: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face', topic: 'Flutter State Management', type: 'online', duration: 60, status: 'today' },
  { id: 2, day: 1, hour: '10:00', student: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', topic: 'Code Review - Dự án cuối kỳ', type: 'online', duration: 45, status: 'upcoming' },
  { id: 3, day: 2, hour: '09:00', student: 'Phạm Văn C', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', topic: 'Career Coaching', type: 'offline', duration: 60, status: 'upcoming' },
  { id: 4, day: 3, hour: '15:00', student: 'Lê Thị D', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face', topic: 'JavaScript cơ bản', type: 'online', duration: 90, status: 'upcoming' },
  { id: 5, day: 4, hour: '16:00', student: 'Hoàng Văn E', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face', topic: 'Riverpod nâng cao', type: 'online', duration: 60, status: 'upcoming' },
];

const allSessions = [
  { student: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face', topic: 'Flutter Widget Tree', date: 'Hôm nay, 14:00', type: 'online', status: 'ongoing' },
  { student: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', topic: 'Code Review', date: 'Ngày mai, 10:00', type: 'online', status: 'upcoming' },
  { student: 'Phạm Văn C', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', topic: 'Career Path', date: 'Thứ 4, 09:00', type: 'offline', status: 'upcoming' },
  { student: 'Lê Thị D', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face', topic: 'JS Cơ bản', date: 'Thứ 5, 15:00', type: 'online', status: 'upcoming' },
  { student: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face', topic: 'Dart OOP', date: 'Thứ 2 vừa rồi', type: 'online', status: 'done' },
  { student: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', topic: 'Flutter Intro', date: '3 ngày trước', type: 'online', status: 'done' },
];

const statusBadge = {
  ongoing: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  upcoming: 'bg-primary/10 text-primary border-primary/20',
  done: 'bg-secondary text-muted-foreground border-transparent',
};
const statusLabel = { ongoing: '🔴 Đang diễn ra', upcoming: 'Sắp tới', done: 'Đã xong' };

export default function MentorSessions() {
  const [view, setView] = useState('list');
  const [week, setWeek] = useState(0);

  const weekLabel = week === 0 ? 'Tuần này' : week === 1 ? 'Tuần tới' : `Tuần +${week}`;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-space">Lịch dạy</h1>
        <div className="flex items-center gap-2">
          <div className="flex bg-secondary rounded-lg p-1">
            <button onClick={() => setView('list')} className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${view === 'list' ? 'bg-card shadow-sm' : 'text-muted-foreground'}`}>Danh sách</button>
            <button onClick={() => setView('calendar')} className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${view === 'calendar' ? 'bg-card shadow-sm' : 'text-muted-foreground'}`}>Lịch</button>
          </div>
          <Button size="sm" className="rounded-full gap-1.5">
            <Plus className="w-3.5 h-3.5" />Tạo buổi
          </Button>
        </div>
      </div>

      {view === 'calendar' ? (
        <Card className="p-5">
          {/* Week nav */}
          <div className="flex items-center justify-between mb-5">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setWeek(w => Math.max(0, w - 1))}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="font-semibold">{weekLabel} — Tháng 6/2025</span>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setWeek(w => w + 1)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-8 gap-1">
            <div className="text-xs text-muted-foreground" />
            {days.map((d, i) => (
              <div key={i} className={`text-center text-xs font-semibold pb-2 ${i === 0 && week === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                {d}
                <div className={`w-6 h-6 rounded-full mx-auto mt-1 flex items-center justify-center text-xs
                  ${i === 0 && week === 0 ? 'bg-primary text-primary-foreground' : ''}`}>
                  {i + 2 + week * 7}
                </div>
              </div>
            ))}

            {hours.map(hour => (
              <>
                <div key={hour} className="text-[10px] text-muted-foreground pr-2 pt-1 text-right">{hour}</div>
                {days.map((_, dayIdx) => {
                  const session = sessions.find(s => s.day === dayIdx && s.hour === hour);
                  return (
                    <div key={dayIdx} className={`min-h-[44px] rounded-lg border border-dashed border-transparent hover:border-primary/20 relative
                      ${session ? 'border-solid' : ''}`}>
                      {session && (
                        <div className={`absolute inset-0.5 rounded-md p-1.5 cursor-pointer text-[10px]
                          ${session.status === 'today' ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary border border-primary/20'}`}>
                          <div className="font-semibold truncate">{session.student.split(' ').slice(-1)[0]}</div>
                          <div className="opacity-75 truncate">{session.topic.split(' ').slice(0, 2).join(' ')}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            ))}
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {allSessions.map((s, i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={s.avatar} />
                  <AvatarFallback>{s.student[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{s.student}</span>
                    <Badge className={`text-[10px] border ${statusBadge[s.status]}`}>{statusLabel[s.status]}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{s.topic}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{s.date}</span>
                    <span className="flex items-center gap-1">
                      {s.type === 'online' ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                      {s.type === 'online' ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  {s.status === 'ongoing' && (
                    <Button size="sm" className="rounded-full text-xs gap-1 bg-emerald-500 hover:bg-emerald-600">
                      <Video className="w-3 h-3" />Vào phòng
                    </Button>
                  )}
                  {s.status === 'upcoming' && (
                    <>
                      <Button size="sm" className="rounded-full text-xs">Chuẩn bị</Button>
                      <Button size="sm" variant="outline" className="rounded-full text-xs text-destructive border-destructive/30">Hủy</Button>
                    </>
                  )}
                  {s.status === 'done' && (
                    <Button size="sm" variant="ghost" className="rounded-full text-xs text-primary">Xem ghi chú</Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}