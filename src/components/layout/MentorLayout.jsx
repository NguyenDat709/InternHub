import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, MessageSquare, Star, DollarSign, Settings, Zap, Menu, X, Bell, ChevronRight, BookOpen } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const navItems = [
  { path: '/mentor/dashboard', icon: LayoutDashboard, label: 'Tổng quan' },
  { path: '/mentor/students', icon: Users, label: 'Học viên', badge: 2 },
  { path: '/mentor/sessions', icon: Calendar, label: 'Lịch dạy' },
  { path: '/mentor/resources', icon: BookOpen, label: 'Tài nguyên' },
  { path: '/mentor/messages', icon: MessageSquare, label: 'Tin nhắn', badge: 4 },
  { path: '/mentor/reviews', icon: Star, label: 'Đánh giá' },
  { path: '/mentor/earnings', icon: DollarSign, label: 'Thu nhập' },
  { path: '/mentor/settings', icon: Settings, label: 'Cài đặt' },
];

export default function MentorLayout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-xl border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-space font-bold text-lg">Intern<span className="text-primary">Hub</span></span>
              <span className="ml-2 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Mentor</span>
            </div>
          </Link>

          <div className="flex-1" />

          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Xin chào,</span>
            <span className="text-sm font-semibold">Anh Trần Minh Đức</span>
          </div>

          <Button variant="ghost" size="icon" className="relative rounded-full">
            <Bell className="w-[18px] h-[18px]" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
          </Button>

          <Avatar className="w-8 h-8 ring-2 ring-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" />
            <AvatarFallback>TĐ</AvatarFallback>
          </Avatar>

          <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t bg-card px-4 py-3 flex flex-wrap gap-2">
            {navItems.map(item => (
              <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}>
                <Button variant={location.pathname === item.path ? 'default' : 'ghost'} size="sm" className="rounded-full gap-1.5 text-xs">
                  <item.icon className="w-3.5 h-3.5" />{item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 py-6 gap-6">
        {/* Sidebar */}
        <nav className="hidden md:flex flex-col w-52 shrink-0">
          <div className="sticky top-[88px] space-y-1">
            {navItems.map(item => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                    ${active ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-secondary text-foreground'}`}>
                    <item.icon className="w-[18px] h-[18px] shrink-0" />
                    {item.label}
                    {item.badge && (
                      <span className={`ml-auto w-5 h-5 text-[10px] font-bold rounded-full flex items-center justify-center
                        ${active ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-destructive text-destructive-foreground'}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}

            <div className="pt-3 mt-3 border-t">
              <Link to="/">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-secondary transition-colors">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Về trang Sinh viên
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}