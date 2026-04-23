import { useEffect } from "react";
import BlobCursor from "@/components/BlobCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FocusInterlude from "@/components/FocusInterlude";
import ScrollScene from "@/components/ScrollScene";
import Timeline from "@/components/Timeline";
import Archives from "@/components/Archives";
import MagicBento from "@/components/MagicBento";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

import gaul from "@/assets/scene-gaul.jpg";
import medieval from "@/assets/scene-medieval.jpg";
import absolutism from "@/assets/scene-absolutism.jpg";
import revolution from "@/assets/scene-revolution.jpg";
import industrial from "@/assets/scene-industrial.jpg";
import modern from "@/assets/scene-modern.jpg";

interface SceneDef {
  index: string;
  era: TranslationKey;
  title: TranslationKey;
  subtitle: TranslationKey;
  body: TranslationKey;
  image: string;
  align: "left" | "right";
  tone: "dark" | "light";
  facts: { l: TranslationKey; v: TranslationKey }[];
  sub: { h: TranslationKey; b: TranslationKey };
}

const scenes: SceneDef[] = [
  {
    index: "01", era: "s1_era", title: "s1_title", subtitle: "s1_subtitle", body: "s1_body",
    image: gaul, align: "left", tone: "dark",
    facts: [
      { l: "s1_kf1_l", v: "s1_kf1_v" },
      { l: "s1_kf2_l", v: "s1_kf2_v" },
      { l: "s1_kf3_l", v: "s1_kf3_v" },
    ],
    sub: { h: "s1_sub_h", b: "s1_sub_b" },
  },
  {
    index: "02", era: "s2_era", title: "s2_title", subtitle: "s2_subtitle", body: "s2_body",
    image: medieval, align: "right", tone: "dark",
    facts: [
      { l: "s2_kf1_l", v: "s2_kf1_v" },
      { l: "s2_kf2_l", v: "s2_kf2_v" },
      { l: "s2_kf3_l", v: "s2_kf3_v" },
    ],
    sub: { h: "s2_sub_h", b: "s2_sub_b" },
  },
  {
    index: "03", era: "s3_era", title: "s3_title", subtitle: "s3_subtitle", body: "s3_body",
    image: absolutism, align: "left", tone: "dark",
    facts: [
      { l: "s3_kf1_l", v: "s3_kf1_v" },
      { l: "s3_kf2_l", v: "s3_kf2_v" },
      { l: "s3_kf3_l", v: "s3_kf3_v" },
    ],
    sub: { h: "s3_sub_h", b: "s3_sub_b" },
  },
  {
    index: "04", era: "s4_era", title: "s4_title", subtitle: "s4_subtitle", body: "s4_body",
    image: revolution, align: "right", tone: "dark",
    facts: [
      { l: "s4_kf1_l", v: "s4_kf1_v" },
      { l: "s4_kf2_l", v: "s4_kf2_v" },
      { l: "s4_kf3_l", v: "s4_kf3_v" },
    ],
    sub: { h: "s4_sub_h", b: "s4_sub_b" },
  },
  {
    index: "05", era: "s5_era", title: "s5_title", subtitle: "s5_subtitle", body: "s5_body",
    image: industrial, align: "left", tone: "dark",
    facts: [
      { l: "s5_kf1_l", v: "s5_kf1_v" },
      { l: "s5_kf2_l", v: "s5_kf2_v" },
      { l: "s5_kf3_l", v: "s5_kf3_v" },
    ],
    sub: { h: "s5_sub_h", b: "s5_sub_b" },
  },
  {
    index: "06", era: "s6_era", title: "s6_title", subtitle: "s6_subtitle", body: "s6_body",
    image: modern, align: "right", tone: "light",
    facts: [
      { l: "s6_kf1_l", v: "s6_kf1_v" },
      { l: "s6_kf2_l", v: "s6_kf2_v" },
      { l: "s6_kf3_l", v: "s6_kf3_v" },
    ],
    sub: { h: "s6_sub_h", b: "s6_sub_b" },
  },
];

const Index = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = t("metaTitle");
    const desc = document.querySelector('meta[name="description"]');
    const content = t("metaDesc");
    if (desc) desc.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, [lang, t]);

  const TOTAL = scenes.length;

  return (
    <main className="relative bg-background text-ink">
      <BlobCursor />
      <Navbar />
      <Hero />
      <FocusInterlude />

      <div id="scenes">
        {scenes.map((s) => (
          <ScrollScene
            key={s.index}
            index={s.index}
            era={t(s.era)}
            title={t(s.title)}
            subtitle={t(s.subtitle)}
            body={t(s.body)}
            image={s.image}
            align={s.align}
            tone={s.tone}
            total={TOTAL}
            keyFacts={s.facts.map((f) => ({ label: t(f.l), value: t(f.v) }))}
            subChapter={{ heading: t(s.sub.h), body: t(s.sub.b) }}
          />
        ))}
      </div>

      <Timeline />
      <Archives />
      <MagicBento />
      <Footer />
    </main>
  );
};

export default Index;
