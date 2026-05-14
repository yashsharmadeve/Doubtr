'use client';
import { useState } from 'react';
import { Search, Star, Clock, Video, MessageSquare, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type SessionType = 'Video' | 'Voice' | 'Chat';
type TabType = 'All' | SessionType;

type Session = {
  id: string;
  teacher: string;
  subject: string;
  topic: string;
  duration: string;
  date: string;
  type: SessionType;
  rating: number;
  cost: string;
  initials: string;
};

const tabs: TabType[] = ['All', 'Video', 'Voice', 'Chat'];
const sessions: Session[] = [
  {
    id: 's1',
    teacher: 'Priya Nair',
    subject: 'Mathematics',
    topic: 'Trigonometry – Identities',
    duration: '32 min',
    date: 'May 4, 2026',
    type: 'Video',
    rating: 5,
    cost: '₹192',
    initials: 'PN',
  },
  {
    id: 's2',
    teacher: 'Rahul Verma',
    subject: 'Physics',
    topic: "Newton's Laws of Motion",
    duration: '24 min',
    date: 'May 3, 2026',
    type: 'Voice',
    rating: 5,
    cost: '₹192',
    initials: 'RV',
  },
  {
    id: 's3',
    teacher: 'Sneha Kapoor',
    subject: 'Chemistry',
    topic: 'Redox reactions',
    duration: '18 min',
    date: 'May 2, 2026',
    type: 'Chat',
    rating: 4,
    cost: '₹126',
    initials: 'SK',
  },
  {
    id: 's4',
    teacher: 'Arjun Mehta',
    subject: 'Mathematics',
    topic: 'Quadratic equations',
    duration: '28 min',
    date: 'Apr 30, 2026',
    type: 'Video',
    rating: 5,
    cost: '₹140',
    initials: 'AM',
  },
  {
    id: 's5',
    teacher: 'Kavita Iyer',
    subject: 'Biology',
    topic: 'Cell structure & functions',
    duration: '40 min',
    date: 'Apr 28, 2026',
    type: 'Video',
    rating: 5,
    cost: '₹240',
    initials: 'KI',
  },
];

const typeIcon: Record<SessionType, typeof Video> = { Video, Voice: Phone, Chat: MessageSquare };

function HistoryHeader() {
  return (
    <div>
      <h1 className="text-4xl font-serif">Session history</h1>
      <p className="text-muted-foreground mt-1">All your learning sessions in one place.</p>
    </div>
  );
}

function HistoryStats({
  totalMinutes,
  averageRating,
}: {
  totalMinutes: number;
  averageRating: string;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="p-5 rounded-2xl border-border/70">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">Total sessions</div>
        <div className="font-serif text-3xl mt-2">{sessions.length}</div>
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
        <div className="text-xs text-muted-foreground uppercase tracking-wider">
          Spent this month
        </div>
        <div className="font-serif text-3xl mt-2">₹890</div>
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
  activeTab: TabType;
  onTabChange: (value: TabType) => void;
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <Card className="p-4 rounded-2xl border-border/70">
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => onTabChange(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                activeTab === t
                  ? 'bg-gradient-primary text-primary-foreground border-transparent shadow-soft'
                  : 'border-border hover:bg-muted'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="relative md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search…"
            className="pl-9 bg-muted/50 border-transparent"
          />
        </div>
      </div>
    </Card>
  );
}

function SessionRow({ session }: { session: Session }) {
  const Icon = typeIcon[session.type];

  return (
    <div className="p-5 flex flex-col md:flex-row md:items-center gap-4 hover:bg-muted/30 transition-colors">
      <div className="h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold shrink-0">
        {session.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-medium">{session.teacher}</h3>
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
            {Array.from({ length: session.rating }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-accent text-accent" />
            ))}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="font-semibold">{session.cost}</div>
        </div>
        <Button variant="outline" size="sm" className="rounded-lg">
          View
        </Button>
      </div>
    </div>
  );
}

function SessionList({ sessions: items }: { sessions: Session[] }) {
  return (
    <Card className="rounded-2xl border-border/70 overflow-hidden">
      <div className="divide-y divide-border/70">
        {items.map((session) => (
          <SessionRow key={session.id} session={session} />
        ))}
      </div>
    </Card>
  );
}

export default function HistoryClient() {
  const [tab, setTab] = useState<TabType>('All');
  const [q, setQ] = useState('');

  const filtered = sessions.filter(
    (s) =>
      (tab === 'All' || s.type === tab) &&
      (q === '' ||
        s.teacher.toLowerCase().includes(q.toLowerCase()) ||
        s.topic.toLowerCase().includes(q.toLowerCase())),
  );

  const totalMin = sessions.reduce((a, s) => a + parseInt(s.duration, 10), 0);
  const averageRating = sessions.length
    ? (sessions.reduce((a, s) => a + s.rating, 0) / sessions.length).toFixed(1)
    : '0.0';

  return (
    <div className="px-6 lg:px-10 py-8 max-w-7xl mx-auto space-y-6">
      <HistoryHeader />
      <HistoryStats totalMinutes={totalMin} averageRating={averageRating} />
      <HistoryFilters activeTab={tab} onTabChange={setTab} query={q} onQueryChange={setQ} />
      <SessionList sessions={filtered} />
    </div>
  );
}
