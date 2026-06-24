import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const certs = [
  { title: "Machine Learning Internship", issuer: "Cognifyz IT Solutions", year: "2026", color: "from-[oklch(0.84_0.16_215)] to-[oklch(0.6_0.24_290)]" },
  { title: "Machine Learning Internship", issuer: "Saiket Systems", year: "2026", color: "from-[oklch(0.6_0.24_290)] to-[oklch(0.88_0.2_165)]" },
  { title: "Google Student Ambassador", issuer: "Team Gemini", year: "2026", color: "from-[oklch(0.88_0.2_165)] to-[oklch(0.84_0.16_215)]" },
  { title: "DSA in C", issuer: "Simplilearn", year: "2025", color: "from-[oklch(0.84_0.16_215)] to-[oklch(0.88_0.2_165)]" },
];

export default function Certifications() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Certifications"
          title={<>Continuous <span className="text-gradient">Learning</span></>}
          description="Click any certificate to view a closer look."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.button
              key={c.title}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-5 text-left transition-all hover:-translate-y-1 hover:glow-primary"
            >
              <div className={`mb-4 grid aspect-[16/10] place-items-center rounded-xl bg-gradient-to-br ${c.color}`}>
                <Award className="h-12 w-12 text-white/90 drop-shadow-lg transition-transform group-hover:scale-110" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{c.year}</span>
              <h3 className="mt-1 font-display text-lg font-bold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl glass-strong p-8"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"
              >
                <X size={16} />
              </button>
              <div className={`grid aspect-[16/9] place-items-center rounded-2xl bg-gradient-to-br ${certs[active].color}`}>
                <Award className="h-24 w-24 text-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]" />
              </div>
              <div className="mt-6">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">{certs[active].year}</span>
                <h3 className="mt-1 font-display text-2xl font-black">{certs[active].title}</h3>
                <p className="mt-1 text-muted-foreground">Issued by {certs[active].issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
