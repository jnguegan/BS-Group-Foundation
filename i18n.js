/* BS Group Foundation i18n.js (EN/FR/ES)
   - Works on BOTH key styles:
     "nav.about" AND "nav_about"
   - Persists language in localStorage
   - Syncs all <select data-lang-select="bsgf"> controls
   - Translates text + placeholders + aria-labels (if present)
*/

(function () {
  const STORAGE_KEY = "bsgf_lang";
  const DEFAULT_LANG = "en";

  const translations = {
    en: {
      // Brand / labels
      "brand.tag": "Education • Sport • Health • Skills • Opportunity",
      "label.language": "Language",

      // Nav (dot style)
      "nav.about": "About",
      "nav.impact": "Impact Areas",
      "nav.programs": "Programs",
      "nav.sponsorChild": "Sponsor a Child",
      "nav.sponsorSchool": "Sponsor a School",
      "nav.flagship": "Flagship Project",
      "nav.events": "Events",
      "nav.contact": "Contact",

      // CTA (dot style)
      "cta.getInvolved": "Get Involved",
      "cta.donate": "Donate",
      "cta.menu": "Menu",
      "btn_get_involved": "Get Involved",
      "btn_donate": "Donate",
      "btn_home": "Home",
      "btn_contact": "Contact",
      "btn_partner": "Become a Partner",
      "btn_sponsor_school": "Sponsor a School",

      // Flagship content (underscore style used in your file)
      "flagship_badge": "Cameroon • Adamaoua Region • Primary & Secondary School",
      "flagship_h1": "Flagship Project: School Infrastructure Completion",
      "flagship_lead":
        "BS Group Foundation is supporting the completion of a Primary and Secondary Community School campus in the Adamaoua Region of Cameroon, integrating education, vocational skills and sport development.",
      "gallery_title": "Project Gallery",
      "gallery_sub":
        "Real images from our partner school campus in the Adamaoua Region, Cameroon, showing current facilities, construction progress and community engagement.",

      "cap_01": "Primary education classroom supporting vulnerable children.",
      "cap_02": "Campus overview showing multiple classroom blocks and expansion areas.",
      "cap_03": "Ongoing construction of new classrooms and facilities.",
      "cap_04": "Roof structure installation for new classroom buildings.",
      "cap_05": "Finished classroom block providing safe learning spaces.",
      "cap_06": "Exterior corridor connecting classrooms and facilities.",
      "cap_07": "School ceremony celebrating students and community involvement.",
      "cap_08": "Community gathering highlighting strong local support for the school.",
      "cap_09": "Large community event hosted on the school campus.",
      "cap_10": "Completed infrastructure supporting education and community activities.",

      "flagship_note":
        "Primary School is operational. Secondary School infrastructure is in place and currently in the final administrative and authorization phase before opening.",

      "sec_status_title": "Project Location & Institutional Status",
      "sec_status_p1":
        "This project is implemented in partnership with an established <strong>Primary and Secondary Community School</strong> located in the <strong>Adamaoua Region, Cameroon</strong>.",
      "sec_status_p2":
        "The school currently operates as a fully authorized <strong>Primary School</strong>. The <strong>Secondary School</strong> is under development and is not yet operational due to funding, ongoing administrative paperwork and authorization requirements.",

      "sec_build_title": "What We Are Building",
      "build_1_title": "Multi-sport Training Ground",
      "build_1_li1": "Football, basketball, volleyball",
      "build_1_li2": "Athletics & fitness",
      "build_1_li3": "Safety fencing and basic lighting",

      "build_2_title": "Skills & Employability Workshops",
      "build_2_li1": "Carpentry",
      "build_2_li2": "Mechanics",
      "build_2_li3": "Plumbing",
      "build_2_li4": "Electrical installation",
      "build_2_li5": "Computer & digital skills",

      "build_3_title": "Support Facilities",
      "build_3_li1": "Instructor rooms & training spaces",
      "build_3_li2": "Tools storage & utilities",
      "build_3_li3": "Monitoring & reporting",

      "sec_serves_title": "Who This Project Serves",
      "serves_1_title": "Direct beneficiaries",
      "serves_1_li1": "300–600 students per year",
      "serves_1_li2": "Children and youth from vulnerable backgrounds",
      "serves_1_li3": "Young women entering technical training",

      "serves_2_title": "Long-term outcomes",
      "serves_2_li1": "Expanded access to secondary education",
      "serves_2_li2": "Employability and entrepreneurship pathways",
      "serves_2_li3": "Reduced dropout rates and youth unemployment",

      "cta_title": "Want to support this flagship project?",
      "cta_sub": "Partner with us, sponsor a component, or fund a priority need.",
    },

    fr: {
      "brand.tag": "Éducation • Sport • Santé • Compétences • Opportunités",
      "label.language": "Langue",

      "nav.about": "À propos",
      "nav.impact": "Domaines d’impact",
      "nav.programs": "Programmes",
      "nav.sponsorChild": "Parrainer un enfant",
      "nav.sponsorSchool": "Parrainer une école",
      "nav.flagship": "Projet phare",
      "nav.events": "Événements",
      "nav.contact": "Contact",

      "cta.getInvolved": "S’impliquer",
      "cta.donate": "Faire un don",
      "cta.menu": "Menu",
      "btn_get_involved": "S’impliquer",
      "btn_donate": "Faire un don",
      "btn_home": "Accueil",
      "btn_contact": "Contact",
      "btn_partner": "Devenir partenaire",
      "btn_sponsor_school": "Parrainer une école",

      "flagship_badge": "Cameroun • Région de l’Adamaoua • Primaire & Secondaire",
      "flagship_h1": "Projet phare : Finalisation des infrastructures scolaires",
      "flagship_lead":
        "BS Group Foundation soutient l’achèvement d’un campus scolaire communautaire (primaire et secondaire) dans la région de l’Adamaoua au Cameroun, en intégrant éducation, compétences professionnelles et développement sportif.",
      "gallery_title": "Galerie du projet",
      "gallery_sub":
        "Images réelles de notre école partenaire dans la région de l’Adamaoua (Cameroun), montrant les installations actuelles, l’avancement des travaux et l’engagement communautaire.",

      "cap_01": "Salle de classe du primaire soutenant des enfants vulnérables.",
      "cap_02": "Vue d’ensemble du campus avec plusieurs bâtiments et zones d’extension.",
      "cap_03": "Construction en cours de nouvelles salles et infrastructures.",
      "cap_04": "Installation de la charpente/toiture pour de nouveaux bâtiments.",
      "cap_05": "Bâtiment terminé offrant un espace d’apprentissage sécurisé.",
      "cap_06": "Couloir extérieur reliant les salles et les installations.",
      "cap_07": "Cérémonie scolaire célébrant les élèves et la communauté.",
      "cap_08": "Rassemblement communautaire montrant le fort soutien local.",
      "cap_09": "Grand événement communautaire organisé sur le campus.",
      "cap_10": "Infrastructures achevées soutenant l’éducation et la communauté.",

      "flagship_note":
        "L’école primaire est opérationnelle. Les infrastructures du secondaire sont en place et se trouvent actuellement dans la phase finale administrative et d’autorisation avant l’ouverture.",

      "sec_status_title": "Localisation & statut institutionnel",
      "sec_status_p1":
        "Ce projet est mis en œuvre en partenariat avec une <strong>école communautaire primaire et secondaire</strong> située dans la <strong>région de l’Adamaoua, Cameroun</strong>.",
      "sec_status_p2":
        "L’école fonctionne actuellement comme <strong>école primaire</strong> pleinement autorisée. Le <strong>secondaire</strong> est en développement et n’est pas encore opérationnel en raison du financement, des démarches administratives en cours et des exigences d’autorisation.",

      "sec_build_title": "Ce que nous construisons",
      "build_1_title": "Terrain d’entraînement multisports",
      "build_1_li1": "Football, basketball, volleyball",
      "build_1_li2": "Athlétisme & fitness",
      "build_1_li3": "Clôture de sécurité et éclairage de base",

      "build_2_title": "Ateliers compétences & employabilité",
      "build_2_li1": "Menuiserie",
      "build_2_li2": "Mécanique",
      "build_2_li3": "Plomberie",
      "build_2_li4": "Installation électrique",
      "build_2_li5": "Informatique & compétences numériques",

      "build_3_title": "Infrastructures de soutien",
      "build_3_li1": "Salles formateurs & espaces de formation",
      "build_3_li2": "Stockage des outils & utilitaires",
      "build_3_li3": "Suivi & reporting",

      "sec_serves_title": "À qui sert ce projet",
      "serves_1_title": "Bénéficiaires directs",
      "serves_1_li1": "300–600 élèves par an",
      "serves_1_li2": "Enfants et jeunes issus de milieux vulnérables",
      "serves_1_li3": "Jeunes femmes accédant à la formation technique",

      "serves_2_title": "Résultats à long terme",
      "serves_2_li1": "Accès élargi au secondaire",
      "serves_2_li2": "Parcours vers l’emploi et l’entrepreneuriat",
      "serves_2_li3": "Réduction du décrochage et du chômage des jeunes",

      "cta_title": "Vous souhaitez soutenir ce projet phare ?",
      "cta_sub": "Devenez partenaire, parrainez un composant ou financez un besoin prioritaire.",
    },

    es: {
      "brand.tag": "Educación • Deporte • Salud • Competencias • Oportunidades",
      "label.language": "Idioma",

      "nav.about": "Acerca de",
      "nav.impact": "Áreas de impacto",
      "nav.programs": "Programas",
      "nav.sponsorChild": "Apadrinar a un niño",
      "nav.sponsorSchool": "Apadrinar una escuela",
      "nav.flagship": "Proyecto insignia",
      "nav.events": "Eventos",
      "nav.contact": "Contacto",

      "cta.getInvolved": "Participar",
      "cta.donate": "Donar",
      "cta.menu": "Menú",
      "btn_get_involved": "Participar",
      "btn_donate": "Donar",
      "btn_home": "Inicio",
      "btn_contact": "Contacto",
      "btn_partner": "Ser socio",
      "btn_sponsor_school": "Apadrinar una escuela",

      "flagship_badge": "Camerún • Región de Adamaoua • Primaria y Secundaria",
      "flagship_h1": "Proyecto insignia: Finalización de infraestructura escolar",
      "flagship_lead":
        "BS Group Foundation apoya la finalización de un campus escolar comunitario (primaria y secundaria) en la región de Adamaoua, Camerún, integrando educación, formación profesional y desarrollo deportivo.",
      "gallery_title": "Galería del proyecto",
      "gallery_sub":
        "Imágenes reales de nuestra escuela socia en Adamaoua (Camerún), mostrando instalaciones actuales, avance de obras y participación comunitaria.",

      "cap_01": "Aula de primaria apoyando a niños vulnerables.",
      "cap_02": "Vista del campus con varios bloques y zonas de expansión.",
      "cap_03": "Construcción en curso de nuevas aulas e instalaciones.",
      "cap_04": "Instalación de la estructura del techo para nuevos edificios.",
      "cap_05": "Bloque terminado con espacios seguros de aprendizaje.",
      "cap_06": "Pasillo exterior que conecta aulas e instalaciones.",
      "cap_07": "Ceremonia escolar celebrando al alumnado y la comunidad.",
      "cap_08": "Encuentro comunitario con fuerte apoyo local a la escuela.",
      "cap_09": "Gran evento comunitario celebrado en el campus.",
      "cap_10": "Infraestructura completada que apoya educación y comunidad.",

      "flagship_note":
        "La escuela primaria está operativa. La infraestructura de secundaria está en su fase final administrativa y de autorización antes de abrir.",

      "sec_status_title": "Ubicación y estado institucional",
      "sec_status_p1":
        "Este proyecto se implementa en colaboración con una <strong>escuela comunitaria de primaria y secundaria</strong> ubicada en la <strong>región de Adamaoua, Camerún</strong>.",
      "sec_status_p2":
        "La escuela opera actualmente como <strong>primaria</strong> plenamente autorizada. La <strong>secundaria</strong> está en desarrollo y aún no está operativa por financiación, trámites administrativos y requisitos de autorización.",

      "sec_build_title": "Qué estamos construyendo",
      "build_1_title": "Campo de entrenamiento multideporte",
      "build_1_li1": "Fútbol, baloncesto, voleibol",
      "build_1_li2": "Atletismo y fitness",
      "build_1_li3": "Vallado de seguridad e iluminación básica",

      "build_2_title": "Talleres de competencias y empleabilidad",
      "build_2_li1": "Carpintería",
      "build_2_li2": "Mecánica",
      "build_2_li3": "Fontanería",
      "build_2_li4": "Instalación eléctrica",
      "build_2_li5": "Informática y habilidades digitales",

      "build_3_title": "Instalaciones de apoyo",
      "build_3_li1": "Salas de instructores y espacios de formación",
      "build_3_li2": "Almacén de herramientas y servicios",
      "build_3_li3": "Seguimiento e informes",

      "sec_serves_title": "A quién sirve este proyecto",
      "serves_1_title": "Beneficiarios directos",
      "serves_1_li1": "300–600 estudiantes por año",
      "serves_1_li2": "Niños y jóvenes de entornos vulnerables",
      "serves_1_li3": "Jóvenes mujeres en formación técnica",

      "serves_2_title": "Resultados a largo plazo",
      "serves_2_li1": "Mayor acceso a educación secundaria",
      "serves_2_li2": "Rutas hacia empleo y emprendimiento",
      "serves_2_li3": "Menos abandono escolar y desempleo juvenil",

      "cta_title": "¿Quieres apoyar este proyecto insignia?",
      "cta_sub": "Asóciate con nosotros, patrocina un componente o financia una prioridad.",
    },
  };

  function getSavedLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function normalizeKeyVariants(key) {
    // supports both dot and underscore formats
    return [
      key,
      key.replace(/\./g, "_"),
      key.replace(/_/g, "."),
    ];
  }

  function t(lang, key) {
    const dict = translations[lang] || translations.en;
    const fallback = translations.en;

    for (const k of normalizeKeyVariants(key)) {
      if (dict[k] != null) return dict[k];
    }
    for (const k of normalizeKeyVariants(key)) {
      if (fallback[k] != null) return fallback[k];
    }
    return null;
  }

  function applyTranslations(lang) {
    // Set <html lang="">
    try {
      document.documentElement.lang = lang;
    } catch (e) {}

    // Translate text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(lang, key);
      if (value != null) el.innerHTML = value;
    });

    // Translate placeholders if you use data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = t(lang, key);
      if (value != null) el.setAttribute("placeholder", value);
    });

    // Translate aria-labels if you use data-i18n-aria
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const value = t(lang, key);
      if (value != null) el.setAttribute("aria-label", value);
    });
  }

  function syncLanguageSelects(lang) {
    document.querySelectorAll('select[data-lang-select="bsgf"]').forEach((sel) => {
      sel.value = lang;
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    syncLanguageSelects(lang);
    applyTranslations(lang);
  }

  // Init
  document.addEventListener("DOMContentLoaded", () => {
    const initialLang = getSavedLang();
    syncLanguageSelects(initialLang);
    applyTranslations(initialLang);

    document.querySelectorAll('select[data-lang-select="bsgf"]').forEach((sel) => {
      sel.addEventListener("change", (e) => {
        setLang(e.target.value);
      });
    });
  });

  // Expose for debug

