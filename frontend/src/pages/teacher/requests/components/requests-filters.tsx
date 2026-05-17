'use client';

import { Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { requestTabs, type RequestType } from '@/lib/teacher-requests-data';

type RequestsFiltersProps = {
  activeTab: RequestType;
  onTabChange: (value: RequestType) => void;
  query: string;
  onQueryChange: (value: string) => void;
};

const RequestsFilters = ({
  activeTab,
  onTabChange,
  query,
  onQueryChange,
}: RequestsFiltersProps) => {
  return (
    <Card className="p-4 rounded-2xl border-border/70">
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {requestTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                activeTab === tab
                  ? 'bg-gradient-primary text-primary-foreground border-transparent shadow-soft'
                  : 'border-border hover:bg-muted'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search…"
            className="pl-9 bg-muted/50 border-transparent"
          />
        </div>
      </div>
    </Card>
  );
}

export default RequestsFilters;
