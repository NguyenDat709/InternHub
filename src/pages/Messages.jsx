import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Send, Smile, Paperclip, Phone, Video, MoreVertical, CheckCheck } from 'lucide-react';

const conversations = [
  {
    id: 1, name: 'Anh Trần Minh Đức', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    role: 'Mentor • Momo', online: true, unread: 2,
    lastMessage: 'Flutter với Riverpod sẽ giúp bạn quản lý state tốt hơn...', lastTime: '10:32',
    messages: [
      { id: 1, from: 'them', text: 'Chào bạn! Mình đã xem qua project Flutter của bạn rồi nhé 😊', time: '10:00' },
      { id: 2, from: 'me', text: 'Dạ, cảm ơn anh! Anh thấy có vấn đề gì không ạ?', time: '10:05' },
      { id: 3, from: 'them', text: 'Code của bạn khá tốt! Nhưng mình thấy bạn đang dùng setState nhiều quá. Flutter với Riverpod sẽ giúp bạn quản lý state tốt hơn...', time: '10:32' },
      { id: 4, from: 'them', text: 'Bạn có muốn book 1 buổi để mình hướng dẫn chi tiết không?', time: '10:33' },
    ]
  },
  {
    id: 2, name: 'Shopee Recruiting', avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
    role: 'HR • Shopee Vietnam', online: false, unread: 1,
    lastMessage: 'Chúc mừng! Hồ sơ của bạn đã được shortlist...', lastTime: 'Hôm qua',
    messages: [
      { id: 1, from: 'them', text: 'Xin chào! Đây là Shopee Recruiting Team.', time: 'Hôm qua 09:00' },
      { id: 2, from: 'them', text: 'Chúc mừng! Hồ sơ của bạn đã được shortlist vào vòng phỏng vấn Frontend Intern.', time: 'Hôm qua 09:01' },
      { id: 3, from: 'me', text: 'Wow, cảm ơn anh/chị rất nhiều! Mình rất vui khi nhận được tin này 🎉', time: 'Hôm qua 09:15' },
    ]
  },
  {
    id: 3, name: 'Chị Nguyễn Thanh Hà', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face',
    role: 'Mentor • Tiki', online: true, unread: 0,
    lastMessage: 'Bạn đã đọc cuốn "Inspired" của Marty Cagan chưa?', lastTime: 'Thứ 2',
    messages: [
      { id: 1, from: 'them', text: 'Để trở thành PM tốt, bạn cần hiểu sâu về users hơn.', time: 'Thứ 2 14:00' },
      { id: 2, from: 'me', text: 'Vâng ạ, mình đang cố gắng học hỏi thêm về user research.', time: 'Thứ 2 14:10' },
      { id: 3, from: 'them', text: 'Bạn đã đọc cuốn "Inspired" của Marty Cagan chưa?', time: 'Thứ 2 14:15' },
    ]
  },
];

export default function Messages() {
  const [activeConv, setActiveConv] = useState(conversations[0]);
  const [messages, setMessages] = useState(activeConv.messages);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const conv = conversations.find(c => c.id === activeConv.id);
    setMessages(conv?.messages || []);
  }, [activeConv]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), from: 'me', text: input, time: 'Vừa xong' }]);
    setInput('');
  };

  return (
    <div className="flex gap-4 h-[calc(100vh-160px)]">
      {/* Conversation list */}
      <Card className="w-80 shrink-0 flex flex-col overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-bold font-space mb-3">Tin nhắn</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input className="pl-9 h-9 text-sm rounded-lg" placeholder="Tìm cuộc trò chuyện..." />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map(conv => (
            <button key={conv.id} className={`w-full p-4 flex items-start gap-3 hover:bg-secondary/50 transition-colors text-left border-b last:border-0
              ${activeConv.id === conv.id ? 'bg-primary/5 border-r-2 border-r-primary' : ''}`}
              onClick={() => setActiveConv(conv)}>
              <div className="relative shrink-0">
                <Avatar className="w-11 h-11">
                  <AvatarImage src={conv.avatar} />
                  <AvatarFallback>{conv.name[0]}</AvatarFallback>
                </Avatar>
                {conv.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-card rounded-full" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-sm">{conv.name}</span>
                  <span className="text-[10px] text-muted-foreground">{conv.lastTime}</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5">{conv.role}</p>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{conv.lastMessage}</p>
              </div>
              {conv.unread > 0 && (
                <span className="w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center shrink-0">
                  {conv.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </Card>

      {/* Chat window */}
      <Card className="flex-1 flex flex-col overflow-hidden">
        {/* Chat header */}
        <div className="flex items-center gap-3 p-4 border-b">
          <div className="relative">
            <Avatar className="w-10 h-10">
              <AvatarImage src={activeConv.avatar} />
              <AvatarFallback>{activeConv.name[0]}</AvatarFallback>
            </Avatar>
            {activeConv.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-card rounded-full" />}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm">{activeConv.name}</h3>
            <p className="text-xs text-muted-foreground">{activeConv.online ? '🟢 Đang online' : 'Offline'} • {activeConv.role}</p>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="rounded-full"><Phone className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" className="rounded-full"><Video className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" className="rounded-full"><MoreVertical className="w-4 h-4" /></Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'} gap-2`}>
              {msg.from !== 'me' && (
                <Avatar className="w-7 h-7 shrink-0 mt-1">
                  <AvatarImage src={activeConv.avatar} />
                  <AvatarFallback>{activeConv.name[0]}</AvatarFallback>
                </Avatar>
              )}
              <div className={`max-w-[70%]`}>
                <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                  ${msg.from === 'me'
                    ? 'bg-primary text-primary-foreground rounded-br-sm'
                    : 'bg-secondary text-foreground rounded-bl-sm'}`}>
                  {msg.text}
                </div>
                <div className={`flex items-center gap-1 mt-1 ${msg.from === 'me' ? 'justify-end' : ''}`}>
                  <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                  {msg.from === 'me' && <CheckCheck className="w-3 h-3 text-primary" />}
                </div>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full shrink-0"><Paperclip className="w-4 h-4" /></Button>
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Nhập tin nhắn..."
                className="rounded-full pr-10"
              />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-7 w-7">
                <Smile className="w-4 h-4" />
              </Button>
            </div>
            <Button size="icon" className="rounded-full shrink-0" onClick={sendMessage}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}