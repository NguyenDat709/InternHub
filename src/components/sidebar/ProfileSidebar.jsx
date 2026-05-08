import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Award, Code, Lightbulb, Palette, PenTool, Star } from 'lucide-react';
import ReputationScore from './ReputationScore';

const badges = [
  { icon: Code, label: 'Top Coder', color: 'bg-blue-500/10 text-blue-600 border-blue-200' },
  { icon: Lightbulb, label: 'Creative Thinker', color: 'bg-amber-500/10 text-amber-600 border-amber-200' },
  { icon: Palette, label: 'UI Master', color: 'bg-pink-500/10 text-pink-600 border-pink-200' },
  { icon: Star, label: 'Team Player', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200' },
];

const skills = ['Flutter', 'React', 'Figma', 'Python', 'Node.js'];

export default function ProfileSidebar() {
  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <Card className="p-5 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 rounded-t-lg" />
        <div className="relative flex flex-col items-center pt-4">
          <Avatar className="w-16 h-16 ring-4 ring-card shadow-lg">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&h=160&fit=crop&crop=face" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold mt-3 font-space">Nguyễn Văn A</h3>
          <p className="text-xs text-muted-foreground">Sinh viên CNTT - ĐH Bách Khoa HCM</p>

          <div className="mt-4">
            <ReputationScore score={70} />
          </div>
        </div>
      </Card>

      {/* Badges */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-4 h-4 text-primary" />
          <h4 className="text-sm font-semibold">Huy hiệu</h4>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-xs font-medium ${badge.color}`}
            >
              <badge.icon className="w-3.5 h-3.5" />
              {badge.label}
            </div>
          ))}
        </div>
      </Card>

      {/* Skills */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <PenTool className="w-4 h-4 text-primary" />
          <h4 className="text-sm font-semibold">Kỹ năng</h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, i) => (
            <Badge key={i} variant="secondary" className="text-xs font-normal rounded-full px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
        <Button variant="ghost" size="sm" className="w-full mt-3 text-xs text-primary hover:text-primary">
          + Thêm kỹ năng
        </Button>
      </Card>
    </div>
  );
}