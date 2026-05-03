'use client';

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Brain,
  Clock,
  GraduationCap,
  MessageSquare,
  Play,
  Sparkles,
  Star,
  Target,
  Users,
  Video,
  Zap,
} from "lucide-react";
import Image from "next/image";

import heroImg from "@/assets/images/hero-teacher.jpg";
import { Button } from "@/components/ui/button";

export default function HomePageClient() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };

  const stats = [
    { value: "10K+", label: "Active learners" },
    { value: "2,500+", label: "Verified tutors" },
    { value: "50+", label: "Subjects covered" },
    { value: "4.8★", label: "Average rating" },
  ];

  const steps = [
    { icon: MessageSquare, title: "Post your doubt", desc: "Snap a photo or type it out — any subject, any level." },
    { icon: Users, title: "Match with a tutor", desc: "Our system pairs you with the right expert in seconds." },
    { icon: Sparkles, title: "Get the breakthrough", desc: "Solve, understand, and level up — in real time." },
  ];

  const features = [
    { icon: Zap, title: "Instant matching", desc: "Connect with a verified tutor in under 60 seconds." },
    { icon: Video, title: "Live sessions", desc: "Whiteboard, video, and chat — built for deep learning." },
    { icon: Brain, title: "AI study buddy", desc: "24/7 hints, summaries, and practice questions." },
    { icon: BadgeCheck, title: "Verified teachers", desc: "Every tutor passes a 5-stage qualification process." },
    { icon: BookOpen, title: "Multiple modes", desc: "Quick chat, deep dives, exam prep — your call." },
    { icon: Target, title: "Affordable pricing", desc: "Pay per session or subscribe — no hidden fees." },
  ];

  const testimonials = [
    {
      name: "Aanya Sharma",
      role: "Class 12 · JEE Aspirant",
      quote: "I was stuck on calculus for weeks. One 20-minute session here and it clicked. The tutor was patient and brilliant.",
      rating: 5,
    },
    {
      name: "Mihir Kapoor",
      role: "Engineering Student",
      quote: "Doubtr saved me before my finals. The whiteboard tool feels like sitting next to my professor. Highly recommend.",
      rating: 5,
    },
    {
      name: "Sara Ahmed",
      role: "Class 10",
      quote: "I love that I can ask anything without feeling judged. My grades jumped from a B to an A in one term.",
      rating: 5,
    },
  ];

  const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "Economics", "Computer Science", "English", "History"];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <nav className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground">
              <GraduationCap className="w-4 h-4" />
            </span>
            <span>Doubtr</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#tutors" className="hover:text-foreground transition">For Tutors</a>
            <a href="#stories" className="hover:text-foreground transition">Stories</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
            <Button size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              Get started <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative bg-hero">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-soft">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Live tutors online · 1,284 right now
              </span>
              <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                Doubts, <span className="font-serif italic font-normal text-gradient">cleared.</span>
                <br />
                Confidence, <span className="font-serif italic font-normal">built.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                The fastest way to learn anything that's stuck in your head.
                Verified tutors, live sessions, and an AI co-pilot — all in one place.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" className="rounded-full h-12 px-7 bg-foreground text-background hover:bg-foreground/90 group">
                  Ask your first doubt
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-7 bg-card/80 backdrop-blur">
                  <Play className="w-4 h-4 mr-2 fill-current" /> Watch demo
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gradient-primary" style={{ filter: `hue-rotate(${i * 40}deg)` }} />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />)}
                  </div>
                  <p>Loved by <strong className="text-foreground">10,000+</strong> students</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
                <Image src={heroImg} alt="Verified teacher mentoring students" width={1280} height={1280} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-6 top-12 bg-card border border-border rounded-2xl p-4 shadow-soft w-56"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Clock className="w-3.5 h-3.5" /> Avg. response
                </div>
                <p className="text-2xl font-bold">42<span className="text-base text-muted-foreground"> sec</span></p>
                <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-primary" />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -right-4 bottom-10 bg-card border border-border rounded-2xl p-4 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-accent grid place-items-center text-accent-foreground">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Doubt solved</p>
                    <p className="text-xs text-muted-foreground">Calculus · 5 min ago</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* SUBJECTS MARQUEE */}
        <div className="relative border-y border-border/60 bg-card/40 backdrop-blur overflow-hidden py-5">
          <div className="flex marquee whitespace-nowrap gap-12 text-2xl md:text-3xl font-serif italic text-muted-foreground">
            {[...subjects, ...subjects, ...subjects].map((s, i) => (
              <span key={i} className="flex items-center gap-12">
                {s} <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10">
              <p className="text-4xl md:text-5xl font-bold tracking-tight">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="container py-24">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">How it works</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Three steps to <span className="font-serif italic font-normal">clarity.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl border border-border bg-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
              <span className="absolute top-6 right-6 text-6xl font-serif text-muted/60">0{i + 1}</span>
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-gradient-dark text-background py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container relative">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest opacity-70">Why Doubtr</p>
              <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
                Built for the way <br />
                <span className="font-serif italic font-normal opacity-90">you actually learn.</span>
              </h2>
            </div>
            <Button variant="outline" className="rounded-full border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground">
              Explore all features <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-3xl overflow-hidden border border-background/10">
            {features.map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="bg-gradient-dark p-8 hover:bg-background/5 transition group">
                <div className="w-12 h-12 rounded-xl bg-background/10 grid place-items-center group-hover:bg-gradient-primary transition">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm opacity-70 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EARN AS TUTOR */}
      <section id="tutors" className="container py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">For tutors</p>
            <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
              Teach what you love. <br />
              <span className="font-serif italic font-normal text-gradient">Earn what you deserve.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Set your hours. Set your rate. We handle scheduling, payments, and matching — so you can focus on what you do best.
            </p>
            <div className="mt-8 space-y-3">
              {["Flexible hours, work from anywhere", "Weekly payouts, zero hassle", "Build your own student base", "Free training & teaching tools"].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-gradient-primary grid place-items-center">
                    <BadgeCheck className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-8 rounded-full h-12 px-7 bg-gradient-accent text-accent-foreground hover:opacity-90">
              Become a tutor <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Potential monthly earnings</p>
                  <p className="text-4xl font-bold mt-1">₹84,500<span className="text-base text-muted-foreground font-normal">/mo</span></p>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/15 text-accent-foreground text-xs font-semibold border border-accent/30">
                  Top 10% tutors
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Beginner", value: 30, amount: "₹15K" },
                  { label: "Intermediate", value: 55, amount: "₹38K" },
                  { label: "Advanced", value: 80, amount: "₹62K" },
                  { label: "Expert", value: 100, amount: "₹84K+" },
                ].map((tier, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{tier.label}</span>
                      <span className="text-muted-foreground">{tier.amount}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tier.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                        className="h-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="bg-foreground text-background rounded-2xl p-5 shadow-elegant w-48">
                <Sparkles className="w-5 h-5 text-accent" />
                <p className="mt-2 text-sm font-semibold">2,500+ tutors are already earning with us</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="stories" className="container pb-28">
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Stories</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Real students. <span className="font-serif italic font-normal">Real wins.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className={`p-8 rounded-3xl border border-border ${i === 1 ? "bg-foreground text-background" : "bg-card"}`}>
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-current/10">
                <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className={`text-xs ${i === 1 ? "opacity-70" : "text-muted-foreground"}`}>{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-28">
        <motion.div {...fadeUp} className="relative rounded-[2rem] bg-gradient-primary p-12 md:p-20 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Your next <span className="font-serif italic font-normal">"aha!"</span> moment is one tap away.
            </h2>
            <p className="mt-6 text-lg opacity-90">
              Join 10,000+ students who stopped guessing and started understanding.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full h-12 px-7 bg-background text-foreground hover:bg-background/90">
                Start free <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7 border-background/40 bg-transparent text-background hover:bg-background/10">
                Talk to us
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="container py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <a href="#" className="flex items-center gap-2 font-bold text-base">
              <span className="w-7 h-7 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground">
                <GraduationCap className="w-4 h-4" />
              </span>
              Doubtr
            </a>
            <p className="mt-4 text-muted-foreground max-w-xs">Where curious minds meet exceptional teachers.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Tutors", "AI Buddy"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
            { title: "Support", links: ["Help center", "Contact", "Privacy", "Terms"] },
          ].map((col, i) => (
            <div key={i}>
              <p className="font-semibold mb-3">{col.title}</p>
              <ul className="space-y-2 text-muted-foreground">
                {col.links.map(l => <li key={l}><a href="#" className="hover:text-foreground transition">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border">
          <div className="container py-6 flex flex-wrap justify-between items-center gap-3 text-xs text-muted-foreground">
            <p>© 2026 Doubtr. All rights reserved.</p>
            <p>Made with <span className="text-accent">✦</span> for curious learners.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
