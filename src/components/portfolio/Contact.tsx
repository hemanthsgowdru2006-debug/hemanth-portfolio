import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "hemanthsgowdru2006@gmail.com",
    href: "mailto:hemanthsgowdru2006@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hassan, Karnataka, India",
  },
  {
    icon: Phone,
    label: "Available",
    value: "Open to Internships & Opportunities",
  },
];

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/hemanth-s-gowda-a5a726316",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/hemanthsgowdru2006-debug",
  },
  {
    icon: Mail,
    label: "Email",
    href: "hemanthsgowdru2006@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/hemanth_gowdru_s",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's Build Something{" "}
              <span className="text-gradient">Intelligent</span>
            </>
          }
          description="Have a project, opportunity or just want to say hi? My inbox is open."
        />

        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          {/* Contact Cards */}
          <div className="space-y-4">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl glass-strong p-5 transition-all hover:-translate-y-0.5 hover:glow-primary"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <c.icon size={18} />
                </span>

                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate font-medium">{c.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="rounded-2xl glass p-5">
              <div className="mb-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Find me on
              </div>

              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl glass transition-all hover:scale-110 hover:bg-white/10 hover:text-primary"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            action="https://formspree.io/f/mbdvjkqq"
            method="POST"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 rounded-3xl glass-strong p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                placeholder="Your Name"
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <Field
              label="Subject"
              name="subject"
              placeholder="Subject"
              required
            />

            <div>
              <label className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Message
              </label>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, opportunity, or idea..."
                className="w-full resize-none rounded-xl glass px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:glow-primary"
              />
            </div>

            <button
              type="submit"
              className="group w-full rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-2">
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
                Send Message
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-xl glass px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:glow-primary"
      />
    </div>
  );
}