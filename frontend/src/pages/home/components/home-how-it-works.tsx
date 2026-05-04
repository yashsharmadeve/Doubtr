import { motion } from "framer-motion";

import { fadeUp } from "@/lib/home-animations";
import { steps } from "@/lib/home-data";

export default function HomeHowItWorks() {
  return (
    <section id="how" className="container py-24">
      <motion.div {...fadeUp} className="max-w-2xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">How it works</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
          Three steps to <span className="font-serif italic font-normal">clarity.</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            className="group relative p-8 rounded-3xl border border-border bg-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
          >
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
  );
}
