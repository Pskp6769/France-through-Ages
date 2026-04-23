import { useEffect, useRef, useState } from "react";

interface TrueFocusProps {
  sentence: string;
  intervalMs?: number;
}

/**
 * Word-by-word focus animation. Inactive words blur softly,
 * the active word snaps into focus — like history coming into clarity.
 */
const TrueFocus = ({ sentence, intervalMs = 1400 }: TrueFocusProps) => {
  const words = sentence.split(" ");
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [visible, words.length, intervalMs]);

  return (
    <div ref={ref} className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2">
      {words.map((w, i) => {
        const isActive = visible && i === active;
        return (
          <span
            key={`${w}-${i}`}
            className={`focus-word relative inline-block font-serif-display text-ink text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] ${
              isActive ? "is-active" : "is-blurred"
            }`}
          >
            {/* Active indicator brackets */}
            <span
              className={`absolute -top-3 -left-3 h-3 w-3 border-l border-t border-fr-red transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
            <span
              className={`absolute -bottom-3 -right-3 h-3 w-3 border-r border-b border-fr-red transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
            {w}
          </span>
        );
      })}
    </div>
  );
};

export default TrueFocus;
