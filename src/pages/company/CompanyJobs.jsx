import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Edit2, Eye, Users, Clock, Trash2, ToggleLeft, ToggleRight, Search, MapPin, DollarSign, BarChart2 } from 'lucide-react';

const jobs = [
  {
    id: 1, title: 'Flutter Developer Intern', location: 'Hồ Chí Minh', type: 'Part-time',
    salary: '5-8 triệu', deadline: '30/06/2025', status: 'active',
    applicants: 48, views: 312, shortlisted: 5, skills: ['Flutter', 'Dart', 'Firebase'],
    posted: '10 ngày trước', hot: true,
  },
  {
    id: 2, title: 'Frontend Engineer Intern', location: 'Hồ Chí Minh', type: 'Full-time',
    salary: '8-12 triệu', deadline: '25/06/2025', status: 'active',
    applicants: 120, views: 891, shortlisted: 12, skills: ['React', 'TypeScript', 'TailwindCSS'],
    posted: '5 ngày trước', hot: false,
  },
  {
    id: 3, title: 'Data Analyst Intern', location: 'Hà Nội', type: 'Part-time',
    salary: '4-6 triệu', deadline: '20/06/2025', status: 'paused',
    applicants: 22, views: 145, shortlisted: 2, skills: ['Python', 'SQL', 'Tableau'],
    posted: '15 ngày trước', hot: false,
  },
  {
    id: 4, title: 'Mobile QA Engineer', location: 'Đà Nẵng', type: 'Full-time',
    salary: '6-9 triệu', deadline: '15/07/2025', status: 'draft',
    applicants: 0, views: 0, shortlisted: 0, skills: ['Testing', 'Appium', 'JIRA'],
    posted: 'Chưa đăng', hot: false,
  },
];

const statusConfig = {
  active: { label: 'Đang đăng', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  paused: { label: 'Tạm dừng', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  draft: { label: 'Nháp', color: 'bg-secondary text-muted-foreground border-transparent' },
};

const [FORM_FIELDS] = [
  { label: 'Tên vị trí', placeholder: 'VD: Flutter Developer Intern', type: 'text' },
  { label: 'Địa điểm', placeholder: 'VD: Hồ Chí Minh', type: 'text' },
  { label: 'Mức lương', placeholder: 'VD: 5-8 triệu', type: 'text' },
  { label: 'Hạn nộp', placeholder: '', type: 'date' },
];

export default function CompanyJobs() {
  const [jobList, setJobList] = useState(jobs);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  const toggleStatus = (id) => {
    setJobList(prev => prev.map(j => j.id === id ? {
      ...j, status: j.status === 'active' ? 'paused' : 'active'
    } : j));
  };

  const filtered = jobList.filter(j => j.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-space">Tin tuyển dụng</h1>
        <Button className="rounded-full gap-2" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4" />{showForm ? 'Đóng' : 'Đăng tin mới'}
        </Button>
      </div>

      {/* New job form */}
      {showForm && (
        <Card className="p-5 border-2 border-primary/20">
          <h3 className="font-semibold mb-4">Tạo tin tuyển dụng mới</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground mb-1.5 block">Tên vị trí *</label>
              <Input placeholder="VD: Flutter Developer Intern" className="rounded-lg" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Địa điểm</label>
              <Input placeholder="VD: Hồ Chí Minh" className="rounded-lg" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Mức lương</label>
              <Input placeholder="VD: 5-8 triệu" className="rounded-lg" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Hạn nộp hồ sơ</label>
              <Input type="date" className="rounded-lg" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Loại hình</label>
              <select className="w-full h-9 rounded-lg border border-input bg-background px-3 text-sm">
                <option>Full-time</option>
                <option>Part-time</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground mb-1.5 block">Kỹ năng yêu cầu</label>
              <Input placeholder="VD: Flutter, Dart, Firebase (cách nhau bằng dấu phẩy)" className="rounded-lg" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground mb-1.5 block">Mô tả công việc</label>
              <textarea className="w-full rounded-lg border border-input bg-background p-3 text-sm h-24 resize-none" placeholder="Mô tả chi tiết về vị trí và yêu cầu..." />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button className="rounded-full">Đăng ngay</Button>
            <Button variant="outline" className="rounded-full">Lưu nháp</Button>
            <Button variant="ghost" className="rounded-full" onClick={() => setShowForm(false)}>Hủy</Button>
          </div>
        </Card>
      )}

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
        <Input className="pl-9 h-9 text-sm rounded-lg" placeholder="Tìm tin tuyển dụng..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {/* Job list */}
      <div className="space-y-4">
        {filtered.map(job => (
          <Card key={job.id} className="p-5">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-base">{job.title}</h3>
                  <Badge className={`text-[10px] border ${statusConfig[job.status].color}`}>{statusConfig[job.status].label}</Badge>
                  {job.hot && <Badge className="text-[10px] bg-destructive/10 text-destructive border-0">🔥 Hot</Badge>}
                </div>
                <div className="flex items-center gap-4 mt-1.5 text-xs text-muted-foreground flex-wrap">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />Hạn: {job.deadline}</span>
                  <span className="text-muted-foreground/60">Đăng {job.posted}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {job.skills.map((s, i) => <Badge key={i} variant="secondary" className="text-[10px] rounded-full px-2">{s}</Badge>)}
                </div>
              </div>

              {/* Stats */}
              <div className="hidden lg:grid grid-cols-3 gap-4 text-center shrink-0">
                <div>
                  <div className="text-lg font-bold">{job.applicants}</div>
                  <div className="text-[10px] text-muted-foreground">Ứng viên</div>
                </div>
                <div>
                  <div className="text-lg font-bold">{job.views}</div>
                  <div className="text-[10px] text-muted-foreground">Lượt xem</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">{job.shortlisted}</div>
                  <div className="text-[10px] text-muted-foreground">Shortlist</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 mt-4 pt-3 border-t flex-wrap">
              <Button size="sm" variant="outline" className="rounded-full text-xs gap-1.5">
                <Users className="w-3 h-3" />Xem ứng viên ({job.applicants})
              </Button>
              <Button size="sm" variant="ghost" className="rounded-full text-xs gap-1.5">
                <Edit2 className="w-3 h-3" />Chỉnh sửa
              </Button>
              <Button size="sm" variant="ghost" className="rounded-full text-xs gap-1.5">
                <BarChart2 className="w-3 h-3" />Thống kê
              </Button>
              {job.status !== 'draft' && (
                <button onClick={() => toggleStatus(job.id)} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto">
                  {job.status === 'active'
                    ? <><ToggleRight className="w-4 h-4 text-emerald-500" />Tạm dừng</>
                    : <><ToggleLeft className="w-4 h-4" />Kích hoạt</>
                  }
                </button>
              )}
              <Button size="sm" variant="ghost" className="rounded-full text-xs text-destructive hover:text-destructive gap-1.5 ml-auto lg:ml-0">
                <Trash2 className="w-3 h-3" />Xóa
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}