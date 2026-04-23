import { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface FolderProps {
  size?: number;
  label?: string;
  items?: ReactNode[];
}

/**
 * Interactive Folder — click to open, papers fan out.
 */
const Folder = ({ size = 1.6, label = "Archives", items = [] }: FolderProps) => {
  const [open, setOpen] = useState(false);
  const w = 180 * size;
  const h = 140 * size;
  const slots = items.slice(0, 5);
  const mid = (slots.length - 1) / 2;

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      <button
        type="button"
        data-cursor="hover"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${open ? "Fermer" : "Ouvrir"} ${label}`}
        className="relative cursor-none focus:outline-none"
        style={{ width: w, height: h }}
      >
        {/* Tab */}
        <div
          className="absolute top-0 left-0 rounded-t-md bg-ink"
          style={{ width: w * 0.42, height: h * 0.18 }}
        />
        {/* Back wall */}
        <div
          className="absolute bg-ink rounded-md shadow-[0_18px_40px_-20px_hsl(0_0%_0%/0.5)]"
          style={{ top: h * 0.12, left: 0, width: w, height: h * 0.88 }}
        />

        {/* Papers */}
        {slots.map((child, i) => {
          const offset = i - mid;
          const restRot = offset * 1.5;
          const openRot = offset * 14;
          const openY = -h * 0.5;
          const openX = offset * (w * 0.42);
          return (
            <motion.div
              key={i}
              initial={false}
              animate={open
                ? { rotate: openRot, x: openX, y: openY, scale: 1 }
                : { rotate: restRot, x: 0, y: -h * 0.05 + i * 2, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: open ? i * 0.05 : (slots.length - 1 - i) * 0.04 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper text-ink rounded-sm shadow-md flex items-center justify-center text-center px-3"
              style={{
                width: w * 0.78,
                height: h * 0.7,
                zIndex: 5 + i,
              }}
            >
              <div className="font-serif-display text-base leading-snug">{child}</div>
            </motion.div>
          );
        })}

        {/* Front cover */}
        <motion.div
          initial={false}
          animate={open ? { rotateX: -110, y: -2 } : { rotateX: 0, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transformOrigin: "top",
            width: w,
            height: h * 0.88,
            top: h * 0.12,
            left: 0,
            zIndex: 20,
          }}
          className="absolute bg-ink rounded-md border-t border-background/10"
        >
          <span className="absolute bottom-3 right-4 text-eyebrow text-background/55">
            {label}
          </span>
          <span className="absolute top-3 left-4 h-1 w-1 rounded-full bg-fr-red" />
        </motion.div>
      </button>

      <span className="text-eyebrow text-gray-accent">{label}</span>
    </div>
  );
};

export default Folder;
