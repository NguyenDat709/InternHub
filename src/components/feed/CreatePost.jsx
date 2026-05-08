import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Image, FileCode, Link2 } from 'lucide-react';

export default function CreatePost() {
  return (
    <Card className="p-4">
      <div className="flex gap-3">
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face" />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="w-full px-4 py-2.5 rounded-full bg-secondary/60 text-sm text-muted-foreground cursor-pointer hover:bg-secondary transition-colors">
            Chia sẻ dự án hoặc kinh nghiệm của bạn...
          </div>
          <div className="flex items-center gap-1 mt-2.5">
            <Button variant="ghost" size="sm" className="text-xs rounded-full gap-1.5 text-muted-foreground hover:text-primary">
              <Image className="w-3.5 h-3.5" />
              Ảnh
            </Button>
            <Button variant="ghost" size="sm" className="text-xs rounded-full gap-1.5 text-muted-foreground hover:text-primary">
              <FileCode className="w-3.5 h-3.5" />
              Dự án
            </Button>
            <Button variant="ghost" size="sm" className="text-xs rounded-full gap-1.5 text-muted-foreground hover:text-primary">
              <Link2 className="w-3.5 h-3.5" />
              Link
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}