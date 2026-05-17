'use client';

import { useState } from 'react';
import { Clock, Search, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  historyTabs,
  historyTypeIcon,
  type HistorySession,
  type HistoryTab,
} from '@/lib/history-data';

type SessionHistoryPageProps = {
  title: string;
  description: string;
  sessions: HistorySession[];
  monthlyLabel: string;
  monthlyValue: string;
};

function HistoryHeader({
  title,
  description,
}: Pick<SessionHistoryPageProps, 'title' | 'description'>) {
  return (
    <div>
      <h1 className="text-4xl font-serif">{title}</h1>
      <p className="text-muted-foreground mt-1">{description}</p>
    </div>
  );
}

function HistoryStats({
  totalSessions,
  totalMinutes,
  averageRating,
  monthlyLabel,
  monthlyValue,
}: {
  totalSessions: number;
  totalMinutes: number;
  averageRating: string;
  monthlyLabel: string;
  monthlyValue: string;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="p-5 rounded-2xl border-border/70">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">Total sessions</div>
        <div className="font-serif text-3xl mt-2">{totalSessions}</div>
      </Card>
      <Card className="p-5 rounded-2xl border-border/70">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">Total minutes</div>
        <div className="font-serif text-3xl mt-2">{totalMinutes}</div>
      </Card>
      <Card className="p-5 rounded-2xl border-border/70">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">Avg rating</div>
        <div className="font-serif text-3xl mt-2 flex items-center gap-1">
          {averageRating} <Star className="h-5 w-5 fill-accent text-accent" />
        </div>
      </Card>
      <Card className="p-5 rounded-2xl border-border/70">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{monthlyLabel}</div>
        <div className="font-serif text-3xl mt-2">{monthlyValue}</div>
      </Card>
    </div>
  );
}

function HistoryFilters({
  activeTab,
  onTabChange,
  query,
  onQueryChange,
}: {
  activeTab: HistoryTab;
  onTabChange: (value: HistoryTab) => void;
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <Card className="p-4 rounded-2xl border-border/70">
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {historyTabs.map((tab) => (
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

function SessionRow({ session }: { session: HistorySession }) {
  const Icon = historyTypeIcon[session.type];

  return (
    <div className="p-5 flex flex-col md:flex-row md:items-center gap-4 hover:bg-muted/30 transition-colors">
      <div className="h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold shrink-0">
        {session.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-medium">{session.person}</h3>
          <Badge variant="secondary" className="text-xs">
            <Icon className="h-3 w-3 mr-1" />
            {session.type}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {session.subject}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-0.5 truncate">{session.topic}</p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1.5">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {session.duration}
          </span>
          <span>·</span>
          <span>{session.date}</span>
          <span>·</span>
          <span className="flex items-center gap-0.5">
            {Array.from({ length: session.rating }).map((_, index) => (
              <Star key={index} className="h-3 w-3 fill-accent text-accent" />
            ))}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="font-semibold">{session.amount}</div>
        </div>
        <Button variant="outline" size="sm" className="rounded-lg">
          View
        </Button>
      </div>
    </div>
  );
}

function SessionList({ sessions }: { sessions: HistorySession[] }) {
  return (
    <Card className="rounded-2xl border-border/70 overflow-hidden">
      <div className="divide-y divide-border/70">
        {sessions.map((session) => (
          <SessionRow key={session.id} session={session} />
        ))}
      </div>
    </Card>
  );
}

export default function SessionHistoryPage({
  title,
  description,
  sessions,
  monthlyLabel,
  monthlyValue,
}: SessionHistoryPageProps) {
  const [tab, setTab] = useState<HistoryTab>('All');
  const [query, setQuery] = useState('');

  const filteredSessions = sessions.filter(
    (session) =>
      (tab === 'All' || session.type === tab) &&
      (query === '' ||
        session.person.toLowerCase().includes(query.toLowerCase()) ||
        session.topic.toLowerCase().includes(query.toLowerCase())),
  );

  const totalMinutes = sessions.reduce(
    (total, session) => total + parseInt(session.duration, 10),
    0,
  );
  const averageRating = sessions.length
    ? (sessions.reduce((total, session) => total + session.rating, 0) / sessions.length).toFixed(1)
    : '0.0';

  return (
    <div className="px-6 lg:px-10 py-8 max-w-7xl mx-auto space-y-6">
      <HistoryHeader title={title} description={description} />
      <HistoryStats
        totalSessions={sessions.length}
        totalMinutes={totalMinutes}
        averageRating={averageRating}
        monthlyLabel={monthlyLabel}
        monthlyValue={monthlyValue}
      />
      <HistoryFilters activeTab={tab} onTabChange={setTab} query={query} onQueryChange={setQuery} />
      <SessionList sessions={filteredSessions} />
    </div>
  );
}
