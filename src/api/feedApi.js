import {base44} from "./base44client";
const mockPosts = [
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
    isSaved:true,
    shares:5,
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
    isSaved:false,
    shares:12,
  },
];
const mentors = [
  {
    id: 1, name: 'Anh Trần Minh Đức', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face',
    role: 'Senior Mobile Developer', company: 'Momo', rating: 4.9, reviews: 47,
    online: true, specialties: ['Flutter', 'React Native', 'iOS/Swift'],
    sessions: 156, students: 48, responseTime: '< 1 giờ',
    bio: 'Hơn 6 năm kinh nghiệm phát triển ứng dụng mobile. Đã mentor thành công 48 sinh viên vào các công ty top tại Việt Nam.',
    price: 'Miễn phí', verified: true,
  },
  {
    id: 2, name: 'Chị Nguyễn Thanh Hà', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=face',
    role: 'Product Manager', company: 'Tiki', rating: 4.8, reviews: 32,
    online: true, specialties: ['Product Strategy', 'Agile', 'User Research'],
    sessions: 98, students: 35, responseTime: '< 2 giờ',
    bio: 'PM với 5 năm kinh nghiệm tại các startup và công ty lớn. Chuyên gia về product-market fit và growth hacking.',
    price: '200k/giờ', verified: true,
  },
  {
    id: 3, name: 'Anh Phạm Hoàng Long', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&h=160&fit=crop&crop=face',
    role: 'Tech Lead', company: 'VNPay', rating: 4.7, reviews: 28,
    online: false, specialties: ['Node.js', 'Microservices', 'AWS'],
    sessions: 74, students: 22, responseTime: '< 4 giờ',
    bio: 'Kiến trúc hệ thống backend quy mô lớn, xử lý hàng triệu giao dịch mỗi ngày tại VNPay.',
    price: '300k/giờ', verified: true,
  },
  {
    id: 4, name: 'Chị Lê Thảo Nhi', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face',
    role: 'UX Designer', company: 'Grab Vietnam', rating: 4.6, reviews: 19,
    online: true, specialties: ['Figma', 'UX Research', 'Design System'],
    sessions: 52, students: 17, responseTime: '< 3 giờ',
    bio: 'Designer với đam mê tạo ra trải nghiệm người dùng đơn giản nhưng hiệu quả cho hàng triệu người dùng.',
    price: '150k/giờ', verified: false,
  },
  {
    id: 5, name: 'Anh Võ Đình Khải', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=face',
    role: 'Data Scientist', company: 'VNG Corporation', rating: 4.9, reviews: 41,
    online: false, specialties: ['Python', 'Machine Learning', 'TensorFlow'],
    sessions: 128, students: 40, responseTime: '< 2 giờ',
    bio: 'Chuyên gia ML với kinh nghiệm xây dựng recommendation engine và NLP cho hàng chục triệu người dùng.',
    price: '350k/giờ', verified: true,
  },
  {
    id: 6, name: 'Chị Bùi Thu Hương', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=face',
    role: 'Frontend Lead', company: 'Shopee Vietnam', rating: 4.8, reviews: 36,
    online: true, specialties: ['React', 'Vue.js', 'Performance'],
    sessions: 89, students: 29, responseTime: '< 1 giờ',
    bio: 'Chuyên sâu về React performance optimization và micro-frontend architecture cho hệ thống e-commerce.',
    price: '250k/giờ', verified: true,
  },
];

const challenges = [
  {
    id: 1, company: 'FPT Software', logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=80&h=80&fit=crop',
    title: 'Code Challenge: Xây dựng API RESTful trong 24h',
    description: 'Thiết kế và triển khai một API quản lý thư viện sách với Node.js/Express. Bao gồm authentication, CRUD, và pagination.',
    skills: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    timeLeft: '18h 32m', participants: 156, spotsLeft: 5,
    status: 'active', reward: 'Golden Ticket - Phỏng vấn thẳng', difficulty: 'Trung bình',
    points: 500, joined: false, hot: true,
  },
  {
    id: 2, company: 'Shopee Vietnam', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
    title: 'UI Challenge: Thiết kế trang checkout tối ưu',
    description: 'Thiết kế lại trang checkout của Shopee để tăng tỷ lệ chuyển đổi. Nộp file Figma với prototype.',
    skills: ['Figma', 'UX Design', 'Prototyping'],
    timeLeft: '2 ngày', participants: 89, spotsLeft: 12,
    status: 'active', reward: '2 triệu VNĐ + Fast-track Interview', difficulty: 'Dễ',
    points: 300, joined: true, hot: false,
  },
  {
    id: 3, company: 'Momo', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop',
    title: 'Data Challenge: Phân tích hành vi người dùng ví điện tử',
    description: 'Phân tích dataset giao dịch ẩn danh và đề xuất 3 chiến lược tăng engagement. Nộp notebook và slide.',
    skills: ['Python', 'Pandas', 'Data Visualization', 'Statistics'],
    timeLeft: '5 ngày', participants: 203, spotsLeft: 0,
    status: 'active', reward: 'Học bổng internship 3 tháng', difficulty: 'Khó',
    points: 800, joined: false, hot: true,
  },
  {
    id: 4, company: 'VNG Corporation', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop',
    title: 'Game Dev: Xây dựng mini-game bằng Unity',
    description: 'Tạo một mini-game nhập vai đơn giản trong 72h sử dụng Unity 2D.',
    skills: ['Unity', 'C#', 'Game Design'],
    timeLeft: 'Bắt đầu sau 2 ngày', participants: 0, spotsLeft: 30,
    status: 'upcoming', reward: 'Gặp gỡ Game Director VNG + 5 triệu', difficulty: 'Khó',
    points: 1000, joined: false, hot: false,
  },
  {
    id: 5, company: 'Tiki', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=80&fit=crop',
    title: 'Hackathon: Ý tưởng tính năng mới cho Tiki',
    description: 'Đề xuất và prototype 1 tính năng mới giúp tăng trải nghiệm mua sắm. Đội 2-3 người.',
    skills: ['Product Thinking', 'UI/UX', 'Presentation'],
    timeLeft: 'Kết thúc', participants: 310, spotsLeft: 0,
    status: 'finished', reward: '10 triệu VNĐ (Đội thắng)', difficulty: 'Trung bình',
    points: 600, joined: true, hot: false,
  },
];

const jobs = [
  {
    id: 1, title: 'Flutter Developer Intern', company: 'FPT Software', logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=80&h=80&fit=crop',
    location: 'Hồ Chí Minh', type: 'Part-time', salary: '5-8 triệu', posted: '2 ngày trước',
    matchScore: 95, skills: ['Flutter', 'Dart', 'REST API', 'Firebase'], hot: true,
    description: 'Tham gia đội ngũ mobile tại FPT Software, phát triển ứng dụng cho khách hàng doanh nghiệp lớn.',
    openings: 3, applicants: 48, deadline: '30/06/2025',
  },
  {
    id: 2, title: 'Frontend Engineer Intern', company: 'Shopee Vietnam', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
    location: 'Hồ Chí Minh', type: 'Full-time', salary: '8-12 triệu', posted: '1 ngày trước',
    matchScore: 88, skills: ['React', 'TypeScript', 'TailwindCSS', 'GraphQL'],
    description: 'Xây dựng giao diện người dùng cho hàng triệu khách hàng Shopee Việt Nam.',
    openings: 5, applicants: 120, deadline: '25/06/2025',
  },
  {
    id: 3, title: 'Data Analyst Intern', company: 'VNG Corporation', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop',
    location: 'Hà Nội', type: 'Part-time', salary: '4-6 triệu', posted: '3 ngày trước',
    matchScore: 72, skills: ['Python', 'SQL', 'Tableau', 'Excel'],
    description: 'Phân tích dữ liệu game và đề xuất chiến lược phát triển sản phẩm.',
    openings: 2, applicants: 67, deadline: '20/06/2025',
  },
  {
    id: 4, title: 'UI/UX Design Intern', company: 'Momo', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop',
    location: 'Hồ Chí Minh', type: 'Full-time', salary: '6-9 triệu', posted: '5 ngày trước',
    matchScore: 65, skills: ['Figma', 'Prototyping', 'User Research', 'Adobe XD'],
    description: 'Thiết kế trải nghiệm người dùng cho ứng dụng ví điện tử hàng đầu Việt Nam.',
    openings: 1, applicants: 89, deadline: '15/06/2025',
  },
  {
    id: 5, title: 'Backend Developer Intern', company: 'Tiki', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=80&fit=crop',
    location: 'Hồ Chí Minh', type: 'Full-time', salary: '7-10 triệu', posted: '1 tuần trước',
    matchScore: 80, skills: ['Node.js', 'MongoDB', 'Docker', 'AWS'],
    description: 'Phát triển hệ thống backend cho nền tảng thương mại điện tử hàng đầu.',
    openings: 4, applicants: 95, deadline: '10/07/2025',
  },
  {
    id: 6, title: 'Marketing Intern', company: 'Grab Vietnam', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop',
    location: 'Hà Nội', type: 'Part-time', salary: '3-5 triệu', posted: '4 ngày trước',
    matchScore: 55, skills: ['Social Media', 'Content', 'SEO', 'Analytics'],
    description: 'Hỗ trợ chiến dịch marketing digital cho các dịch vụ của Grab tại Việt Nam.',
    openings: 2, applicants: 143, deadline: '05/06/2025',
  },
];

export const feedApi={
    //Hàm lấy list bài viết
    getFeed : async()=>{
        await new Promise((resolve)=>setTimeout(resolve,1000));
       return {
            items: mockPosts,
            page:1,
            hasMore: true
        };
    },
    //Hàm lấy list challenges
    getChallenge:async()=>{
        await new Promise((resolve)=>setTimeout(resolve,1000));
        return challenges;
    },
    //Hàm tạo bài viết mới
    createPost : async(newPostData)=>{
      await new Promise((resolve)=>setTimeout(resolve,1000));
      const newPost={
        id: Date.now(),
        author:"Trương Tuấn Tú",
        avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        role:"Software Engineer",
        time:"Vừa xong",
        content:newPostData.content,
        likes:0,
        comments:0,
      }
      mockPosts.unshift(newPost);
      return newPost;
    },
    likePost:async(postId)=>{
      console.log("Like post",postId);
      await new Promise((resolve)=>setTimeout(resolve,500));
      const post=mockPosts.find(p=>p.id===postId);
      post.likes++;
      return{
        liked:true,
        likeCount:post.likes
      }
    },
  savePost:async(postId)=>{
    console.log("Save post",postId);
    await new Promise((resolve)=>setTimeout(resolve,500));
    const post=mockPosts.find(p=>p.id===postId);
    return {
      isSaved: post ? post.isSaved : false
    }
  },
  sharePost:async(postId)=>{
    console.log("Share post",postId);
    await new Promise((resolve)=>setTimeout(resolve,500));
    const post=mockPosts.find(p=>p.id===postId);
    if(post){
      post.shares=(post.shares || 0)+1;
    }
    return {
      sharesCount: post ? post.shares : 0
    }
  },
  //Hàm get job
  getRecommendedJobs:async()=>{
    await new Promise((resolve)=>setTimeout(resolve,1000));
    return jobs;
  },
  getRecommendedMentors:async()=>{
    await new Promise((resolve)=>setTimeout(resolve,1000));
    return mentors;
  }
}