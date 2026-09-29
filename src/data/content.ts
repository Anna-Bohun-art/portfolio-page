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

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Anna Kladova Bohun",
  headline: "Software Developer (React / TypeScript) | PhD Biochemistry | Life Science & Laboratory Systems",
  shortHeadline: "Software Developer (React / TypeScript)",
  location: "Dornstadt, Ulm region, Germany",
  email: "annabohun83@gmail.com",
  linkedin: "https://www.linkedin.com/in/annabohun83",
  github: "https://github.com/Anna-Bohun-art",
  bio: "Anna Kladova Bohun is a Software Developer with commercial experience in React, TypeScript, Python, automated testing, and AI-powered applications. With a PhD in Biochemistry, she brings scientific domain knowledge and modern software engineering practices to life-science and laboratory-system teams.",
};

export const assets: {
  portraitUrl: string | null;
  cvUrl: string | null;
} = {
  portraitUrl: "/anna-bohun-professional.jpg",
  cvUrl: "/Anna_Kladova_Bohun_CV_2026.pdf",
};

export const strengths = [
  {
    number: "01",
    title: "Scientific Thinking",
    description:
      "A research-trained approach to complex systems: form a hypothesis, test it rigorously, and follow the evidence.",
    signal: "PhD in Biochemistry",
  },
  {
    number: "02",
    title: "Full-Stack Engineering",
    description:
      "Hands-on delivery across React interfaces, typed frontends, Python services, REST APIs, and data layers.",
    signal: "Frontend to APIs",
  },
  {
    number: "03",
    title: "Product-Ready Mindset",
    description:
      "Quality is part of the build: automated tests, CI pipelines, reusable systems, reviews, and agile collaboration.",
    signal: "Tested. Reviewed. Shipped.",
  },
];

export const experience: ExperienceEntry[] = [
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
      "Professional training in application development",
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
    highlights: ["Doctoral research in biochemistry"],
  },
  {
    period: "Earlier",
    company: "Donetsk National University",
    role: "MSc Organic Chemistry",
    kind: "education",
    highlights: ["Graduate degree in organic chemistry"],
  },
];

export const projects: Project[] = [
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
    stack: ["TypeScript", "Web client (BFF)", "OAuth 2.0 / OIDC", "PKCE", "JWKS", "SOAP / WS-Security", "Docker Compose", "GitHub Actions"],
    link: { label: "View on GitHub", href: "https://github.com/Anna-Bohun-art/authentik_projekt" },
  },
];

export const technologyGroups: TechnologyGroup[] = [
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
];

export const scientificKnowledge = [
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
    proof: "Translating complex results into clear conclusions, documentation, and decisions.",
  },
];

export const languages = [
  "German B2",
  "English B2",
  "Portuguese B1",
  "Russian Native",
  "Ukrainian Native",
];
