import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ArrowLeft, Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Hemanth S Gowda | AI/ML Engineer" },
      {
        name: "description",
        content:
          "Resume of Hemanth S Gowda — BE CSE (AI & ML) student at Malnad College of Engineering. Education, skills, experience and certifications.",
      },
      { property: "og:title", content: "Resume — Hemanth S Gowda" },
      {
        property: "og:description",
        content: "AI/ML Engineer · Full CV with education, skills, experience and certifications.",
      },
    ],
  }),
  component: ResumePage,
});

const education = [
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

const experience = [
  {
    tag: "2026",
    title: "Google Student Ambassador Program",
    org: "Team Gemini",
    status: "Shortlisted",
    detail:
      "Selected among top student candidates to represent and engage developer communities on Google's emerging technologies.",
  },
  {
    tag: "Internship",
    title: "Machine Learning Intern",
    org: "Saiket Systems",
    status: "Completed",
    detail:
      "Built ML models, performed feature engineering and contributed to end-to-end model deployment pipelines.",
  },
  {
    tag: "Hackathons",
    title: "Hackathon Participation",
    org: "Multiple events · 5+",
    status: "Active",
    detail:
      "Built rapid prototypes spanning AI, web and IoT — shipping working demos under tight 24–48hr constraints.",
  },
  {
    tag: "Academic",
    title: "Academic Achievements",
    org: "Malnad College of Engineering",
    status: "CGPA 8.61",
    detail:
      "Consistent top-tier academic performance with strong specialization in AI, ML and software systems.",
  },
];

const skillGroups: Record<string, string[]> = {
  Languages: ["Python", "Java", "C", "JavaScript"],
  Frontend: ["HTML", "CSS", "React"],
  Backend: ["Flask"],
  "AI / ML": ["Machine Learning", "Deep Learning", "Feature Engineering"],
  Database: ["SQL"],
  Tools: ["Git", "GitHub", "VS Code"],
};

const certifications = [
  { title: "Machine Learning Internship", issuer: "Cognifyz IT Solutions", year: "2026" },
  { title: "Machine Learning Internship", issuer: "Cognifyz IT Solutions", year: "2026" },
  { title: "Google Student Ambassador", issuer: "Team Gemini", year: "2026" },
  { title: "DSA in C", issuer: "Simplilearn", year: "2025" },
];

function ResumePage() {
  const handleDownload = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Top toolbar (hidden in print) */}
      <div className="print:hidden sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Download size={16} /> Download PDF
          </button>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-5 py-12 print:py-0 print:px-0">
        {/* Header */}
        <header className="border-b border-border pb-8">
          <h1 className="font-display text-4xl font-black tracking-tight md:text-5xl">
            Hemanth S Gowda
          </h1>
          <p className="mt-2 text-lg text-primary">
            AI/ML Engineer · Software & Web Developer
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Mail size={14} className="text-primary" /> hemanthsgowdru2006@gmail.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" /> Hassan, Karnataka, India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={14} className="text-primary" /> Open to internships
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Linkedin size={14} className="text-primary" /> LinkedIn
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Github size={14} className="text-primary" /> GitHub
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe size={14} className="text-primary" /> Portfolio
            </span>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-foreground/85">
            Computer Science undergraduate specializing in Artificial Intelligence and Machine
            Learning at Malnad College of Engineering (CGPA 8.61). Passionate about building
            intelligent systems and shipping clean, production-ready software — from ML pipelines
            to polished web experiences.
          </p>
        </Section>

        {/* Education */}
        <Section title="Education">
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold">{e.title}</h3>
                  <span className="font-mono text-xs text-primary">{e.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{e.place}</p>
                <p className="mt-1 text-sm text-foreground/80">{e.detail}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skillGroups).map(([cat, items]) => (
              <div key={cat}>
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-primary">
                  {cat}
                </h4>
                <p className="mt-1 text-sm text-foreground/85">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experience & Achievements">
          <ul className="space-y-5">
            {experience.map((x) => (
              <li key={x.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold">{x.title}</h3>
                  <span className="font-mono text-xs text-primary">{x.tag}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {x.org} · <span className="text-accent">{x.status}</span>
                </p>
                <p className="mt-1 text-sm text-foreground/80">{x.detail}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <ul className="grid gap-3 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <li
                key={`${c.title}-${i}`}
                className="rounded-xl border border-border p-4"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-display text-sm font-bold">{c.title}</h4>
                  <span className="font-mono text-[11px] text-primary">{c.year}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground print:mt-8">
          © {new Date().getFullYear()} Hemanth S Gowda · Generated from portfolio
        </footer>
      </article>

      <style>{`
        @media print {
          @page { margin: 14mm; }
          body { background: white !important; }
        }
      `}</style>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 print:break-inside-avoid">
      <h2 className="mb-4 font-display text-xl font-black uppercase tracking-wide text-gradient">
        {title}
      </h2>
      {children}
    </section>
  );
}
