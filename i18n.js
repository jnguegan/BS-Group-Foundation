/* BS Group Foundation i18n.js (EN/FR/ES)
   - Works on BOTH key styles: "nav.about" AND "nav_about"
   - Persists language in localStorage
   - Syncs all <select data-lang-select="bsgf"> controls
   - Translates text + placeholders + aria-labels (if present)
*/

(function () {
  const STORAGE_KEY = "bsgf_lang";
  const DEFAULT_LANG = "en";

  const translations = {
    en: {
      // ------------------------------------------------------------
      // Brand / labels
      // ------------------------------------------------------------
      "brand.tag": "Education • Sport • Health • Skills • Opportunity",
      "label.language": "Language",

      // ------------------------------------------------------------
      // NAV (dot style)
      // ------------------------------------------------------------
      "nav.about": "About",
      "nav.impact": "Impact Areas",
      "nav.programs": "Programs",
      "nav.sponsorChild": "Sponsor a Child",
      "nav.sponsorSchool": "Sponsor a School",
      "nav.flagship": "Flagship Project",
      "nav.events": "Events",
      "nav.contact": "Contact",

      // ------------------------------------------------------------
      // CTA (dot style)
      // ------------------------------------------------------------
      "cta.getInvolved": "Get Involved",
      "cta.donate": "Donate",
      "cta.menu": "Menu",

      // Legacy button keys (underscore style used in some pages)
      "btn_get_involved": "Get Involved",
      "btn_donate": "Donate",
      "btn_home": "Home",
      "btn_contact": "Contact",
      "btn_partner": "Become a Partner",
      "btn_sponsor_school": "Sponsor a School",

      // ------------------------------------------------------------
      // INDEX — HERO
      // ------------------------------------------------------------
      "hero.badge": "🌍 Africa-focused programs • Transparent reporting • Sustainable impact",
      "hero.h1": "Empowering Children & Communities Through Opportunity",
      "hero.lead":
        "BS Group Foundation supports vulnerable children, schools and communities through education access, sport development, healthcare, vocational skills, women empowerment and entrepreneurship — creating sustainable pathways to dignity, employment and long-term success.",
      "hero.btn.sponsorChild": "Sponsor a Child",
      "hero.btn.sponsorSchool": "Sponsor a School",
      "hero.btn.supportFlagship": "Support Flagship Project",

      "stats.education.title": "Education Access",
      "stats.education.desc": "Fees, materials, mentoring & school support",
      "stats.sport.title": "Sport & Youth Development",
      "stats.sport.desc": "Discipline, teamwork and opportunity",
      "stats.skills.title": "Skills & Employability",
      "stats.skills.desc": "Workshops for practical trades & digital skills",
      "stats.health.title": "Health & Wellbeing",
      "stats.health.desc": "Nutrition, hygiene and community care",

      "hero.corporateLine":
        "For corporate/institutional partnerships, visit",
      "hero.corporateLink": "Get Involved",

      // Right card in hero (flagship mini block)
      "flagship.kicker": "Flagship Focus",
      "flagship.title": "School Infrastructure Completion (Africa)",
      "flagship.intro":
        "We are supporting an existing partner school to complete critical infrastructure:",
      "flagship.li1":
        "<b>Multi-sport training ground</b> (football, basketball, volleyball, athletics/fitness)",
      "flagship.li2":
        "<b>Workshops facility</b> for skills training",
      "flagship.li3":
        "Carpentry • Mechanics • Plumbing • Electrical • Computer lab",
      "flagship.btn.view": "View Project",
      "flagship.note":
        "Sponsors receive progress updates, photos/videos, and clear reporting for funded components.",

      // ------------------------------------------------------------
      // INDEX — ABOUT
      // ------------------------------------------------------------
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

      // ------------------------------------------------------------
      // INDEX — IMPACT
      // ------------------------------------------------------------
      "impact.h2": "Impact Areas",
      "impact.p":
        "Our programs are designed to deliver measurable change for children, families and communities.",

      "impact.c1.h3": "🎓 Education Access",
      "impact.c1.p":
        "School sponsorships, infrastructure support, learning materials, scholarships and mentoring for vulnerable children.",

      "impact.c2.h3": "⚽ Sport Development",
      "impact.c2.p":
        "Youth sport programs, facilities, training camps and talent development for discipline and opportunity.",

      "impact.c3.h3": "🏥 Health & Wellbeing",
      "impact.c3.p":
        "Basic healthcare access, nutrition support, hygiene education and community health initiatives.",

      "impact.c4.h3": "🛠 Skills & Employability",
      "impact.c4.p":
        "Vocational training in carpentry, mechanics, plumbing, electrical engineering, digital skills and trades.",

      "impact.c5.h3": "👩 Women Empowerment",
      "impact.c5.p":
        "Programs that support women’s education, leadership, wellbeing and economic participation.",

      "impact.c6.h3": "🚀 Entrepreneurship",
      "impact.c6.p":
        "Micro-enterprise support, mentorship, practical training and community business development.",

      // ------------------------------------------------------------
      // INDEX — PROGRAMS
      // ------------------------------------------------------------
      "programs.h2": "Programs",
      "programs.p":
        "Support children and communities directly — sponsor a child, sponsor a school, or fund flagship infrastructure components.",

      "programs.cardProgram.kicker": "Program",
      "programs.child.h3": "Sponsor a Child",
      "programs.child.p":
        "Support an orphaned or disadvantaged child in Africa with education, sport, nutrition and mentorship.",
      "programs.learnMore": "Learn more",

      "programs.school.h3": "Sponsor a School",
      "programs.school.p":
        "Transform a school through learning resources, facilities, and sustainable community development.",

      "programs.cardProject.kicker": "Project",
      "programs.flagship.h3": "Flagship School Infrastructure",
      "programs.flagship.p":
        "Help complete a multi-sport ground and vocational workshops: carpentry, mechanics, plumbing, electrical & computer lab.",
      "programs.viewProject": "View project",

      // ------------------------------------------------------------
      // INDEX — SPONSOR A CHILD
      // ------------------------------------------------------------
      "child.h2": "Sponsor a Child",
      "child.p":
        "Support an orphaned child or a child from a poor background — by funding education, protection, and development opportunities.",

      "child.support.kicker": "What your support provides",
      "child.support.h3": "Direct child impact",
      "child.support.li1": "School fees and registration",
      "child.support.li2": "Uniforms and learning materials",
      "child.support.li3": "Sports training and equipment",
      "child.support.li4": "Nutrition support",
      "child.support.li5": "Basic medical care",
      "child.support.li6": "Mentorship & life-skills guidance",
      "child.support.note":
        "Sponsors receive progress updates and an annual impact summary (photos and reporting where available).",

      "child.options.kicker": "Sponsorship options",
      "child.options.h3": "Choose a level",

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

      "child.pricing.annual.title": "Annual Patron",
      "child.pricing.annual.li1": "Full annual scholarship support",
      "child.pricing.annual.li2": "Named sponsorship option (optional)",
      "child.pricing.annual.li3": "Recognition on website (optional)",
      "child.pricing.annual.li4": "Invitation to foundation events",

      "pricing.perMonth": "per month",
      "pricing.perYear": "per year",
      "pricing.sponsorBtn": "Sponsor",
      "child.paymentNote":
        "Payments can be monthly or annual. Manual bank donations can be arranged on request.",

      // ------------------------------------------------------------
      // INDEX — SPONSOR A SCHOOL
      // ------------------------------------------------------------
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
      "school.fund.note":
        "Corporate and institutional sponsors can receive CSR/ESG-friendly reporting.",

      "school.packages.kicker": "Packages",
      "school.packages.h3": "Sponsorship packages",

      "school.pkg.community.title": "Community Supporter",
      "school.pkg.community.li1": "Equipment & learning materials",
      "school.pkg.community.li2": "Website recognition",
      "school.pkg.community.li3": "Annual report",

      "school.pkg.partner.title": "Education Partner",
      "school.pkg.partner.li1": "Classroom support",
      "school.pkg.partner.li2": "Teacher assistance",
      "school.pkg.partner.li3": "Annual impact report",

      "school.pkg.gold.title": "Gold School Sponsor",
      "school.pkg.gold.li1": "Major project component",
      "school.pkg.gold.li2": "Brand visibility (optional)",
      "school.pkg.gold.li3": "Media & PR support",

      "school.pkg.strategic.title": "Strategic Partner",
      "school.pkg.strategic.li1": "Full development program",
      "school.pkg.strategic.li2": "Long-term partnership agreement",
      "school.pkg.strategic.li3": "CSR/ESG reporting support",

      "pricing.enquireBtn": "Enquire",
      "school.tailorNote":
        "We can tailor sponsorship to your priorities: education, sport, health, skills and community development.",

      // ------------------------------------------------------------
      // INDEX — FLAGSHIP (full section on index page)
      // ------------------------------------------------------------
      "indexFlagship.h2": "Flagship Project: School Infrastructure Completion (Africa)",
      "indexFlagship.p":
        "An existing partner school needs funding to complete infrastructure that combines multi-sport development with vocational training: carpentry, mechanics, plumbing, electrical engineering and a computer lab.",

      "indexFlagship.components.kicker": "Components",
      "indexFlagship.components.h3": "What we are building",
      "indexFlagship.components.li1":
        "<b>Multi-sport training ground</b> (football, basketball, volleyball, athletics/fitness)",
      "indexFlagship.components.li2":
        "<b>Workshops facility</b> for practical skills education",
      "indexFlagship.components.li3": "Carpentry workshop",
      "indexFlagship.components.li4": "Mechanical workshop",
      "indexFlagship.components.li5": "Plumbing workshop",
      "indexFlagship.components.li6": "Electrical engineering workshop",
      "indexFlagship.components.li7": "Computer & digital skills lab",
      "indexFlagship.components.note":
        "This project is designed as a model campus where students learn, train and graduate with real skills and real opportunity.",

      "indexFlagship.funding.kicker": "Sponsor components",
      "indexFlagship.funding.h3": "Funding opportunities",
      "indexFlagship.funding.li1": "<b>€5,000</b> — Facility Supporter (tools & basic equipment)",
      "indexFlagship.funding.li2": "<b>€10,000</b> — Sponsor a Workshop (choose: carpentry / mechanics / plumbing / electrical / computer lab)",
      "indexFlagship.funding.li3": "<b>€20,000</b> — Sponsor the Sports Ground (construction + equipment)",
      "indexFlagship.funding.li4": "<b>€50,000+</b> — Strategic Campus Partner (major completion & long-term partnership)",
      "indexFlagship.funding.btn1": "Sponsor a component",
      "indexFlagship.funding.btn2": "Request details",
      "indexFlagship.funding.note":
        "Sponsors receive progress updates, photos/videos and a completion report for funded components.",

      "indexFlagship.transparency.kicker": "Transparency",
      "indexFlagship.transparency.h3": "Governance & accountability",
      "indexFlagship.transparency.p":
        "BS Group Foundation works with verified local partners and school leadership. Funds are allocated to agreed components, with monitoring, documentation and progress reporting to ensure responsible use and measurable impact.",

      // ------------------------------------------------------------
      // INDEX — EVENTS
      // ------------------------------------------------------------
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

      // ------------------------------------------------------------
      // INDEX — DONATE
      // ------------------------------------------------------------
      "donate.h2": "Donate",
      "donate.p":
        "You can donate toward child sponsorship, school sponsorship, or specific flagship project components.",

      "donate.c1.p": "Supports learning materials and essential equipment.",
      "donate.c2.p": "Helps fund tools, uniforms, and school resources.",
      "donate.c3.p": "Funds a measurable project component with reporting.",
      "donate.btn": "Donate",
      "donate.tip":
        "Tip: once you have a payment URL, replace the “Donate” buttons with that link.",

      // ------------------------------------------------------------
      // INDEX — GET INVOLVED / SPONSORSHIP FORM
      // ------------------------------------------------------------
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

      "form.sponsor.h3": "Sponsorship interest form",
      "form.fullName": "Full name",
      "form.email": "Email",
      "form.supportType": "I want to support",
      "form.supportTypeChoose": "Select one",
      "form.supportType.child": "Sponsor a Child",
      "form.supportType.school": "Sponsor a School",
      "form.supportType.flagship": "Flagship Project (Infrastructure)",
      "form.supportType.health": "Health & Wellbeing Program",
      "form.supportType.women": "Women Empowerment Program",
      "form.supportType.entrepreneur": "Entrepreneurship Program",
      "form.supportType.general": "General Donation",
      "form.supportType.corporate": "Corporate / Institutional Partnership",

      "form.budget": "Budget (optional)",
      "form.budget.choose": "Choose",
      "form.budget.1": "€25–€100 / month",
      "form.budget.2": "€250–€1,000",
      "form.budget.3": "€2,500–€10,000",
      "form.budget.4": "€10,000–€25,000",
      "form.budget.5": "€25,000+",

      "form.message": "Message",
      "form.submit": "Submit",
      "form.consent":
        "By submitting, you agree we can contact you about sponsorship options and project details.",

      "ph.name": "Your name",
      "ph.email": "you@email.com",
      "ph.sponsorMsg": "Tell us what you would like to sponsor and any questions you have.",

      // ------------------------------------------------------------
      // INDEX — CONTACT
      // ------------------------------------------------------------
      "contact.h2": "Contact",
      "contact.p": "Send us a message.",

      "contact.details.kicker": "Contact details",
      "contact.details.h3": "Let’s work together",
      "contact.details.p1": "Send us an email to:",
      "contact.details.p2": "• info@bsgroupfoundation.org  or",
      "contact.details.p3": "• partnerships@bsgroupfoundation.org",

      "contact.form.h3": "Contact form",
      "contact.form.fullName": "Full name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.send": "Send message",
      "ph.contactMsg": "How can we help?",

      // ------------------------------------------------------------
      // INDEX — FOOTER
      // ------------------------------------------------------------
      "footer.lead":
        "Empowering children and communities through education, sport, health, skills development, women empowerment and entrepreneurship — building sustainable futures across Africa and emerging regions.",
      "footer.navigate": "Navigate",
      "footer.getInvolved": "Get involved",
      "footer.partnerships": "Partnerships",
      "footer.rights": "All rights reserved.",
       

      // ------------------------------------------------------------
      // FLAGSHIP PAGE (your existing keys)
      // ------------------------------------------------------------
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
      "cta_sub": "Partner with us, sponsor a component, or fund a priority need."
    },
    "footer.legalTitle": "Legal",
"footer.legalTerms": "Terms of Use",
"footer.legalPrivacy": "Privacy Policy",
"footer.legalCookies": "Cookie Policy",
"footer.legalDisclaimer": "Legal Disclaimer",
"footer.legalTransparency": "Transparency"
},
     

     
    // ============================================================
    // FRENCH
    // ============================================================
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

      // INDEX — HERO
      "hero.badge": "🌍 Programmes axés sur l’Afrique • Reporting transparent • Impact durable",
      "hero.h1": "Donner aux enfants et aux communautés l’accès aux opportunités",
      "hero.lead":
        "BS Group Foundation soutient les enfants vulnérables, les écoles et les communautés via l’accès à l’éducation, le sport, la santé, les compétences professionnelles, l’autonomisation des femmes et l’entrepreneuriat — en créant des parcours durables vers la dignité, l’emploi et la réussite à long terme.",
      "hero.btn.sponsorChild": "Parrainer un enfant",
      "hero.btn.sponsorSchool": "Parrainer une école",
      "hero.btn.supportFlagship": "Soutenir le projet phare",

      "stats.education.title": "Accès à l’éducation",
      "stats.education.desc": "Frais, fournitures, mentorat & soutien scolaire",
      "stats.sport.title": "Sport & jeunesse",
      "stats.sport.desc": "Discipline, esprit d’équipe et opportunités",
      "stats.skills.title": "Compétences & employabilité",
      "stats.skills.desc": "Ateliers métiers & compétences numériques",
      "stats.health.title": "Santé & bien-être",
      "stats.health.desc": "Nutrition, hygiène et actions communautaires",

      "hero.corporateLine": "Pour les partenariats entreprises/institutions, rendez-vous sur",
      "hero.corporateLink": "S’impliquer",

      "flagship.kicker": "Priorité projet phare",
      "flagship.title": "Finalisation d’infrastructures scolaires (Afrique)",
      "flagship.intro":
        "Nous soutenons une école partenaire existante pour achever des infrastructures essentielles :",
      "flagship.li1":
        "<b>Terrain multisports</b> (football, basketball, volleyball, athlétisme/fitness)",
      "flagship.li2":
        "<b>Ateliers</b> pour la formation aux compétences",
      "flagship.li3":
        "Menuiserie • Mécanique • Plomberie • Électricité • Salle informatique",
      "flagship.btn.view": "Voir le projet",
      "flagship.note":
        "Les sponsors reçoivent des mises à jour d’avancement, des photos/vidéos et un reporting clair des éléments financés.",

      // ABOUT
      "about.h2": "À propos de la fondation",
      "about.p":
        "BS Group Foundation est dédiée au développement communautaire à long terme en combinant éducation, jeunesse, santé, compétences, autonomisation des femmes et entrepreneuriat.",

      "about.mission.kicker": "Mission",
      "about.mission.h3": "Opportunité & dignité",
      "about.mission.p":
        "Autonomiser les enfants, les jeunes et les communautés en donnant accès à une éducation de qualité, au sport, à la santé, aux compétences professionnelles et à l’entrepreneuriat — pour un développement social et économique durable.",

      "about.vision.kicker": "Vision",
      "about.vision.h3": "Avenirs durables",
      "about.vision.p":
        "Des communautés inclusives où chaque enfant et jeune, quelle que soit son origine, peut apprendre, grandir, travailler et diriger avec confiance, sens et dignité.",

      "about.values.kicker": "Valeurs",
      "about.values.h3": "Intégrité & impact",
      "about.values.p":
        "Intégrité, transparence, respect, inclusion et résultats mesurables guident nos programmes et partenariats.",

      // IMPACT
      "impact.h2": "Domaines d’impact",
      "impact.p":
        "Nos programmes sont conçus pour apporter un changement mesurable aux enfants, aux familles et aux communautés.",

      "impact.c1.h3": "🎓 Accès à l’éducation",
      "impact.c1.p":
        "Parrainages scolaires, soutien aux infrastructures, matériels, bourses et mentorat pour les enfants vulnérables.",
      "impact.c2.h3": "⚽ Développement sportif",
      "impact.c2.p":
        "Programmes jeunesse, installations, stages et détection pour la discipline et les opportunités.",
      "impact.c3.h3": "🏥 Santé & bien-être",
      "impact.c3.p":
        "Accès aux soins de base, nutrition, hygiène et initiatives de santé communautaire.",
      "impact.c4.h3": "🛠 Compétences & employabilité",
      "impact.c4.p":
        "Formations professionnelles : menuiserie, mécanique, plomberie, électricité, numérique et métiers.",
      "impact.c5.h3": "👩 Autonomisation des femmes",
      "impact.c5.p":
        "Programmes pour l’éducation des femmes, le leadership, le bien-être et la participation économique.",
      "impact.c6.h3": "🚀 Entrepreneuriat",
      "impact.c6.p":
        "Soutien aux micro-entreprises, mentorat, formation pratique et développement d’activités communautaires.",

      // PROGRAMS
      "programs.h2": "Programmes",
      "programs.p":
        "Soutenez directement les enfants et les communautés — parrainez un enfant, une école, ou financez des composants du projet phare.",

      "programs.cardProgram.kicker": "Programme",
      "programs.child.h3": "Parrainer un enfant",
      "programs.child.p":
        "Soutenez un enfant orphelin ou défavorisé en Afrique : éducation, sport, nutrition et mentorat.",
      "programs.learnMore": "En savoir plus",

      "programs.school.h3": "Parrainer une école",
      "programs.school.p":
        "Transformez une école grâce aux ressources, aux infrastructures et au développement durable.",
      "programs.cardProject.kicker": "Projet",
      "programs.flagship.h3": "Infrastructures scolaires – projet phare",
      "programs.flagship.p":
        "Finaliser un terrain multisports et des ateliers : menuiserie, mécanique, plomberie, électricité & informatique.",
      "programs.viewProject": "Voir le projet",

      // SPONSOR A CHILD
      "child.h2": "Parrainer un enfant",
      "child.p":
        "Soutenez un enfant orphelin ou issu d’un milieu défavorisé — en finançant l’éducation, la protection et le développement.",

      "child.support.kicker": "Ce que votre soutien apporte",
      "child.support.h3": "Impact direct",
      "child.support.li1": "Frais scolaires et inscription",
      "child.support.li2": "Uniformes et fournitures",
      "child.support.li3": "Sport : entraînement et équipement",
      "child.support.li4": "Soutien nutritionnel",
      "child.support.li5": "Soins médicaux de base",
      "child.support.li6": "Mentorat & compétences de vie",
      "child.support.note":
        "Les sponsors reçoivent des mises à jour et un résumé annuel d’impact (photos/reporting selon disponibilité).",

      "child.options.kicker": "Options de parrainage",
      "child.options.h3": "Choisissez un niveau",

      "child.pricing.basic.title": "Sponsor de base",
      "child.pricing.basic.li1": "Contribution à l’éducation",
      "child.pricing.basic.li2": "Fournitures scolaires",
      "child.pricing.basic.li3": "Mise à jour annuelle",

      "child.pricing.full.title": "Sponsor complet",
      "child.pricing.full.li1": "Soutien scolaire complet",
      "child.pricing.full.li2": "Uniformes & livres",
      "child.pricing.full.li3": "Équipement sportif",
      "child.pricing.full.li4": "Mises à jour trimestrielles",

      "child.pricing.champion.title": "Sponsor champion",
      "child.pricing.champion.li1": "Éducation + développement",
      "child.pricing.champion.li2": "Santé & nutrition",
      "child.pricing.champion.li3": "Rapport détaillé semestriel",
      "child.pricing.champion.li4": "Certificat d’impact",

      "child.pricing.annual.title": "Mécène annuel",
      "child.pricing.annual.li1": "Bourse annuelle complète",
      "child.pricing.annual.li2": "Parrainage nominatif (optionnel)",
      "child.pricing.annual.li3": "Mention sur le site (optionnel)",
      "child.pricing.annual.li4": "Invitation aux événements",

      "pricing.perMonth": "par mois",
      "pricing.perYear": "par an",
      "pricing.sponsorBtn": "Parrainer",
      "child.paymentNote":
        "Paiements mensuels ou annuels. Don bancaire manuel possible sur demande.",

      // SPONSOR A SCHOOL
      "school.h2": "Parrainer une école",
      "school.p": "Financez l’éducation et les infrastructures pour impacter des centaines d’enfants chaque année.",

      "school.fund.kicker": "Ce que les sponsors peuvent financer",
      "school.fund.h3": "Axes de développement",
      "school.fund.li1": "Rénovation ou construction de salles",
      "school.fund.li2": "Installations sportives et équipements",
      "school.fund.li3": "Livres, ordinateurs et outils d’apprentissage",
      "school.fund.li4": "Formation et soutien des enseignants",
      "school.fund.li5": "Programmes d’alimentation scolaire",
      "school.fund.li6": "Eau, assainissement et hygiène",
      "school.fund.note":
        "Les sponsors entreprises/institutions peuvent recevoir un reporting compatible CSR/ESG.",

      "school.packages.kicker": "Formules",
      "school.packages.h3": "Formules de parrainage",

      "school.pkg.community.title": "Soutien communautaire",
      "school.pkg.community.li1": "Équipements & fournitures",
      "school.pkg.community.li2": "Mention sur le site",
      "school.pkg.community.li3": "Rapport annuel",

      "school.pkg.partner.title": "Partenaire éducation",
      "school.pkg.partner.li1": "Soutien de salles",
      "school.pkg.partner.li2": "Soutien enseignants",
      "school.pkg.partner.li3": "Rapport d’impact annuel",

      "school.pkg.gold.title": "Sponsor école Or",
      "school.pkg.gold.li1": "Composant majeur du projet",
      "school.pkg.gold.li2": "Visibilité de marque (optionnel)",
      "school.pkg.gold.li3": "Soutien média & RP",

      "school.pkg.strategic.title": "Partenaire stratégique",
      "school.pkg.strategic.li1": "Programme complet",
      "school.pkg.strategic.li2": "Accord long terme",
      "school.pkg.strategic.li3": "Support CSR/ESG",

      "pricing.enquireBtn": "Demander",
      "school.tailorNote":
        "Nous adaptons les partenariats selon vos priorités : éducation, sport, santé, compétences et développement communautaire.",

      // INDEX FLAGSHIP FULL
      "indexFlagship.h2": "Projet phare : finalisation des infrastructures scolaires (Afrique)",
      "indexFlagship.p":
        "Une école partenaire a besoin de financement pour achever des infrastructures combinant sport multisports et formation professionnelle : menuiserie, mécanique, plomberie, électricité et salle informatique.",

      "indexFlagship.components.kicker": "Composants",
      "indexFlagship.components.h3": "Ce que nous construisons",
      "indexFlagship.components.li1":
        "<b>Terrain multisports</b> (football, basketball, volleyball, athlétisme/fitness)",
      "indexFlagship.components.li2":
        "<b>Ateliers</b> pour la formation pratique",
      "indexFlagship.components.li3": "Atelier menuiserie",
      "indexFlagship.components.li4": "Atelier mécanique",
      "indexFlagship.components.li5": "Atelier plomberie",
      "indexFlagship.components.li6": "Atelier électricité",
      "indexFlagship.components.li7": "Salle informatique & compétences numériques",
      "indexFlagship.components.note":
        "Un campus modèle où les élèves apprennent, s’entraînent et obtiennent de vraies compétences et de vraies opportunités.",

      "indexFlagship.funding.kicker": "Parrainer des composants",
      "indexFlagship.funding.h3": "Opportunités de financement",
      "indexFlagship.funding.li1": "<b>5 000 €</b> — Soutien équipements (outils & matériel de base)",
      "indexFlagship.funding.li2": "<b>10 000 €</b> — Parrainer un atelier (menuiserie / mécanique / plomberie / électricité / informatique)",
      "indexFlagship.funding.li3": "<b>20 000 €</b> — Parrainer le terrain multisports (construction + équipements)",
      "indexFlagship.funding.li4": "<b>50 000 €+</b> — Partenaire campus stratégique (achèvement majeur & partenariat long terme)",
      "indexFlagship.funding.btn1": "Parrainer un composant",
      "indexFlagship.funding.btn2": "Demander des détails",
      "indexFlagship.funding.note":
        "Les sponsors reçoivent des mises à jour, photos/vidéos et un rapport d’achèvement pour les éléments financés.",

      "indexFlagship.transparency.kicker": "Transparence",
      "indexFlagship.transparency.h3": "Gouvernance & redevabilité",
      "indexFlagship.transparency.p":
        "BS Group Foundation travaille avec des partenaires locaux vérifiés et la direction de l’école. Les fonds sont alloués aux composants convenus, avec suivi, documentation et reporting pour garantir une utilisation responsable et un impact mesurable.",

      // EVENTS
      "events.h2": "Événements",
      "events.p": "Nous organisons des événements caritatifs et communautaires pour soutenir nos programmes et projets.",

      "events.c1.kicker": "Collecte",
      "events.c1.h3": "Gala & dîner caritatif",
      "events.c1.p": "Événement adapté aux entreprises : présentations, engagements et partenariats.",

      "events.c2.kicker": "Sport",
      "events.c2.h3": "Match / tournoi caritatif",
      "events.c2.p": "Mobilisation communautaire, mise en avant des jeunes et activations sponsors.",

      "events.c3.kicker": "Communauté",
      "events.c3.h3": "Journée compétences & mentorat",
      "events.c3.p": "Ateliers, orientation et sessions de mentorat pour les jeunes et les familles.",

      // DONATE
      "donate.h2": "Faire un don",
      "donate.p":
        "Vous pouvez faire un don pour le parrainage d’enfants, le parrainage d’écoles ou des composants du projet phare.",

      "donate.c1.p": "Soutient les fournitures et équipements essentiels.",
      "donate.c2.p": "Aide à financer outils, uniformes et ressources scolaires.",
      "donate.c3.p": "Finance un composant mesurable avec reporting.",
      "donate.btn": "Faire un don",
      "donate.tip":
        "Astuce : dès que vous avez un lien de paiement, remplacez les boutons « Faire un don » par ce lien.",

      // GET INVOLVED / FORM
      "involved.h2": "S’impliquer",
      "involved.p": "Dites-nous ce que vous souhaitez parrainer.",

      "involved.how.kicker": "Fonctionnement",
      "involved.how.h3": "Processus simple & transparent",
      "involved.how.li1": "Choisissez un programme (Enfant / École / Composant projet phare)",
      "involved.how.li2": "Nous confirmons les détails et fournissons la documentation",
      "involved.how.li3": "Les fonds sont alloués et suivis avec des mises à jour",
      "involved.how.li4": "Vous recevez un reporting d’avancement et des résumés d’impact",
      "involved.how.note":
        "Pour les sponsors entreprises/institutions, nous pouvons fournir une lettre de partenariat et une structure de reporting CSR/ESG.",

      "form.sponsor.h3": "Formulaire d’intérêt (parrainage)",
      "form.fullName": "Nom complet",
      "form.email": "E-mail",
      "form.supportType": "Je souhaite soutenir",
      "form.supportTypeChoose": "Sélectionnez",
      "form.supportType.child": "Parrainer un enfant",
      "form.supportType.school": "Parrainer une école",
      "form.supportType.flagship": "Projet phare (infrastructures)",
      "form.supportType.health": "Programme santé & bien-être",
      "form.supportType.women": "Programme autonomisation des femmes",
      "form.supportType.entrepreneur": "Programme entrepreneuriat",
      "form.supportType.general": "Don général",
      "form.supportType.corporate": "Partenariat entreprise / institution",

      "form.budget": "Budget (optionnel)",
      "form.budget.choose": "Choisir",
      "form.budget.1": "25–100 € / mois",
      "form.budget.2": "250–1 000 €",
      "form.budget.3": "2 500–10 000 €",
      "form.budget.4": "10 000–25 000 €",
      "form.budget.5": "25 000 €+",

      "form.message": "Message",
      "form.submit": "Envoyer",
      "form.consent":
        "En envoyant ce formulaire, vous acceptez que nous vous contactions au sujet des options de parrainage et des détails du projet.",

      "ph.name": "Votre nom",
      "ph.email": "vous@email.com",
      "ph.sponsorMsg": "Dites-nous ce que vous souhaitez parrainer et vos questions.",

      // CONTACT
      "contact.h2": "Contact",
      "contact.p": "Envoyez-nous un message.",

      "contact.details.kicker": "Coordonnées",
      "contact.details.h3": "Travaillons ensemble",
      "contact.details.p1": "Envoyez-nous un e-mail à :",
      "contact.details.p2": "• info@bsgroupfoundation.org  ou",
      "contact.details.p3": "• partnerships@bsgroupfoundation.org",

      "contact.form.h3": "Formulaire de contact",
      "contact.form.fullName": "Nom complet",
      "contact.form.email": "E-mail",
      "contact.form.message": "Message",
      "contact.form.send": "Envoyer",
      "ph.contactMsg": "Comment pouvons-nous aider ?",

      // FOOTER
      "footer.lead":
        "Donner aux enfants et aux communautés l’accès à l’éducation, au sport, à la santé, aux compétences, à l’autonomisation des femmes et à l’entrepreneuriat — pour construire des avenirs durables en Afrique et dans les régions émergentes.",
      "footer.navigate": "Navigation",
      "footer.getInvolved": "S’impliquer",
      "footer.partnerships": "Partenariats",
      "footer.rights": "Tous droits réservés.",
      "footer.legalTitle": "Juridique",
      "footer.legalTerms": "Conditions d'utilisation",
      "footer.legalPrivacy": "Politique de confidentialité",
      "footer.legalCookies": "Politique de cookies",
      "footer.legalDisclaimer": "Avertissement légal",
      "footer.legalTransparency": "Transparence",

      // FLAGSHIP PAGE KEYS (already included in your current file)
      "flagship_badge": "Cameroun • Région de l’Adamaoua • Primaire & Secondaire",
      "flagship_h1": "Projet phare : Finalisation des infrastructures scolaires",
      "flagship_lead":
        "BS Group Foundation soutient l’achèvement d’un campus scolaire communautaire (primaire et secondaire) dans la région de l’Adamaoua au Cameroun, en intégrant éducation, compétences professionnelles et développement sportif.",
      "gallery_title": "Galerie du projet",
      "gallery_sub":
        "Images réelles de notre école partenaire dans la région de l’Adamaoua (Cameroun), montrant les installations, l’avancement des travaux et l’engagement communautaire.",

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

      /* =======================
   INDEX — Flagship section
   ======================= */
"flagshipSection.h2": "Projet phare : Finalisation des infrastructures scolaires (Afrique)",
"flagshipSection.p": "Une école partenaire existante a besoin de financements pour finaliser une infrastructure qui combine le développement multi-sports et la formation professionnelle : menuiserie, mécanique, plomberie, électricité et un laboratoire informatique.",

"flagshipSection.components.kicker": "Composants",
"flagshipSection.components.h3": "Ce que nous construisons",
"flagshipSection.components.li1": "<b>Terrain d’entraînement multisports</b> (football, basketball, volleyball, athlétisme/fitness)",
"flagshipSection.components.li2": "<b>Ateliers</b> pour l’apprentissage de compétences pratiques",
"flagshipSection.components.li3": "Atelier de menuiserie",
"flagshipSection.components.li4": "Atelier de mécanique",
"flagshipSection.components.li5": "Atelier de plomberie",
"flagshipSection.components.li6": "Atelier d’électricité",
"flagshipSection.components.li7": "Laboratoire informatique & compétences numériques",
"flagshipSection.components.note": "Ce projet est conçu comme un campus modèle où les élèves apprennent, s’entraînent et obtiennent des compétences réelles menant à de véritables opportunités.",

"flagshipSection.sponsor.kicker": "Financer des composantes",
"flagshipSection.sponsor.h3": "Opportunités de financement",
"flagshipSection.sponsor.li1": "<b>5 000 €</b> — Soutien aux installations (outils & équipement de base)",
"flagshipSection.sponsor.li2": "<b>10 000 €</b> — Parrainer un atelier (menuiserie / mécanique / plomberie / électricité / informatique)",
"flagshipSection.sponsor.li3": "<b>20 000 €</b> — Parrainer le terrain multisports (construction + équipement)",
"flagshipSection.sponsor.li4": "<b>50 000 €+</b> — Partenaire stratégique du campus (finalisation majeure & partenariat long terme)",
"flagshipSection.sponsor.btn1": "Parrainer une composante",
"flagshipSection.sponsor.btn2": "Demander des détails",
"flagshipSection.sponsor.note": "Les sponsors reçoivent des mises à jour d’avancement, des photos/vidéos et un rapport de finalisation pour les composantes financées.",

"flagshipSection.transparency.kicker": "Transparence",
"flagshipSection.transparency.h3": "Gouvernance & redevabilité",
"flagshipSection.transparency.p": "BS Group Foundation travaille avec des partenaires locaux vérifiés et la direction de l’école. Les fonds sont affectés à des composantes convenues, avec suivi, documentation et reporting d’avancement afin d’assurer une utilisation responsable et un impact mesurable."

   },
}     
     
     

    // ============================================================
    // SPANISH
    // ============================================================
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

      // INDEX — HERO
      "hero.badge": "🌍 Programas centrados en África • Informes transparentes • Impacto sostenible",
      "hero.h1": "Impulsando a niños y comunidades a través de oportunidades",
      "hero.lead":
        "BS Group Foundation apoya a niños vulnerables, escuelas y comunidades mediante acceso a educación, desarrollo deportivo, salud, habilidades profesionales, empoderamiento de la mujer y emprendimiento — creando caminos sostenibles hacia la dignidad, el empleo y el éxito a largo plazo.",
      "hero.btn.sponsorChild": "Apadrinar a un niño",
      "hero.btn.sponsorSchool": "Apadrinar una escuela",
      "hero.btn.supportFlagship": "Apoyar el proyecto insignia",

      "stats.education.title": "Acceso a la educación",
      "stats.education.desc": "Cuotas, materiales, mentoría y apoyo escolar",
      "stats.sport.title": "Deporte y juventud",
      "stats.sport.desc": "Disciplina, trabajo en equipo y oportunidades",
      "stats.skills.title": "Habilidades y empleabilidad",
      "stats.skills.desc": "Talleres de oficios y habilidades digitales",
      "stats.health.title": "Salud y bienestar",
      "stats.health.desc": "Nutrición, higiene y apoyo comunitario",

      "hero.corporateLine": "Para alianzas corporativas/institucionales, visita",
      "hero.corporateLink": "Participar",

      "flagship.kicker": "Enfoque del proyecto insignia",
      "flagship.title": "Finalización de infraestructura escolar (África)",
      "flagship.intro":
        "Apoyamos a una escuela socia existente para completar infraestructura crítica:",
      "flagship.li1":
        "<b>Campo de entrenamiento multideporte</b> (fútbol, baloncesto, voleibol, atletismo/fitness)",
      "flagship.li2":
        "<b>Instalación de talleres</b> para formación en habilidades",
      "flagship.li3":
        "Carpintería • Mecánica • Fontanería • Electricidad • Laboratorio informático",
      "flagship.btn.view": "Ver proyecto",
      "flagship.note":
        "Los patrocinadores reciben actualizaciones, fotos/vídeos e informes claros de los componentes financiados.",

      // ABOUT
      "about.h2": "Acerca de la fundación",
      "about.p":
        "BS Group Foundation está dedicada al desarrollo comunitario a largo plazo combinando educación, juventud, salud, formación en habilidades, empoderamiento de la mujer y emprendimiento.",

      "about.mission.kicker": "Misión",
      "about.mission.h3": "Oportunidad y dignidad",
      "about.mission.p":
        "Empoderar a niños, jóvenes y comunidades brindando acceso a educación de calidad, deporte, salud, habilidades profesionales y oportunidades de emprendimiento — impulsando el desarrollo social y económico a largo plazo.",

      "about.vision.kicker": "Visión",
      "about.vision.h3": "Futuros sostenibles",
      "about.vision.p":
        "Comunidades inclusivas donde cada niño y joven, sin importar su origen, pueda aprender, crecer, trabajar y liderar con confianza, propósito y dignidad.",

      "about.values.kicker": "Valores",
      "about.values.h3": "Integridad e impacto",
      "about.values.p":
        "Integridad, transparencia, respeto, inclusión y resultados medibles guían nuestros programas y alianzas.",

      // IMPACT
      "impact.h2": "Áreas de impacto",
      "impact.p":
        "Nuestros programas están diseñados para generar un cambio medible en niños, familias y comunidades.",

      "impact.c1.h3": "🎓 Acceso a la educación",
      "impact.c1.p":
        "Apadrinamientos, apoyo a infraestructuras, materiales, becas y mentoría para niños vulnerables.",
      "impact.c2.h3": "⚽ Desarrollo deportivo",
      "impact.c2.p":
        "Programas juveniles, instalaciones, campamentos y desarrollo de talento para disciplina y oportunidades.",
      "impact.c3.h3": "🏥 Salud y bienestar",
      "impact.c3.p":
        "Acceso a salud básica, apoyo nutricional, educación en higiene e iniciativas comunitarias.",
      "impact.c4.h3": "🛠 Habilidades y empleabilidad",
      "impact.c4.p":
        "Formación vocacional en carpintería, mecánica, fontanería, electricidad, habilidades digitales y oficios.",
      "impact.c5.h3": "👩 Empoderamiento de la mujer",
      "impact.c5.p":
        "Programas que apoyan educación, liderazgo, bienestar y participación económica de las mujeres.",
      "impact.c6.h3": "🚀 Emprendimiento",
      "impact.c6.p":
        "Apoyo a micro-empresas, mentoría, formación práctica y desarrollo de negocios comunitarios.",

      // PROGRAMS
      "programs.h2": "Programas",
      "programs.p":
        "Apoya directamente a niños y comunidades — apadrina a un niño, una escuela o financia componentes del proyecto insignia.",

      "programs.cardProgram.kicker": "Programa",
      "programs.child.h3": "Apadrinar a un niño",
      "programs.child.p":
        "Apoya a un niño huérfano o desfavorecido con educación, deporte, nutrición y mentoría.",
      "programs.learnMore": "Más información",

      "programs.school.h3": "Apadrinar una escuela",
      "programs.school.p":
        "Transforma una escuela mediante recursos, instalaciones y desarrollo comunitario sostenible.",
      "programs.cardProject.kicker": "Proyecto",
      "programs.flagship.h3": "Infraestructura escolar — proyecto insignia",
      "programs.flagship.p":
        "Completar un campo multideporte y talleres: carpintería, mecánica, fontanería, electricidad y laboratorio informático.",
      "programs.viewProject": "Ver proyecto",

      // SPONSOR A CHILD
      "child.h2": "Apadrinar a un niño",
      "child.p":
        "Apoya a un niño huérfano o de un entorno vulnerable — financiando educación, protección y oportunidades de desarrollo.",

      "child.support.kicker": "Qué incluye tu apoyo",
      "child.support.h3": "Impacto directo",
      "child.support.li1": "Cuotas escolares e inscripción",
      "child.support.li2": "Uniformes y materiales",
      "child.support.li3": "Deporte: formación y equipamiento",
      "child.support.li4": "Apoyo nutricional",
      "child.support.li5": "Atención médica básica",
      "child.support.li6": "Mentoría y habilidades para la vida",
      "child.support.note":
        "Los patrocinadores reciben actualizaciones y un resumen anual de impacto (con fotos/informes cuando sea posible).",

      "child.options.kicker": "Opciones de apadrinamiento",
      "child.options.h3": "Elige un nivel",

      "child.pricing.basic.title": "Patrocinador básico",
      "child.pricing.basic.li1": "Contribución educativa",
      "child.pricing.basic.li2": "Materiales de aprendizaje",
      "child.pricing.basic.li3": "Actualización anual",

      "child.pricing.full.title": "Patrocinador completo",
      "child.pricing.full.li1": "Apoyo escolar completo",
      "child.pricing.full.li2": "Uniformes y libros",
      "child.pricing.full.li3": "Equipo deportivo",
      "child.pricing.full.li4": "Actualizaciones trimestrales",

      "child.pricing.champion.title": "Patrocinador campeón",
      "child.pricing.champion.li1": "Educación + desarrollo",
      "child.pricing.champion.li2": "Salud y nutrición",
      "child.pricing.champion.li3": "Informe semestral detallado",
      "child.pricing.champion.li4": "Certificado de impacto",

      "child.pricing.annual.title": "Mecenas anual",
      "child.pricing.annual.li1": "Beca anual completa",
      "child.pricing.annual.li2": "Apadrinamiento con nombre (opcional)",
      "child.pricing.annual.li3": "Reconocimiento en la web (opcional)",
      "child.pricing.annual.li4": "Invitación a eventos",

      "pricing.perMonth": "por mes",
      "pricing.perYear": "por año",
      "pricing.sponsorBtn": "Apadrinar",
      "child.paymentNote":
        "Los pagos pueden ser mensuales o anuales. Donaciones bancarias manuales disponibles bajo solicitud.",

      // SPONSOR A SCHOOL
      "school.h2": "Apadrinar una escuela",
      "school.p": "Financia educación e infraestructura para impactar a cientos de niños cada año.",

      "school.fund.kicker": "Qué pueden financiar los patrocinadores",
      "school.fund.h3": "Áreas de desarrollo escolar",
      "school.fund.li1": "Renovación o construcción de aulas",
      "school.fund.li2": "Instalaciones y equipamiento deportivo",
      "school.fund.li3": "Libros, ordenadores y herramientas educativas",
      "school.fund.li4": "Formación y apoyo al profesorado",
      "school.fund.li5": "Programas de alimentación escolar",
      "school.fund.li6": "Agua, saneamiento e higiene",
      "school.fund.note":
        "Los patrocinadores corporativos/institucionales pueden recibir informes compatibles con CSR/ESG.",

      "school.packages.kicker": "Paquetes",
      "school.packages.h3": "Paquetes de patrocinio",

      "school.pkg.community.title": "Apoyo comunitario",
      "school.pkg.community.li1": "Equipos y materiales",
      "school.pkg.community.li2": "Reconocimiento en la web",
      "school.pkg.community.li3": "Informe anual",

      "school.pkg.partner.title": "Socio educativo",
      "school.pkg.partner.li1": "Apoyo a aulas",
      "school.pkg.partner.li2": "Apoyo al profesorado",
      "school.pkg.partner.li3": "Informe anual de impacto",

      "school.pkg.gold.title": "Patrocinador Oro",
      "school.pkg.gold.li1": "Componente principal del proyecto",
      "school.pkg.gold.li2": "Visibilidad de marca (opcional)",
      "school.pkg.gold.li3": "Apoyo en medios y PR",

      "school.pkg.strategic.title": "Socio estratégico",
      "school.pkg.strategic.li1": "Programa completo",
      "school.pkg.strategic.li2": "Acuerdo a largo plazo",
      "school.pkg.strategic.li3": "Soporte CSR/ESG",

      "pricing.enquireBtn": "Consultar",
      "school.tailorNote":
        "Podemos adaptar el patrocinio a tus prioridades: educación, deporte, salud, habilidades y desarrollo comunitario.",

      // INDEX FLAGSHIP FULL
      "indexFlagship.h2": "Proyecto insignia: finalización de infraestructura escolar (África)",
      "indexFlagship.p":
        "Una escuela socia necesita financiación para completar infraestructura que combina multideporte con formación profesional: carpintería, mecánica, fontanería, electricidad y laboratorio informático.",

      "indexFlagship.components.kicker": "Componentes",
      "indexFlagship.components.h3": "Qué estamos construyendo",
      "indexFlagship.components.li1":
        "<b>Campo multideporte</b> (fútbol, baloncesto, voleibol, atletismo/fitness)",
      "indexFlagship.components.li2":
        "<b>Talleres</b> para formación práctica",
      "indexFlagship.components.li3": "Taller de carpintería",
      "indexFlagship.components.li4": "Taller de mecánica",
      "indexFlagship.components.li5": "Taller de fontanería",
      "indexFlagship.components.li6": "Taller de electricidad",
      "indexFlagship.components.li7": "Laboratorio informático y habilidades digitales",
      "indexFlagship.components.note":
        "Un campus modelo donde los estudiantes aprenden, entrenan y se gradúan con habilidades reales y oportunidades reales.",

      "indexFlagship.funding.kicker": "Patrocinar componentes",
      "indexFlagship.funding.h3": "Oportunidades de financiación",
      "indexFlagship.funding.li1": "<b>€5.000</b> — Apoyo de equipamiento (herramientas y básicos)",
      "indexFlagship.funding.li2": "<b>€10.000</b> — Patrocina un taller (carpintería / mecánica / fontanería / electricidad / informática)",
      "indexFlagship.funding.li3": "<b>€20.000</b> — Patrocina el campo deportivo (construcción + equipamiento)",
      "indexFlagship.funding.li4": "<b>€50.000+</b> — Socio estratégico del campus (finalización mayor + alianza a largo plazo)",
      "indexFlagship.funding.btn1": "Patrocinar un componente",
      "indexFlagship.funding.btn2": "Solicitar detalles",
      "indexFlagship.funding.note":
        "Los patrocinadores reciben actualizaciones, fotos/vídeos y un informe de finalización de los componentes financiados.",

      "indexFlagship.transparency.kicker": "Transparencia",
      "indexFlagship.transparency.h3": "Gobernanza y rendición de cuentas",
      "indexFlagship.transparency.p":
        "BS Group Foundation trabaja con socios locales verificados y la dirección escolar. Los fondos se asignan a componentes acordados, con seguimiento, documentación e informes para asegurar un uso responsable e impacto medible.",

      // EVENTS
      "events.h2": "Eventos",
      "events.p": "Organizamos eventos solidarios y comunitarios para apoyar nuestros programas y proyectos.",

      "events.c1.kicker": "Recaudación",
      "events.c1.h3": "Gala y cena benéfica",
      "events.c1.p": "Evento apto para empresas con presentaciones, compromisos y alianzas.",

      "events.c2.kicker": "Deporte",
      "events.c2.h3": "Partido / torneo benéfico",
      "events.c2.p": "Participación comunitaria, visibilidad juvenil y activaciones de patrocinio.",

      "events.c3.kicker": "Comunidad",
      "events.c3.h3": "Día de habilidades y mentoría",
      "events.c3.p": "Talleres, orientación y sesiones de mentoría para jóvenes y familias.",

      // DONATE
      "donate.h2": "Donar",
      "donate.p":
        "Puedes donar para apadrinamiento de niños, apoyo a escuelas o componentes específicos del proyecto insignia.",

      "donate.c1.p": "Apoya materiales de aprendizaje y equipamiento esencial.",
      "donate.c2.p": "Ayuda a financiar herramientas, uniformes y recursos escolares.",
      "donate.c3.p": "Financia un componente medible con informe.",
      "donate.btn": "Donar",
      "donate.tip":
        "Consejo: cuando tengas un enlace de pago, reemplaza los botones “Donar” por ese enlace.",

      // GET INVOLVED / FORM
      "involved.h2": "Participar",
      "involved.p": "Cuéntanos qué te gustaría patrocinar.",

      "involved.how.kicker": "Cómo funciona",
      "involved.how.h3": "Proceso simple y transparente",
      "involved.how.li1": "Elige un programa (Niño / Escuela / Componente del proyecto insignia)",
      "involved.how.li2": "Confirmamos detalles y proporcionamos documentación",
      "involved.how.li3": "Los fondos se asignan y se supervisan con actualizaciones",
      "involved.how.li4": "Recibes informes de progreso y resúmenes de impacto",
      "involved.how.note":
        "Para patrocinio corporativo/institucional, podemos proporcionar carta de alianza y estructura de informes CSR/ESG.",

      "form.sponsor.h3": "Formulario de interés (patrocinio)",
      "form.fullName": "Nombre completo",
      "form.email": "Correo electrónico",
      "form.supportType": "Quiero apoyar",
      "form.supportTypeChoose": "Selecciona",
      "form.supportType.child": "Apadrinar a un niño",
      "form.supportType.school": "Apadrinar una escuela",
      "form.supportType.flagship": "Proyecto insignia (infraestructura)",
      "form.supportType.health": "Programa de salud y bienestar",
      "form.supportType.women": "Programa de empoderamiento de la mujer",
      "form.supportType.entrepreneur": "Programa de emprendimiento",
      "form.supportType.general": "Donación general",
      "form.supportType.corporate": "Alianza corporativa / institucional",

      "form.budget": "Presupuesto (opcional)",
      "form.budget.choose": "Elegir",
      "form.budget.1": "€25–€100 / mes",
      "form.budget.2": "€250–€1.000",
      "form.budget.3": "€2.500–€10.000",
      "form.budget.4": "€10.000–€25.000",
      "form.budget.5": "€25.000+",

      "form.message": "Mensaje",
      "form.submit": "Enviar",
      "form.consent":
        "Al enviar, aceptas que podamos contactarte sobre opciones de patrocinio y detalles del proyecto.",

      "ph.name": "Tu nombre",
      "ph.email": "tu@email.com",
      "ph.sponsorMsg": "Cuéntanos qué te gustaría patrocinar y cualquier pregunta.",

      // CONTACT
      "contact.h2": "Contacto",
      "contact.p": "Envíanos un mensaje.",

      "contact.details.kicker": "Detalles de contacto",
      "contact.details.h3": "Trabajemos juntos",
      "contact.details.p1": "Envíanos un correo a:",
      "contact.details.p2": "• info@bsgroupfoundation.org  o",
      "contact.details.p3": "• partnerships@bsgroupfoundation.org",

      "contact.form.h3": "Formulario de contacto",
      "contact.form.fullName": "Nombre completo",
      "contact.form.email": "Correo electrónico",
      "contact.form.message": "Mensaje",
      "contact.form.send": "Enviar mensaje",
      "ph.contactMsg": "¿Cómo podemos ayudarte?",

      // FOOTER
      "footer.lead":
        "Empoderando a niños y comunidades mediante educación, deporte, salud, habilidades, empoderamiento de la mujer y emprendimiento — construyendo futuros sostenibles en África y regiones emergentes.",
      "footer.navigate": "Navegar",
      "footer.getInvolved": "Participar",
      "footer.partnerships": "Alianzas",
      "footer.rights": "Todos los derechos reservados.",
      "footer.legalTitle": "Legal",
      "footer.legalTerms": "Términos de uso",
      "footer.legalPrivacy": "Política de privacidad",
      "footer.legalCookies": "Política de cookies",
      "footer.legalDisclaimer": "Aviso legal",
      "footer.legalTransparency": "Transparencia",

      // FLAGSHIP PAGE KEYS
      "flagship_badge": "Camerún • Región de Adamaoua • Primaria y Secundaria",
      "flagship_h1": "Proyecto insignia: Finalización de infraestructura escolar",
      "flagship_lead":
        "BS Group Foundation apoya la finalización de un campus escolar comunitario (primaria y secundaria) en Adamaoua, Camerún, integrando educación, formación profesional y desarrollo deportivo.",
      "gallery_title": "Galería del proyecto",
      "gallery_sub":
        "Imágenes reales de nuestra escuela socia en Adamaoua (Camerún), mostrando instalaciones, avance de obras y participación comunitaria.",

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
      /* =======================
   INDEX — Flagship section
   ======================= */
"flagshipSection.h2": "Proyecto insignia: Finalización de infraestructura escolar (África)",
"flagshipSection.p": "Una escuela socia existente necesita financiación para completar infraestructura que combina el desarrollo multideportivo con la formación profesional: carpintería, mecánica, fontanería, electricidad y un laboratorio informático.",

"flagshipSection.components.kicker": "Componentes",
"flagshipSection.components.h3": "Lo que estamos construyendo",
"flagshipSection.components.li1": "<b>Campo de entrenamiento multideportivo</b> (fútbol, baloncesto, voleibol, atletismo/fitness)",
"flagshipSection.components.li2": "<b>Centro de talleres</b> para formación práctica",
"flagshipSection.components.li3": "Taller de carpintería",
"flagshipSection.components.li4": "Taller de mecánica",
"flagshipSection.components.li5": "Taller de fontanería",
"flagshipSection.components.li6": "Taller de electricidad",
"flagshipSection.components.li7": "Laboratorio informático y habilidades digitales",
"flagshipSection.components.note": "Este proyecto está diseñado como un campus modelo donde los estudiantes aprenden, entrenan y se gradúan con habilidades reales y oportunidades reales.",

"flagshipSection.sponsor.kicker": "Patrocinar componentes",
"flagshipSection.sponsor.h3": "Oportunidades de financiación",
"flagshipSection.sponsor.li1": "<b>5.000 €</b> — Apoyo a instalaciones (herramientas y equipo básico)",
"flagshipSection.sponsor.li2": "<b>10.000 €</b> — Patrocinar un taller (carpintería / mecánica / fontanería / electricidad / informática)",
"flagshipSection.sponsor.li3": "<b>20.000 €</b> — Patrocinar el campo deportivo (construcción + equipamiento)",
"flagshipSection.sponsor.li4": "<b>50.000 €+</b> — Socio estratégico del campus (finalización mayor y alianza a largo plazo)",
"flagshipSection.sponsor.btn1": "Patrocinar un componente",
"flagshipSection.sponsor.btn2": "Solicitar detalles",
"flagshipSection.sponsor.note": "Los patrocinadores reciben actualizaciones de progreso, fotos/vídeos y un informe de finalización de los componentes financiados.",

"flagshipSection.transparency.kicker": "Transparencia",
"flagshipSection.transparency.h3": "Gobernanza y rendición de cuentas",
"flagshipSection.transparency.p": "BS Group Foundation trabaja con socios locales verificados y la dirección de la escuela. Los fondos se asignan a componentes acordados, con seguimiento, documentación e informes de progreso para garantizar un uso responsable y un impacto medible.",
       
     
  };

  function getSavedLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function normalizeKeyVariants(key) {
    // supports both dot and underscore formats
    return [key, key.replace(/\./g, "_"), key.replace(/_/g, ".")];
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
      sel.addEventListener("change", (e) => setLang(e.target.value));
    });
  });

  // Expose for debug
  window.bsgfSetLang = setLang;
})();
