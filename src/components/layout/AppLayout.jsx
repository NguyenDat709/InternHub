import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, GraduationCap, Zap, MessageSquare, Bell, User, Menu, X, Users, Building2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/header/SearchBar';

const navItems = [
  { path: '/', icon: Home, label: 'Trang chủ' },
  { path: '/jobs', icon: Briefcase, label: 'Tuyển dụng' },
  { path: '/mentors', icon: GraduationCap, label: 'Mentor' },
  { path: '/challenges', icon: Zap, label: 'Thách thức' },
  { path: '/messages', icon: MessageSquare, label: 'Tin nhắn', badge: 3 },
  { path: '/notifications', icon: Bell, label: 'Thông báo', badge: 5 },
  { path: '/profile', icon: User, label: 'Hồ sơ' },
];

export default function AppLayout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-xl border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-space font-bold text-lg hidden sm:block">
              Intern<span className="text-primary">Hub</span>
              <span className="text-xs font-normal text-muted-foreground ml-1">Vietnam</span>
            </span>
          </Link>

          <div className="flex-1"><SearchBar /></div>

          <div className="hidden md:flex items-center gap-1">
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="relative rounded-full">
                <MessageSquare className="w-[18px] h-[18px]" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
              </Button>
            </Link>
            <Link to="/notifications">
              <Button variant="ghost" size="icon" className="relative rounded-full">
                <Bell className="w-[18px] h-[18px]" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">5</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Avatar className="w-8 h-8 ring-2 ring-primary/20 cursor-pointer ml-1">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face" />
                <AvatarFallback>NA</AvatarFallback>
              </Avatar>
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-card px-4 py-3 flex flex-wrap gap-2">
            {navItems.map(item => (
              <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}>
                <Button
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  size="sm"
                  className="rounded-full gap-1.5 text-xs relative"
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.label}
                  {item.badge && (
                    <span className="w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Desktop Side Nav + Content */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 py-6 gap-6">
        {/* Left nav */}
        <nav className="hidden md:flex flex-col gap-1 w-52 shrink-0">
          <div className="sticky top-[88px] space-y-1">
            {navItems.map(item => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 relative
                    ${active ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-secondary text-foreground'}`}>
                    <item.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
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

            {/* Portals */}
            <div className="pt-3 border-t mt-3 space-y-2">
              <p className="text-[10px] text-muted-foreground px-1 uppercase tracking-wider font-semibold">Chuyển portal</p>
              <Link to="/mentor/dashboard">
                <Button className="w-full rounded-xl gap-2 text-sm font-medium" variant="outline">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Portal Mentor</span>
                </Button>
              </Link>
              <Link to="/company/dashboard">
                <Button className="w-full rounded-xl gap-2 text-sm font-medium" variant="outline">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700">Portal Doanh nghiệp</span>
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}