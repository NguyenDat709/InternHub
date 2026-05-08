import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Star, MessageSquare } from 'lucide-react';

export default function MentorCard({ mentor }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-200">
      <div className="relative">
        <Avatar className="w-11 h-11">
          <AvatarImage src={mentor.avatar} />
          <AvatarFallback>{mentor.name[0]}</AvatarFallback>
        </Avatar>
        {mentor.online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-card rounded-full" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm truncate">{mentor.name}</h4>
        <p className="text-[11px] text-muted-foreground truncate">{mentor.role} • {mentor.company}</p>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 text-accent fill-accent" />
          <span className="text-xs font-medium">{mentor.rating}</span>
          <span className="text-[10px] text-muted-foreground">({mentor.reviews})</span>
        </div>
      </div>
      <Button size="sm" variant="outline" className="shrink-0 rounded-full text-xs gap-1 h-8">
        <MessageSquare className="w-3 h-3" />
        Chat
      </Button>
    </div>
  );
}