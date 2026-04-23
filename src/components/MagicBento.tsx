import { useRef, MouseEvent } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  glyph?: string;
}

const BentoCard = ({ title, subtitle, description, className = "", size = "md", glyph }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);

    const rx = ((y - rect.height / 2) / rect.height) * -8;
    const ry = ((x - rect.width / 2) / rect.width) * 8;
    const tx = ((x - rect.width / 2) / rect.width) * 6;
    const ty = ((y - rect.height / 2) / rect.height) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${tx}px, ${ty}px, 0)`;
  };

  const handleLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translate3d(0,0,0)";
    }
  };

  const sizeClass = size === "lg" ? "md:col-span-2 md:row-span-2 min-h-[480px]" : size === "sm" ? "min-h-[220px]" : "min-h-[280px]";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor="hover"
      className={`bento-card floating-grain group p-7 md:p-9 flex flex-col justify-between ${sizeClass} ${className}`}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="bento-particle opacity-0 group-hover:opacity-100"
          style={{
            left: `${15 + i * 12}%`,
            bottom: "10%",
            animationDelay: `${i * 0.4}s`,
            ["--dx" as string]: `${(i % 2 ? 1 : -1) * 30}px`,
            ["--dy" as string]: `${-80 - i * 10}px`,
          }}
        />
      ))}

      <div className="relative z-10 flex items-start justify-between">
        <span className="text-eyebrow text-background/55">{subtitle}</span>
        {glyph && <span className="font-serif-italic text-background/40 text-2xl">{glyph}</span>}
      </div>

      <div className="relative z-10">
        <h3 className={`font-serif-display text-background ${size === "lg" ? "text-6xl md:text-7xl" : "text-4xl md:text-5xl"} leading-[0.95] mb-4`}>
          {title}
        </h3>
        <p className="text-background/65 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      <span className="absolute top-5 right-5 h-2 w-2 rounded-full bg-background/30 group-hover:bg-fr-red transition-colors duration-500" />
    </div>
  );
};

interface ItemKeys {
  t: TranslationKey;
  s: TranslationKey;
  d: TranslationKey;
  size?: "sm" | "md" | "lg";
  glyph?: string;
}

const itemDefs: ItemKeys[] = [
  { t: "b1_t", s: "b1_s", d: "b1_d", size: "lg", glyph: "✦" },
  { t: "b2_t", s: "b2_s", d: "b2_d", glyph: "—" },
  { t: "b3_t", s: "b3_s", d: "b3_d", glyph: "✧" },
  { t: "b4_t", s: "b4_s", d: "b4_d", glyph: "◦" },
  { t: "b5_t", s: "b5_s", d: "b5_d" },
  { t: "b6_t", s: "b6_s", d: "b6_d" },
];

const MagicBento = () => {
  const headRef = useReveal<HTMLDivElement>();
  const { t } = useLanguage();
  return (
    <section id="bento" className="relative bg-paper text-ink py-28 md:py-40 container-edge">
      <div ref={headRef} className="reveal max-w-4xl mb-16 md:mb-24">
        <span className="text-eyebrow text-gray-accent">{t("bento_eyebrow")}</span>
        <h2 className="font-serif-display text-[10vw] md:text-[6vw] leading-[0.95] mt-6 text-balance">
          {t("bento_title_1")}<span className="font-serif-italic">{t("bento_title_2")}</span>{t("bento_title_3")}
        </h2>
        <p className="mt-6 max-w-lg text-gray-accent text-base leading-relaxed">
          {t("bento_intro")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">
        {itemDefs.map((it, i) => (
          <BentoCard
            key={i}
            title={t(it.t)}
            subtitle={t(it.s)}
            description={t(it.d)}
            size={it.size}
            glyph={it.glyph}
          />
        ))}
      </div>
    </section>
  );
};

export default MagicBento;
