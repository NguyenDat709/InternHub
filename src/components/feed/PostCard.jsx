// @ts-nocheck
import React, { useState } from 'react';
import {useMutation,useQueryClient} from "@tanstack/react-query"
import {feedApi} from "@/api/feedApi"
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share2, Bookmark, ExternalLink } from 'lucide-react';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
 // const [saved, setSaved] = useState(false);
  const queryClient = useQueryClient();
  const handleLike = async() => {
    // setLiked(!liked);
    // setLikeCount(prev => liked ? prev - 1 : prev + 1);
    await feedApi.likePost(post.id);
    queryClient.invalidateQueries({ queryKey: ['feed'] });
  };
  const handleSave=async()=>{
    try{
      await feedApi.savePost(post.id);
      queryClient.invalidateQueries({ queryKey: ['feed'] });
    }catch(error){
      console.error("Error saving post",error);
    }
  }
  const handleShare=async()=>{
    try{
      await feedApi.sharePost(post.id);
      queryClient.invalidateQueries({ queryKey: ['feed'] });
    }catch(error){
      console.error("Error sharing post",error);
    }
  }
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Author */}
      <div className="p-4 pb-3">
        <div className="flex items-start gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.avatar} />
            <AvatarFallback>{post.author[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{post.author}</span>
              {post.badge && (
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 rounded-full">
                  {post.badge}
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{post.role} • {post.time}</p>
          </div>
        </div>

        {/* Content */}
        <p className="mt-3 text-sm leading-relaxed">{post.content}</p>

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {post.tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="text-[10px] font-normal rounded-full text-primary border-primary/20">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Project Preview */}
      {post.project && (
        <div className="mx-4 mb-3 rounded-lg border bg-secondary/30 overflow-hidden">
          <img
            src={post.project.image}
            alt={post.project.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-sm">{post.project.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{post.project.tech}</p>
              </div>
              <Button variant="outline" size="sm" className="text-xs rounded-full gap-1">
                <ExternalLink className="w-3 h-3" />
                Xem code
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 py-2.5 border-t flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className={`rounded-full gap-1.5 text-xs ${liked ? 'text-destructive' : ''}`}
            onClick={handleLike}
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            {post.likes}
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full gap-1.5 text-xs">
            <MessageCircle className="w-4 h-4" />
            {post.comments}
          </Button>
          <Button variant="ghost" 
            size="sm" 
            className="rounded-full gap-1.5 text-xs"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
            {post.shares || 0}
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full ${post.isSaved ? 'text-primary' : ''}`}
          onClick={handleSave}
        >
          <Bookmark className={`w-4 h-4 ${post.isSaved ? 'fill-current' : ''}`} />
        </Button>
      </div>
    </Card>
  );
}