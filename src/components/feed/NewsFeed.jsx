import React from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import ChallengeCard from './ChallengeCard';
import {useQuery} from "@tanstack/react-query"
import {feedApi} from "@/api/feedApi"
const mockChallenge = {
  company: 'FPT Software',
  companyLogo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=80&h=80&fit=crop',
  title: 'Code Challenge: Xây dựng API RESTful trong 24h',
  description: 'Thiết kế và triển khai một API quản lý thư viện sách với Node.js/Express. Bao gồm authentication, CRUD, và pagination.',
  skills: ['Node.js', 'Express', 'MongoDB', 'JWT'],
  timeLeft: '18h 32m còn lại',
  participants: 156,
  spotsLeft: 5,
};
export default function NewsFeed() {
  const {
    data : feedData,
    isLoading : isFeedLoading
  }=useQuery({queryKey:['feed'],queryFn:feedApi.getFeed});
  if(isFeedLoading) return <div className="text-center py-10 text-gray-500 font-medium animate-pulse">
        ⏳ Đang tải dữ liệu bảng tin (Mock API)...
      </div>;
  const posts=feedData?.items || feedData || [];
  return (
    <div className="space-y-4">
      <CreatePost />
      {/* <PostCard post={posts[0]} />
      <ChallengeCard challenge={challenge} />
      <PostCard post={posts[1]} /> */}
      {posts.map((post,index)=>(
        <React.Fragment key={post.id}>
          <PostCard post={post}/>
          {index===0 && mockChallenge && <ChallengeCard challenge={mockChallenge}/>}
        </React.Fragment>
      ))}
    </div>
  );
}