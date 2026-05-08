// @ts-nocheck
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Clock, Trophy, Users, Zap, ChevronRight, Star, CheckCircle2, Lock, Flame } from 'lucide-react';

const filters = ['Tất cả', 'Đang diễn ra', 'Sắp diễn ra', 'Đã tham gia'];

const challenges = [
  {
    id: 1, company: 'FPT Software', logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=80&h=80&fit=crop',
    title: 'Code Challenge: Xây dựng API RESTful trong 24h',
    description: 'Thiết kế và triển khai một API quản lý thư viện sách với Node.js/Express. Bao gồm authentication, CRUD, và pagination.',
    skills: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    timeLeft: '18h 32m', participants: 156, spotsLeft: 5,
    status: 'active', reward: 'Golden Ticket - Phỏng vấn thẳng', difficulty: 'Trung bình',
    points: 500, joined: false, hot: true,
  },
  {
    id: 2, company: 'Shopee Vietnam', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
    title: 'UI Challenge: Thiết kế trang checkout tối ưu',
    description: 'Thiết kế lại trang checkout của Shopee để tăng tỷ lệ chuyển đổi. Nộp file Figma với prototype.',
    skills: ['Figma', 'UX Design', 'Prototyping'],
    timeLeft: '2 ngày', participants: 89, spotsLeft: 12,
    status: 'active', reward: '2 triệu VNĐ + Fast-track Interview', difficulty: 'Dễ',
    points: 300, joined: true, hot: false,
  },
  {
    id: 3, company: 'Momo', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop',
    title: 'Data Challenge: Phân tích hành vi người dùng ví điện tử',
    description: 'Phân tích dataset giao dịch ẩn danh và đề xuất 3 chiến lược tăng engagement. Nộp notebook và slide.',
    skills: ['Python', 'Pandas', 'Data Visualization', 'Statistics'],
    timeLeft: '5 ngày', participants: 203, spotsLeft: 0,
    status: 'active', reward: 'Học bổng internship 3 tháng', difficulty: 'Khó',
    points: 800, joined: false, hot: true,
  },
  {
    id: 4, company: 'VNG Corporation', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop',
    title: 'Game Dev: Xây dựng mini-game bằng Unity',
    description: 'Tạo một mini-game nhập vai đơn giản trong 72h sử dụng Unity 2D.',
    skills: ['Unity', 'C#', 'Game Design'],
    timeLeft: 'Bắt đầu sau 2 ngày', participants: 0, spotsLeft: 30,
    status: 'upcoming', reward: 'Gặp gỡ Game Director VNG + 5 triệu', difficulty: 'Khó',
    points: 1000, joined: false, hot: false,
  },
  {
    id: 5, company: 'Tiki', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=80&fit=crop',
    title: 'Hackathon: Ý tưởng tính năng mới cho Tiki',
    description: 'Đề xuất và prototype 1 tính năng mới giúp tăng trải nghiệm mua sắm. Đội 2-3 người.',
    skills: ['Product Thinking', 'UI/UX', 'Presentation'],
    timeLeft: 'Kết thúc', participants: 310, spotsLeft: 0,
    status: 'finished', reward: '10 triệu VNĐ (Đội thắng)', difficulty: 'Trung bình',
    points: 600, joined: true, hot: false,
  },
];

const difficultyColor = { 'Dễ': 'text-emerald-600 bg-emerald-50', 'Trung bình': 'text-amber-600 bg-amber-50', 'Khó': 'text-red-600 bg-red-50' };
const statusLabel = { active: 'Đang diễn ra', upcoming: 'Sắp diễn ra', finished: 'Đã kết thúc' };
const statusColor = { active: 'bg-emerald-500', upcoming: 'bg-amber-500', finished: 'bg-muted-foreground' };

export default function Challenges() {
  const [filter, setFilter] = useState('Tất cả');
  const [selected, setSelected] = useState(challenges[0]);
  const [joined, setJoined] = useState(challenges.filter(c => c.joined).map(c => c.id));

  const handleJoin = (/** @type {number} */ id) => {
    if (!joined.includes(id)) setJoined(prev => [...prev, id]);
  };

  return (
    <div className="flex gap-6">
      {/* List */}
      <div className="w-full lg:w-[420px] shrink-0 space-y-4">
        {/* Leaderboard mini */}
        <Card className="p-4 bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-4 h-4 text-accent-foreground" />
            <h4 className="font-semibold text-sm">Bảng xếp hạng tuần này</h4>
          </div>
          {[
            { rank: 1, name: 'Nguyễn Văn A', points: 1450, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face' },
            { rank: 2, name: 'Trần Thị B', points: 1200, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face' },
            { rank: 3, name: 'Lê Minh C', points: 980, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
          ].map(entry => (
            <div key={entry.rank} className="flex items-center gap-3 mb-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                ${entry.rank === 1 ? 'bg-accent text-accent-foreground' : entry.rank === 2 ? 'bg-secondary text-muted-foreground' : 'bg-muted text-muted-foreground'}`}>
                {entry.rank}
              </span>
              <Avatar className="w-7 h-7">
                <AvatarImage src={entry.avatar} />
                <AvatarFallback>{entry.name[0]}</AvatarFallback>
              </Avatar>
              <span className="flex-1 text-sm font-medium">{entry.name}</span>
              <span className="text-xs font-bold text-primary">{entry.points} pts</span>
            </div>
          ))}
        </Card>

        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all
                ${filter === f ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {challenges.map(ch => (
            <Card key={ch.id} onClick={() => setSelected(ch)}
              className={`p-4 cursor-pointer transition-all hover:border-primary/40 ${selected?.id === ch.id ? 'border-primary shadow-md shadow-primary/10' : ''}
                ${ch.status === 'active' && ch.hot ? 'border-l-4 border-l-accent' : ''}`}>
              {/* Company + status */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 rounded-lg">
                    <AvatarImage src={ch.logo} />
                    <AvatarFallback className="rounded-lg text-xs">{ch.company[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground font-medium">{ch.company}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${statusColor[/** @type {keyof typeof statusColor} */(ch.status)]}`} />
                  <span className="text-xs text-muted-foreground">{statusLabel[/** @type {keyof typeof statusLabel} */(ch.status)]}</span>
                </div>
              </div>

              <h3 className="font-semibold text-sm leading-snug">{ch.title}</h3>

              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {ch.timeLeft}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {ch.participants}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${difficultyColor[/** @type {keyof typeof difficultyColor} */(ch.difficulty)]}`}>
                  {ch.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                  <Zap className="w-3.5 h-3.5" />+{ch.points} pts
                </div>
                {joined.includes(ch.id) ? (
                  <Badge className="text-[10px] bg-emerald-500/10 text-emerald-600 border-0">✓ Đã tham gia</Badge>
                ) : ch.status === 'finished' ? (
                  <Badge variant="secondary" className="text-[10px]">Đã kết thúc</Badge>
                ) : ch.spotsLeft === 0 ? (
                  <Badge className="text-[10px] bg-destructive/10 text-destructive border-0">Hết slot</Badge>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Detail */}
      {selected && (
        <div className="flex-1 hidden lg:block">
          <Card className="p-6 sticky top-[88px]">
            {/* Company header */}
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="w-12 h-12 rounded-xl">
                <AvatarImage src={selected.logo} />
                <AvatarFallback className="rounded-xl">{selected.company[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">{selected.company} • {statusLabel[/** @type {keyof typeof statusLabel} */(selected.status)]}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${difficultyColor[/** @type {keyof typeof difficultyColor} */(selected.difficulty)]}`}>{selected.difficulty}</span>
                  {selected.hot && <Badge className="text-[10px] bg-destructive/10 text-destructive border-0 gap-1"><Flame className="w-2.5 h-2.5" />Hot</Badge>}
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-2xl font-bold font-space text-primary flex items-center gap-1">
                  <Zap className="w-5 h-5" />+{selected.points}
                </div>
                <div className="text-xs text-muted-foreground">điểm thưởng</div>
              </div>
            </div>

            <h2 className="text-xl font-bold font-space leading-snug">{selected.title}</h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{selected.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-5 p-3 rounded-xl bg-secondary/40">
              <div className="text-center">
                <div className="text-lg font-bold flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4 text-destructive" />
                  <span className="text-destructive">{selected.timeLeft}</span>
                </div>
                <div className="text-xs text-muted-foreground">Thời gian còn</div>
              </div>
              <div className="text-center border-x">
                <div className="text-lg font-bold">{selected.participants}</div>
                <div className="text-xs text-muted-foreground">Tham gia</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">{selected.spotsLeft}</div>
                <div className="text-xs text-muted-foreground">Slots còn</div>
              </div>
            </div>

            {/* Progress */}
            {selected.status === 'active' && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                  <span>Slots đã đăng ký</span>
                  <span>{((1 - selected.spotsLeft / (selected.spotsLeft + 5)) * 100).toFixed(0)}%</span>
                </div>
                <Progress value={(1 - selected.spotsLeft / (selected.spotsLeft + 5)) * 100} className="h-2" />
              </div>
            )}

            {/* Skills */}
            <div className="mt-5">
              <h3 className="font-semibold mb-2">Kỹ năng cần có</h3>
              <div className="flex flex-wrap gap-2">
                {selected.skills.map((s, i) => (
                  <Badge key={i} variant="secondary" className="rounded-full px-3">{s}</Badge>
                ))}
              </div>
            </div>

            {/* Reward */}
            <div className="mt-5 p-4 rounded-xl bg-accent/10 border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-5 h-5 text-accent-foreground" />
                <h3 className="font-semibold text-sm">Phần thưởng</h3>
              </div>
              <p className="text-sm font-medium">{selected.reward}</p>
              <p className="text-xs text-muted-foreground mt-1">Dành cho {selected.participants > 0 ? 'top 3' : 'người thắng cuộc'} xuất sắc nhất</p>
            </div>

            {/* Steps */}
            <div className="mt-5">
              <h3 className="font-semibold mb-3">Cách tham gia</h3>
              {['Đăng ký tham gia', 'Nhận đề bài và tài nguyên', 'Nộp bài trước thời hạn', 'Chờ kết quả đánh giá'].map((step, i) => (
                <div key={i} className="flex items-center gap-3 mb-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                    ${joined.includes(selected.id) && i === 0 ? 'bg-emerald-500 text-white' : 'bg-secondary text-muted-foreground'}`}>
                    {joined.includes(selected.id) && i === 0 ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                  </div>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            {selected.status === 'finished' ? (
              <Button className="w-full mt-5 rounded-full" variant="secondary" disabled>Thách thức đã kết thúc</Button>
            ) : selected.spotsLeft === 0 && !joined.includes(selected.id) ? (
              <Button className="w-full mt-5 rounded-full" variant="outline" disabled>
                <Lock className="w-4 h-4 mr-2" />Hết slot đăng ký
              </Button>
            ) : joined.includes(selected.id) ? (
              <Button className="w-full mt-5 rounded-full bg-emerald-500 hover:bg-emerald-600" disabled>
                <CheckCircle2 className="w-4 h-4 mr-2" />Đã tham gia
              </Button>
            ) : (
              <Button className="w-full mt-5 rounded-full gap-2 font-semibold" onClick={() => handleJoin(selected.id)}>
                <Zap className="w-4 h-4" />Tham gia ngay <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}