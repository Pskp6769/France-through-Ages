import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

interface EventKeys {
  y: TranslationKey;
  t: TranslationKey;
  d: TranslationKey;
}

const eventKeys: EventKeys[] = [
  { y: "tl_e1_y", t: "tl_e1_t", d: "tl_e1_d" },
  { y: "tl_e2_y", t: "tl_e2_t", d: "tl_e2_d" },
  { y: "tl_e3_y", t: "tl_e3_t", d: "tl_e3_d" },
  { y: "tl_e4_y", t: "tl_e4_t", d: "tl_e4_d" },
  { y: "tl_e5_y", t: "tl_e5_t", d: "tl_e5_d" },
  { y: "tl_e6_y", t: "tl_e6_t", d: "tl_e6_d" },
  { y: "tl_e7_y", t: "tl_e7_t", d: "tl_e7_d" },
  { y: "tl_e8_y", t: "tl_e8_t", d: "tl_e8_d" },
  { y: "tl_e9_y", t: "tl_e9_t", d: "tl_e9_d" },
  { y: "tl_e10_y", t: "tl_e10_t", d: "tl_e10_d" },
  { y: "tl_e11_y", t: "tl_e11_t", d: "tl_e11_d" },
  { y: "tl_e12_y", t: "tl_e12_t", d: "tl_e12_d" },
  { y: "tl_e13_y", t: "tl_e13_t", d: "tl_e13_d" },
];

const Timeline = () => {
  const headRef = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section id="timeline" className="relative bg-ink text-background py-28 md:py-40 container-edge overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "3px 3px" }} />

      <div ref={headRef} className="reveal max-w-4xl mb-20 md:mb-28 relative">
        <span className="text-eyebrow text-background/55">{t("tl_eyebrow")}</span>
        <h2 className="font-serif-display text-[10vw] md:text-[5.5vw] leading-[0.95] mt-6 text-balance">
          {t("tl_title_1")}<span className="font-serif-italic">{t("tl_title_2")}</span>{t("tl_title_3")}
        </h2>
        <p className="mt-6 max-w-lg text-background/65 text-base leading-relaxed">
          {t("tl_intro")}
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-background/15" />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fr-blue via-background to-fr-red origin-top"
        />

        <ul className="space-y-12 md:space-y-20">
          {eventKeys.map((e, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
              >
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-background ring-4 ring-ink z-10 transition-transform duration-500 group-hover:scale-150" />

                <div className={`${isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"} group cursor-default`}>
                  <div className="text-eyebrow text-fr-red mb-3 transition-colors duration-500 group-hover:text-background">
                    {t(e.y)}
                  </div>
                  <h3 className="font-serif-display text-3xl md:text-4xl mb-3 leading-tight transition-transform duration-500 group-hover:translate-x-1">
                    {t(e.t)}
                  </h3>
                  <p className="text-background/60 text-sm leading-relaxed max-w-sm md:max-w-none md:inline-block">
                    {t(e.d)}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
