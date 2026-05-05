'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Sparkles, TrendingUp, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { recent, stats, subjects, upcoming } from "@/pages/student/dashboard/dashboard-data";

export default function DashboardPageClient() {
  return (
    <div className="px-6 lg:px-10 py-8 max-w-7xl mx-auto space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl bg-hero border border-border p-8 lg:p-10"
      >
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/60 backdrop-blur text-xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="font-medium">Welcome back</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif tracking-tight">
              Hello, <span className="text-gradient">Aarav</span> -- ready to learn?
            </h1>
            <p className="text-muted-foreground text-base max-w-xl">
              You&#39;re on a 7-day streak. A teacher is online for your trigonometry doubts right now.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elegant rounded-xl">
              <Link href="/student/find-teacher">
                Ask a doubt <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-border bg-background/60 backdrop-blur">
              <Link href="/student/session/active">
                <Video className="mr-1.5 h-4 w-4" /> Join session
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="p-5 border-border/70 hover:shadow-soft transition-shadow rounded-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  <div className="font-serif text-3xl mt-2">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> {stat.trend}
                  </div>
                </div>
                <div
                  className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                    stat.tone === "primary" ? "bg-gradient-primary" : "bg-gradient-accent"
                  }`}
                >
                  <stat.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 rounded-2xl border-border/70">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-semibold">Upcoming sessions</h2>
              <p className="text-sm text-muted-foreground">Your scheduled live classes</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/student/history">View all</Link>
            </Button>
          </div>
          <div className="space-y-3">
            {upcoming.map((session) => (
              <div
                key={session.teacher}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/70 hover:bg-muted/40 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {session.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{session.teacher}</div>
                  <div className="text-sm text-muted-foreground truncate">
                    {session.subject} · {session.topic}
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="text-xs text-muted-foreground">{session.time}</div>
                  <Button asChild size="sm" className="mt-2 bg-gradient-primary text-primary-foreground rounded-lg">
                    <Link href="/student/session/upcoming">Join</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 rounded-2xl border-border/70">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold">Subject progress</h2>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-5">
            {subjects.map((subject) => (
              <div key={subject.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{subject.name}</span>
                  <span className="text-muted-foreground">{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card className="p-6 rounded-2xl border-border/70">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-semibold">Recent doubts</h2>
            <p className="text-sm text-muted-foreground">Your latest questions</p>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/student/history">View history</Link>
          </Button>
        </div>
        <div className="divide-y divide-border/70">
          {recent.map((item, index) => (
            <div key={`${item.subject}-${index}`} className="py-3 flex items-center gap-4">
              <span className="text-[11px] uppercase tracking-wider px-2 py-1 rounded-md bg-muted text-muted-foreground">
                {item.subject}
              </span>
              <p className="flex-1 text-sm truncate">{item.question}</p>
              <span className="text-xs text-muted-foreground hidden sm:block">{item.time}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
