import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { name: "Python", level: 92, category: "Language" },
  { name: "Java", level: 80, category: "Language" },
  { name: "C Programming", level: 78, category: "Language" },
  { name: "JavaScript", level: 82, category: "Language" },
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 86, category: "Frontend" },
  { name: "Flask", level: 84, category: "Backend" },
  { name: "Machine Learning", level: 88, category: "AI/ML" },
  { name: "SQL", level: 80, category: "Database" },
  { name: "Git & GitHub", level: 88, category: "Tools" },
];

const categoryColor: Record<string, string> = {
  Language: "from-[oklch(0.84_0.16_215)] to-[oklch(0.6_0.24_290)]",
  Frontend: "from-[oklch(0.88_0.2_165)] to-[oklch(0.84_0.16_215)]",
  Backend: "from-[oklch(0.6_0.24_290)] to-[oklch(0.88_0.2_165)]",
  "AI/ML": "from-[oklch(0.84_0.16_215)] to-[oklch(0.88_0.2_165)]",
  Database: "from-[oklch(0.6_0.24_290)] to-[oklch(0.84_0.16_215)]",
  Tools: "from-[oklch(0.88_0.2_165)] to-[oklch(0.6_0.24_290)]",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Skills"
          title={<>The <span className="text-gradient">Tech Stack</span> I Wield</>}
          description="Tools, languages and frameworks I use to ship intelligent products."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-5 transition-all hover:-translate-y-1 hover:scale-[1.02] hover:glow-primary"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="truncate font-display text-lg font-bold">{s.name}</h4>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.category}
                  </span>
                </div>
                <span className="shrink-0 rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-primary">
                  {s.level}%
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${categoryColor[s.category]} shadow-[0_0_12px_var(--primary)]`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
