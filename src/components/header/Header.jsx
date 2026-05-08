import React from 'react';
import { Bell, MessageSquare, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-space font-bold text-lg hidden sm:block">
            Intern<span className="text-primary">Hub</span>
          </span>
        </div>

        {/* Search */}
        <SearchBar />

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex items-center gap-1.5 rounded-full border-primary/20 text-primary hover:bg-primary/5 hover:text-primary text-xs font-medium"
          >
            <Users className="w-3.5 h-3.5" />
            Tìm Mentor
          </Button>

          <Button variant="ghost" size="icon" className="relative rounded-full">
            <MessageSquare className="w-4.5 h-4.5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </Button>

          <Button variant="ghost" size="icon" className="relative rounded-full">
            <Bell className="w-4.5 h-4.5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              5
            </span>
          </Button>

          <Avatar className="w-8 h-8 ring-2 ring-primary/20 cursor-pointer">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}