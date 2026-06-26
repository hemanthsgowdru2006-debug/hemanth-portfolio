import { motion } from "framer-motion";
import { Briefcase, Award, Rocket, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: Award,
    tag: "2026",
    title: "Google Student Ambassador Program",
    org: "Team Gemini",
    status: "Shortlisted",
    detail:
      "Selected among top student candidates to represent and engage developer communities on Google's emerging technologies.",
  },
  {
    icon: Briefcase,
    tag: "Internship",
    title: "AIML Intern",
    org: "ZoomInData",
    status: "Selected",
    detail:
      "To built AIML models, performed feature engineering and contributed to end-to-end model deployment pipelines.",
  },
  {
    icon: Briefcase,
    tag: "Internship",
    title: "Machine Learning Intern",
    org: "Saiket Systems",
    status: "Completed",
    detail:
      "Built ML models, performed feature engineering and contributed to end-to-end model deployment pipelines.",
  },
  {
    icon: Rocket,
    tag: "Hackathons",
    title: "Hackathon Participation",
    org: "Multiple events",
    status: "5+ events",
    detail:
      "Built rapid prototypes spanning AI, web and IoT — shipping working demos under tight 24–48hr constraints.",
  },
  {
    icon: GraduationCap,
    tag: "Academic",
    title: "Academic Achievements",
    org: "Malnad College of Engineering",
    status: "CGPA 8.69",
    detail:
      "Consistent top-tier academic performance with strong specialization in AI, ML and software systems.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="Experience"
          title={<>Milestones & <span className="text-gradient">Achievements</span></>}
        />

        <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-primary before:via-secondary before:to-accent md:before:left-1/2">
          {items.map((it, i) => {
            const Icon = it.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`pl-12 md:pl-0 ${left ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <div className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary`}>
                    {it.tag}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.org} · <span className="text-accent">{it.status}</span></p>
                  <p className={`mt-3 text-sm text-foreground/80 ${left ? "md:ml-auto" : ""} md:max-w-sm`}>
                    {it.detail}
                  </p>
                </div>
                <div className="hidden md:block" />

                <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-primary glow-primary md:left-1/2 md:-translate-x-1/2">
                  <Icon size={14} className="text-primary-foreground" />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
