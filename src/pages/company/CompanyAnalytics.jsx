// @ts-nocheck
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Eye, Users, UserCheck, Clock, Download, BarChart2 } from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, PieChart, Pie, Cell, Legend
} from 'recharts';

const applicantTrend = [
  { month: 'T1', apply: 18, view: 210 }, { month: 'T2', apply: 32, view: 380 },
  { month: 'T3', apply: 28, view: 290 }, { month: 'T4', apply: 45, view: 520 },
  { month: 'T5', apply: 38, view: 460 }, { month: 'T6', apply: 62, view: 890 },
];

const sourceData = [
  { name: 'Tìm kiếm', value: 45, color: 'hsl(var(--chart-1))' },
  { name: 'Đề xuất AI', value: 30, color: 'hsl(var(--chart-2))' },
  { name: 'Thách thức', value: 15, color: 'hsl(var(--chart-3))' },
  { name: 'Khác', value: 10, color: 'hsl(var(--chart-4))' },
];

const funnelData = [
  { stage: 'Xem tin', count: 1200 },
  { stage: 'Click vào', count: 480 },
  { stage: 'Ứng tuyển', count: 190 },
  { stage: 'Shortlist', count: 42 },
  { stage: 'Phỏng vấn', count: 18 },
  { stage: 'Offer', count: 7 },
];

const skillGap = [
  { skill: 'Flutter', demand: 90, supply: 65 },
  { skill: 'React', demand: 85, supply: 78 },
  { skill: 'Python', demand: 75, supply: 70 },
  { skill: 'TypeScript', demand: 70, supply: 52 },
  { skill: 'Docker', demand: 60, supply: 35 },
];

const metrics = [
  { label: 'Thời gian tuyển TB', value: '18 ngày', sub: '-3 ngày vs tháng trước', up: true, icon: Clock },
  { label: 'Tỉ lệ chấp nhận offer', value: '78%', sub: '+5% vs tháng trước', up: true, icon: UserCheck },
  { label: 'Cost per hire', value: '0 VNĐ', sub: 'Miễn phí với InternHub', up: null, icon: TrendingUp },
  { label: 'Quality of hire', value: '4.2/5', sub: 'Dựa trên feedback mentor', up: true, icon: BarChart2 },
];

export default function CompanyAnalytics() {
  const [period, setPeriod] = useState('6m');

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-space">Phân tích tuyển dụng</h1>
        <div className="flex gap-2">
          <div className="flex bg-secondary rounded-lg p-1">
            {['1m', '3m', '6m', '1y'].map(p => (
              <button key={p} onClick={() => setPeriod(p)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${period === p ? 'bg-card shadow-sm' : 'text-muted-foreground'}`}>
                {p === '1m' ? '1T' : p === '3m' ? '3T' : p === '6m' ? '6T' : '1N'}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="rounded-full gap-1.5">
            <Download className="w-3.5 h-3.5" />Xuất PDF
          </Button>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <Card key={i} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground">{m.label}</p>
                <p className="text-xl font-bold font-space mt-1">{m.value}</p>
                <p className={`text-xs mt-1 flex items-center gap-1 ${m.up ? 'text-emerald-600' : 'text-muted-foreground'}`}>
                  {m.up && <TrendingUp className="w-3 h-3" />}{m.sub}
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <m.icon className="w-4.5 h-4.5 w-[18px] h-[18px] text-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trend chart */}
      <Card className="p-5">
        <h3 className="font-semibold mb-4">Xu hướng ứng viên & lượt xem</h3>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={applicantTrend}>
            <defs>
              <linearGradient id="colorApply" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="view" stroke="hsl(var(--chart-2))" strokeWidth={2} fill="url(#colorView)" name="Lượt xem" />
            <Area type="monotone" dataKey="apply" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#colorApply)" name="Ứng tuyển" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Funnel */}
        <Card className="p-5">
          <h3 className="font-semibold mb-4">Phễu tuyển dụng</h3>
          <div className="space-y-2">
            {funnelData.map((f, i) => {
              const pct = (f.count / funnelData[0].count) * 100;
              return (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{f.stage}</span>
                    <span className="font-medium">{f.count.toLocaleString()}</span>
                  </div>
                  <div className="h-6 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-primary/80 flex items-center pl-3 transition-all" style={{ width: `${Math.max(pct, 10)}%` }}>
                      <span className="text-[10px] text-primary-foreground font-medium">{pct.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Source */}
        <Card className="p-5">
          <h3 className="font-semibold mb-4">Nguồn ứng viên</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={sourceData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                {sourceData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={v => [`${v}%`, 'Tỉ lệ']} />
              <Legend formatter={(v) => <span className="text-xs">{v}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Skill gap */}
      <Card className="p-5">
        <h3 className="font-semibold mb-4">Phân tích khoảng cách kỹ năng</h3>
        <div className="space-y-4">
          {skillGap.map((s, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-medium">{s.skill}</span>
                <span className="text-muted-foreground">Cầu {s.demand}% • Cung {s.supply}%</span>
              </div>
              <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-primary/30 rounded-full" style={{ width: `${s.demand}%` }} />
                <div className="absolute inset-y-0 left-0 bg-primary rounded-full" style={{ width: `${s.supply}%` }} />
              </div>
              {s.demand > s.supply && (
                <p className="text-[10px] text-destructive mt-0.5 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />Thiếu {s.demand - s.supply}% ứng viên có kỹ năng này
                </p>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}