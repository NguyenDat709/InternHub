import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MessageSquare, Calendar, CheckCircle2, Search, Filter, Zap, Users, Clock } from 'lucide-react';

const specialties = ['Tất cả', 'Mobile Dev', 'Web Dev', 'Data Science', 'UI/UX', 'Product', 'DevOps'];

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

export default function Mentors() {
  const [activeSpec, setActiveSpec] = useState('Tất cả');
  const [selectedMentor, setSelectedMentor] = useState(mentors[0]);
  const [booked, setBooked] = useState([]);

  return (
    <div className="flex gap-6">
      {/* Mentor List */}
      <div className="w-full lg:w-[420px] shrink-0 space-y-4">
        {/* Search */}
        <Card className="p-3">
          <div className="flex gap-2 mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input className="pl-8 h-9 text-sm rounded-lg" placeholder="Tìm mentor..." />
            </div>
            <Button variant="outline" size="sm" className="rounded-lg gap-1.5">
              <Filter className="w-3.5 h-3.5" />Lọc
            </Button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {specialties.map(s => (
              <button key={s} onClick={() => setActiveSpec(s)}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all
                  ${activeSpec === s ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}`}>
                {s}
              </button>
            ))}
          </div>
        </Card>

        {/* Post request */}
        <Card className="p-4 border-2 border-dashed border-primary/30 bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm">Không tìm thấy mentor phù hợp?</h4>
              <p className="text-xs text-muted-foreground">Đăng yêu cầu để mentor liên hệ bạn</p>
            </div>
            <Button size="sm" className="rounded-full text-xs shrink-0">Đăng ngay</Button>
          </div>
        </Card>

        <div className="space-y-3">
          {mentors.map(mentor => (
            <Card key={mentor.id} onClick={() => setSelectedMentor(mentor)}
              className={`p-4 cursor-pointer transition-all duration-200 hover:border-primary/40
                ${selectedMentor?.id === mentor.id ? 'border-primary shadow-md shadow-primary/10' : ''}`}>
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                  {mentor.online && <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-card rounded-full" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm">{mentor.name}</h3>
                    {mentor.verified && <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{mentor.role} • {mentor.company}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="flex items-center gap-1 text-xs">
                      <Star className="w-3 h-3 text-accent fill-accent" />{mentor.rating}
                      <span className="text-muted-foreground">({mentor.reviews})</span>
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="w-3 h-3" />{mentor.students} học viên
                    </span>
                  </div>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {mentor.specialties.slice(0, 2).map((s, i) => (
                      <Badge key={i} variant="secondary" className="text-[10px] rounded-full px-2 py-0">{s}</Badge>
                    ))}
                    {mentor.specialties.length > 2 && (
                      <Badge variant="secondary" className="text-[10px] rounded-full px-2 py-0">+{mentor.specialties.length - 2}</Badge>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-xs font-semibold ${mentor.price === 'Miễn phí' ? 'text-emerald-600' : 'text-primary'}`}>{mentor.price}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Mentor Detail */}
      {selectedMentor && (
        <div className="flex-1 hidden lg:block">
          <Card className="p-6 sticky top-[88px]">
            {/* Top */}
            <div className="flex items-start gap-5">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={selectedMentor.avatar} />
                  <AvatarFallback className="text-xl">{selectedMentor.name[0]}</AvatarFallback>
                </Avatar>
                {selectedMentor.online && <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-card rounded-full" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold font-space">{selectedMentor.name}</h2>
                  {selectedMentor.verified && <CheckCircle2 className="w-5 h-5 text-primary" />}
                </div>
                <p className="text-muted-foreground mt-0.5">{selectedMentor.role} tại {selectedMentor.company}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`w-4 h-4 ${i <= Math.floor(selectedMentor.rating) ? 'text-accent fill-accent' : 'text-muted'}`} />
                  ))}
                  <span className="text-sm font-semibold ml-1">{selectedMentor.rating}</span>
                  <span className="text-sm text-muted-foreground">({selectedMentor.reviews} đánh giá)</span>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold font-space ${selectedMentor.price === 'Miễn phí' ? 'text-emerald-600' : 'text-primary'}`}>
                  {selectedMentor.price}
                </div>
                {selectedMentor.price !== 'Miễn phí' && <p className="text-xs text-muted-foreground">mỗi buổi</p>}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-5 p-3 rounded-xl bg-secondary/40">
              <div className="text-center">
                <div className="text-lg font-bold">{selectedMentor.sessions}</div>
                <div className="text-xs text-muted-foreground">Buổi đã dạy</div>
              </div>
              <div className="text-center border-x">
                <div className="text-lg font-bold">{selectedMentor.students}</div>
                <div className="text-xs text-muted-foreground">Học viên</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold flex items-center justify-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-primary" />{selectedMentor.responseTime}
                </div>
                <div className="text-xs text-muted-foreground">Phản hồi</div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-semibold mb-2">Giới thiệu</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{selectedMentor.bio}</p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Chuyên môn</h3>
              <div className="flex flex-wrap gap-2">
                {selectedMentor.specialties.map((s, i) => (
                  <Badge key={i} variant="secondary" className="rounded-full px-3">{s}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />Đặt lịch buổi tiếp theo
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {['Thứ 2, 09:00', 'Thứ 4, 14:00', 'Thứ 6, 16:00', 'Thứ 3, 10:00', 'Thứ 5, 15:00', 'Thứ 7, 09:00'].map((slot, i) => (
                  <button key={i} className="text-xs px-2 py-2 rounded-lg border border-primary/20 bg-card hover:bg-primary hover:text-primary-foreground transition-all font-medium">
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              {booked.includes(selectedMentor.id) ? (
                <Button className="flex-1 rounded-full" disabled>✅ Đã đặt lịch</Button>
              ) : (
                <Button className="flex-1 rounded-full gap-2" onClick={() => setBooked(prev => [...prev, selectedMentor.id])}>
                  <Calendar className="w-4 h-4" />Đặt lịch ngay
                </Button>
              )}
              <Button variant="outline" className="flex-1 rounded-full gap-2">
                <MessageSquare className="w-4 h-4" />Nhắn tin
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}