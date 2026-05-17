'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Star, Wallet, Inbox, Video, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const stats = [
  { label: 'Doubts answered', value: '248', icon: Inbox, hint: '+12 this week', tone: 'primary' },
  { label: 'Hours taught', value: '164', icon: Clock, hint: 'This month', tone: 'accent' },
  { label: 'Avg rating', value: '4.9', icon: Star, hint: 'From 187 reviews', tone: 'primary' },
  { label: 'Earnings', value: '₹42,380', icon: Wallet, hint: '+18% vs last month', tone: 'accent' },
];

const requests = [
  {
    id: 'r1',
    student: 'Aarav Sharma',
    subject: 'Mathematics',
    topic: 'Trigonometric identities',
    time: 'Just now',
    type: 'Video',
    initials: 'AS',
  },
  {
    id: 'r2',
    student: 'Meera Iyer',
    subject: 'Physics',
    topic: 'Projectile motion derivation',
    time: '2 min ago',
    type: 'Chat',
    initials: 'MI',
  },
  {
    id: 'r3',
    student: 'Rohan Gupta',
    subject: 'Mathematics',
    topic: 'Limits & continuity',
    time: '5 min ago',
    type: 'Voice',
    initials: 'RG',
  },
];

const upcoming = [
  { time: '4:30 PM', student: 'Ananya Rao', topic: 'Calculus revision', duration: '45 min' },
  { time: '6:00 PM', student: 'Vikram Patel', topic: 'Algebra doubts', duration: '30 min' },
];

export default function DashboardPageClient() {
  return (
    <div className="px-6 lg:px-10 py-8 max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Thursday, May 14
        </div>
        <h1 className="text-4xl md:text-5xl font-serif mt-2">Good afternoon, Priya.</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          You have 3 active doubt requests waiting. Two sessions are scheduled for later today.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-5 rounded-2xl border-border/70 hover:shadow-soft transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="font-serif text-3xl mt-2">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> {stat.hint}
                  </div>
                </div>
                <div
                  className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                    stat.tone === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'
                  }`}
                >
                  <stat.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 rounded-2xl border-border/70">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-semibold">Live doubt requests</h2>
              <p className="text-sm text-muted-foreground">Accept to start a session.</p>
            </div>
            <Button asChild variant="outline" size="sm" className="rounded-lg">
              <Link href="/teacher/requests">
                View all <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
          </div>
          <div className="space-y-3">
            {requests.map((request) => (
              <div
                key={request.id}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/40 transition-colors"
              >
                <div className="h-11 w-11 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold shrink-0">
                  {request.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium">{request.student}</span>
                    <Badge variant="outline" className="text-xs">
                      {request.subject}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {request.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{request.topic}</p>
                  <div className="text-xs text-muted-foreground mt-0.5">{request.time}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    Decline
                  </Button>
                  <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground rounded-lg">
                    <Link href={`/teacher/session/${request.id}`}>
                      <Video className="h-3.5 w-3.5 mr-1" /> Accept
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 rounded-2xl border-border/70">
          <h2 className="text-xl font-semibold">Today&rsquo;s schedule</h2>
          <p className="text-sm text-muted-foreground mb-5">Confirmed bookings.</p>
          <div className="space-y-3">
            {upcoming.map((session) => (
              <div key={session.time} className="p-3 rounded-xl border border-border/70">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {session.time}
                </div>
                <div className="font-medium mt-1">{session.student}</div>
                <div className="text-sm text-muted-foreground">{session.topic}</div>
                <div className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {session.duration}
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 rounded-lg">
            Manage availability
          </Button>
        </Card>
      </div>
    </div>
  );
}