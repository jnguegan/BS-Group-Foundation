/* i18n.js — BS Group Foundation (EN / FR / ES)
   - No frameworks
   - Beginner maintainable
   - Works across pages (Index.html + flagship.html)
*/

(function () {
  const STORE_KEY = "bsgf_lang";
  const DEFAULT_LANG = "en";

  const translations = {
    en: {
      "brand.tag": "Education • Sport • Health • Skills • Opportunity",

      "label.language": "Language",

      "nav.about": "About",
      "nav.impact": "Impact Areas",
      "nav.programs": "Programs",
      "nav.sponsorChild": "Sponsor a Child",
      "nav.sponsorSchool": "Sponsor a School",
      "nav.flagship": "Flagship Project",
      "nav.events": "Events",
      "nav.contact": "Contact",

      "cta.getInvolved": "Get Involved",
      "cta.donate": "Donate",
      "cta.menu": "Menu",

      "hero.badge": "🌍 Africa-focused programs • Transparent reporting • Sustainable impact",
      "hero.h1": "Empowering Children & Communities Through Opportunity",
      "hero.lead":
        "BS Group Foundation supports vulnerable children, schools and communities through education access, sport development, healthcare, vocational skills, women empowerment and entrepreneurship — creating sustainable pathways to dignity, employment and long-term success.",
      "hero.btn.sponsorChild": "Sponsor a Child",
      "hero.btn.sponsorSchool": "Sponsor a School",
      "hero.btn.supportFlagship": "Support Flagship Project",
      "hero.corporateLine": "For corporate/institutional partnerships, visit",
      "hero.corporateLink": "Get Involved",

      "stats.education.title": "Education Access",
      "stats.education.desc": "Fees, materials, mentoring & school support",
      "stats.sport.title": "Sport & Youth Development",
      "stats.sport.desc": "Discipline, teamwork and opportunity",
      "stats.skills.title": "Skills & Employability",
      "stats.skills.desc": "Workshops for practical trades & digital skills",
      "stats.health.title": "Health & Wellbeing",
      "stats.health.desc": "Nutrition, hygiene and community care",

      "flagship.kicker": "Flagship Focus",
      "flagship.title": "School Infrastructure Completion (Africa)",
      "flagship.intro": "We are supporting an existing partner school to complete critical infrastructure:",
      "flagship.li1": "<b>Multi-sport training ground</b> (football, basketball, volleyball, athletics/fitness)",
      "flagship.li2": "<b>Workshops facility</b> for skills training",
      "flagship.li3": "Carpentry • Mechanics • Plumbing • Electrical • Computer lab",
      "flagship.btn.view": "View Project",
      "flagship.note": "Sponsors receive progress updates, photos/videos, and clear reporting for funded components.",

      "about.h2": "About the Foundation",
      "about.p":
        "BS Group Foundation is dedicated to long-term community development by combining education, youth development, health, skills training, women empowerment and entrepreneurship.",
      "about.mission.kicker": "Mission",
      "about.mission.h3": "Opportunity & Dignity",
      "about.mission.p":
        "To empower children, youth and communities by providing access to quality education, sport, healthcare, vocational skills and entrepreneurship opportunities — enabling long-term social and economic development.",
      "about.vision.kicker": "Vision",
      "about.vision.h3": "Sustainable Futures",
      "about.vision.p":
        "Inclusive communities where every child and young person, regardless of background, can learn, grow, work and lead with confidence, purpose and dignity.",
      "about.values.kicker": "Values",
      "about.values.h3": "Integrity & Impact",
      "about.values.p":
        "Integrity, transparency, respect, inclusion and measurable outcomes guide all our programs and partnerships.",

      "impact.h2": "Impact Areas",
      "impact.p": "Our programs are designed to deliver measurable change for children, families and communities.",
      "impact.c1.h3": "🎓 Education Access",
      "impact.c1.p": "School sponsorships, infrastructure support, learning materials, scholarships and mentoring for vulnerable children.",
      "impact.c2.h3": "⚽ Sport Development",
      "impact.c2.p": "Youth sport programs, facilities, training camps and talent development for discipline and opportunity.",
      "impact.c3.h3": "🏥 Health & Wellbeing",
      "impact.c3.p": "Basic healthcare access, nutrition support, hygiene education and community health initiatives.",
      "impact.c4.h3": "🛠 Skills & Employability",
      "impact.c4.p": "Vocational training in carpentry, mechanics, plumbing, electrical engineering, digital skills and trades.",
      "impact.c5.h3": "👩 Women Empowerment",
      "impact.c5.p": "Programs that support women’s education, leadership, wellbeing and economic participation.",
      "impact.c6.h3": "🚀 Entrepreneurship",
      "impact.c6.p": "Micro-enterprise support, mentorship, practical training and community business development.",

      "programs.h2": "Programs",
      "programs.p":
        "Support children and communities directly — sponsor a child, sponsor a school, or fund flagship infrastructure components.",
      "programs.cardProgram.kicker": "Program",
      "programs.cardProject.kicker": "Project",
      "programs.child.h3": "Sponsor a Child",
      "programs.child.p": "Support an orphaned or disadvantaged child in Africa with education, sport, nutrition and mentorship.",
      "programs.school.h3": "Sponsor a School",
      "programs.school.p": "Transform a school through learning resources, facilities, and sustainable community development.",
      "programs.flagship.h3": "Flagship School Infrastructure",
      "programs.flagship.p":
        "Help complete a multi-sport ground and vocational workshops: carpentry, mechanics, plumbing, electrical & computer lab.",
      "programs.learnMore": "Learn more",
      "programs.viewProject": "View project",

      "child.h2": "Sponsor a Child",
      "child.p": "Support an orphaned child or a child from a poor background — by funding education, protection, and development opportunities.",
      "child.support.kicker": "What your support provides",
      "child.support.h3": "Direct child impact",
      "child.support.li1": "School fees and registration",
      "child.support.li2": "Uniforms and learning materials",
      "child.support.li3": "Sports training and equipment",
      "child.support.li4": "Nutrition support",
      "child.support.li5": "Basic medical care",
      "child.support.li6": "Mentorship & life-skills guidance",
      "child.support.note": "Sponsors receive progress updates and an annual impact summary (photos and reporting where available).",
      "child.options.kicker": "Sponsorship options",
      "child.options.h3": "Choose a level",

      "pricing.perMonth": "per month",
      "pricing.perYear": "per year",
      "pricing.sponsorBtn": "Sponsor",
      "pricing.enquireBtn": "Enquire",

      "child.pricing.basic.title": "Basic Sponsor",
      "child.pricing.basic.li1": "Education contribution",
      "child.pricing.basic.li2": "Learning materials",
      "child.pricing.basic.li3": "Annual progress update",

      "child.pricing.full.title": "Full Child Sponsor",
      "child.pricing.full.li1": "Full school support",
      "child.pricing.full.li2": "Uniforms & books",
      "child.pricing.full.li3": "Sports equipment",
      "child.pricing.full.li4": "Quarterly updates",

      "child.pricing.champion.title": "Champion Sponsor",
      "child.pricing.champion.li1": "Education + development support",
      "child.pricing.champion.li2": "Health & nutrition assistance",
      "child.pricing.champion.li3": "Bi-annual detailed report",
      "child.pricing.champion.li4": "Impact certificate",

      "child.pricing.patron.title": "Annual Patron",
      "child.pricing.patron.li1": "Full annual scholarship support",
      "child.pricing.patron.li2": "Named sponsorship option (optional)",
      "child.pricing.patron.li3": "Recognition on website (optional)",
      "child.pricing.patron.li4": "Invitation to foundation events",

      "child.paymentsNote": "Payments can be monthly or annual. Manual bank donations can be arranged on request.",

      "school.h2": "Sponsor a School",
      "school.p": "Fund education and infrastructure to impact hundreds of children every year.",
      "school.fund.kicker": "What sponsors can fund",
      "school.fund.h3": "School development areas",
      "school.fund.li1": "Classroom renovation or construction",
      "school.fund.li2": "Sports facilities and equipment",
      "school.fund.li3": "Books, computers and learning tools",
      "school.fund.li4": "Teacher training and support",
      "school.fund.li5": "School feeding programs",
      "school.fund.li6": "Water, sanitation and hygiene facilities",
      "school.csr": "Corporate and institutional sponsors can receive CSR/ESG-friendly reporting.",

      "school.packages.kicker": "Packages",
      "school.packages.h3": "Sponsorship packages",
      "school.pricing.community.title": "Community Supporter",
      "school.pricing.community.li1": "Equipment & learning materials",
      "school.pricing.community.li2": "Website recognition",
      "school.pricing.community.li3": "Annual report",
      "school.pricing.partner.title": "Education Partner",
      "school.pricing.partner.li1": "Classroom support",
      "school.pricing.partner.li2": "Teacher assistance",
      "school.pricing.partner.li3": "Annual impact report",
      "school.pricing.gold.title": "Gold School Sponsor",
      "school.pricing.gold.li1": "Major project component",
      "school.pricing.gold.li2": "Brand visibility (optional)",
      "school.pricing.gold.li3": "Media & PR support",
      "school.pricing.strategic.title": "Strategic Partner",
      "school.pricing.strategic.li1": "Full development program",
      "school.pricing.strategic.li2": "Long-term partnership agreement",
      "school.pricing.strategic.li3": "CSR/ESG reporting support",
      "school.tailor": "We can tailor sponsorship to your priorities: education, sport, health, skills and community development.",

      "flagshipSection.h2": "Flagship Project: School Infrastructure Completion (Africa)",
      "flagshipSection.p":
        "An existing partner school needs funding to complete infrastructure that combines multi-sport development with vocational training: carpentry, mechanics, plumbing, electrical engineering and a computer lab.",
      "flagshipSection.components.kicker": "Components",
      "flagshipSection.components.h3": "What we are building",
      "flagshipSection.components.li1": "<b>Multi-sport training ground</b> (football, basketball, volleyball, athletics/fitness)",
      "flagshipSection.components.li2": "<b>Workshops facility</b> for practical skills education",
      "flagshipSection.components.li3": "Carpentry workshop",
      "flagshipSection.components.li4": "Mechanical workshop",
      "flagshipSection.components.li5": "Plumbing workshop",
      "flagshipSection.components.li6": "Electrical engineering workshop",
      "flagshipSection.components.li7": "Computer & digital skills lab",
      "flagshipSection.components.note":
        "This project is designed as a model campus where students learn, train and graduate with real skills and real opportunity.",
      "flagshipSection.sponsor.kicker": "Sponsor components",
      "flagshipSection.sponsor.h3": "Funding opportunities",
      "flagshipSection.sponsor.li1": "<b>€5,000</b> — Facility Supporter (tools & basic equipment)",
      "flagshipSection.sponsor.li2":
        "<b>€10,000</b> — Sponsor a Workshop (choose: carpentry / mechanics / plumbing / electrical / computer lab)",
      "flagshipSection.sponsor.li3": "<b>€20,000</b> — Sponsor the Sports Ground (construction + equipment)",
      "flagshipSection.sponsor.li4": "<b>€50,000+</b> — Strategic Campus Partner (major completion & long-term partnership)",
      "flagshipSection.sponsor.btn1": "Sponsor a component",
      "flagshipSection.sponsor.btn2": "Request details",
      "flagshipSection.sponsor.note": "Sponsors receive progress updates, photos/videos and a completion report for funded components.",
      "flagshipSection.transparency.kicker": "Transparency",
      "flagshipSection.transparency.h3": "Governance & accountability",
      "flagshipSection.transparency.p":
        "BS Group Foundation works with verified local partners and school leadership. Funds are allocated to agreed components, with monitoring, documentation and progress reporting to ensure responsible use and measurable impact.",

      "events.h2": "Events",
      "events.p": "We host fundraising and community events to support our programs and projects.",
      "events.c1.kicker": "Fundraising",
      "events.c1.h3": "Charity Gala & Dinner",
      "events.c1.p": "Corporate-friendly event with presentations, pledges and partnerships.",
      "events.c2.kicker": "Sport",
      "events.c2.h3": "Charity Match / Tournament",
      "events.c2.p": "Community engagement, youth spotlight, and sponsor activations.",
      "events.c3.kicker": "Community",
      "events.c3.h3": "Skills & Mentorship Day",
      "events.c3.p": "Workshops, careers guidance and mentorship sessions for youth and families.",

      "donate.h2": "Donate",
      "donate.p": "You can donate toward child sponsorship, school sponsorship, or specific flagship project components.",
      "donate.c1.p": "Supports learning materials and essential equipment.",
      "donate.c2.p": "Helps fund tools, uniforms, and school resources.",
      "donate.c3.p": "Funds a measurable project component with reporting.",
      "donate.tip": "Tip: once you have a payment URL, replace the “Donate” buttons with that link.",

      "involved.h2": "Get Involved",
      "involved.p": "Tell us what you would like to sponsor.",
      "involved.how.kicker": "How it works",
      "involved.how.h3": "Simple & transparent process",
      "involved.how.li1": "Choose a program (Child / School / Flagship component)",
      "involved.how.li2": "We confirm details and provide documentation",
      "involved.how.li3": "Funds are allocated and monitored with updates",
      "involved.how.li4": "You receive progress reporting and impact summaries",
      "involved.how.note":
        "For corporate or institutional sponsorship, we can provide a partnership letter and CSR/ESG reporting structure.",
      "involved.form.h3": "Sponsorship interest form",

      "forms.honey.label": "Don’t fill this out:",
      "forms.fullName.label": "Full name",
      "forms.fullName.ph": "Your name",
      "forms.email.label": "Email",
      "forms.email.ph": "you@email.com",
      "forms.supportType.label": "I want to support",
      "forms.supportType.selectOne": "Select one",
      "forms.supportType.child": "Sponsor a Child",
      "forms.supportType.school": "Sponsor a School",
      "forms.supportType.flagship": "Flagship Project (Infrastructure)",
      "forms.supportType.health": "Health & Wellbeing Program",
      "forms.supportType.women": "Women Empowerment Program",
      "forms.supportType.entrepreneurship": "Entrepreneurship Program",
      "forms.supportType.general": "General Donation",
      "forms.supportType.corporate": "Corporate / Institutional Partnership",
      "forms.budget.label": "Budget (optional)",
      "forms.budget.choose": "Choose",
      "forms.budget.b1": "€25–€100 / month",
      "forms.budget.b2": "€250–€1,000",
      "forms.budget.b3": "€2,500–€10,000",
      "forms.budget.b4": "€10,000–€25,000",
      "forms.budget.b5": "€25,000+",
      "forms.message.label": "Message",
      "forms.message.ph": "Tell us what you would like to sponsor and any questions you have.",
      "forms.submit": "Submit",
      "forms.consent": "By submitting, you agree we can contact you about sponsorship options and project details.",

      "contact.h2": "Contact",
      "contact.p": "Send us a message.",
      "contact.details.kicker": "Contact details",
      "contact.details.h3": "Let’s work together",
      "contact.details.emailLine": "Send us an email to:",
      "contact.details.or": "or",
      "contact.form.h3": "Contact form",
      "contact.form.messagePh": "How can we help?",
      "contact.form.send": "Send message",

      "footer.about":
        "Empowering children and communities through education, sport, health, skills development, women empowerment and entrepreneurship — building sustainable futures across Africa and emerging regions.",
      "footer.navigate": "Navigate",
      "footer.getInvolved": "Get involved",
      "footer.partnerships": "Partnerships",
      "footer.rights": "All rights reserved."
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

      "hero.badge": "🌍 Programmes centrés sur l’Afrique • Transparence • Impact durable",
      "hero.h1": "Donner des opportunités aux enfants et aux communautés",
      "hero.lead":
        "BS Group Foundation soutient les enfants vulnérables, les écoles et les communautés via l’accès à l’éducation, le développement sportif, la santé, les compétences professionnelles, l’autonomisation des femmes et l’entrepreneuriat — pour créer des voies durables vers la dignité, l’emploi et la réussite à long terme.",
      "hero.btn.sponsorChild": "Parrainer un enfant",
      "hero.btn.sponsorSchool": "Parrainer une école",
      "hero.btn.supportFlagship": "Soutenir le projet phare",
      "hero.corporateLine": "Pour les partenariats entreprise/institutionnels, consultez",
      "hero.corporateLink": "S’impliquer",

      "stats.education.title": "Accès à l’éducation",
      "stats.education.desc": "Frais, fournitures, mentorat et soutien scolaire",
      "stats.sport.title": "Sport & jeunesse",
      "stats.sport.desc": "Discipline, esprit d’équipe et opportunités",
      "stats.skills.title": "Compétences & employabilité",
      "stats.skills.desc": "Ateliers métiers et compétences numériques",
      "stats.health.title": "Santé & bien-être",
      "stats.health.desc": "Nutrition, hygiène et soins communautaires",

      "flagship.kicker": "Priorité du projet phare",
      "flagship.title": "Finalisation d’infrastructures scolaires (Afrique)",
      "flagship.intro": "Nous soutenons une école partenaire existante afin de finaliser des infrastructures essentielles :",
      "flagship.li1": "<b>Terrain multi-sports</b> (football, basket, volley, athlétisme/fitness)",
      "flagship.li2": "<b>Atelier de formation</b> pour l’apprentissage de compétences",
      "flagship.li3": "Menuiserie • Mécanique • Plomberie • Électricité • Salle informatique",
      "flagship.btn.view": "Voir le projet",
      "flagship.note": "Les sponsors reçoivent des mises à jour, des photos/vidéos et un reporting clair sur les éléments financés.",

      "about.h2": "À propos de la fondation",
      "about.p":
        "BS Group Foundation œuvre pour un développement communautaire durable en combinant éducation, jeunesse, santé, formation, autonomisation des femmes et entrepreneuriat.",
      "about.mission.kicker": "Mission",
      "about.mission.h3": "Opportunité & dignité",
      "about.mission.p":
        "Donner aux enfants, aux jeunes et aux communautés l’accès à une éducation de qualité, au sport, à la santé, aux compétences professionnelles et à l’entrepreneuriat — pour favoriser un développement social et économique à long terme.",
      "about.vision.kicker": "Vision",
      "about.vision.h3": "Avenirs durables",
      "about.vision.p":
        "Des communautés inclusives où chaque enfant et jeune, quel que soit son parcours, peut apprendre, grandir, travailler et diriger avec confiance, sens et dignité.",
      "about.values.kicker": "Valeurs",
      "about.values.h3": "Intégrité & impact",
      "about.values.p":
        "Intégrité, transparence, respect, inclusion et résultats mesurables guident tous nos programmes et partenariats.",

      "impact.h2": "Domaines d’impact",
      "impact.p": "Nos programmes visent un changement mesurable pour les enfants, les familles et les communautés.",
      "impact.c1.h3": "🎓 Accès à l’éducation",
      "impact.c1.p": "Parrainages scolaires, soutien aux infrastructures, fournitures, bourses et mentorat pour les enfants vulnérables.",
      "impact.c2.h3": "⚽ Développement sportif",
      "impact.c2.p": "Programmes sportifs jeunesse, infrastructures, camps et développement des talents pour la discipline et les opportunités.",
      "impact.c3.h3": "🏥 Santé & bien-être",
      "impact.c3.p": "Accès aux soins de base, soutien nutritionnel, éducation à l’hygiène et actions de santé communautaire.",
      "impact.c4.h3": "🛠 Compétences & employabilité",
      "impact.c4.p": "Formation professionnelle : menuiserie, mécanique, plomberie, électricité, compétences numériques et métiers.",
      "impact.c5.h3": "👩 Autonomisation des femmes",
      "impact.c5.p": "Programmes soutenant l’éducation des femmes, le leadership, le bien-être et la participation économique.",
      "impact.c6.h3": "🚀 Entrepreneuriat",
      "impact.c6.p": "Soutien aux micro-entreprises, mentorat, formation pratique et développement économique local.",

      "programs.h2": "Programmes",
      "programs.p":
        "Soutenez directement les enfants et les communautés — parrainez un enfant, parrainez une école ou financez des composantes du projet phare.",
      "programs.cardProgram.kicker": "Programme",
      "programs.cardProject.kicker": "Projet",
      "programs.child.h3": "Parrainer un enfant",
      "programs.child.p": "Soutenir un enfant orphelin ou défavorisé en Afrique : éducation, sport, nutrition et mentorat.",
      "programs.school.h3": "Parrainer une école",
      "programs.school.p": "Transformer une école grâce aux ressources pédagogiques, aux infrastructures et au développement communautaire.",
      "programs.flagship.h3": "Infrastructures scolaires (projet phare)",
      "programs.flagship.p":
        "Finaliser un terrain multi-sports et des ateliers : menuiserie, mécanique, plomberie, électricité et salle informatique.",
      "programs.learnMore": "En savoir plus",
      "programs.viewProject": "Voir le projet",

      "child.h2": "Parrainer un enfant",
      "child.p": "Soutenez un enfant orphelin ou issu d’un milieu précaire — en finançant l’éducation, la protection et des opportunités de développement.",
      "child.support.kicker": "Votre soutien finance",
      "child.support.h3": "Impact direct",
      "child.support.li1": "Frais scolaires et inscription",
      "child.support.li2": "Uniformes et fournitures",
      "child.support.li3": "Entraînement sportif et équipement",
      "child.support.li4": "Soutien nutritionnel",
      "child.support.li5": "Soins médicaux de base",
      "child.support.li6": "Mentorat et compétences de vie",
      "child.support.note": "Les sponsors reçoivent des mises à jour et un résumé annuel d’impact (photos/reporting selon disponibilité).",
      "child.options.kicker": "Options de parrainage",
      "child.options.h3": "Choisir un niveau",

      "pricing.perMonth": "par mois",
      "pricing.perYear": "par an",
      "pricing.sponsorBtn": "Parrainer",
      "pricing.enquireBtn": "Demander",

      "child.pricing.basic.title": "Parrainage essentiel",
      "child.pricing.basic.li1": "Contribution à l’éducation",
      "child.pricing.basic.li2": "Fournitures",
      "child.pricing.basic.li3": "Mise à jour annuelle",

      "child.pricing.full.title": "Parrainage complet",
      "child.pricing.full.li1": "Soutien scolaire complet",
      "child.pricing.full.li2": "Uniformes et livres",
      "child.pricing.full.li3": "Équipement sportif",
      "child.pricing.full.li4": "Mises à jour trimestrielles",

      "child.pricing.champion.title": "Parrainage champion",
      "child.pricing.champion.li1": "Éducation + développement",
      "child.pricing.champion.li2": "Soutien santé & nutrition",
      "child.pricing.champion.li3": "Rapport détaillé semestriel",
      "child.pricing.champion.li4": "Certificat d’impact",

      "child.pricing.patron.title": "Mécène annuel",
      "child.pricing.patron.li1": "Bourse annuelle complète",
      "child.pricing.patron.li2": "Parrainage nominatif (optionnel)",
      "child.pricing.patron.li3": "Reconnaissance sur le site (optionnel)",
      "child.pricing.patron.li4": "Invitation aux événements",

      "child.paymentsNote": "Paiements mensuels ou annuels. Des dons bancaires manuels peuvent être organisés sur demande.",

      "school.h2": "Parrainer une école",
      "school.p": "Financez l’éducation et les infrastructures pour impacter des centaines d’enfants chaque année.",
      "school.fund.kicker": "Ce que vous pouvez financer",
      "school.fund.h3": "Axes de développement",
      "school.fund.li1": "Rénovation ou construction de salles de classe",
      "school.fund.li2": "Infrastructures sportives et équipements",
      "school.fund.li3": "Livres, ordinateurs et outils pédagogiques",
      "school.fund.li4": "Formation et soutien des enseignants",
      "school.fund.li5": "Cantines scolaires",
      "school.fund.li6": "Eau, assainissement et hygiène",
      "school.csr": "Les sponsors entreprise/institutionnels peuvent recevoir un reporting adapté CSR/ESG.",

      "school.packages.kicker": "Offres",
      "school.packages.h3": "Formules de parrainage",
      "school.pricing.community.title": "Soutien communautaire",
      "school.pricing.community.li1": "Équipements et fournitures",
      "school.pricing.community.li2": "Reconnaissance sur le site",
      "school.pricing.community.li3": "Rapport annuel",
      "school.pricing.partner.title": "Partenaire éducation",
      "school.pricing.partner.li1": "Soutien aux classes",
      "school.pricing.partner.li2": "Assistance aux enseignants",
      "school.pricing.partner.li3": "Rapport annuel d’impact",
      "school.pricing.gold.title": "Sponsor école Gold",
      "school.pricing.gold.li1": "Composante majeure du projet",
      "school.pricing.gold.li2": "Visibilité de marque (optionnel)",
      "school.pricing.gold.li3": "Soutien média & PR",
      "school.pricing.strategic.title": "Partenaire stratégique",
      "school.pricing.strategic.li1": "Programme complet de développement",
      "school.pricing.strategic.li2": "Accord de partenariat long terme",
      "school.pricing.strategic.li3": "Support de reporting CSR/ESG",
      "school.tailor": "Nous adaptons le parrainage à vos priorités : éducation, sport, santé, compétences et développement communautaire.",

      "flagshipSection.h2": "Projet phare : finalisation d’infrastructures scolaires (Afrique)",
      "flagshipSection.p":
        "Une école partenaire a besoin de financement pour finaliser des infrastructures combinant sport et formation professionnelle : menuiserie, mécanique, plomberie, électricité et salle informatique.",
      "flagshipSection.components.kicker": "Composantes",
      "flagshipSection.components.h3": "Ce que nous construisons",
      "flagshipSection.components.li1": "<b>Terrain multi-sports</b> (football, basket, volley, athlétisme/fitness)",
      "flagshipSection.components.li2": "<b>Atelier</b> pour l’apprentissage pratique",
      "flagshipSection.components.li3": "Atelier menuiserie",
      "flagshipSection.components.li4": "Atelier mécanique",
      "flagshipSection.components.li5": "Atelier plomberie",
      "flagshipSection.components.li6": "Atelier électricité",
      "flagshipSection.components.li7": "Salle informatique & compétences numériques",
      "flagshipSection.components.note":
        "Un campus modèle où les élèves apprennent, s’entraînent et obtiennent de vraies compétences et de vraies opportunités.",
      "flagshipSection.sponsor.kicker": "Financer des éléments",
      "flagshipSection.sponsor.h3": "Opportunités de financement",
      "flagshipSection.sponsor.li1": "<b>5 000 €</b> — Supporter (outils & équipement de base)",
      "flagshipSection.sponsor.li2": "<b>10 000 €</b> — Sponsoriser un atelier (menuiserie / mécanique / plomberie / électricité / informatique)",
      "flagshipSection.sponsor.li3": "<b>20 000 €</b> — Sponsoriser le terrain (construction + équipements)",
      "flagshipSection.sponsor.li4": "<b>50 000 €+</b> — Partenaire campus (finalisation + partenariat long terme)",
      "flagshipSection.sponsor.btn1": "Sponsoriser un élément",
      "flagshipSection.sponsor.btn2": "Demander les détails",
      "flagshipSection.sponsor.note": "Les sponsors reçoivent des mises à jour, photos/vidéos et un rapport final pour les éléments financés.",
      "flagshipSection.transparency.kicker": "Transparence",
      "flagshipSection.transparency.h3": "Gouvernance & responsabilité",
      "flagshipSection.transparency.p":
        "BS Group Foundation travaille avec des partenaires locaux vérifiés et la direction de l’école. Les fonds sont affectés à des composantes convenues, avec suivi, documentation et reporting d’avancement.",

      "events.h2": "Événements",
      "events.p": "Nous organisons des événements solidaires pour soutenir nos programmes et projets.",
      "events.c1.kicker": "Collecte de fonds",
      "events.c1.h3": "Gala & dîner caritatif",
      "events.c1.p": "Événement adapté aux entreprises : présentations, engagements et partenariats.",
      "events.c2.kicker": "Sport",
      "events.c2.h3": "Match / tournoi caritatif",
      "events.c2.p": "Engagement communautaire, mise en avant des jeunes et activations sponsors.",
      "events.c3.kicker": "Communauté",
      "events.c3.h3": "Journée compétences & mentorat",
      "events.c3.p": "Ateliers, orientation et mentorat pour les jeunes et les familles.",

      "donate.h2": "Faire un don",
      "donate.p": "Vous pouvez donner pour le parrainage d’enfants, d’écoles ou des composantes spécifiques du projet phare.",
      "donate.c1.p": "Soutient les fournitures et équipements essentiels.",
      "donate.c2.p": "Aide à financer outils, uniformes et ressources scolaires.",
      "donate.c3.p": "Finance une composante mesurable avec reporting.",
      "donate.tip": "Astuce : lorsque vous avez une URL de paiement, remplacez les boutons « Faire un don » par ce lien.",

      "involved.h2": "S’impliquer",
      "involved.p": "Dites-nous ce que vous souhaitez sponsoriser.",
      "involved.how.kicker": "Comment ça marche",
      "involved.how.h3": "Processus simple et transparent",
      "involved.how.li1": "Choisissez un programme (Enfant / École / Composante du projet phare)",
      "involved.how.li2": "Nous confirmons les détails et fournissons la documentation",
      "involved.how.li3": "Les fonds sont affectés et suivis avec des mises à jour",
      "involved.how.li4": "Vous recevez un reporting et des résumés d’impact",
      "involved.how.note": "Pour les sponsors entreprise/institutionnels, nous pouvons fournir une lettre de partenariat et un cadre CSR/ESG.",
      "involved.form.h3": "Formulaire d’intérêt (sponsoring)",

      "forms.honey.label": "Ne remplissez pas ceci :",
      "forms.fullName.label": "Nom complet",
      "forms.fullName.ph": "Votre nom",
      "forms.email.label": "Email",
      "forms.email.ph": "vous@email.com",
      "forms.supportType.label": "Je veux soutenir",
      "forms.supportType.selectOne": "Choisissez",
      "forms.supportType.child": "Parrainer un enfant",
      "forms.supportType.school": "Parrainer une école",
      "forms.supportType.flagship": "Projet phare (infrastructures)",
      "forms.supportType.health": "Programme santé & bien-être",
      "forms.supportType.women": "Programme autonomisation des femmes",
      "forms.supportType.entrepreneurship": "Programme entrepreneuriat",
      "forms.supportType.general": "Don général",
      "forms.supportType.corporate": "Partenariat entreprise / institution",
      "forms.budget.label": "Budget (optionnel)",
      "forms.budget.choose": "Choisir",
      "forms.budget.b1": "25–100 € / mois",
      "forms.budget.b2": "250–1 000 €",
      "forms.budget.b3": "2 500–10 000 €",
      "forms.budget.b4": "10 000–25 000 €",
      "forms.budget.b5": "25 000 €+",
      "forms.message.label": "Message",
      "forms.message.ph": "Dites-nous ce que vous souhaitez sponsoriser et vos questions.",
      "forms.submit": "Envoyer",
      "forms.consent": "En envoyant, vous acceptez que nous vous contactions au sujet des options de sponsoring et des détails du projet.",

      "contact.h2": "Contact",
      "contact.p": "Envoyez-nous un message.",
      "contact.details.kicker": "Coordonnées",
      "contact.details.h3": "Travaillons ensemble",
      "contact.details.emailLine": "Envoyez-nous un email à :",
      "contact.details.or": "ou",
      "contact.form.h3": "Formulaire de contact",
      "contact.form.messagePh": "Comment pouvons-nous aider ?",
      "contact.form.send": "Envoyer",

      "footer.about":
        "Donner des opportunités aux enfants et aux communautés via l’éducation, le sport, la santé, les compétences, l’autonomisation des femmes et l’entrepreneuriat — pour bâtir des avenirs durables en Afrique et ailleurs.",
      "footer.navigate": "Navigation",
      "footer.getInvolved": "S’impliquer",
      "footer.partnerships": "Partenariats",
      "footer.rights": "Tous droits réservés."
    },

    es: {
      "brand.tag": "Educación • Deporte • Salud • Habilidades • Oportunidad",

      "label.language": "Idioma",

      "nav.about": "Acerca de",
      "nav.impact": "Áreas de impacto",
      "nav.programs": "Programas",
      "nav.sponsorChild": "Apadrina a un niño",
      "nav.sponsorSchool": "Apadrina una escuela",
      "nav.flagship": "Proyecto insignia",
      "nav.events": "Eventos",
      "nav.contact": "Contacto",

      "cta.getInvolved": "Participa",
      "cta.donate": "Donar",
      "cta.menu": "Menú",

      "hero.badge": "🌍 Programas centrados en África • Reportes transparentes • Impacto sostenible",
      "hero.h1": "Impulsando oportunidades para niños y comunidades",
      "hero.lead":
        "BS Group Foundation apoya a niños vulnerables, escuelas y comunidades mediante acceso a la educación, desarrollo deportivo, salud, habilidades vocacionales, empoderamiento de la mujer y emprendimiento — creando rutas sostenibles hacia la dignidad, el empleo y el éxito a largo plazo.",
      "hero.btn.sponsorChild": "Apadrina a un niño",
      "hero.btn.sponsorSchool": "Apadrina una escuela",
      "hero.btn.supportFlagship": "Apoya el proyecto insignia",
      "hero.corporateLine": "Para alianzas corporativas/institucionales, visita",
      "hero.corporateLink": "Participa",

      "stats.education.title": "Acceso a la educación",
      "stats.education.desc": "Cuotas, materiales, mentoría y apoyo escolar",
      "stats.sport.title": "Deporte y juventud",
      "stats.sport.desc": "Disciplina, trabajo en equipo y oportunidad",
      "stats.skills.title": "Habilidades y empleabilidad",
      "stats.skills.desc": "Talleres de oficios y habilidades digitales",
      "stats.health.title": "Salud y bienestar",
      "stats.health.desc": "Nutrición, higiene y cuidado comunitario",

      "flagship.kicker": "Enfoque del proyecto insignia",
      "flagship.title": "Finalización de infraestructura escolar (África)",
      "flagship.intro": "Apoyamos a una escuela socia existente para completar infraestructura crítica:",
      "flagship.li1": "<b>Campo multideportivo</b> (fútbol, baloncesto, voleibol, atletismo/fitness)",
      "flagship.li2": "<b>Centro de talleres</b> para formación en habilidades",
      "flagship.li3": "Carpintería • Mecánica • Fontanería • Electricidad • Aula informática",
      "flagship.btn.view": "Ver proyecto",
      "flagship.note": "Los patrocinadores reciben actualizaciones, fotos/vídeos e informes claros sobre los componentes financiados.",

      "about.h2": "Sobre la fundación",
      "about.p":
        "BS Group Foundation se dedica al desarrollo comunitario a largo plazo combinando educación, juventud, salud, formación, empoderamiento de la mujer y emprendimiento.",
      "about.mission.kicker": "Misión",
      "about.mission.h3": "Oportunidad y dignidad",
      "about.mission.p":
        "Empoderar a niños, jóvenes y comunidades brindando acceso a educación de calidad, deporte, salud, habilidades vocacionales y oportunidades de emprendimiento — impulsando el desarrollo social y económico a largo plazo.",
      "about.vision.kicker": "Visión",
      "about.vision.h3": "Futuros sostenibles",
      "about.vision.p":
        "Comunidades inclusivas donde cada niño y joven, sin importar su origen, pueda aprender, crecer, trabajar y liderar con confianza, propósito y dignidad.",
      "about.values.kicker": "Valores",
      "about.values.h3": "Integridad e impacto",
      "about.values.p":
        "Integridad, transparencia, respeto, inclusión y resultados medibles guían nuestros programas y alianzas.",

      "impact.h2": "Áreas de impacto",
      "impact.p": "Nuestros programas están diseñados para lograr cambios medibles para niños, familias y comunidades.",
      "impact.c1.h3": "🎓 Acceso a la educación",
      "impact.c1.p": "Apadrinamiento escolar, apoyo a infraestructura, materiales, becas y mentoría para niños vulnerables.",
      "impact.c2.h3": "⚽ Desarrollo deportivo",
      "impact.c2.p": "Programas juveniles, instalaciones, campamentos y desarrollo de talento para disciplina y oportunidad.",
      "impact.c3.h3": "🏥 Salud y bienestar",
      "impact.c3.p": "Acceso a salud básica, apoyo nutricional, educación de higiene e iniciativas comunitarias.",
      "impact.c4.h3": "🛠 Habilidades y empleabilidad",
      "impact.c4.p": "Formación vocacional: carpintería, mecánica, fontanería, electricidad, habilidades digitales y oficios.",
      "impact.c5.h3": "👩 Empoderamiento de la mujer",
      "impact.c5.p": "Programas que apoyan educación, liderazgo, bienestar y participación económica de la mujer.",
      "impact.c6.h3": "🚀 Emprendimiento",
      "impact.c6.p": "Apoyo a micro-empresas, mentoría, formación práctica y desarrollo económico comunitario.",

      "programs.h2": "Programas",
      "programs.p":
        "Apoya directamente a niños y comunidades — apadrina a un niño, apadrina una escuela o financia componentes del proyecto insignia.",
      "programs.cardProgram.kicker": "Programa",
      "programs.cardProject.kicker": "Proyecto",
      "programs.child.h3": "Apadrina a un niño",
      "programs.child.p": "Apoya a un niño huérfano o desfavorecido en África con educación, deporte, nutrición y mentoría.",
      "programs.school.h3": "Apadrina una escuela",
      "programs.school.p": "Transforma una escuela con recursos, instalaciones y desarrollo comunitario sostenible.",
      "programs.flagship.h3": "Infraestructura escolar (insignia)",
      "programs.flagship.p":
        "Completa un campo multideportivo y talleres vocacionales: carpintería, mecánica, fontanería, electricidad y aula informática.",
      "programs.learnMore": "Más información",
      "programs.viewProject": "Ver proyecto",

      "child.h2": "Apadrina a un niño",
      "child.p": "Apoya a un niño huérfano o de escasos recursos — financiando educación, protección y oportunidades de desarrollo.",
      "child.support.kicker": "Tu apoyo cubre",
      "child.support.h3": "Impacto directo",
      "child.support.li1": "Cuotas e inscripción escolar",
      "child.support.li2": "Uniformes y materiales",
      "child.support.li3": "Entrenamiento deportivo y equipo",
      "child.support.li4": "Apoyo nutricional",
      "child.support.li5": "Atención médica básica",
      "child.support.li6": "Mentoría y habilidades para la vida",
      "child.support.note": "Los patrocinadores reciben actualizaciones y un resumen anual de impacto (fotos/informes cuando estén disponibles).",
      "child.options.kicker": "Opciones de patrocinio",
      "child.options.h3": "Elige un nivel",

      "pricing.perMonth": "por mes",
      "pricing.perYear": "por año",
      "pricing.sponsorBtn": "Apadrinar",
      "pricing.enquireBtn": "Consultar",

      "child.pricing.basic.title": "Patrocinio básico",
      "child.pricing.basic.li1": "Contribución a la educación",
      "child.pricing.basic.li2": "Materiales",
      "child.pricing.basic.li3": "Actualización anual",

      "child.pricing.full.title": "Patrocinio completo",
      "child.pricing.full.li1": "Apoyo escolar completo",
      "child.pricing.full.li2": "Uniformes y libros",
      "child.pricing.full.li3": "Equipo deportivo",
      "child.pricing.full.li4": "Actualizaciones trimestrales",

      "child.pricing.champion.title": "Patrocinio campeón",
      "child.pricing.champion.li1": "Educación + desarrollo",
      "child.pricing.champion.li2": "Apoyo de salud y nutrición",
      "child.pricing.champion.li3": "Informe detallado semestral",
      "child.pricing.champion.li4": "Certificado de impacto",

      "child.pricing.patron.title": "Mecenas anual",
      "child.pricing.patron.li1": "Beca anual completa",
      "child.pricing.patron.li2": "Patrocinio nominativo (opcional)",
      "child.pricing.patron.li3": "Reconocimiento en el sitio (opcional)",
      "child.pricing.patron.li4": "Invitación a eventos",

      "child.paymentsNote": "Pagos mensuales o anuales. Se pueden organizar donaciones bancarias manuales bajo solicitud.",

      "school.h2": "Apadrina una escuela",
      "school.p": "Financia educación e infraestructura para impactar a cientos de niños cada año.",
      "school.fund.kicker": "Qué puedes financiar",
      "school.fund.h3": "Áreas de desarrollo escolar",
      "school.fund.li1": "Renovación o construcción de aulas",
      "school.fund.li2": "Instalaciones deportivas y equipamiento",
      "school.fund.li3": "Libros, ordenadores y herramientas educativas",
      "school.fund.li4": "Formación y apoyo a docentes",
      "school.fund.li5": "Programas de alimentación escolar",
      "school.fund.li6": "Agua, saneamiento e higiene",
      "school.csr": "Los patrocinadores corporativos/institucionales pueden recibir informes adecuados para CSR/ESG.",

      "school.packages.kicker": "Paquetes",
      "school.packages.h3": "Paquetes de patrocinio",
      "school.pricing.community.title": "Apoyo comunitario",
      "school.pricing.community.li1": "Equipos y materiales",
      "school.pricing.community.li2": "Reconocimiento en el sitio",
      "school.pricing.community.li3": "Informe anual",
      "school.pricing.partner.title": "Socio educativo",
      "school.pricing.partner.li1": "Apoyo a aulas",
      "school.pricing.partner.li2": "Apoyo a docentes",
      "school.pricing.partner.li3": "Informe anual de impacto",
      "school.pricing.gold.title": "Patrocinador Gold",
      "school.pricing.gold.li1": "Componente mayor del proyecto",
      "school.pricing.gold.li2": "Visibilidad de marca (opcional)",
      "school.pricing.gold.li3": "Apoyo de medios y PR",
      "school.pricing.strategic.title": "Socio estratégico",
      "school.pricing.strategic.li1": "Programa completo de desarrollo",
      "school.pricing.strategic.li2": "Acuerdo de alianza a largo plazo",
      "school.pricing.strategic.li3": "Soporte de informes CSR/ESG",
      "school.tailor": "Podemos adaptar el patrocinio a tus prioridades: educación, deporte, salud, habilidades y desarrollo comunitario.",

      "flagshipSection.h2": "Proyecto insignia: finalización de infraestructura escolar (África)",
      "flagshipSection.p":
        "Una escuela socia necesita financiación para completar infraestructura que combina desarrollo deportivo con formación vocacional: carpintería, mecánica, fontanería, electricidad y aula informática.",
      "flagshipSection.components.kicker": "Componentes",
      "flagshipSection.components.h3": "Qué estamos construyendo",
      "flagshipSection.components.li1": "<b>Campo multideportivo</b> (fútbol, baloncesto, voleibol, atletismo/fitness)",
      "flagshipSection.components.li2": "<b>Centro de talleres</b> para formación práctica",
      "flagshipSection.components.li3": "Taller de carpintería",
      "flagshipSection.components.li4": "Taller de mecánica",
      "flagshipSection.components.li5": "Taller de fontanería",
      "flagshipSection.components.li6": "Taller de electricidad",
      "flagshipSection.components.li7": "Aula informática y habilidades digitales",
      "flagshipSection.components.note":
        "Un campus modelo donde los estudiantes aprenden, entrenan y se gradúan con habilidades reales y oportunidades reales.",
      "flagshipSection.sponsor.kicker": "Patrocinar componentes",
      "flagshipSection.sponsor.h3": "Oportunidades de financiación",
      "flagshipSection.sponsor.li1": "<b>€5.000</b> — Apoyo a instalaciones (herramientas y equipo básico)",
      "flagshipSection.sponsor.li2":
        "<b>€10.000</b> — Patrocina un taller (carpintería / mecánica / fontanería / electricidad / informática)",
      "flagshipSection.sponsor.li3": "<b>€20.000</b> — Patrocina el campo deportivo (construcción + equipo)",
      "flagshipSection.sponsor.li4": "<b>€50.000+</b> — Socio estratégico del campus (finalización + alianza)",
      "flagshipSection.sponsor.btn1": "Patrocinar un componente",
      "flagshipSection.sponsor.btn2": "Solicitar detalles",
      "flagshipSection.sponsor.note": "Los patrocinadores reciben actualizaciones, fotos/vídeos y un informe final de los componentes financiados.",
      "flagshipSection.transparency.kicker": "Transparencia",
      "flagshipSection.transparency.h3": "Gobernanza y rendición de cuentas",
      "flagshipSection.transparency.p":
        "BS Group Foundation trabaja con socios locales verificados y la dirección escolar. Los fondos se asignan a componentes acordados, con seguimiento, documentación e informes de progreso.",

      "events.h2": "Eventos",
      "events.p": "Organizamos eventos solidarios y comunitarios para apoyar nuestros programas y proyectos.",
      "events.c1.kicker": "Recaudación",
      "events.c1.h3": "Gala y cena benéfica",
      "events.c1.p": "Evento ideal para empresas con presentaciones, compromisos y alianzas.",
      "events.c2.kicker": "Deporte",
      "events.c2.h3": "Partido / torneo benéfico",
      "events.c2.p": "Participación comunitaria, visibilidad juvenil y activaciones de patrocinadores.",
      "events.c3.kicker": "Comunidad",
      "events.c3.h3": "Día de habilidades y mentoría",
      "events.c3.p": "Talleres, orientación y sesiones de mentoría para jóvenes y familias.",

      "donate.h2": "Donar",
      "donate.p": "Puedes donar para apadrinamiento infantil, apadrinamiento escolar o componentes específicos del proyecto insignia.",
      "donate.c1.p": "Apoya materiales de estudio y equipamiento esencial.",
      "donate.c2.p": "Ayuda a financiar herramientas, uniformes y recursos escolares.",
      "donate.c3.p": "Financia un componente medible con informes.",
      "donate.tip": "Consejo: cuando tengas una URL de pago, reemplaza los botones “Donar” por ese enlace.",

      "involved.h2": "Participa",
      "involved.p": "Cuéntanos qué te gustaría patrocinar.",
      "involved.how.kicker": "Cómo funciona",
      "involved.how.h3": "Proceso simple y transparente",
      "involved.how.li1": "Elige un programa (Niño / Escuela / Componente del proyecto insignia)",
      "involved.how.li2": "Confirmamos detalles y compartimos documentación",
      "involved.how.li3": "Los fondos se asignan y monitorean con actualizaciones",
      "involved.how.li4": "Recibes reportes de progreso y resúmenes de impacto",
      "involved.how.note": "Para patrocinio corporativo/institucional, podemos proporcionar carta de alianza y estructura de informes CSR/ESG.",
      "involved.form.h3": "Formulario de interés (patrocinio)",

      "forms.honey.label": "No rellenes esto:",
      "forms.fullName.label": "Nombre completo",
      "forms.fullName.ph": "Tu nombre",
      "forms.email.label": "Email",
      "forms.email.ph": "tu@email.com",
      "forms.supportType.label": "Quiero apoyar",
      "forms.supportType.selectOne": "Selecciona uno",
      "forms.supportType.child": "Apadrina a un niño",
      "forms.supportType.school": "Apadrina una escuela",
      "forms.supportType.flagship": "Proyecto insignia (infraestructura)",
      "forms.supportType.health": "Programa de salud y bienestar",
      "forms.supportType.women": "Programa de empoderamiento de la mujer",
      "forms.supportType.entrepreneurship": "Programa de emprendimiento",
      "forms.supportType.general": "Donación general",
      "forms.supportType.corporate": "Alianza corporativa / institucional",
      "forms.budget.label": "Presupuesto (opcional)",
      "forms.budget.choose": "Elegir",
      "forms.budget.b1": "€25–€100 / mes",
      "forms.budget.b2": "€250–€1.000",
      "forms.budget.b3": "€2.500–€10.000",
      "forms.budget.b4": "€10.000–€25.000",
      "forms.budget.b5": "€25.000+",
      "forms.message.label": "Mensaje",
      "forms.message.ph": "Cuéntanos qué te gustaría patrocinar y tus preguntas.",
      "forms.submit": "Enviar",
      "forms.consent": "Al enviar, aceptas que podamos contactarte sobre opciones de patrocinio y detalles del proyecto.",

      "contact.h2": "Contacto",
      "contact.p": "Envíanos un mensaje.",
      "contact.details.kicker": "Detalles de contacto",
      "contact.details.h3": "Trabajemos juntos",
      "contact.details.emailLine": "Envíanos un email a:",
      "contact.details.or": "o",
      "contact.form.h3": "Formulario de contacto",
      "contact.form.messagePh": "¿Cómo podemos ayudarte?",
      "contact.form.send": "Enviar mensaje",

      "footer.about":
        "Impulsando oportunidades para niños y comunidades mediante educación, deporte, salud, desarrollo de habilidades, empoderamiento de la mujer y emprendimiento — construyendo futuros sostenibles en África y regiones emergentes.",
      "footer.navigate": "Navegar",
      "footer.getInvolved": "Participa",
      "footer.partnerships": "Alianzas",
      "footer.rights": "Todos los derechos reservados."
    }
  };

  function getSavedLang() {
    const saved = (localStorage.getItem(STORE_KEY) || "").toLowerCase();
    if (saved && translations[saved]) return saved;
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;
    localStorage.setItem(STORE_KEY, lang);

    // Update HTML language attribute
    document.documentElement.lang = lang;

    // Sync all language selects
    document.querySelectorAll('[data-lang-select="bsgf"]').forEach(sel => {
      if (sel.value !== lang) sel.value = lang;
    });

    applyI18n(lang);
  }

  function applyI18n(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    // Translate text nodes with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (typeof val === "string") {
        // Allow safe inline HTML for a few items (lists with <b>)
        if (val.includes("<") && val.includes(">")) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = dict[key];
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    // Bind language select changes
    document.querySelectorAll('[data-lang-select="bsgf"]').forEach(sel => {
      sel.addEventListener("change", (e) => setLang(e.target.value));
    });

    setLang(getSavedLang());
  });

  // Expose globally (optional)
  window.bsgfSetLang = setLang;
})();
