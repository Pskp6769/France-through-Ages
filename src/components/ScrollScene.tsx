import { useEffect, useRef, useState } from "react";

interface KeyFact {
  label: string;
  value: string;
}

interface SubChapter {
  heading: string;
  body: string;
}

interface ScrollSceneProps {
  index: string;
  era: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  align?: "left" | "right";
  tone?: "dark" | "light";
  keyFacts?: KeyFact[];
  subChapter?: SubChapter;
  total?: number;
}

/**
 * A cinematic chapter — image with parallax, big type, fade reveals,
 * key facts and an optional secondary panel.
 */
const ScrollScene = ({
  index,
  era,
  title,
  subtitle,
  body,
  image,
  align = "left",
  tone = "dark",
  keyFacts,
  subChapter,
  total = 6,
}: ScrollSceneProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = 1 - (rect.top + rect.height / 2) / vh;
        setProgress(Math.max(-1, Math.min(1, p)));
        if (imgRef.current) {
          imgRef.current.style.transform = `scale(1.15) translate3d(0, ${p * -6}%, 0)`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const opacity = Math.max(0, 1 - Math.abs(progress) * 0.35);
  const isDark = tone === "dark";

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen w-full overflow-hidden ${isDark ? "bg-ink text-background" : "bg-paper text-ink"}`}
    >
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        {isDark ? (
          <div className="absolute inset-0 bg-ink/65" />
        ) : (
          <div className="absolute inset-0 bg-background/55" />
        )}
        <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
      </div>

      <div
        className={`relative z-10 container-edge min-h-screen flex flex-col justify-center py-28 md:py-32 ${
          align === "right" ? "items-end text-right" : "items-start text-left"
        }`}
        style={{ opacity }}
      >
        <div className={`max-w-2xl ${align === "right" ? "ml-auto" : ""}`}>
          <div className={`flex items-center gap-3 mb-6 ${align === "right" ? "justify-end" : ""}`}>
            <span className={`text-eyebrow ${isDark ? "text-background/70" : "text-gray-accent"}`}>
              {index} — {era}
            </span>
            <span className={`h-px w-16 ${isDark ? "bg-background/40" : "bg-ink/40"}`} />
          </div>

          <h2 className="font-serif-display text-[12vw] md:text-[7vw] lg:text-[5.6vw] leading-[0.92] text-balance mb-8">
            {title}
          </h2>

          <p className={`font-serif-italic text-2xl md:text-3xl mb-6 ${isDark ? "text-background/85" : "text-ink/85"}`}>
            {subtitle}
          </p>

          <p className={`max-w-md text-[15px] leading-relaxed ${isDark ? "text-background/70" : "text-ink/75"} ${align === "right" ? "ml-auto" : ""}`}>
            {body}
          </p>

          {/* Key facts row */}
          {keyFacts && keyFacts.length > 0 && (
            <div className={`mt-12 grid grid-cols-2 sm:grid-cols-3 gap-px ${isDark ? "bg-background/15" : "bg-ink/15"} max-w-xl ${align === "right" ? "ml-auto" : ""}`}>
              {keyFacts.map((f, i) => (
                <div
                  key={i}
                  className={`p-4 ${isDark ? "bg-ink" : "bg-paper"} text-left`}
                >
                  <div className={`text-eyebrow mb-2 ${isDark ? "text-background/55" : "text-gray-accent"}`}>
                    {f.label}
                  </div>
                  <div className={`font-serif-display text-lg leading-tight ${isDark ? "text-background" : "text-ink"}`}>
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sub-chapter */}
          {subChapter && (
            <div className={`mt-16 pt-10 border-t ${isDark ? "border-background/20" : "border-ink/20"} max-w-xl ${align === "right" ? "ml-auto" : ""}`}>
              <h3 className="font-serif-italic text-2xl md:text-3xl mb-4">
                {subChapter.heading}
              </h3>
              <p className={`text-[14px] leading-relaxed ${isDark ? "text-background/65" : "text-ink/70"}`}>
                {subChapter.body}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Era marker — bottom edge */}
      <div className={`absolute bottom-8 inset-x-0 container-edge flex items-center justify-between text-xs tracking-[0.3em] uppercase ${isDark ? "text-background/50" : "text-ink/50"} z-10`}>
        <span>{era}</span>
        <span>{index} / {String(total).padStart(2, "0")}</span>
      </div>
    </section>
  );
};

export default ScrollScene;
