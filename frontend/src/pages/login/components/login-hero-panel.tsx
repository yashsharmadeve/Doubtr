import { motion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";
import Image from "next/image";

import heroImg from "@/assets/images/hero-teacher.jpg";
import { ease } from "@/lib/login-animations";

export default function LoginHeroPanel() {
  return (
    <section className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-hero text-foreground p-12 xl:p-16">
      <div className="absolute inset-0 opacity-40 grid-bg" />
      <div
        className="absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
        style={{ background: "var(--gradient-accent)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="relative z-10 mt-20"
      >
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Welcome back
        </span>
        <h1 className="mt-6 text-5xl xl:text-6xl font-semibold leading-[1.05]">
          Your next <span className="font-serif italic text-gradient">breakthrough</span> is one login away.
        </h1>
        <p className="mt-6 text-muted-foreground text-lg max-w-md">
          Pick up where you left off — verified tutors, AI study tools, and live sessions, all in one place.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="relative z-10 space-y-4"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm max-w-md shadow-soft">
          <Image src={heroImg} alt="Login Hero" loading="lazy" className="h-12 w-12 rounded-xl object-cover" />
          <div className="flex-1">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 mt-1">&ldquo;Solved my doubt in 4 minutes flat.&rdquo;</p>
            <p className="text-xs text-muted-foreground">— Aanya, JEE Aspirant</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <BadgeCheck className="h-3.5 w-3.5 text-accent" /> 2,500+ verified tutors
          </span>
          <span>10K+ learners</span>
          <span>4.8★ rating</span>
        </div>
      </motion.div>
    </section>
  );
}
