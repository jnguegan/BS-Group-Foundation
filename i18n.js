/* i18n.js — BS Group Foundation (EN/FR/ES) */
(function () {
  const STORAGE_KEY = "bsgf_lang";
  const supported = ["en", "fr", "es"];

  const dict = {
    en: {
      // NAV
      nav_about: "About",
      nav_impact: "Impact Areas",
      nav_programs: "Programs",
      nav_sponsor_child: "Sponsor a Child",
      nav_sponsor_school: "Sponsor a School",
      nav_flagship: "Flagship Project",
      nav_events: "Events",
      nav_contact: "Contact",

      // HERO
      hero_title: "Empowering Children & Communities Through Opportunity",
      hero_text:
        "BS Group Foundation supports vulnerable children, schools and communities through education access, sport development, healthcare, vocational skills, women empowerment and entrepreneurship — creating sustainable pathways to dignity, employment and long-term success.",

      btn_sponsor_child: "Sponsor a Child",
      btn_sponsor_school: "Sponsor a School",
      btn_support_flagship: "Support Flagship Project",
      btn_get_involved: "Get Involved",
      btn_donate: "Donate",

      // FLAGSHIP (page + section)
      flagship_focus: "FLAGSHIP FOCUS",
      flagship_title: "School Infrastructure Completion (Africa)",
      flagship_intro:
        "We are supporting an existing partner school to complete critical infrastructure:",
      gallery_title: "Project Gallery",
      gallery_sub:
        "Real images from our partner school campus in the Adamaoua Region, Cameroon, showing current facilities, construction progress and community engagement."
    },

    fr: {
      // NAV
      nav_about: "À propos",
      nav_impact: "Axes d’impact",
      nav_programs: "Programmes",
      nav_sponsor_child: "Parrainer un enfant",
      nav_sponsor_school: "Parrainer une école",
      nav_flagship: "Projet phare",
      nav_events: "Événements",
      nav_contact: "Contact",

      // HERO
      hero_title: "Donner aux enfants et aux communautés les moyens de réussir",
      hero_text:
        "BS Group Foundation soutient les enfants vulnérables, les écoles et les communautés à travers l’accès à l’éducation, le développement du sport, la santé, les compétences professionnelles, l’autonomisation des femmes et l’entrepreneuriat — en créant des parcours durables vers la dignité, l’emploi et la réussite à long terme.",

      btn_sponsor_child: "Parrainer un enfant",
      btn_sponsor_school: "Parrainer une école",
      btn_support_flagship: "Soutenir le projet phare",
      btn_get_involved: "S’impliquer",
      btn_donate: "Faire un don",

      // FLAGSHIP
      flagship_focus: "PROJET PHARE",
      flagship_title: "Achèvement des infrastructures scolaires (Afrique)",
      flagship_intro:
        "Nous soutenons une école partenaire existante pour finaliser des infrastructures essentielles :",
      gallery_title: "Galerie du projet",
      gallery_sub:
        "Images réelles du campus scolaire partenaire dans la région de l’Adamaoua, au Cameroun, montrant les installations actuelles, l’avancement des travaux et l’implication de la communauté."
    },

    es: {
      // NAV
      nav_about: "Acerca de",
      nav_impact: "Áreas de impacto",
      nav_programs: "Programas",
      nav_sponsor_child: "Apadrinar a un niño",
      nav_sponsor_school: "Apadrinar una escuela",
      nav_flagship: "Proyecto principal",
      nav_events: "Eventos",
      nav_contact: "Contacto",

      // HERO
      hero_title: "Impulsando a niños y comunidades mediante oportunidades",
      hero_text:
        "BS Group Foundation apoya a niños vulnerables, escuelas y comunidades mediante acceso a la educación, desarrollo deportivo, salud, formación profesional, empoderamiento de la mujer y emprendimiento — creando caminos sostenibles hacia la dignidad, el empleo y el éxito a largo plazo.",

      btn_sponsor_child: "Apadrinar a un niño",
      btn_sponsor_school: "Apadrinar una escuela",
      btn_support_flagship: "Apoyar el proyecto",
      btn_get_involved: "Participar",
      btn_donate: "Donar",

      // FLAGSHIP
      flagship_focus: "PROYECTO PRINCIPAL",
      flagship_title: "Finalización de infraestructura escolar (África)",
      flagship_intro:
        "Apoyamos a una escuela socia existente para completar infraestructura crítica:",
      gallery_title: "Galería del proyecto",
      gallery_sub:
        "Imágenes reales del campus escolar socio en la región de Adamaoua, Camerún, que muestran las instalaciones actuales, el progreso de la construcción y la participación de la comunidad."
    }
  };

  function apply(lang) {
    if (!supported.includes(lang)) lang = "en";
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute("lang", lang);

    // Update all [data-i18n]
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[lang] && dict[lang][key];
      if (typeof val === "string") el.textContent = val;
    });

    // Update any selects
    document.querySelectorAll('[data-lang-select="bsgf"]').forEach((sel) => {
      sel.value = lang;
    });
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY) || "en";
    apply(saved);

    // Wire selectors
    document.querySelectorAll('[data-lang-select="bsgf"]').forEach((sel) => {
      sel.addEventListener("change", (e) => apply(e.target.value));
    });

    // Wire buttons (optional)
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => apply(btn.getAttribute("data-lang-btn")));
    });
  }

  window.bsgfSetLang = apply;
  document.addEventListener("DOMContentLoaded", init);
})();

