import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, Briefcase, MessageSquare, Trophy, Heart, UserCheck, Star, CheckCheck, Trash2 } from 'lucide-react';

const filters = ['Tất cả', 'Chưa đọc', 'Tuyển dụng', 'Mentor', 'Thách thức', 'Cộng đồng'];

const allNotifications = [
  {
    id: 1, type: 'job', read: false, time: '5 phút trước',
    icon: Briefcase, iconBg: 'bg-primary/10', iconColor: 'text-primary',
    avatar: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=80&h=80&fit=crop',
    title: 'FPT Software đã xem hồ sơ của bạn',
    body: 'Nhà tuyển dụng từ FPT Software vừa xem hồ sơ Flutter Developer Intern của bạn.',
  },
  {
    id: 2, type: 'challenge', read: false, time: '1 giờ trước',
    icon: Trophy, iconBg: 'bg-accent/10', iconColor: 'text-accent-foreground',
    avatar: null,
    title: '⚡ Thách thức 24h sắp kết thúc!',
    body: 'Code Challenge của FPT Software còn 18 tiếng. Hãy nộp bài ngay trước khi hết hạn!',
  },
  {
    id: 3, type: 'mentor', read: false, time: '2 giờ trước',
    icon: Star, iconBg: 'bg-amber-50', iconColor: 'text-amber-600',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face',
    title: 'Anh Trần Minh Đức đã phản hồi lịch đặt',
    body: 'Mentor của bạn đã xác nhận buổi mentoring lúc 14:00 Thứ 4 tới. Nhớ chuẩn bị câu hỏi nhé!',
  },
  {
    id: 4, type: 'community', read: true, time: '4 giờ trước',
    icon: Heart, iconBg: 'bg-destructive/10', iconColor: 'text-destructive',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    title: 'Trần Thị B và 12 người khác đã thích bài đăng của bạn',
    body: 'Dự án Flutter SpendWise của bạn đang được cộng đồng yêu thích!',
  },
  {
    id: 5, type: 'job', read: true, time: 'Hôm qua',
    icon: Briefcase, iconBg: 'bg-primary/10', iconColor: 'text-primary',
    avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
    title: '🎉 Shopee Vietnam đã shortlist hồ sơ của bạn!',
    body: 'Chúc mừng! Bạn đã vào vòng phỏng vấn Frontend Intern tại Shopee. Kiểm tra email để biết thêm.',
  },
  {
    id: 6, type: 'mentor', read: true, time: 'Hôm qua',
    icon: UserCheck, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=face',
    title: 'Chị Nguyễn Thanh Hà đã chấp nhận yêu cầu mentor',
    body: 'Bạn đã có mentor mới! Hãy nhắn tin để đặt lịch buổi học đầu tiên.',
  },
  {
    id: 7, type: 'community', read: true, time: '2 ngày trước',
    icon: MessageSquare, iconBg: 'bg-secondary', iconColor: 'text-muted-foreground',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    title: 'Lê Minh C đã bình luận về bài đăng của bạn',
    body: '"Code rất clean! Bạn có thể chia sẻ source code không? Mình muốn học hỏi thêm."',
  },
  {
    id: 8, type: 'challenge', read: true, time: '3 ngày trước',
    icon: Trophy, iconBg: 'bg-accent/10', iconColor: 'text-accent-foreground',
    avatar: null,
    title: '🏆 Kết quả thách thức Tiki',
    body: 'Bạn đã đạt Top 5 trong Hackathon Tiki! Xem kết quả và nhận điểm thưởng của bạn ngay.',
  },
];

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [notifications, setNotifications] = useState(allNotifications);

  const filtered = notifications.filter(n => {
    if (activeFilter === 'Tất cả') return true;
    if (activeFilter === 'Chưa đọc') return !n.read;
    if (activeFilter === 'Tuyển dụng') return n.type === 'job';
    if (activeFilter === 'Mentor') return n.type === 'mentor';
    if (activeFilter === 'Thách thức') return n.type === 'challenge';
    if (activeFilter === 'Cộng đồng') return n.type === 'community';
    return true;
  });

  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  const deleteNotif = (id) => setNotifications(prev => prev.filter(n => n.id !== id));
  const markRead = (id) => setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold font-space">Thông báo</h1>
          {unreadCount > 0 && (
            <Badge className="bg-primary text-primary-foreground rounded-full px-2.5">{unreadCount} mới</Badge>
          )}
        </div>
        <Button variant="ghost" size="sm" className="text-xs gap-1.5 text-primary" onClick={markAllRead}>
          <CheckCheck className="w-3.5 h-3.5" />Đánh dấu tất cả đã đọc
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map(f => (
          <button key={f} onClick={() => setActiveFilter(f)}
            className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all
              ${activeFilter === f ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}`}>
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <Card className="overflow-hidden divide-y">
        {filtered.length === 0 ? (
          <div className="py-12 text-center">
            <Bell className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Không có thông báo nào</p>
          </div>
        ) : (
          filtered.map(notif => (
            <div key={notif.id}
              className={`flex items-start gap-4 p-4 hover:bg-secondary/30 transition-colors cursor-pointer group
                ${!notif.read ? 'bg-primary/3' : ''}`}
              onClick={() => markRead(notif.id)}>

              {/* Icon + Avatar */}
              <div className="relative shrink-0">
                {notif.avatar ? (
                  <Avatar className="w-11 h-11">
                    <AvatarImage src={notif.avatar} />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                ) : (
                  <div className={`w-11 h-11 rounded-full ${notif.iconBg} flex items-center justify-center`}>
                    <notif.icon className={`w-5 h-5 ${notif.iconColor}`} />
                  </div>
                )}
                {notif.avatar && (
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full ${notif.iconBg} flex items-center justify-center border-2 border-card`}>
                    <notif.icon className={`w-2.5 h-2.5 ${notif.iconColor}`} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm leading-snug ${!notif.read ? 'font-semibold' : 'font-normal'}`}>{notif.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{notif.body}</p>
                <p className="text-[10px] text-muted-foreground mt-1.5">{notif.time}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0">
                {!notif.read && <span className="w-2 h-2 rounded-full bg-primary" />}
                <Button
                  variant="ghost" size="icon"
                  className="w-7 h-7 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={e => { e.stopPropagation(); deleteNotif(notif.id); }}>
                  <Trash2 className="w-3.5 h-3.5 text-muted-foreground" />
                </Button>
              </div>
            </div>
          ))
        )}
      </Card>
    </div>
  );
}