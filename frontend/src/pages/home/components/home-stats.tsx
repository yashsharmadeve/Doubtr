import { motion } from "framer-motion";

import { fadeUp } from "@/lib/home-animations";
import { stats } from "@/lib/home-data";

export default function HomeStats() {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="bg-background p-8 md:p-10"
          >
            <p className="text-4xl md:text-5xl font-bold tracking-tight">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
