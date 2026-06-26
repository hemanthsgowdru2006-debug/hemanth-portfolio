import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Trophy, Code, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: GraduationCap, label: "CGPA", value: 8.69, decimals: 2 },
  { icon: Code, label: "Projects", value: 8, suffix: "+" },
  { icon: Award, label: "Certifications", value: 12, suffix: "+" },
  { icon: Trophy, label: "Hackathons", value: 5, suffix: "+" },
];

const timeline = [
  {
    year: "2024 — Present",
    title: "B.E. Computer Science (AI & ML)",
    place: "Malnad College of Engineering, Hassan",
    detail: "CGPA: 8.61 · Specializing in Machine Learning, Deep Learning and intelligent systems.",
  },
  {
    year: "2022 — 2024",
    title: "Pre-University (PCMB)",
    place: "Karnataka State Board",
    detail: "Mathematics, Physics, Chemistry, Biology.",
  },
  {
    year: "Until 2022",
    title: "Secondary Schooling",
    place: "CBSE",
    detail: "Foundation years building strong fundamentals in math and logic.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="About Me"
          title={<>The Engineer Behind <span className="text-gradient">The Code</span></>}
          description="I turn curiosity into intelligent systems — bridging AI research and clean, shippable software."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-6 transition-all hover:-translate-y-1 hover:glow-primary"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
              <s.icon className="h-6 w-6 text-primary" />
              <div className="mt-4 font-display text-4xl font-black text-gradient">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold">Education Journey</h3>
            <p className="mt-3 text-muted-foreground">
              A timeline of how I got here — fueled by curiosity for AI, software craftsmanship,
              and solving problems that matter.
            </p>
          </motion.div>

          <ol className="relative space-y-8 border-l border-border pl-8">
            {timeline.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[37px] grid h-4 w-4 place-items-center rounded-full bg-gradient-primary glow-primary">
                  <span className="h-2 w-2 rounded-full bg-background" />
                </span>
                <div className="rounded-2xl glass p-5 transition-all hover:bg-white/[0.06]">
                  <span className="font-mono text-xs text-primary">{t.year}</span>
                  <h4 className="mt-1 font-display text-lg font-bold">{t.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.place}</p>
                  <p className="mt-2 text-sm text-foreground/80">{t.detail}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
