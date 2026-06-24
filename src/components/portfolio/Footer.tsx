import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-xs font-black text-primary-foreground">
            HS
          </span>
          <span className="font-display font-bold">
            Hemanth S Gowda
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Crafted with <Heart size={12} className="inline text-primary" /> & lots of <span className="font-mono text-primary">code</span>
        </p>
      </div>
    </footer>
  );
}
