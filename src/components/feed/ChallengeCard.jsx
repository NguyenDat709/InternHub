import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, Trophy, Users, Zap, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function ChallengeCard({ challenge }) {
  return (
    <Card className="overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/5 via-card to-card">
      {/* Header strip */}
      <div className="bg-gradient-to-r from-accent/20 to-accent/5 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-accent-foreground" />
          <span className="text-xs font-bold text-accent-foreground uppercase tracking-wider">Thách thức 24h</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-destructive">
          <Clock className="w-3.5 h-3.5" />
          {challenge.timeLeft}
        </div>
      </div>

      <div className="p-4">
        {/* Company */}
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-10 h-10 rounded-lg">
            <AvatarImage src={challenge.companyLogo} />
            <AvatarFallback className="rounded-lg">{challenge.company[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-sm">{challenge.company}</h4>
            <p className="text-xs text-muted-foreground">đang tìm kiếm tài năng</p>
          </div>
        </div>

        {/* Challenge Info */}
        <h3 className="font-bold text-base leading-snug">{challenge.title}</h3>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{challenge.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {challenge.skills.map((skill, i) => (
            <Badge key={i} className="text-[10px] bg-primary/10 text-primary border-0 rounded-full">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {challenge.participants} tham gia
            </span>
            <span>{challenge.spotsLeft} vị trí còn lại</span>
          </div>
          <Progress value={(1 - challenge.spotsLeft / 20) * 100} className="h-1.5" />
        </div>

        {/* Reward */}
        <div className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
          <Zap className="w-5 h-5 text-accent-foreground" />
          <div>
            <p className="text-xs font-semibold text-accent-foreground">Phần thưởng: Golden Ticket</p>
            <p className="text-[10px] text-muted-foreground">Phỏng vấn thẳng vòng cuối tại {challenge.company}</p>
          </div>
        </div>

        <Button className="w-full mt-4 rounded-full gap-2 font-semibold">
          Tham gia ngay
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}