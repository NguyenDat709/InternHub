import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Clock, Sparkles, Search, Filter, Bookmark, ChevronRight, Building2, Users, DollarSign, Star } from 'lucide-react';
import{ useQuery } from '@tanstack/react-query';
import { feedApi } from '@/api/feedApi';
const categories = ['Tất cả', 'Lập trình', 'Design', 'Data', 'Marketing', 'Quản trị'];

export default function Jobs() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [savedJobs, setSavedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState([]);
  const {
      data: jobs=[],
      isLoading: isJobLoading,
  }=useQuery({queryKey:['jobs'],queryFn:feedApi.getRecommendedJobs});
  const toggleSave = (id) => setSavedJobs(prev => prev.includes(id) ? prev.filter(j => j !== id) : [...prev, id]);
  const handleApply = (id) => setApplied(prev => [...prev, id]);

  return (
    <div className="flex gap-6 h-full">
      {/* Job List */}
      <div className="w-full lg:w-96 shrink-0 space-y-4">
        {/* Filter Bar */}
        <Card className="p-3">
          <div className="flex gap-2 mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input className="pl-8 h-9 text-sm rounded-lg" placeholder="Tìm vị trí..." />
            </div>
            <Button variant="outline" size="sm" className="rounded-lg gap-1.5">
              <Filter className="w-3.5 h-3.5" />Lọc
            </Button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all
                  ${activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Card>

        <div className="space-y-3">
          {jobs.map(job => (
            <Card
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`p-4 cursor-pointer transition-all duration-200 hover:border-primary/40
                ${selectedJob?.id === job.id ? 'border-primary shadow-md shadow-primary/10' : ''}`}
            >
              <div className="flex items-start gap-3">
                <Avatar className="w-11 h-11 rounded-xl shrink-0">
                  <AvatarImage src={job.logo} />
                  <AvatarFallback className="rounded-xl">{job.company[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-sm leading-snug">{job.title}</h3>
                    <button onClick={e => { e.stopPropagation(); toggleSave(job.id); }} className="ml-2 mt-0.5">
                      <Bookmark className={`w-4 h-4 transition-colors ${savedJobs.includes(job.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{job.company}</p>
                  <div className="flex items-center gap-3 mt-1.5 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="text-[10px] bg-primary/10 text-primary border-0 rounded-full gap-1">
                      <Sparkles className="w-2.5 h-2.5" />{job.matchScore}% phù hợp
                    </Badge>
                    {job.hot && <Badge className="text-[10px] bg-destructive/10 text-destructive border-0 rounded-full">🔥 Hot</Badge>}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Job Detail */}
      {selectedJob && (
        <div className="flex-1 hidden lg:block">
          <Card className="p-6 sticky top-[88px]">
            {/* Header */}
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16 rounded-2xl">
                <AvatarImage src={selectedJob.logo} />
                <AvatarFallback className="rounded-2xl text-lg">{selectedJob.company[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold font-space">{selectedJob.title}</h2>
                <p className="text-muted-foreground mt-1 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />{selectedJob.company}
                </p>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{selectedJob.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{selectedJob.type}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" />{selectedJob.salary}</span>
                </div>
              </div>
              <Badge className="text-sm bg-primary/10 text-primary border-0 rounded-full px-3 py-1.5 gap-1">
                <Sparkles className="w-3.5 h-3.5" />{selectedJob.matchScore}% phù hợp
              </Badge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-5 p-3 rounded-xl bg-secondary/40">
              <div className="text-center">
                <div className="text-lg font-bold">{selectedJob.openings}</div>
                <div className="text-xs text-muted-foreground">Vị trí tuyển</div>
              </div>
              <div className="text-center border-x">
                <div className="text-lg font-bold">{selectedJob.applicants}</div>
                <div className="text-xs text-muted-foreground">Đã ứng tuyển</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-destructive">{selectedJob.deadline}</div>
                <div className="text-xs text-muted-foreground">Hạn nộp</div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5">
              <h3 className="font-semibold mb-2">Mô tả công việc</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{selectedJob.description}</p>
              <ul className="mt-3 space-y-1.5">
                {['Phát triển và bảo trì các tính năng sản phẩm', 'Tham gia code review và đóng góp ý tưởng cải thiện', 'Phối hợp với team backend và designer', 'Viết unit test và tài liệu kỹ thuật'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-5">
              <h3 className="font-semibold mb-2">Kỹ năng yêu cầu</h3>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="rounded-full px-3">{skill}</Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              {applied.includes(selectedJob.id) ? (
                <Button className="flex-1 rounded-full" disabled>
                  ✅ Đã ứng tuyển
                </Button>
              ) : (
                <Button className="flex-1 rounded-full gap-2" onClick={() => handleApply(selectedJob.id)}>
                  Ứng tuyển ngay <ChevronRight className="w-4 h-4" />
                </Button>
              )}
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => toggleSave(selectedJob.id)}>
                <Bookmark className={`w-4 h-4 ${savedJobs.includes(selectedJob.id) ? 'fill-primary text-primary' : ''}`} />
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}