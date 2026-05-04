import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/pages/home/home-animations";
import { features } from "@/pages/home/home-data";

export default function HomeFeatures() {
  return (
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
          <Button
            variant="outline"
            className="rounded-full border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
          >
            Explore all features <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-3xl overflow-hidden border border-background/10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="bg-gradient-dark p-8 hover:bg-background/5 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-background/10 grid place-items-center group-hover:bg-gradient-primary transition">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
