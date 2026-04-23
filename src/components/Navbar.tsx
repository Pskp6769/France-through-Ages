import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t("nav_home"), href: "#hero" },
    { label: t("nav_history"), href: "#focus" },
    { label: t("nav_eras"), href: "#scenes" },
    { label: t("nav_culture"), href: "#bento" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-gray-line/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container-edge flex items-center justify-between py-5">
        <a href="#hero" className="group flex items-baseline gap-1">
          <span
            className={`font-serif-display text-2xl md:text-[28px] leading-none transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-background"
            }`}
          >
            France
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[13px] tracking-wide font-medium relative group transition-colors duration-500 ${
                  scrolled ? "text-ink hover:text-ink" : "text-background/90 hover:text-background"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-[width] duration-500 ease-out ${
                    scrolled ? "bg-ink" : "bg-background"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle scrolled={scrolled} />
          <a
            href="#focus"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[12px] font-medium tracking-wide transition-all duration-500 hover:scale-[1.03] ${
              scrolled
                ? "border-ink text-ink hover:bg-ink hover:text-background"
                : "border-background/60 text-background hover:bg-background hover:text-ink"
            }`}
          >
            {t("nav_cta")}
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden text-sm ${scrolled ? "text-ink" : "text-background"}`}
        >
          {open ? t("nav_close") : t("nav_menu")}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-gray-line container-edge py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-serif-display text-3xl text-ink"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-line/60">
            <MobileLangToggle />
          </div>
        </div>
      )}
    </header>
  );
};

const MobileLangToggle = () => {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="flex items-center gap-3">
      <span className="text-eyebrow text-gray-accent">{t("lang_toggle_label")}</span>
      <div className="inline-flex items-center rounded-full border border-ink/30 overflow-hidden text-[11px] font-medium tracking-wider">
        {(["fr", "en"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1.5 uppercase transition-all duration-300 ${
              lang === l ? "bg-ink text-background" : "text-gray-accent"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
