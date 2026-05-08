import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Clock, Sparkles } from 'lucide-react';

export default function JobCard({ job }) {
  return (
    <div className="group p-3.5 rounded-xl border bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-200 cursor-pointer">
      <div className="flex items-start gap-3">
        <Avatar className="w-10 h-10 rounded-lg shrink-0">
          <AvatarImage src={job.logo} />
          <AvatarFallback className="rounded-lg text-xs">{job.company[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold text-sm leading-snug">{job.title}</h4>
            {job.matchScore && (
              <Badge className="shrink-0 text-[10px] bg-primary/10 text-primary border-0 rounded-full gap-0.5">
                <Sparkles className="w-2.5 h-2.5" />
                {job.matchScore}%
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{job.company}</p>
          <div className="flex items-center gap-3 mt-2 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {job.posted}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {job.skills.slice(0, 3).map((skill, i) => (
              <Badge key={i} variant="secondary" className="text-[10px] font-normal rounded-full px-2 py-0">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}