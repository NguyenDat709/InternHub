// @ts-nocheck
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Zap, Plus, Users, Clock, Trophy, Eye, Edit2, ChevronRight, Star, CheckCircle2, BarChart2 } from 'lucide-react';

const myChallenges = [
  {
    id: 1, title: 'Code Challenge: Xây dựng API RESTful trong 24h',
    status: 'active', participants: 156, submissions: 48, timeLeft: '18h 32m',
    skills: ['Node.js', 'Express', 'MongoDB'], reward: 'Golden Ticket',
    views: 892, startDate: '05/06/2025', endDate: '06/06/2025',
    topSubmissions: [
      { name: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face', score: 95 },
      { name: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', score: 91 },
      { name: 'Lê Minh C', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', score: 88 },
    ],
  },
  {
    id: 2, title: 'Design Hackathon: Cải thiện UX Onboarding',
    status: 'completed', participants: 89, submissions: 63, timeLeft: 'Đã kết thúc',
    skills: ['Figma', 'UX Research', 'Prototyping'], reward: '5 triệu VNĐ',
    views: 1240, startDate: '20/05/2025', endDate: '22/05/2025',
    topSubmissions: [
      { name: 'Phạm Văn C', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', score: 97 },
      { name: 'Lê Thị D', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face', score: 93 },
    ],
  },
];

const statusConfig = {
  active: { label: '🟢 Đang diễn ra', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  completed: { label: 'Đã kết thúc', color: 'bg-secondary text-muted-foreground border-transparent' },
  draft: { label: 'Nháp', color: 'bg-amber-50 text-amber-700 border-amber-200' },
};

export default function CompanyChallenges() {
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(myChallenges[0]);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-space">Thách thức</h1>
        <Button className="rounded-full gap-2" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4" />{showForm ? 'Đóng' : 'Tạo thách thức'}
        </Button>
      </div>

      {/* Create form */}
      {showForm && (
        <Card className="p-5 border-2 border-primary/20">
          <h3 className="font-semibold mb-4 flex items-center gap-2"><Zap className="w-4 h-4 text-primary" />Tạo thách thức mới</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground mb-1.5 block">Tên thách thức *</label>
              <Input placeholder="VD: Code Challenge: Xây dựng API trong 24h" className="rounded-lg" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Loại thách thức</label>
              <select className="w-full h-9 rounded-lg border border-input bg-background px-3 text-sm">
                <option>Code Challenge</option>
                <option>Design Challenge</option>
                <option>Data Challenge</option>
                <option>Hackathon</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Thời gian (giờ)</label>
              <Input type="number" placeholder="24" className="rounded-lg" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Kỹ năng yêu cầu</label>
              <Input placeholder="Node.js, Express, MongoDB" className="rounded-lg" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Phần thưởng</label>
              <Input placeholder="VD: Golden Ticket / 5 triệu VNĐ" className="rounded-lg" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground mb-1.5 block">Mô tả chi tiết</label>
              <textarea className="w-full rounded-lg border border-input bg-background p-3 text-sm h-24 resize-none" placeholder="Mô tả bài tập, yêu cầu nộp bài, tiêu chí đánh giá..." />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button className="rounded-full">Phát động ngay</Button>
            <Button variant="outline" className="rounded-full">Lưu nháp</Button>
            <Button variant="ghost" className="rounded-full" onClick={() => setShowForm(false)}>Hủy</Button>
          </div>
        </Card>
      )}

      {/* Impact summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Tổng thách thức', value: '3', icon: Zap },
          { label: 'Tham gia', value: '245', icon: Users },
          { label: 'Bài nộp', value: '111', icon: CheckCircle2 },
          { label: 'Tuyển được', value: '7', icon: Trophy },
        ].map((s, i) => (
          <Card key={i} className="p-4 text-center">
            <s.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
            <div className="text-2xl font-bold font-space">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </Card>
        ))}
      </div>

      <div className="flex gap-6">
        {/* List */}
        <div className="w-80 shrink-0 space-y-3">
          {myChallenges.map(ch => (
            <Card key={ch.id} onClick={() => setSelected(ch)}
              className={`p-4 cursor-pointer transition-all hover:border-primary/40 ${selected?.id === ch.id ? 'border-primary shadow-md shadow-primary/10' : ''}`}>
              <div className="flex items-center justify-between mb-2">
                <Badge className={`text-[10px] border ${statusConfig[ch.status].color}`}>{statusConfig[ch.status].label}</Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{ch.timeLeft}</span>
              </div>
              <h3 className="font-semibold text-sm leading-snug">{ch.title}</h3>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" />{ch.participants}</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" />{ch.submissions} bài</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Detail */}
        {selected && (
          <div className="flex-1 hidden lg:block">
            <Card className="p-6 sticky top-[88px]">
              <div className="flex items-start justify-between">
                <div>
                  <Badge className={`text-xs border mb-2 ${statusConfig[selected.status].color}`}>{statusConfig[selected.status].label}</Badge>
                  <h2 className="text-xl font-bold font-space">{selected.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{selected.startDate} → {selected.endDate}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="rounded-full gap-1.5"><Edit2 className="w-3.5 h-3.5" />Chỉnh sửa</Button>
                  <Button size="sm" variant="outline" className="rounded-full gap-1.5"><BarChart2 className="w-3.5 h-3.5" />Thống kê</Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-5 p-3 rounded-xl bg-secondary/40">
                <div className="text-center">
                  <div className="text-2xl font-bold">{selected.participants}</div>
                  <div className="text-xs text-muted-foreground">Tham gia</div>
                </div>
                <div className="text-center border-x">
                  <div className="text-2xl font-bold">{selected.submissions}</div>
                  <div className="text-xs text-muted-foreground">Bài nộp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{selected.views}</div>
                  <div className="text-xs text-muted-foreground">Lượt xem</div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Tỉ lệ nộp bài</span>
                  <span className="text-muted-foreground">{((selected.submissions / selected.participants) * 100).toFixed(0)}%</span>
                </div>
                <Progress value={(selected.submissions / selected.participants) * 100} className="h-2" />
              </div>

              <div className="mt-5">
                <h3 className="font-semibold mb-3 flex items-center gap-2"><Trophy className="w-4 h-4 text-accent-foreground" />Top bài nộp</h3>
                <div className="space-y-3">
                  {selected.topSubmissions.map((sub, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl border">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                        ${i === 0 ? 'bg-accent text-accent-foreground' : i === 1 ? 'bg-secondary' : 'bg-muted'}`}>
                        {i + 1}
                      </span>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={sub.avatar} />
                        <AvatarFallback>{sub.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="flex-1 font-medium text-sm">{sub.name}</span>
                      <span className="font-bold text-primary">{sub.score} điểm</span>
                      <Button size="sm" className="rounded-full text-xs h-7">Mời phỏng vấn</Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h3 className="font-semibold mb-2">Kỹ năng yêu cầu</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.skills.map((s, i) => <Badge key={i} variant="secondary" className="rounded-full px-3">{s}</Badge>)}
                </div>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-accent/10 border border-accent/20">
                <p className="text-sm font-medium flex items-center gap-2"><Trophy className="w-4 h-4 text-accent-foreground" />Phần thưởng: {selected.reward}</p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}