export type Lang = "fr" | "en";

const fr = {
  // Meta
  metaTitle: "France Through the Ages — Histoire Vivante",
  metaDesc: "Un voyage cinématographique à travers les siècles de France — des Celtes de Gaule à la Ve République.",

  // Navbar
  nav_home: "Accueil",
  nav_history: "Histoire",
  nav_eras: "Époques",
  nav_culture: "Culture",
  nav_contact: "Contact",
  nav_cta: "Explorer",
  nav_menu: "Menu",
  nav_close: "Fermer",
  lang_toggle_label: "Langue",

  // Hero
  hero_chapter: "Chapitre 01 — La France Éternelle",
  hero_title_1: "La France",
  hero_title_2: "à travers",
  hero_title_3: "les âges.",
  hero_sub: "Un voyage à travers les siècles, où chaque trace du passé façonne une nation moderne.",
  hero_cta: "Commencer le voyage",

  // Focus interlude
  focus_eyebrow: "Chapitre Vivant",
  focus_sentence: "Histoire Vivante de la France",
  focus_quote: "Un mot après l'autre, comme un siècle après l'autre — l'histoire se révèle à celui qui prend le temps de la regarder.",

  // Scene 1 — Celts & Rome
  s1_era: "Celtes & Rome",
  s1_title: "Les Celtes de Gaule.",
  s1_subtitle: "— 1200 av. J.-C. à 476",
  s1_body: "Avant la France, la terre appartenait aux tribus celtes : oppida fortifiés, druides, commerce européen. Vercingétorix unit les Gaulois face à Rome — puis Lugdunum, les aqueducs, le latin façonnent une civilisation hybride pour cinq siècles.",
  s1_kf1_l: "Bataille", s1_kf1_v: "Alésia, 52 av. J.-C.",
  s1_kf2_l: "Capitale", s1_kf2_v: "Lugdunum (Lyon)",
  s1_kf3_l: "Héritage", s1_kf3_v: "La langue latine",
  s1_sub_h: "Sous l'aigle de Rome.",
  s1_sub_b: "Routes pavées, amphithéâtres, thermes : la Gaule romaine prospère pendant près de cinq siècles. Le latin remplace le gaulois et donne naissance, au fil des siècles, à la langue française.",

  // Scene 2 — Franks & Middle Ages
  s2_era: "Francs & Moyen Âge",
  s2_title: "De Clovis à Charlemagne.",
  s2_subtitle: "— 481 à 1453",
  s2_body: "En 486, Clovis unit les tribus franques et embrasse le christianisme. Trois siècles plus tard, Charlemagne est couronné Empereur d'Occident en l'an 800 — un empire qui forge l'âme de l'Europe médiévale.",
  s2_kf1_l: "Baptême", s2_kf1_v: "Clovis, 496",
  s2_kf2_l: "Couronnement", s2_kf2_v: "Charlemagne, 800",
  s2_kf3_l: "Cathédrale", s2_kf3_v: "Notre-Dame, 1163",
  s2_sub_h: "La foi, la guerre et la pucelle d'Orléans.",
  s2_sub_b: "Les cathédrales gothiques s'élèvent — Chartres, Reims, Notre-Dame. La Guerre de Cent Ans déchire le royaume jusqu'à ce qu'une jeune paysanne, Jeanne d'Arc, fasse sacrer Charles VII à Reims en 1429.",

  // Scene 3 — Renaissance & Absolutism
  s3_era: "Renaissance & Absolutisme",
  s3_title: "Louis XIV et Versailles.",
  s3_subtitle: "— 1515 à 1715",
  s3_body: "« L'État, c'est moi. » Louis XIV règne 72 ans, centralise le pouvoir et fait de Versailles la scène éblouissante de la monarchie absolue. La France domine l'Europe en arts, en mode et en diplomatie.",
  s3_kf1_l: "Règne", s3_kf1_v: "72 ans (1643-1715)",
  s3_kf2_l: "Édit", s3_kf2_v: "Nantes, 1598",
  s3_kf3_l: "Château", s3_kf3_v: "Versailles",
  s3_sub_h: "Un royaume des arts et des lettres.",
  s3_sub_b: "François Ier accueille Léonard de Vinci à Amboise et commande Chambord. La Renaissance fait du français une langue de cour et de culture, jusqu'à l'Édit de Nantes (1598) signé par Henri IV.",

  // Scene 4 — Revolution & Empire
  s4_era: "Révolution & Empire",
  s4_title: "Liberté, Égalité, Fraternité.",
  s4_subtitle: "— 1789 à 1815",
  s4_body: "Le 14 juillet 1789, les Parisiens prennent la Bastille. La Déclaration des Droits de l'Homme proclame des idéaux universels, la monarchie tombe, la Première République naît — un tournant pour la France et le monde moderne.",
  s4_kf1_l: "Bastille", s4_kf1_v: "14 juillet 1789",
  s4_kf2_l: "Sacre", s4_kf2_v: "Napoléon, 1804",
  s4_kf3_l: "Code", s4_kf3_v: "Civil, 1804",
  s4_sub_h: "Le siècle de Napoléon.",
  s4_sub_b: "Issu de la Révolution, Napoléon Bonaparte se couronne Empereur en 1804. Son Code civil refonde le droit européen, ses armées redessinent le continent — jusqu'à Waterloo en 1815.",

  // Scene 5 — Industrial & Belle Époque
  s5_era: "Industrie & Belle Époque",
  s5_title: "Une République de science et d'art.",
  s5_subtitle: "— 1815 à 1914",
  s5_body: "Née de la défaite de 1870, la Troisième République laïcise l'école, bâtit un vaste empire colonial et inaugure la Belle Époque. Paris accueille les Expositions universelles, la Tour Eiffel s'élève en 1889.",
  s5_kf1_l: "Tour Eiffel", s5_kf1_v: "1889",
  s5_kf2_l: "Boulevards", s5_kf2_v: "Haussmann",
  s5_kf3_l: "Artistes", s5_kf3_v: "Monet · Rodin",
  s5_sub_h: "Des rois au Second Empire.",
  s5_sub_b: "Restauration des Bourbons, Monarchie de Juillet, révolutions de 1830 et 1848, puis Second Empire de Napoléon III : Haussmann reconstruit Paris en grands boulevards, le rail et les usines transforment la vie quotidienne.",

  // Scene 6 — Modern World
  s6_era: "Monde Moderne",
  s6_title: "De Verdun à l'Europe.",
  s6_subtitle: "— 1914 à aujourd'hui",
  s6_body: "Le XXᵉ siècle a éprouvé la France comme jamais. Les tranchées de Verdun marquent une génération ; l'Occupation divise la nation entre Vichy et la France Libre. La Résistance, animée par De Gaulle, libère Paris en août 1944.",
  s6_kf1_l: "Libération", s6_kf1_v: "Paris, 1944",
  s6_kf2_l: "Ve République", s6_kf2_v: "1958",
  s6_kf3_l: "Euro", s6_kf3_v: "1999",
  s6_sub_h: "Europe, culture et avenir.",
  s6_sub_b: "Fondée en 1958, la Vᵉ République fait de la France une démocratie moderne au cœur de l'Union Européenne. Du Traité de Rome à l'euro, de la Pyramide du Louvre aux Jeux de Paris 2024, la France continue de façonner la culture mondiale.",

  // Timeline
  tl_eyebrow: "— Chronologie",
  tl_title_1: "Vingt mille ans d'",
  tl_title_2: "histoire",
  tl_title_3: ".",
  tl_intro: "Une frise vivante des moments qui ont forgé la France — des peintures de Lascaux aux Jeux de Paris 2024.",
  tl_e1_t: "Lascaux", tl_e1_y: "~17 000 av. J.-C.", tl_e1_d: "Premières peintures rupestres — l'aube de la mémoire humaine.",
  tl_e2_t: "Les Gaulois", tl_e2_y: "1200 av. J.-C.", tl_e2_d: "Tribus celtes, oppida fortifiés, druides et commerce européen.",
  tl_e3_t: "César conquiert la Gaule", tl_e3_y: "52 av. J.-C.", tl_e3_d: "Vercingétorix tombe à Alésia. Cinq siècles de paix romaine.",
  tl_e4_t: "Clovis", tl_e4_y: "Ve siècle", tl_e4_d: "Unification franque et baptême chrétien — naissance d'un royaume.",
  tl_e5_t: "Charlemagne", tl_e5_y: "800", tl_e5_d: "Couronné Empereur d'Occident. Renaissance carolingienne.",
  tl_e6_t: "Traité de Verdun", tl_e6_y: "843", tl_e6_d: "Partage de l'empire — la Francie occidentale devient la France.",
  tl_e7_t: "Guerre de Cent Ans", tl_e7_y: "1337–1453", tl_e7_d: "Jeanne d'Arc inverse le destin et fait sacrer Charles VII.",
  tl_e8_t: "Édit de Nantes", tl_e8_y: "1598", tl_e8_d: "Henri IV proclame la tolérance religieuse.",
  tl_e9_t: "Révolution Française", tl_e9_y: "1789", tl_e9_d: "Prise de la Bastille. Liberté, Égalité, Fraternité.",
  tl_e10_t: "Napoléon", tl_e10_y: "1804", tl_e10_d: "Empereur des Français. Le Code civil redessine l'Europe.",
  tl_e11_t: "Guerres mondiales", tl_e11_y: "1914–1945", tl_e11_d: "Verdun, Résistance, Libération — l'épreuve d'un siècle.",
  tl_e12_t: "Ve République", tl_e12_y: "1958", tl_e12_d: "De Gaulle fonde la France moderne.",
  tl_e13_t: "Union Européenne", tl_e13_y: "1992", tl_e13_d: "Traité de Maastricht. Une nation au cœur de l'Europe.",

  // Archives
  arch_eyebrow: "— Archives",
  arch_title_1: "Ouvrez les ",
  arch_title_2: "dossiers",
  arch_title_3: " de la mémoire.",
  arch_intro: "Trois fonds historiques — documents, cartographies, figures clés. Cliquez pour explorer.",
  arch_label: "Project done by",

  // Bento
  bento_eyebrow: "— Constellation",
  bento_title_1: "Six visages d'une même ",
  bento_title_2: "nation",
  bento_title_3: ".",
  bento_intro: "Chaque carte est une porte. Survolez pour ressentir la matière vivante de la France.",
  b1_t: "Révolution", b1_s: "01 / Rupture", b1_d: "Naissance de la démocratie — 1789, le peuple devient nation et redessine le destin de l'Europe.",
  b2_t: "Culture", b2_s: "02 / Héritage", b2_d: "Art et influence mondiale — de Molière à Camus, une langue qui sculpte la pensée.",
  b3_t: "Philosophie", b3_s: "03 / Lumière", b3_d: "Les Lumières — Voltaire, Rousseau, Diderot, architectes de la raison moderne.",
  b4_t: "Empire", b4_s: "04 / Conquête", b4_d: "Expansion napoléonienne — une France qui redessine la carte du continent.",
  b5_t: "Société", b5_s: "05 / République", b5_d: "Transformation sociale — Liberté, Égalité, Fraternité, une promesse infinie.",
  b6_t: "Innovation", b6_s: "06 / Avant-garde", b6_d: "France moderne — du cinéma des Lumière à l'aérospatial, un esprit en mouvement.",

  // Footer
  ft_eyebrow: "— Épilogue",
  ft_title_1: "L'histoire ",
  ft_title_2: "continue",
  ft_title_3: ", et vous en êtes la suite.",
  ft_back: "Revenir au commencement",
  ft_explore: "Explorer",
  ft_l_history: "Histoire",
  ft_l_eras: "Époques",
  ft_l_culture: "Culture",
  ft_l_manifesto: "Manifeste",
  ft_l_archives: "Archives",
  ft_l_contact: "Contact",
  ft_tag: "— Un musée numérique de la France.",
};

const en: typeof fr = {
  // Meta
  metaTitle: "France Through the Ages — A Living History",
  metaDesc: "A cinematic journey through the centuries of France — from the Celts of Gaul to the Fifth Republic.",

  // Navbar
  nav_home: "Home",
  nav_history: "History",
  nav_eras: "Eras",
  nav_culture: "Culture",
  nav_contact: "Contact",
  nav_cta: "Explore",
  nav_menu: "Menu",
  nav_close: "Close",
  lang_toggle_label: "Language",

  // Hero
  hero_chapter: "Chapter 01 — Eternal France",
  hero_title_1: "France",
  hero_title_2: "Through",
  hero_title_3: "the Ages.",
  hero_sub: "A journey through the centuries, where every trace of the past shapes a modern nation.",
  hero_cta: "Begin the journey",

  // Focus
  focus_eyebrow: "A Living Chapter",
  focus_sentence: "A Living History of France",
  focus_quote: "One word after another, like one century after another — history reveals itself to those who take the time to look.",

  // Scene 1
  s1_era: "Celts & Rome",
  s1_title: "The Celts of Gaul.",
  s1_subtitle: "— 1200 BC to 476 AD",
  s1_body: "Before France was France, the land belonged to Celtic tribes: fortified oppida, druids, European trade. Vercingetorix united the Gauls against Rome — then Lugdunum, aqueducts, and Latin shaped a hybrid civilization for five centuries.",
  s1_kf1_l: "Battle", s1_kf1_v: "Alesia, 52 BC",
  s1_kf2_l: "Capital", s1_kf2_v: "Lugdunum (Lyon)",
  s1_kf3_l: "Legacy", s1_kf3_v: "The Latin language",
  s1_sub_h: "Under the eagle of Rome.",
  s1_sub_b: "Paved roads, amphitheaters, thermal baths: Roman Gaul prospered for nearly five centuries. Latin replaced Gaulish and, over time, gave birth to the French language.",

  // Scene 2
  s2_era: "Franks & Middle Ages",
  s2_title: "From Clovis to Charlemagne.",
  s2_subtitle: "— 481 to 1453",
  s2_body: "In 486, Clovis united the Frankish tribes and embraced Christianity. Three centuries later, Charlemagne was crowned Emperor of the West in the year 800 — an empire that forged the soul of medieval Europe.",
  s2_kf1_l: "Baptism", s2_kf1_v: "Clovis, 496",
  s2_kf2_l: "Coronation", s2_kf2_v: "Charlemagne, 800",
  s2_kf3_l: "Cathedral", s2_kf3_v: "Notre-Dame, 1163",
  s2_sub_h: "Faith, war, and the Maid of Orléans.",
  s2_sub_b: "Gothic cathedrals rose — Chartres, Reims, Notre-Dame. The Hundred Years' War tore the kingdom apart until a young peasant, Joan of Arc, had Charles VII crowned at Reims in 1429.",

  // Scene 3
  s3_era: "Renaissance & Absolutism",
  s3_title: "Louis XIV and Versailles.",
  s3_subtitle: "— 1515 to 1715",
  s3_body: "\"L'État, c'est moi.\" Louis XIV reigned for 72 years, centralizing power and turning Versailles into the dazzling stage of absolute monarchy. France led Europe in art, fashion, and diplomacy.",
  s3_kf1_l: "Reign", s3_kf1_v: "72 years (1643-1715)",
  s3_kf2_l: "Edict", s3_kf2_v: "Nantes, 1598",
  s3_kf3_l: "Palace", s3_kf3_v: "Versailles",
  s3_sub_h: "A kingdom of arts and letters.",
  s3_sub_b: "Francis I welcomed Leonardo da Vinci to Amboise and commissioned Chambord. The Renaissance made French a language of court and culture, leading to the Edict of Nantes (1598) signed by Henry IV.",

  // Scene 4
  s4_era: "Revolution & Empire",
  s4_title: "Liberty, Equality, Fraternity.",
  s4_subtitle: "— 1789 to 1815",
  s4_body: "On 14 July 1789, Parisians stormed the Bastille. The Declaration of the Rights of Man proclaimed universal ideals, the monarchy fell, the First Republic was born — a turning point for France and the modern world.",
  s4_kf1_l: "Bastille", s4_kf1_v: "14 July 1789",
  s4_kf2_l: "Crowning", s4_kf2_v: "Napoleon, 1804",
  s4_kf3_l: "Code", s4_kf3_v: "Civil, 1804",
  s4_sub_h: "The age of Napoleon.",
  s4_sub_b: "Born of the Revolution, Napoleon Bonaparte crowned himself Emperor in 1804. His Civil Code reshaped European law, his armies redrew the continent — until Waterloo in 1815.",

  // Scene 5
  s5_era: "Industry & Belle Époque",
  s5_title: "A republic of science and art.",
  s5_subtitle: "— 1815 to 1914",
  s5_body: "Born from the defeat of 1870, the Third Republic secularized schools, built a vast colonial empire, and ushered in the Belle Époque. Paris hosted World Fairs, the Eiffel Tower rose in 1889.",
  s5_kf1_l: "Eiffel Tower", s5_kf1_v: "1889",
  s5_kf2_l: "Boulevards", s5_kf2_v: "Haussmann",
  s5_kf3_l: "Artists", s5_kf3_v: "Monet · Rodin",
  s5_sub_h: "From kings to a Second Empire.",
  s5_sub_b: "Bourbon Restoration, July Monarchy, the revolutions of 1830 and 1848, then Napoleon III's Second Empire: Haussmann rebuilt Paris into grand boulevards, while railways and factories transformed daily life.",

  // Scene 6
  s6_era: "Modern World",
  s6_title: "From Verdun to Europe.",
  s6_subtitle: "— 1914 to today",
  s6_body: "The 20th century tested France like no other. The trenches of Verdun marked a generation; the Occupation divided the nation between Vichy and Free France. The Resistance, led in spirit by De Gaulle, liberated Paris in August 1944.",
  s6_kf1_l: "Liberation", s6_kf1_v: "Paris, 1944",
  s6_kf2_l: "Fifth Republic", s6_kf2_v: "1958",
  s6_kf3_l: "Euro", s6_kf3_v: "1999",
  s6_sub_h: "Europe, culture, and the future.",
  s6_sub_b: "Founded in 1958, the Fifth Republic rebuilt France as a modern democracy at the heart of the European Union. From the Treaty of Rome to the euro, from the Louvre Pyramid to the Paris 2024 Olympics, France keeps shaping global culture.",

  // Timeline
  tl_eyebrow: "— Chronology",
  tl_title_1: "Twenty thousand years of ",
  tl_title_2: "history",
  tl_title_3: ".",
  tl_intro: "A living frieze of the moments that forged France — from the paintings of Lascaux to the Paris 2024 Olympics.",
  tl_e1_t: "Lascaux", tl_e1_y: "~17,000 BC", tl_e1_d: "First cave paintings — the dawn of human memory.",
  tl_e2_t: "The Gauls", tl_e2_y: "1200 BC", tl_e2_d: "Celtic tribes, fortified oppida, druids and European trade.",
  tl_e3_t: "Caesar conquers Gaul", tl_e3_y: "52 BC", tl_e3_d: "Vercingetorix falls at Alesia. Five centuries of Roman peace.",
  tl_e4_t: "Clovis", tl_e4_y: "5th century", tl_e4_d: "Frankish unification and Christian baptism — birth of a kingdom.",
  tl_e5_t: "Charlemagne", tl_e5_y: "800", tl_e5_d: "Crowned Emperor of the West. Carolingian Renaissance.",
  tl_e6_t: "Treaty of Verdun", tl_e6_y: "843", tl_e6_d: "Partition of the empire — West Francia becomes France.",
  tl_e7_t: "Hundred Years' War", tl_e7_y: "1337–1453", tl_e7_d: "Joan of Arc reverses fate and has Charles VII crowned.",
  tl_e8_t: "Edict of Nantes", tl_e8_y: "1598", tl_e8_d: "Henry IV proclaims religious tolerance.",
  tl_e9_t: "French Revolution", tl_e9_y: "1789", tl_e9_d: "Storming of the Bastille. Liberty, Equality, Fraternity.",
  tl_e10_t: "Napoleon", tl_e10_y: "1804", tl_e10_d: "Emperor of the French. The Civil Code reshapes Europe.",
  tl_e11_t: "World Wars", tl_e11_y: "1914–1945", tl_e11_d: "Verdun, Resistance, Liberation — the trial of a century.",
  tl_e12_t: "Fifth Republic", tl_e12_y: "1958", tl_e12_d: "De Gaulle founds modern France.",
  tl_e13_t: "European Union", tl_e13_y: "1992", tl_e13_d: "Maastricht Treaty. A nation at the heart of Europe.",

  // Archives
  arch_eyebrow: "— Archives",
  arch_title_1: "Open the ",
  arch_title_2: "folders",
  arch_title_3: " of memory.",
  arch_intro: "Three historical collections — documents, maps, key figures. Click to explore.",
  arch_label: "Project done by",

  // Bento
  bento_eyebrow: "— Constellation",
  bento_title_1: "Six faces of a single ",
  bento_title_2: "nation",
  bento_title_3: ".",
  bento_intro: "Each card is a doorway. Hover to feel the living matter of France.",
  b1_t: "Revolution", b1_s: "01 / Rupture", b1_d: "Birth of democracy — 1789, the people become a nation and redraw Europe's destiny.",
  b2_t: "Culture", b2_s: "02 / Heritage", b2_d: "Art and global influence — from Molière to Camus, a language that sculpts thought.",
  b3_t: "Philosophy", b3_s: "03 / Light", b3_d: "The Enlightenment — Voltaire, Rousseau, Diderot, architects of modern reason.",
  b4_t: "Empire", b4_s: "04 / Conquest", b4_d: "Napoleonic expansion — a France that redrew the map of the continent.",
  b5_t: "Society", b5_s: "05 / Republic", b5_d: "Social transformation — Liberty, Equality, Fraternity, an endless promise.",
  b6_t: "Innovation", b6_s: "06 / Avant-garde", b6_d: "Modern France — from Lumière cinema to aerospace, a spirit in motion.",

  // Footer
  ft_eyebrow: "— Epilogue",
  ft_title_1: "History ",
  ft_title_2: "continues",
  ft_title_3: ", and you are what comes next.",
  ft_back: "Return to the beginning",
  ft_explore: "Explore",
  ft_l_history: "History",
  ft_l_eras: "Eras",
  ft_l_culture: "Culture",
  ft_l_manifesto: "Manifesto",
  ft_l_archives: "Archives",
  ft_l_contact: "Contact",
  ft_tag: "— A digital museum of France.",
};

export const translations = { fr, en };
export type TranslationKey = keyof typeof fr;
