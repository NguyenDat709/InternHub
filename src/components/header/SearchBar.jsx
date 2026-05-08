import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const suggestions = [
  'FPT Software Flutter',
  'VNG Backend Developer',
  'Momo UI/UX Design',
  'Shopee Data Analyst',
  'Tiki React Native',
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const filtered = suggestions.filter(s =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative flex-1 max-w-xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Tìm kỹ năng, vị trí, doanh nghiệp..."
          className="pl-10 pr-10 h-10 bg-secondary/50 border-transparent focus:border-primary/30 focus:bg-card rounded-full text-sm"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {focused && query && (
        <div className="absolute top-full mt-2 w-full bg-card rounded-lg shadow-xl border p-2 z-50">
          {filtered.map((s, i) => (
            <button
              key={i}
              className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors flex items-center gap-2"
              onClick={() => setQuery(s)}
            >
              <Search className="w-3.5 h-3.5 text-muted-foreground" />
              {s}
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="px-3 py-2 text-sm text-muted-foreground">Không tìm thấy kết quả</p>
          )}
        </div>
      )}
    </div>
  );
}