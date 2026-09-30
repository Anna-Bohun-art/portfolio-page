export type Locale = "en" | "de";

export const locales: Locale[] = ["en", "de"];

export const localePaths: Record<Locale, string> = { en: "/", de: "/de" };

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ExperienceEntry = {
  period: string;
  company: string;
  role: string;
  kind: "work" | "education";
  highlights: string[];
};

export type Project = {
  name: string;
  status: string;
  summary: string;
  stack: string[];
  link?: { label: string; href: string };
};

export type Technology = {
  name: string;
  proof: string;
};

export type TechnologyGroup = {
  title: string;
  eyebrow: string;
  technologies: Technology[];
};

export type KnowledgeArea = {
  name: string;
  proof: string;
};

export type HeaderLabels = {
  home: string;
  primaryNav: string;
  mobileNav: string;
  openNav: string;
  closeNav: string;
  switchLanguage: string;
  otherLanguage: string;
  theme: ThemeLabels;
};

export type ThemeLabels = {
  toDark: string;
  toLight: string;
  toggle: string;
};

export type ToolkitLabels = {
  stage: string;
  coreTop: string;
  coreBottom: string;
  proofEyebrow: string;
  scienceEyebrow: string;
  scienceTitle: string;
};

export const profile = {
  name: "Anna Kladova Bohun",
  email: "annabohun83@gmail.com",
  linkedin: "https://www.linkedin.com/in/annabohun83",
  github: "https://github.com/Anna-Bohun-art",
};

export const assets: {
  portraitUrl: string | null;
  cvUrl: string | null;
} = {
  portraitUrl: "/anna-bohun-professional.jpg",
  cvUrl: "/Anna_Kladova_Bohun_CV_2026.pdf",
};

const authentikRepo = "https://github.com/Anna-Bohun-art/authentik_projekt";
const authentikStack = [
  "TypeScript",
  "Web client (BFF)",
  "OAuth 2.0 / OIDC",
  "PKCE",
  "JWKS",
  "SOAP / WS-Security",
  "Docker Compose",
  "GitHub Actions",
];

const en = {
  meta: {
    title: "Anna Kladova Bohun | Software Developer for Life Science",
    description:
      "React and TypeScript Software Developer with a PhD in Biochemistry, targeting life-science and laboratory-system teams.",
    shareDescription:
      "React and TypeScript development backed by a PhD in Biochemistry and a focus on life-science systems.",
    jobTitle: "Software Developer",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  header: {
    home: "Anna Kladova Bohun, home",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    switchLanguage: "Auf Deutsch wechseln",
    otherLanguage: "DE",
    theme: {
      toDark: "Switch to dark mode",
      toLight: "Switch to light mode",
      toggle: "Toggle color mode",
    },
  } as HeaderLabels,
  profile: {
    headline: "Software Developer (React / TypeScript) | PhD Biochemistry | Life Science & Laboratory Systems",
    portraitCaption: "Software Developer · React / TypeScript · Life Science",
    location: "Dornstadt, Ulm region, Germany",
    bio: "Anna Kladova Bohun is a Software Developer with commercial experience in React, TypeScript, Python, automated testing, and AI-powered applications. With a PhD in Biochemistry, she brings scientific domain knowledge and modern software engineering practices to life-science and laboratory-system teams.",
  },
  hero: {
    pill: "React · TypeScript · Life Science",
    titleTop: "Software for",
    titleBottom: "life science.",
    introBefore: "I'm ",
    introAfter:
      ", a software developer combining commercial React and TypeScript experience with a PhD in Biochemistry.",
    primaryAction: "View my experience",
    secondaryAction: "Start a conversation",
    proof: [
      { value: "PhD", label: "Biochemistry" },
      { value: "3+", label: "Commercial roles" },
      { value: "Full-stack", label: "UI to APIs" },
    ],
    scrollLabel: "Scroll to explore",
    scrollAria: "Scroll to about section",
  },
  about: {
    eyebrow: "Why Anna",
    title: "A different kind of developer.",
    text: "Scientific depth meets practical engineering. I bring the discipline to understand hard problems and the delivery mindset to turn them into reliable products.",
  },
  strengths: [
    {
      title: "Scientific Thinking",
      description:
        "A research-trained approach to complex systems: form a hypothesis, test it rigorously, and follow the evidence.",
      signal: "PhD in Biochemistry",
    },
    {
      title: "Full-Stack Engineering",
      description:
        "Hands-on delivery across React interfaces, typed frontends, Python services, REST APIs, and data layers.",
      signal: "Frontend to APIs",
    },
    {
      title: "Product-Ready Mindset",
      description:
        "Quality is part of the build: automated tests, CI pipelines, reusable systems, reviews, and agile collaboration.",
      signal: "Tested. Reviewed. Shipped.",
    },
  ],
  experienceSection: {
    eyebrow: "Career journey",
    title: "From molecules to software.",
    text: "Professional experience and education, separated for a clearer view of my path.",
    entriesLabel: "entries",
    work: { title: "Experience", description: "Commercial roles and hands-on software delivery." },
    education: { title: "Education", description: "Technical training and scientific foundations." },
  },
  experience: [
    {
      period: "07/2026 - Present",
      company: "UK Models (client project, remote)",
      role: "Full-Stack Developer",
      kind: "work",
      highlights: [
        "Analysed a legacy Laravel/PHP lead-management application and designed the target architecture",
        "Incremental rewrite with Angular, TypeScript, and Spring Boot",
        "Reuses the existing production MySQL and AWS S3 infrastructure",
        "AI-assisted, agent-based workflow for legacy code analysis, implementation, and testing",
      ],
    },
    {
      period: "09/2025 - 07/2026",
      company: "beebucket GmbH",
      role: "Software Developer - Applied AI",
      kind: "work",
      highlights: [
        "AI Hub: document manager for files inside data connections, with AI summaries, question answering, and statistical and content metadata",
        "React and TypeScript frontend: AI summaries and question-answering results in the UI",
        "Integrated two differently structured REST APIs, with data shaping and lazy loading",
        "Dynamic display of statistical metadata per document type",
        "Python service validating the team's Prefect workflows, with statistical analysis of runs",
        "Playwright end-to-end tests integrated into GitHub Actions CI",
        "AI-assisted delivery with GitHub Copilot and Claude AI",
      ],
    },
    {
      period: "03/2024 - 09/2025",
      company: "Informatikwerk GmbH",
      role: "Frontend Developer",
      kind: "work",
      highlights: [
        "React.js and JavaScript web applications",
        "Responsive enterprise user interfaces",
        "Jest unit testing and Selenium end-to-end testing",
        "Agile development and code reviews",
      ],
    },
    {
      period: "09/2024 - 07/2026",
      company: "IHK",
      role: "Fachinformatikerin für Anwendungsentwicklung",
      kind: "education",
      highlights: [
        "Shortened two-year retraining in application development alongside full-time work",
        "Completed 21.07.2026 (IHK Ulm), certificate awarded",
      ],
    },
    {
      period: "2022 - 2023",
      company: "WBS Coding School",
      role: "Full-Stack Web & App Development Certificate",
      kind: "education",
      highlights: ["Career transition into modern software engineering"],
    },
    {
      period: "2011 - 2017",
      company: "Softrino Lda",
      role: "Business Development & Web QA",
      kind: "work",
      highlights: [
        "Client acquisition and project delivery",
        "Website QA, testing, and CMS implementation",
        "Customer communication and project coordination",
      ],
    },
    {
      period: "2006 - 2010",
      company: "Universidade Nova de Lisboa",
      role: "Dr. rer. nat. in Biochemistry",
      kind: "education",
      highlights: ["Doctoral research on metal-binding proteins (European Doctorate)"],
    },
    {
      period: "2001 - 2006",
      company: "Donetsk National University",
      role: "MSc Organic Chemistry",
      kind: "education",
      highlights: ["Graduate degree in organic chemistry"],
    },
  ] as ExperienceEntry[],
  projectsSection: {
    eyebrow: "Selected work",
    title: "Projects.",
    text: "Current and recent builds beyond my employed roles.",
  },
  projects: [
    {
      name: "UK Models lead-management rewrite",
      status: "In progress · client project",
      summary:
        "Replacing a legacy Laravel/PHP lead-management application with Spring Boot and Angular, built against the existing production database schema.",
      stack: ["Spring Boot", "Angular", "TypeScript", "MySQL", "AWS S3"],
    },
    {
      name: "authentik OAuth 2.0 project",
      status: "Completed 09/2026",
      summary:
        "End-to-end OAuth 2.0 / OpenID Connect setup with authentik: a browser web client (Authorization Code + PKCE login, server-side sessions, backend-for-frontend) calls a SOAP gateway that validates JWTs against JWKS and enforces scopes; a machine-to-machine client uses client credentials.",
      stack: authentikStack,
      link: { label: "View on GitHub", href: authentikRepo },
    },
  ] as Project[],
  toolkitSection: {
    eyebrow: "Technology and science",
    title: "Engineering skills, grounded in science.",
    text: "Explore the software toolkit and the scientific knowledge behind my life-science focus.",
  },
  toolkit: {
    stage: "Interactive technology constellation",
    coreTop: "Anna's",
    coreBottom: "Toolkit",
    proofEyebrow: "Practical proof point",
    scienceEyebrow: "Scientific foundation",
    scienceTitle: "Domain knowledge for life-science software.",
  } as ToolkitLabels,
  technologyGroups: [
    {
      title: "Frontend",
      eyebrow: "Interface systems",
      technologies: [
        { name: "React", proof: "Commercial web applications and reusable UI systems" },
        { name: "TypeScript", proof: "Typed feature development for maintainable frontends" },
        { name: "JavaScript", proof: "Production enterprise interfaces" },
        { name: "Vue.js", proof: "Component-based frontend development" },
        { name: "MUI", proof: "Consistent, accessible interface components" },
        { name: "HTML / CSS", proof: "Responsive, semantic user experiences" },
      ],
    },
    {
      title: "Backend",
      eyebrow: "Services & data",
      technologies: [
        { name: "Python / Flask", proof: "Backend services and workflow validation" },
        { name: "R", proof: "Statistical data analysis and ggplot2 visualisation" },
        { name: "REST APIs", proof: "Frontend-to-service integration" },
        { name: "Node / Express", proof: "JavaScript API development" },
        { name: "Java / Spring", proof: "Structured backend application development" },
        { name: "PostgreSQL", proof: "Relational application data" },
        { name: "MongoDB", proof: "Document-oriented data workflows" },
      ],
    },
    {
      title: "Testing / DevOps",
      eyebrow: "Delivery confidence",
      technologies: [
        { name: "Playwright", proof: "End-to-end coverage in commercial projects" },
        { name: "Jest", proof: "Frontend unit testing" },
        { name: "Selenium", proof: "Browser-level regression testing" },
        { name: "GitHub Actions", proof: "Automated CI integration" },
        { name: "Docker", proof: "Repeatable development environments" },
        { name: "Git", proof: "Collaborative reviews and agile delivery" },
      ],
    },
    {
      title: "AI / Tooling",
      eyebrow: "Accelerated workflows",
      technologies: [
        { name: "GitHub Copilot", proof: "AI-assisted implementation and iteration" },
        { name: "Claude AI", proof: "AI-assisted software delivery" },
        { name: "Contentful", proof: "Structured content management" },
        { name: "LLM / RAG apps", proof: "Frontend for an AI document hub with summaries and Q&A" },
      ],
    },
  ] as TechnologyGroup[],
  scientificKnowledge: [
    {
      name: "Biochemistry",
      proof: "PhD-level understanding of biological systems, experimental research, and scientific communication.",
    },
    {
      name: "Organic Chemistry",
      proof: "MSc foundation in molecular structures, reactions, and analytical scientific thinking.",
    },
    {
      name: "Experimental Design",
      proof: "Experience forming hypotheses, planning controlled investigations, and evaluating evidence.",
    },
    {
      name: "Scientific Data Interpretation",
      proof: "Analysing results with Python and R and translating them into clear conclusions, documentation, and decisions.",
    },
  ] as KnowledgeArea[],
  contact: {
    eyebrow: "Let's build something useful",
    titleTop: "Complex problem?",
    titleBottom: "Let's make it clear.",
    text: "I'm especially interested in software roles within life-science companies, laboratory systems, scientific platforms, and related digital products.",
    emailAction: "Email Anna",
    viewCv: "View CV (German)",
    downloadCv: "Download CV (German)",
    cvComingSoon: "CV coming soon",
    cvComingSoonTitle: "CV PDF coming soon",
    emailLabel: "Email",
    locationLabel: "Location",
    languagesLabel: "Languages",
  },
  languages: ["German B2–C1", "English B2–C1", "Portuguese B1–B2", "Russian (native)", "Ukrainian (native)"],
  footer: {
    builtWith: "Built with Next.js, TypeScript & curiosity.",
    backToTop: "Back to top ↑",
  },
  skipLink: "Skip to main content",
};

export type SiteContent = typeof en;

const de: SiteContent = {
  meta: {
    title: "Anna Kladova Bohun | Softwareentwicklerin für Life Science",
    description:
      "React- und TypeScript-Entwicklerin mit Promotion in Biochemie – mit Fokus auf Teams für Life Science und Laborsysteme.",
    shareDescription:
      "Entwicklung mit React und TypeScript, gestützt auf eine Promotion in Biochemie und einen Fokus auf Life-Science-Systeme.",
    jobTitle: "Softwareentwicklerin",
  },
  nav: [
    { label: "Über mich", href: "#about" },
    { label: "Erfahrung", href: "#experience" },
    { label: "Projekte", href: "#projects" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Kontakt", href: "#contact" },
  ],
  header: {
    home: "Anna Kladova Bohun, Startseite",
    primaryNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    openNav: "Navigation öffnen",
    closeNav: "Navigation schließen",
    switchLanguage: "Switch to English",
    otherLanguage: "EN",
    theme: {
      toDark: "Zum dunklen Modus wechseln",
      toLight: "Zum hellen Modus wechseln",
      toggle: "Farbmodus umschalten",
    },
  },
  profile: {
    headline: "Softwareentwicklerin (React / TypeScript) | Dr. rer. nat. Biochemie | Life Science & Laborsysteme",
    portraitCaption: "Softwareentwicklerin · React / TypeScript · Life Science",
    location: "Dornstadt, Raum Ulm",
    bio: "Anna Kladova Bohun ist Softwareentwicklerin mit Berufserfahrung in React, TypeScript, Python, Testautomatisierung und KI-gestützten Anwendungen. Mit ihrer Promotion in Biochemie verbindet sie naturwissenschaftliches Fachwissen mit moderner Softwareentwicklung – für Teams in Life Science und Laborsystemen.",
  },
  hero: {
    pill: "React · TypeScript · Life Science",
    titleTop: "Software für",
    titleBottom: "Life Science.",
    introBefore: "Ich bin ",
    introAfter:
      ", Softwareentwicklerin mit Berufserfahrung in React und TypeScript und einer Promotion in Biochemie.",
    primaryAction: "Meine Erfahrung ansehen",
    secondaryAction: "Kontakt aufnehmen",
    proof: [
      { value: "Dr. rer. nat.", label: "Biochemie" },
      { value: "3+", label: "Berufliche Stationen" },
      { value: "Full-Stack", label: "Von UI bis API" },
    ],
    scrollLabel: "Weiter scrollen",
    scrollAria: "Zum Abschnitt „Über mich“ scrollen",
  },
  about: {
    eyebrow: "Warum Anna",
    title: "Eine andere Art von Entwicklerin.",
    text: "Wissenschaftliche Tiefe trifft praktische Softwareentwicklung. Ich bringe die Disziplin mit, schwierige Probleme zu verstehen, und den Umsetzungswillen, daraus verlässliche Produkte zu machen.",
  },
  strengths: [
    {
      title: "Wissenschaftliches Denken",
      description:
        "Ein in der Forschung geschulter Blick auf komplexe Systeme: Hypothesen bilden, gründlich prüfen und den Belegen folgen.",
      signal: "Promotion in Biochemie",
    },
    {
      title: "Full-Stack-Entwicklung",
      description:
        "Praktische Umsetzung von React-Oberflächen und typisierten Frontends über Python-Services und REST-APIs bis zur Datenschicht.",
      signal: "Vom Frontend bis zur API",
    },
    {
      title: "Produktreife Arbeitsweise",
      description:
        "Qualität gehört zur Entwicklung dazu: automatisierte Tests, CI-Pipelines, wiederverwendbare Komponenten, Reviews und agile Zusammenarbeit.",
      signal: "Getestet. Geprüft. Ausgeliefert.",
    },
  ],
  experienceSection: {
    eyebrow: "Werdegang",
    title: "Von Molekülen zu Software.",
    text: "Berufserfahrung und Ausbildung getrennt dargestellt – für einen klaren Blick auf meinen Weg.",
    entriesLabel: "Einträge",
    work: { title: "Berufserfahrung", description: "Berufliche Stationen und praktische Softwareentwicklung." },
    education: { title: "Ausbildung", description: "Technische Ausbildung und naturwissenschaftliche Grundlagen." },
  },
  experience: [
    {
      period: "07/2026 – heute",
      company: "UK Models (Kundenprojekt, remote)",
      role: "Full-Stack-Softwareentwicklerin",
      kind: "work",
      highlights: [
        "Bestehende Laravel/PHP-Anwendung für Lead-Management analysiert und Zielarchitektur entworfen",
        "Schrittweise Neuentwicklung mit Angular, TypeScript und Spring Boot",
        "Weiternutzung der bestehenden produktiven MySQL- und AWS-S3-Infrastruktur",
        "KI-gestützter, agentenbasierter Workflow für Legacy-Codeanalyse, Implementierung und Tests",
      ],
    },
    {
      period: "09/2025 – 07/2026",
      company: "beebucket GmbH",
      role: "Softwareentwicklerin – Applied AI",
      kind: "work",
      highlights: [
        "AI Hub: Dokumentenverwaltung für Dateien in Datenverbindungen – mit KI-Zusammenfassungen, Fragebeantwortung sowie statistischen und inhaltlichen Metadaten",
        "Frontend mit React und TypeScript: Darstellung von KI-Zusammenfassungen und Antworten in der Oberfläche",
        "Zwei unterschiedlich strukturierte REST-APIs integriert, inkl. Datenaufbereitung und Lazy Loading",
        "Dynamische Darstellung statistischer Metadaten je nach Dokumenttyp",
        "Python-Service zur Validierung der Prefect-Workflows des Teams mit statistischer Auswertung der Runs",
        "Playwright-End-to-End-Tests, integriert in GitHub Actions CI",
        "KI-gestützte Entwicklung mit GitHub Copilot und Claude AI",
      ],
    },
    {
      period: "03/2024 – 09/2025",
      company: "Informatikwerk GmbH",
      role: "Frontend-Entwicklerin",
      kind: "work",
      highlights: [
        "Webanwendungen mit React.js und JavaScript",
        "Responsive Oberflächen für Unternehmenskunden",
        "Unit-Tests mit Jest und End-to-End-Tests mit Selenium",
        "Agile Entwicklung und Code Reviews",
      ],
    },
    {
      period: "09/2024 – 07/2026",
      company: "IHK",
      role: "Fachinformatikerin für Anwendungsentwicklung",
      kind: "education",
      highlights: [
        "Verkürzte Umschulung (2 Jahre) parallel zur Berufstätigkeit",
        "Abschluss am 21.07.2026 (IHK Ulm)",
      ],
    },
    {
      period: "2022 – 2023",
      company: "WBS Coding School",
      role: "Zertifikat Full-Stack Web & App Development",
      kind: "education",
      highlights: ["Berufliche Neuorientierung in die Softwareentwicklung"],
    },
    {
      period: "2011 – 2017",
      company: "Softrino Lda",
      role: "Business Development & Web-QA",
      kind: "work",
      highlights: [
        "Kundenakquise und Projektabwicklung",
        "QA, Tests und CMS-Umsetzung von Websites",
        "Kundenkommunikation und Projektkoordination",
      ],
    },
    {
      period: "2006 – 2010",
      company: "Universidade Nova de Lisboa",
      role: "Dr. rer. nat. Biochemie",
      kind: "education",
      highlights: ["Promotion zu metallbindenden Proteinen (European Doctorate)"],
    },
    {
      period: "2001 – 2006",
      company: "Nationale Universität Donezk",
      role: "MSc Organische Chemie",
      kind: "education",
      highlights: ["Masterabschluss in organischer Chemie"],
    },
  ],
  projectsSection: {
    eyebrow: "Ausgewählte Arbeiten",
    title: "Projekte.",
    text: "Aktuelle und abgeschlossene Projekte neben meinen Anstellungen.",
  },
  projects: [
    {
      name: "UK Models: Neuentwicklung Lead-Management",
      status: "In Arbeit · Kundenprojekt",
      summary:
        "Ablösung einer Laravel/PHP-Anwendung für Lead-Management durch Spring Boot und Angular – entwickelt gegen das bestehende produktive Datenbankschema.",
      stack: ["Spring Boot", "Angular", "TypeScript", "MySQL", "AWS S3"],
    },
    {
      name: "authentik-OAuth-2.0-Projekt",
      status: "Abgeschlossen 09/2026",
      summary:
        "Durchgängiges OAuth-2.0-/OpenID-Connect-Setup mit authentik: Ein Browser-Webclient (Login per Authorization Code + PKCE, serverseitige Sessions, Backend-for-Frontend) ruft ein SOAP-Gateway auf, das JWTs gegen JWKS prüft und Scopes durchsetzt; ein Machine-to-Machine-Client nutzt Client Credentials.",
      stack: authentikStack,
      link: { label: "Auf GitHub ansehen", href: authentikRepo },
    },
  ],
  toolkitSection: {
    eyebrow: "Technologie und Wissenschaft",
    title: "Technik trifft Wissenschaft.",
    text: "Entdecken Sie meine Software-Werkzeuge und das naturwissenschaftliche Wissen hinter meinem Life-Science-Fokus.",
  },
  toolkit: {
    stage: "Interaktive Technologie-Übersicht",
    coreTop: "Annas",
    coreBottom: "Toolkit",
    proofEyebrow: "Praxisnachweis",
    scienceEyebrow: "Wissenschaftliches Fundament",
    scienceTitle: "Fachwissen für Life-Science-Software.",
  },
  technologyGroups: [
    {
      title: "Frontend",
      eyebrow: "Oberflächen",
      technologies: [
        { name: "React", proof: "Kommerzielle Webanwendungen und wiederverwendbare UI-Komponenten" },
        { name: "TypeScript", proof: "Typisierte Feature-Entwicklung für wartbare Frontends" },
        { name: "JavaScript", proof: "Produktive Oberflächen für Unternehmenskunden" },
        { name: "Vue.js", proof: "Komponentenbasierte Frontend-Entwicklung" },
        { name: "MUI", proof: "Einheitliche, barrierearme UI-Komponenten" },
        { name: "HTML / CSS", proof: "Responsive, semantische Benutzeroberflächen" },
      ],
    },
    {
      title: "Backend",
      eyebrow: "Services & Daten",
      technologies: [
        { name: "Python / Flask", proof: "Backend-Services und Workflow-Validierung" },
        { name: "R", proof: "Statistische Datenanalyse und Visualisierung mit ggplot2" },
        { name: "REST APIs", proof: "Anbindung von Frontends an Services" },
        { name: "Node / Express", proof: "API-Entwicklung mit JavaScript" },
        { name: "Java / Spring", proof: "Strukturierte Backend-Entwicklung" },
        { name: "PostgreSQL", proof: "Relationale Anwendungsdaten" },
        { name: "MongoDB", proof: "Dokumentenorientierte Daten-Workflows" },
      ],
    },
    {
      title: "Testing / DevOps",
      eyebrow: "Verlässliche Auslieferung",
      technologies: [
        { name: "Playwright", proof: "End-to-End-Tests in kommerziellen Projekten" },
        { name: "Jest", proof: "Unit-Tests im Frontend" },
        { name: "Selenium", proof: "Regressionstests auf Browserebene" },
        { name: "GitHub Actions", proof: "Automatisierte CI-Integration" },
        { name: "Docker", proof: "Reproduzierbare Entwicklungsumgebungen" },
        { name: "Git", proof: "Gemeinsame Reviews und agile Auslieferung" },
      ],
    },
    {
      title: "KI / Tools",
      eyebrow: "Beschleunigte Workflows",
      technologies: [
        { name: "GitHub Copilot", proof: "KI-gestützte Implementierung und Iteration" },
        { name: "Claude AI", proof: "KI-gestützte Softwareentwicklung" },
        { name: "Contentful", proof: "Strukturiertes Content-Management" },
        { name: "LLM / RAG apps", proof: "Frontend für einen KI-Dokumenten-Hub mit Zusammenfassungen und Q&A" },
      ],
    },
  ],
  scientificKnowledge: [
    {
      name: "Biochemie",
      proof: "Verständnis biologischer Systeme auf Promotionsniveau, experimentelle Forschung und wissenschaftliche Kommunikation.",
    },
    {
      name: "Organische Chemie",
      proof: "MSc-Grundlage in Molekülstrukturen, Reaktionen und analytischem wissenschaftlichem Denken.",
    },
    {
      name: "Experimentelles Design",
      proof: "Hypothesen bilden, kontrollierte Untersuchungen planen und Ergebnisse kritisch bewerten.",
    },
    {
      name: "Wissenschaftliche Datenauswertung",
      proof: "Ergebnisse mit Python und R auswerten und in klare Schlussfolgerungen, Dokumentation und Entscheidungen übersetzen.",
    },
  ],
  contact: {
    eyebrow: "Lassen Sie uns etwas Nützliches bauen",
    titleTop: "Komplexes Problem?",
    titleBottom: "Machen wir es klar.",
    text: "Besonders interessieren mich Softwarerollen in Life-Science-Unternehmen, Laborsystemen, wissenschaftlichen Plattformen und verwandten digitalen Produkten.",
    emailAction: "E-Mail an Anna",
    viewCv: "Lebenslauf ansehen",
    downloadCv: "Lebenslauf herunterladen",
    cvComingSoon: "Lebenslauf folgt",
    cvComingSoonTitle: "Lebenslauf als PDF folgt",
    emailLabel: "E-Mail",
    locationLabel: "Standort",
    languagesLabel: "Sprachen",
  },
  languages: ["Deutsch B2–C1", "Englisch B2–C1", "Portugiesisch B1–B2", "Russisch (Muttersprache)", "Ukrainisch (Muttersprache)"],
  footer: {
    builtWith: "Gebaut mit Next.js, TypeScript & Neugier.",
    backToTop: "Nach oben ↑",
  },
  skipLink: "Zum Inhalt springen",
};

export const content: Record<Locale, SiteContent> = { en, de };
