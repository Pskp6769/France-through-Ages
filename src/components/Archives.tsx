import Folder from "./Folder";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Archives = () => {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section id="archives" className="relative bg-paper text-ink py-28 md:py-40 container-edge">
      <div ref={headRef} className="reveal max-w-4xl mb-20 md:mb-28">
        <span className="text-eyebrow text-gray-accent">{t("arch_eyebrow")}</span>
        <h2 className="font-serif-display text-[10vw] md:text-[5.5vw] leading-[0.95] mt-6 text-balance">
          {t("arch_title_1")}<span className="font-serif-italic">{t("arch_title_2")}</span>{t("arch_title_3")}
        </h2>
        <p className="mt-6 max-w-lg text-gray-accent text-base leading-relaxed">
          {t("arch_intro")}
        </p>
      </div>

      <div ref={gridRef} className="reveal flex justify-center">
        <Folder
          size={2}
          label={t("arch_label")}
          items={[
            <p key="a">Poola Sai Kruthi Pranav</p>,
            <p key="b">Indla Sai Ganesh</p>,
            <p key="c">D. Faadil Aarit</p>,
            <p key="d">Vansh</p>,
            <p key="e">Rijuta Mondal</p>,
          ]}
        />
      </div>
    </section>
  );
};

export default Archives;
