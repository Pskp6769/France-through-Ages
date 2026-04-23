import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="relative bg-ink text-background overflow-hidden">
      <div className="container-edge pt-24 md:pt-32 pb-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-6">
          <div className="md:col-span-7">
            <span className="text-eyebrow text-background/50">{t("ft_eyebrow")}</span>
            <h2 className="font-serif-display text-[12vw] md:text-[7vw] leading-[0.92] mt-6 text-balance">
              {t("ft_title_1")}<span className="font-serif-italic">{t("ft_title_2")}</span>{t("ft_title_3")}
            </h2>
            <a
              href="#hero"
              className="mt-12 inline-flex items-center gap-3 text-sm tracking-wide group"
            >
              <span className="h-px w-10 bg-background/40 group-hover:w-16 transition-all duration-500" />
              {t("ft_back")}
              <span aria-hidden>↑</span>
            </a>
          </div>

          <div className="md:col-span-5 md:pl-10 md:border-l border-background/15 grid grid-cols-2 gap-8 text-sm">
            <div>
              <span className="text-eyebrow text-background/40 block mb-4">{t("ft_explore")}</span>
              <ul className="space-y-2 text-background/80">
                <li><a href="#focus" className="hover:text-background">{t("ft_l_history")}</a></li>
                <li><a href="#scenes" className="hover:text-background">{t("ft_l_eras")}</a></li>
                <li><a href="#bento" className="hover:text-background">{t("ft_l_culture")}</a></li>
              </ul>
            </div>
            <div>
              <span className="text-eyebrow text-background/40 block mb-4">France</span>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background">{t("ft_l_manifesto")}</a></li>
                <li><a href="#" className="hover:text-background">{t("ft_l_archives")}</a></li>
                <li><a href="#" className="hover:text-background">{t("ft_l_contact")}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-background/50">
          <div className="flex items-center gap-3">
            <span>{t("ft_tag")}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()}</span>
            <div className="h-px w-12" style={{ background: "var(--gradient-tricolor)" }} />
            <span>Paris</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
