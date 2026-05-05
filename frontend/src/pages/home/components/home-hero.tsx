import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Clock, Play, Star } from 'lucide-react';
import Image from 'next/image';

import heroImg from '@/assets/images/hero-teacher.jpg';
import { Button } from '@/components/ui/button';
import { subjects } from '@/lib/home-data';

export default function HomeHero() {
  return (
    <section className="relative bg-hero">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container relative pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
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
              The fastest way to learn anything that&apos;s stuck in your head. Verified tutors,
              live sessions, and an AI co-pilot — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="rounded-full h-12 px-7 bg-foreground text-background hover:bg-foreground/90 group"
              >
                Ask your first doubt
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-7 bg-card/80 backdrop-blur"
              >
                <Play className="w-4 h-4 mr-2 fill-current" /> Watch demo
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-gradient-primary"
                    style={{ filter: `hue-rotate(${i * 40}deg)` }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p>
                  Loved by <strong className="text-foreground">10,000+</strong> students
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
              <Image
                src={heroImg}
                alt="Verified teacher mentoring students"
                width={1280}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
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
              <p className="text-2xl font-bold">
                42<span className="text-base text-muted-foreground"> sec</span>
              </p>
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
  );
}
