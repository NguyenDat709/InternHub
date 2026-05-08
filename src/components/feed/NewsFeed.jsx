import React from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import ChallengeCard from './ChallengeCard';

const posts = [
  {
    id: 1,
    author: 'Trần Thị B',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    role: 'Sinh viên ĐH FPT',
    badge: 'Top Coder',
    time: '2 giờ trước',
    content: '🚀 Vừa hoàn thành dự án Flutter đầu tiên! Một ứng dụng quản lý chi tiêu cá nhân với Riverpod và Hive. Mọi người cho mình feedback nhé!',
    tags: ['Flutter', 'Dart', 'MobileApp'],
    project: {
      title: 'SpendWise - Chi tiêu thông minh',
      tech: 'Flutter • Riverpod • Hive Database',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop',
    },
    likes: 42,
    comments: 12,
  },
  {
    id: 2,
    author: 'Lê Minh C',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    role: 'Intern tại Shopee',
    badge: 'Team Player',
    time: '5 giờ trước',
    content: 'Chia sẻ kinh nghiệm 3 tháng intern tại Shopee: Điều quan trọng nhất mình học được không phải là code, mà là cách communicate với team và stakeholders. Mỗi ngày đều là một ngày học hỏi 💡',
    tags: ['Intern', 'Shopee', 'SoftSkills'],
    likes: 89,
    comments: 23,
  },
];

const challenge = {
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
  return (
    <div className="space-y-4">
      <CreatePost />
      <PostCard post={posts[0]} />
      <ChallengeCard challenge={challenge} />
      <PostCard post={posts[1]} />
    </div>
  );
}