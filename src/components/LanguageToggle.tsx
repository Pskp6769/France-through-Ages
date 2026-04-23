import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageToggleProps {
  scrolled?: boolean;
}

const LanguageToggle = ({ scrolled = false }: LanguageToggleProps) => {
  const { lang, setLang } = useLanguage();

  const baseText = scrolled ? "text-ink" : "text-background";
  const mutedText = scrolled ? "text-gray-accent" : "text-background/55";
  const borderColor = scrolled ? "border-ink/30" : "border-background/40";
  const activeBg = scrolled ? "bg-ink text-background" : "bg-background text-ink";

  return (
    <div
      className={`hidden md:inline-flex items-center rounded-full border ${borderColor} overflow-hidden text-[11px] font-medium tracking-wider transition-colors duration-500`}
      role="group"
      aria-label="Language toggle"
    >
      {(["fr", "en"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1.5 uppercase transition-all duration-300 ${
              active ? activeBg : `${mutedText} hover:${baseText}`
            }`}
            aria-pressed={active}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
