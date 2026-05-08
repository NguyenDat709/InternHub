// @ts-nocheck
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Filter, Star, MessageSquare, UserCheck, X, Eye, FileText, Sparkles, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react';

const stages = ['Tất cả', 'Mới nộp', 'Đang xem xét', 'Phỏng vấn', 'Offer', 'Từ chối'];

const candidates = [
  {
    id: 1, name: 'Nguyễn Văn A', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&h=160&fit=crop&crop=face',
    school: 'ĐH Bách Khoa HCM', gpa: '3.7', skills: ['Flutter', 'React', 'Python'], match: 95,
    badge: 'Top Coder', appliedJob: 'Flutter Developer Intern', stage: 'Phỏng vấn',
    time: '2 ngày trước', bio: 'Đam mê mobile development, có 2 dự án thực tế trên GitHub.',
    rating: 4.8, challenges: 3, repos: 12,
  },
  {
    id: 2, name: 'Trần Thị B', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face',
    school: 'ĐH FPT', gpa: '3.5', skills: ['Flutter', 'Dart', 'Firebase'], match: 91,
    badge: 'Creative Thinker', appliedJob: 'Flutter Developer Intern', stage: 'Đang xem xét',
    time: '3 ngày trước', bio: 'Đã có 1 dự án Flutter thực tế, tích cực tham gia cộng đồng.',
    rating: 4.6, challenges: 2, repos: 8,
  },
  {
    id: 3, name: 'Lê Minh C', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face',
    school: 'ĐH RMIT', gpa: '3.9', skills: ['React', 'TypeScript', 'Node.js'], match: 88,
    badge: 'Team Player', appliedJob: 'Frontend Engineer Intern', stage: 'Mới nộp',
    time: '1 ngày trước', bio: 'Full-stack developer với kinh nghiệm thực tế trong hackathon.',
    rating: 4.9, challenges: 5, repos: 20,
  },
  {
    id: 4, name: 'Phạm Thị D', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face',
    school: 'ĐH Kinh tế', gpa: '3.4', skills: ['React', 'JavaScript', 'CSS'], match: 75,
    badge: null, appliedJob: 'Frontend Engineer Intern', stage: 'Mới nộp',
    time: '5 ngày trước', bio: 'Đang học React, có portfolio web cá nhân.',
    rating: null, challenges: 1, repos: 4,
  },
  {
    id: 5, name: 'Hoàng Văn E', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=face',
    school: 'ĐH Bách Khoa HN', gpa: '3.8', skills: ['Python', 'SQL', 'ML'], match: 82,
    badge: 'Data Wizard', appliedJob: 'Data Analyst Intern', stage: 'Offer',
    time: '1 tuần trước', bio: 'Nghiên cứu ML tại phòng lab trường, đã publish 1 paper.',
    rating: 4.7, challenges: 4, repos: 15,
  },
];

const stageColor = {
  'Mới nộp': 'bg-secondary text-muted-foreground',
  'Đang xem xét': 'bg-amber-50 text-amber-700 border-amber-200',
  'Phỏng vấn': 'bg-blue-50 text-blue-700 border-blue-200',
  'Offer': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Từ chối': 'bg-destructive/10 text-destructive border-destructive/20',
};

export default function CompanyCandidates() {
  const [activeStage, setActiveStage] = useState('Tất cả');
  const [selected, setSelected] = useState(candidates[0]);
  const [search, setSearch] = useState('');
  const [moved, setMoved] = useState({});

  const filtered = candidates.filter(c => {
    const stageMatch = activeStage === 'Tất cả' || (moved[c.id] ?? c.stage) === activeStage;
    const searchMatch = c.name.toLowerCase().includes(search.toLowerCase());
    return stageMatch && searchMatch;
  });

  const moveStage = (id, stage) => setMoved(prev => ({ ...prev, [id]: stage }));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-space">Ứng viên</h1>
        <Badge className="bg-destructive text-destructive-foreground rounded-full px-3">8 mới hôm nay</Badge>
      </div>

      {/* Stage kanban tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {stages.map(s => (
          <button key={s} onClick={() => setActiveStage(s)}
            className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all
              ${activeStage === s ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}`}>
            {s}
            <span className="ml-1.5 opacity-70">{s === 'Tất cả' ? candidates.length : candidates.filter(c => (moved[c.id] ?? c.stage) === s).length}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-6">
        {/* List */}
        <div className="w-80 shrink-0 space-y-3">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input className="pl-9 h-9 text-sm rounded-lg" placeholder="Tìm ứng viên..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg"><Filter className="w-3.5 h-3.5" /></Button>
          </div>

          {filtered.map(c => {
            const stage = moved[c.id] ?? c.stage;
            return (
              <Card key={c.id} onClick={() => setSelected(c)}
                className={`p-4 cursor-pointer transition-all hover:border-primary/40 ${selected?.id === c.id ? 'border-primary shadow-md shadow-primary/10' : ''}`}>
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={c.avatar} />
                    <AvatarFallback>{c.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-sm">{c.name}</span>
                      {c.badge && <Badge className="text-[10px] bg-blue-50 text-blue-700 border-0 rounded-full px-1.5">{c.badge}</Badge>}
                    </div>
                    <p className="text-xs text-muted-foreground">{c.school}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge className={`text-[10px] border rounded-full ${stageColor[stage]}`}>{stage}</Badge>
                      <span className="text-xs font-semibold text-primary flex items-center gap-0.5">
                        <Sparkles className="w-3 h-3" />{c.match}%
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Detail */}
        {selected && (
          <div className="flex-1 hidden lg:block">
            <Card className="p-6 sticky top-[88px]">
              {/* Header */}
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selected.avatar} />
                  <AvatarFallback className="text-xl">{selected.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold font-space">{selected.name}</h2>
                    {selected.badge && <Badge className="text-xs bg-blue-50 text-blue-700 border-0 rounded-full">{selected.badge}</Badge>}
                  </div>
                  <p className="text-muted-foreground text-sm mt-0.5">{selected.school} • GPA {selected.gpa}</p>
                  <p className="text-xs text-muted-foreground mt-1">Ứng tuyển: <span className="font-medium text-foreground">{selected.appliedJob}</span> • {selected.time}</p>
                </div>
                <Badge className={`text-xs border rounded-full px-3 ${stageColor[moved[selected.id] ?? selected.stage]}`}>
                  {moved[selected.id] ?? selected.stage}
                </Badge>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-3 mt-5 p-3 rounded-xl bg-secondary/40">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{selected.match}%</div>
                  <div className="text-xs text-muted-foreground">AI Match</div>
                </div>
                <div className="text-center border-x">
                  <div className="text-lg font-bold">{selected.rating ?? '—'}</div>
                  <div className="text-xs text-muted-foreground">Đánh giá</div>
                </div>
                <div className="text-center border-r">
                  <div className="text-lg font-bold">{selected.challenges}</div>
                  <div className="text-xs text-muted-foreground">Thách thức</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">{selected.repos}</div>
                  <div className="text-xs text-muted-foreground">GitHub Repos</div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-4">
                <h3 className="font-semibold text-sm mb-1.5">Giới thiệu</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{selected.bio}</p>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <h3 className="font-semibold text-sm mb-2">Kỹ năng</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.skills.map((s, i) => <Badge key={i} variant="secondary" className="rounded-full px-3">{s}</Badge>)}
                </div>
              </div>

              {/* Move stage */}
              <div className="mt-5">
                <h3 className="font-semibold text-sm mb-2">Chuyển giai đoạn</h3>
                <div className="flex flex-wrap gap-2">
                  {['Đang xem xét', 'Phỏng vấn', 'Offer', 'Từ chối'].map(s => (
                    <button key={s} onClick={() => moveStage(selected.id, s)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all
                        ${(moved[selected.id] ?? selected.stage) === s ? 'bg-primary text-primary-foreground border-primary' : 'hover:border-primary/40'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-5">
                <Button className="flex-1 rounded-full gap-2">
                  <UserCheck className="w-4 h-4" />Mời phỏng vấn
                </Button>
                <Button variant="outline" className="flex-1 rounded-full gap-2">
                  <MessageSquare className="w-4 h-4" />Nhắn tin
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}