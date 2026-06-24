import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Sparkles, Cpu, Code2, Brain } from "lucide-react";
import NeuralBackground from "./NeuralBackground";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "AI/ML Enthusiast",
  "Software Developer",
  "Web Developer",
  "Problem Solver",
];

function useTypewriter() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const current = roles[idx];
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        i++;
        setText(current.slice(0, i));
        if (i === current.length) {
          timer = setTimeout(() => {
            deleting = true;
            tick();
          }, 1500);
          return;
        }
        timer = setTimeout(tick, 80);
      } else {
        i--;
        setText(current.slice(0, i));
        if (i === 0) {
          setIdx((p) => (p + 1) % roles.length);
          return;
        }
        timer = setTimeout(tick, 40);
      }
    };
    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [idx]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-hero pt-24"
    >
      <NeuralBackground />
      <div className="absolute inset-0 -z-20 grid-bg" />

      {/* Floating icons */}
      <Sparkles className="absolute left-[8%] top-[20%] h-6 w-6 text-primary/60 float" />
      <Cpu className="absolute right-[10%] top-[28%] h-7 w-7 text-secondary/70 float" style={{ animationDelay: "1.2s" }} />
      <Code2 className="absolute left-[12%] bottom-[20%] h-6 w-6 text-accent/60 float" style={{ animationDelay: "2.4s" }} />
      <Brain className="absolute right-[14%] bottom-[18%] h-7 w-7 text-primary/70 float" style={{ animationDelay: "0.6s" }} />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 md:grid-cols-[1.2fr_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            Open to Internships & Opportunities
          </motion.span>

          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I'm{" "}
            <span className="text-gradient">Hemanth</span>
            <br />
            <span className="text-foreground/90">S Gowda</span>
          </h1>

          <div className="mt-5 flex items-center gap-2 font-mono text-lg text-muted-foreground sm:text-xl">
            <span className="text-primary">{">"}</span>
            <span className="text-foreground">{typed}</span>
            <span className="inline-block h-5 w-[2px] animate-pulse bg-primary" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            BE CSE (AI & ML) student at Malnad College of Engineering. I build
            intelligent systems and craft elegant software that turns data into
            real-world impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/Hemanth_S_Gowda_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground glow-primary transition-transform hover:scale-105"
            >
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold transition-all hover:bg-white/10 hover:glow-accent"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a
  href="https://github.com/hemanthsgowdru2006-debug"
  target="_blank"
  rel="noreferrer"
>
              <Github size={20} />
            </a>
            <a
  href="https://linkedin.com/in/hemanth-s-gowda-a5a726316"
  target="_blank"
  rel="noreferrer"
>
              <Linkedin size={20} />
            </a>
            <span className="h-px w-12 bg-border" />
            <span className="font-mono text-xs">scroll to explore ↓</span>
          </div>
        </motion.div>

        {/* Profile orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto aspect-square w-[280px] sm:w-[340px] md:w-[400px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-40 blur-3xl" />
          <div className="absolute inset-2 rounded-full border border-primary/30 spin-slow" />
          <div className="absolute inset-6 rounded-full border border-secondary/20" style={{ animation: "spin-slow 30s linear infinite reverse" }} />
          <div className="absolute inset-0 rounded-full pulse-ring" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/40 glow-primary">
            <img
              src={profileImg}
              alt="Hemanth S Gowda"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Tech badge chips */}
          <span className="absolute -top-2 right-6 rounded-full glass-strong px-3 py-1 text-xs font-mono text-accent float">AI/ML</span>
          <span className="absolute -bottom-2 left-6 rounded-full glass-strong px-3 py-1 text-xs font-mono text-primary float" style={{ animationDelay: "1.5s" }}>Python</span>
        </motion.div>
      </div>
    </section>
  );
}
