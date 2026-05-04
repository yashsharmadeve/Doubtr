import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/home-animations";

const benefits = [
  "Flexible hours, work from anywhere",
  "Weekly payouts, zero hassle",
  "Build your own student base",
  "Free training & teaching tools",
];

const tiers = [
  { label: "Beginner", value: 30, amount: "₹15K" },
  { label: "Intermediate", value: 55, amount: "₹38K" },
  { label: "Advanced", value: 80, amount: "₹62K" },
  { label: "Expert", value: 100, amount: "₹84K+" },
];

export default function HomeTutorCta() {
  return (
    <section id="tutors" className="container py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">For tutors</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Teach what you love. <br />
            <span className="font-serif italic font-normal text-gradient">Earn what you deserve.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Set your hours. Set your rate. We handle scheduling, payments, and matching — so you can focus on what you
            do best.
          </p>
          <div className="mt-8 space-y-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-gradient-primary grid place-items-center">
                  <BadgeCheck className="w-3 h-3 text-primary-foreground" />
                </span>
                <span className="text-sm">{benefit}</span>
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
                <p className="text-4xl font-bold mt-1">
                  ₹84,500<span className="text-base text-muted-foreground font-normal">/mo</span>
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-accent/15 text-accent-foreground text-xs font-semibold border border-accent/30">
                Top 10% tutors
              </span>
            </div>
            <div className="space-y-4">
              {tiers.map((tier, i) => (
                <div key={tier.label}>
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
  );
}
