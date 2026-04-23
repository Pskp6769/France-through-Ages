import heroImage from "@/assets/hero-france.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink">
      {/* Cinematic background — slow Ken Burns pan */}
      <div className="absolute inset-0 animate-hero-pan">
        <img
          src={heroImage}
          alt="Façade of a French palace at twilight"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />

      <div className="absolute top-32 right-12 hidden md:block opacity-60">
        <div className="h-[1px] w-24" style={{ background: "var(--gradient-tricolor)" }} />
      </div>

      <div className="absolute top-28 left-6 md:left-12 lg:left-20 text-background/80 animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center gap-3">
          <span className="h-1 w-1 rounded-full bg-background/80 animate-glow" />
          <span className="text-eyebrow">{t("hero_chapter")}</span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 container-edge pb-16 md:pb-24">
        <div className="max-w-[1400px]">
          <h1
            className="font-serif-display text-background text-[14vw] md:text-[10vw] lg:text-[8.4vw] leading-[0.92] text-balance animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            {t("hero_title_1")}
            <br />
            <span className="font-serif-italic text-background/90">{t("hero_title_2")}</span> {t("hero_title_3")}
          </h1>

          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p
              className="max-w-md text-background/80 text-[15px] leading-relaxed animate-fade-up"
              style={{ animationDelay: "1s" }}
            >
              {t("hero_sub")}
            </p>

            <a
              href="#focus"
              className="group inline-flex items-center gap-4 self-start animate-fade-up"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-background/40 transition-all duration-500 group-hover:scale-110 group-hover:border-background">
                <span className="absolute inset-0 rounded-full bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
                <span className="text-background text-lg">↓</span>
              </span>
              <span className="text-background text-sm tracking-wide font-medium">
                {t("hero_cta")}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 inset-x-0 overflow-hidden pointer-events-none opacity-30">
        <div className="flex w-max animate-marquee whitespace-nowrap gap-12 text-background font-serif-italic text-sm">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              {["Liberté", "Versailles", "Lumière", "Renaissance", "Marianne", "Louvre", "République", "Provence", "Notre-Dame"].map((w) => (
                <span key={w}>{w} ◦</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
