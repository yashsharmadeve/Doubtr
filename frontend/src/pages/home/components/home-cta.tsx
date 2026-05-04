import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/pages/home/home-animations";

export default function HomeCta() {
  return (
    <section className="container pb-28">
      <motion.div {...fadeUp} className="relative rounded-[2rem] bg-gradient-primary p-12 md:p-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/40 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Your next <span className="font-serif italic font-normal">&quot;aha!&quot;</span> moment is one tap away.
          </h2>
          <p className="mt-6 text-lg opacity-90">Join 10,000+ students who stopped guessing and started understanding.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full h-12 px-7 bg-background text-foreground hover:bg-background/90">
              Start free <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-7 border-background/40 bg-transparent text-background hover:bg-background/10"
            >
              Talk to us
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
