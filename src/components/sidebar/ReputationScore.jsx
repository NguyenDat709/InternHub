import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function ReputationScore({ score = 70 }) {
  const circumference = 2 * Math.PI * 42;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--secondary))" strokeWidth="6" />
          <circle
            cx="50" cy="50" r="42"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold font-space text-primary">{score}%</span>
          <span className="text-[10px] text-muted-foreground font-medium">Uy tín</span>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-2 text-xs text-primary font-medium">
        <TrendingUp className="w-3 h-3" />
        +5% tuần này
      </div>
    </div>
  );
}