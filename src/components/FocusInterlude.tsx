import TrueFocus from "./TrueFocus";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const FocusInterlude = () => {
  const ref = useReveal<HTMLDivElement>(0.15);
  const { t } = useLanguage();
  return (
    <section id="focus" className="relative bg-background py-32 md:py-48 container-edge overflow-hidden">
      <div ref={ref} className="reveal max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="h-px w-10 bg-ink/30" />
          <span className="text-eyebrow text-gray-accent">{t("focus_eyebrow")}</span>
          <span className="h-px w-10 bg-ink/30" />
        </div>

        <TrueFocus sentence={t("focus_sentence")} intervalMs={1500} />

        <p className="mt-16 max-w-xl mx-auto text-gray-accent text-base leading-relaxed font-serif-italic">
          {t("focus_quote")}
        </p>
      </div>

      <span className="absolute top-20 left-10 font-serif-italic text-gray-line text-9xl select-none pointer-events-none">«</span>
      <span className="absolute bottom-20 right-10 font-serif-italic text-gray-line text-9xl select-none pointer-events-none">»</span>
    </section>
  );
};

export default FocusInterlude;
