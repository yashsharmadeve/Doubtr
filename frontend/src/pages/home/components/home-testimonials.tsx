import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { fadeUp } from "@/lib/home-animations";
import { testimonials } from "@/lib/home-data";

export default function HomeTestimonials() {
  return (
    <section id="stories" className="container pb-28">
      <motion.div {...fadeUp} className="max-w-2xl mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">Stories</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
          Real students. <span className="font-serif italic font-normal">Real wins.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            className={`p-8 rounded-3xl border border-border ${i === 1 ? "bg-foreground text-background" : "bg-card"}`}
          >
            <div className="flex gap-0.5">
              {[...Array(t.rating)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="mt-5 text-lg leading-relaxed">&quot;{t.quote}&quot;</blockquote>
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
  );
}
