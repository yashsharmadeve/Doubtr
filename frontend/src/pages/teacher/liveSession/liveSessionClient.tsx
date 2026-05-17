'use client';

import LiveSessionChatPanel, {
  type LiveSessionMessage,
} from '@/components/shared/live-session/live-session-chat-panel';
import LiveSessionVideoPanel from '@/components/shared/live-session/live-session-video-panel';
import { Badge } from 'lucide-react';

const initialMessages: LiveSessionMessage[] = [
  { from: 'teacher', text: 'Hi Aarav! What topic are we tackling today?', time: '5:30 PM' },
  { from: 'me', text: "Hello ma'am, I'm stuck on trig identities.", time: '5:31 PM' },
  { from: 'teacher', text: "Great — let's start with sin²θ + cos²θ = 1.", time: '5:31 PM' },
];

const LiveSessionClient = ({ id }: { id: string }) => {
  return (
    <div className="px-6 lg:px-10 py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Live session · {id}</div>
          <h1 className="text-2xl font-serif mt-1">Aarav Sharma · Trigonometric identities</h1>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live · 12:34
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-4">
          <LiveSessionVideoPanel teacherName="Priya Nair" teacherInitials="PN" selfInitials="A" />
        </div>
        <LiveSessionChatPanel
          className="h-[640px]"
          subject="Mathematics"
          initialMessages={initialMessages}
        />
      </div>
    </div>
  );
};

export default LiveSessionClient;
