import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, Download, ArrowUpRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const monthlyData = [
  { month: 'T1', sessions: 18, earnings: 3200000 },
  { month: 'T2', sessions: 22, earnings: 4100000 },
  { month: 'T3', sessions: 20, earnings: 3800000 },
  { month: 'T4', sessions: 28, earnings: 5200000 },
  { month: 'T5', sessions: 26, earnings: 4900000 },
  { month: 'T6', sessions: 32, earnings: 6100000 },
];

const transactions = [
  { id: 'TXN001', student: 'Nguyễn Văn A', session: 'Flutter State Management', date: 'Hôm nay', amount: 200000, status: 'pending' },
  { id: 'TXN002', student: 'Trần Thị B', session: 'Code Review', date: 'Hôm qua', amount: 200000, status: 'completed' },
  { id: 'TXN003', student: 'Phạm Văn C', session: 'Career Coaching', date: '3 ngày trước', amount: 200000, status: 'completed' },
  { id: 'TXN004', student: 'Lê Thị D', session: 'JS Cơ bản', date: '5 ngày trước', amount: 200000, status: 'completed' },
  { id: 'TXN005', student: 'Hoàng Văn E', session: 'Dart OOP', date: '1 tuần trước', amount: 200000, status: 'completed' },
  { id: 'TXN006', student: 'Nguyễn Văn A', session: 'Flutter Intro', date: '2 tuần trước', amount: 200000, status: 'refunded' },
];

const statusIcon = {
  completed: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
  pending: <Clock className="w-4 h-4 text-amber-500" />,
  refunded: <AlertCircle className="w-4 h-4 text-destructive" />,
};
const statusLabel = { completed: 'Đã nhận', pending: 'Chờ xử lý', refunded: 'Hoàn tiền' };
const statusColor = { completed: 'text-emerald-600', pending: 'text-amber-600', refunded: 'text-destructive' };

export default function MentorEarnings() {
  const [period, setPeriod] = useState('month');

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-space">Thu nhập</h1>
        <Button variant="outline" size="sm" className="rounded-full gap-1.5">
          <Download className="w-3.5 h-3.5" />Xuất báo cáo
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Tháng này', value: '6.1M', sub: '+24%', up: true },
          { label: 'Chờ thanh toán', value: '200K', sub: '1 giao dịch', up: null },
          { label: 'Tổng năm 2025', value: '27.3M', sub: '146 buổi', up: true },
          { label: 'Trung bình/buổi', value: '190K', sub: 'VNĐ/giờ', up: null },
        ].map((s, i) => (
          <Card key={i} className="p-4">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-bold font-space mt-1">{s.value}</p>
            <p className={`text-xs mt-1 flex items-center gap-1 ${s.up ? 'text-emerald-600' : 'text-muted-foreground'}`}>
              {s.up && <TrendingUp className="w-3 h-3" />}{s.sub}
            </p>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Biểu đồ thu nhập</h3>
          <div className="flex bg-secondary rounded-lg p-1">
            {['month', 'quarter', 'year'].map(p => (
              <button key={p} onClick={() => setPeriod(p)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${period === p ? 'bg-card shadow-sm' : 'text-muted-foreground'}`}>
                {p === 'month' ? 'Tháng' : p === 'quarter' ? 'Quý' : 'Năm'}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={monthlyData} barSize={24}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v / 1000000).toFixed(1)}M`} />
            <Tooltip formatter={v => [`${(v / 1000000).toFixed(2)}M VNĐ`, 'Thu nhập']} />
            <Bar dataKey="earnings" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Withdrawal */}
      <Card className="p-5 border-2 border-primary/20 bg-primary/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary" />Rút tiền về tài khoản</h3>
            <p className="text-sm text-muted-foreground mt-1">Số dư khả dụng: <span className="font-bold text-foreground">5.9M VNĐ</span></p>
          </div>
          <Button className="rounded-full gap-2">
            <ArrowUpRight className="w-4 h-4" />Rút ngay
          </Button>
        </div>
      </Card>

      {/* Transactions */}
      <Card className="p-5">
        <h3 className="font-semibold mb-4">Lịch sử giao dịch</h3>
        <div className="space-y-3">
          {transactions.map((tx, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl border hover:bg-secondary/30 transition-colors">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                {statusIcon[tx.status]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{tx.student}</p>
                <p className="text-xs text-muted-foreground">{tx.session} • {tx.date}</p>
              </div>
              <div className="text-right shrink-0">
                <p className={`font-bold text-sm ${tx.status === 'refunded' ? 'text-destructive' : 'text-foreground'}`}>
                  {tx.status === 'refunded' ? '-' : '+'}{(tx.amount / 1000).toFixed(0)}K
                </p>
                <p className={`text-xs ${statusColor[tx.status]}`}>{statusLabel[tx.status]}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}