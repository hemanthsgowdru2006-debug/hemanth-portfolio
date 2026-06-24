import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="text-center">
            <div className="relative mx-auto h-20 w-20">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-secondary" />
              <div className="absolute inset-3 rounded-full bg-gradient-primary opacity-50 blur-md" />
              <span className="absolute inset-0 grid place-items-center font-display text-xl font-black text-gradient">
                HS
              </span>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Initializing<span className="animate-pulse">...</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
