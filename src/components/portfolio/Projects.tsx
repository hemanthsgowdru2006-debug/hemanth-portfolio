import { motion } from "framer-motion";
import { Github, ExternalLink, Brain, Banknote, BookOpen, Leaf, Map } from "lucide-react";
import SectionHeader from "./SectionHeader";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  github?: string;
  demo?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "AI for Detecting Cognitive Diseases",
    description:
      "Deep-learning pipeline that analyses behavioral & speech signals to detect early indicators of cognitive disorders.",
    tags: ["Python", "TensorFlow", "ML", "Healthcare"],
    icon: Brain,
    github: "#",
    demo: "#",
    gradient: "from-[oklch(0.84_0.16_215)] to-[oklch(0.6_0.24_290)]",
  },
  {
    title: "Loan Management System",
    description:
      "End-to-end web app for loan applications, EMI calculation, approvals and customer dashboards with secure auth.",
    tags: ["Flask", "SQL", "Python", "Bootstrap"],
    icon: Banknote,
    github: "#",
    demo: "#",
    gradient: "from-[oklch(0.6_0.24_290)] to-[oklch(0.88_0.2_165)]",
  },
  {
    title: "Library Management System",
    description:
      "Multi-role library platform with cataloging, issue/return workflows, fine tracking and admin analytics.",
    tags: ["Java", "MySQL", "JDBC"],
    icon: BookOpen,
    github: "#",
    demo: "#",
    gradient: "from-[oklch(0.88_0.2_165)] to-[oklch(0.84_0.16_215)]",
  },
  {
    title: "Crop Disease Detection",
    description:
      "CNN-powered system that identifies crop diseases from leaf images and recommends treatments for farmers.",
    tags: ["PyTorch", "CNN", "Computer Vision"],
    icon: Leaf,
    github: "#",
    demo: "#",
    gradient: "from-[oklch(0.84_0.16_215)] to-[oklch(0.88_0.2_165)]",
  },
  {
    title: "Tourism Recommendation App",
    description:
      "Personalized destination recommender using collaborative filtering and content-based ML algorithms.",
    tags: ["Python", "Flask", "Recommender", "ML"],
    icon: Map,
    github: "#",
    demo: "#",
    gradient: "from-[oklch(0.6_0.24_290)] to-[oklch(0.84_0.16_215)]",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  };
  const Icon = p.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onLeave}
        className="group relative h-full overflow-hidden rounded-3xl glass-strong p-6 transition-[box-shadow,transform] duration-300 hover:glow-primary"
      >
        {/* Visual header */}
        <div className={`relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient}`}>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-16 w-16 text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/80">
            <span>{`> ${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}</span>
            <span className="rounded-md bg-black/30 px-2 py-0.5 backdrop-blur-sm">v1.0</span>
          </div>
        </div>

        <h3 className="font-display text-xl font-bold transition-colors group-hover:text-primary">
          {p.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-white/5 px-2.5 py-1 font-mono text-[11px] text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-1.5 text-sm transition-all hover:bg-white/10"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Projects"
          title={<>Things I've <span className="text-gradient">Built</span></>}
          description="A selection of projects spanning AI/ML, full-stack web and intelligent systems."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
