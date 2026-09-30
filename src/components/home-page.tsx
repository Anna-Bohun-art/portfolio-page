import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  FlaskConical,
  Link2,
  Mail,
  MapPin,
  Workflow,
} from "lucide-react";
import { Header } from "@/components/header";
import { PortraitCard } from "@/components/portrait-card";
import { SectionReveal } from "@/components/section-reveal";
import { TechConstellation } from "@/components/tech-constellation";
import { assets, content, localePaths, locales, profile, type Locale } from "@/data/content";

const strengthIcons = [FlaskConical, Workflow, CheckCircle2];

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const otherLocale = locales.find((candidate) => candidate !== locale) ?? "en";
  const workExperience = t.experience.filter((entry) => entry.kind === "work");
  const education = t.experience.filter((entry) => entry.kind === "education");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: t.meta.jobTitle,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dornstadt",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    sameAs: [profile.linkedin, profile.github],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidade Nova de Lisboa" },
      { "@type": "CollegeOrUniversity", name: "Donetsk National University" },
    ],
    knowsAbout: ["React", "TypeScript", "Python", "R", "Automated Testing", "Biochemistry", "Life Science", "Laboratory Systems"],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">{t.skipLink}</a>
      <Header nav={t.nav} labels={t.header} otherLocaleHref={localePaths[otherLocale]} otherLocale={otherLocale} />
      <main id="main-content">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="site-shell hero-layout">
            <div className="hero-copy">
              <div className="availability-pill">
                <span />
                {t.hero.pill}
              </div>
              <h1 id="hero-title">
                {t.hero.titleTop}
                <br />
                <span>{t.hero.titleBottom}</span>
              </h1>
              <p className="hero-intro">
                {t.hero.introBefore}<strong>{profile.name}</strong>{t.hero.introAfter}
              </p>
              <p className="hero-subtitle">{t.profile.headline}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#experience">
                  {t.hero.primaryAction} <ArrowRight className="size-4" />
                </a>
                <a className="button button-secondary" href={`mailto:${profile.email}`}>
                  {t.hero.secondaryAction}
                </a>
              </div>
              <div className="hero-proof">
                {t.hero.proof.map((item) => (
                  <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
                ))}
              </div>
            </div>
            <div className="hero-portrait">
              <PortraitCard portraitUrl={assets.portraitUrl} caption={t.profile.portraitCaption} />
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label={t.hero.scrollAria}>
            <span>{t.hero.scrollLabel}</span>
            <ArrowDown className="size-4" />
          </a>
        </section>

        <section className="section section-light" id="about" aria-labelledby="about-title">
          <div className="site-shell">
            <SectionReveal className="section-heading split-heading">
              <div>
                <span className="eyebrow">{t.about.eyebrow}</span>
                <h2 id="about-title">{t.about.title}</h2>
              </div>
              <p>{t.about.text}</p>
            </SectionReveal>

            <div className="strength-grid">
              {t.strengths.map((strength, index) => {
                const Icon = strengthIcons[index];
                return (
                  <SectionReveal className="strength-card" delay={index * 0.08} key={strength.title}>
                    <div className="card-index">{String(index + 1).padStart(2, "0")}</div>
                    <div className="strength-icon"><Icon aria-hidden="true" /></div>
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                    <div className="strength-signal">{strength.signal}</div>
                  </SectionReveal>
                );
              })}
            </div>

            <SectionReveal className="bio-strip">
              <p>{t.profile.bio}</p>
            </SectionReveal>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="site-shell">
            <SectionReveal className="section-heading">
              <span className="eyebrow">{t.experienceSection.eyebrow}</span>
              <h2 id="experience-title">{t.experienceSection.title}</h2>
              <p>{t.experienceSection.text}</p>
            </SectionReveal>

            <div className="resume-groups">
              {[
                { ...t.experienceSection.work, entries: workExperience, kind: "work" },
                { ...t.experienceSection.education, entries: education, kind: "education" },
              ].map((group) => (
                <div className={`resume-group resume-group-${group.kind}`} key={group.kind}>
                  <SectionReveal className="resume-group-heading">
                    <span>{String(group.entries.length).padStart(2, "0")} {t.experienceSection.entriesLabel}</span>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </SectionReveal>
                  <div className="timeline">
                    {group.entries.map((entry, index) => (
                      <SectionReveal className="timeline-entry" key={`${entry.company}-${entry.period}`}>
                        <div className="timeline-period">{entry.period}</div>
                        <div className={`timeline-marker ${entry.kind}`} aria-hidden="true">
                          <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <article className="timeline-card">
                          <div className="timeline-card-header">
                            <div>
                              <p>{entry.company}</p>
                              <h4>{entry.role}</h4>
                            </div>
                          </div>
                          <ul>
                            {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                          </ul>
                        </article>
                      </SectionReveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light" id="projects" aria-labelledby="projects-title">
          <div className="site-shell">
            <SectionReveal className="section-heading">
              <span className="eyebrow">{t.projectsSection.eyebrow}</span>
              <h2 id="projects-title">{t.projectsSection.title}</h2>
              <p>{t.projectsSection.text}</p>
            </SectionReveal>
            <div className="project-grid">
              {t.projects.map((project, index) => (
                <SectionReveal className="project-card" delay={index * 0.08} key={project.name}>
                  <div className="project-status">{project.status}</div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <ul className="project-stack">
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {project.link ? (
                    <a className="project-link" href={project.link.href} target="_blank" rel="noreferrer">
                      {project.link.label} <ExternalLink className="size-3.5" />
                    </a>
                  ) : null}
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section toolkit-section" id="toolkit" aria-labelledby="toolkit-title">
          <div className="site-shell">
            <SectionReveal className="section-heading centered-heading">
              <span className="eyebrow">{t.toolkitSection.eyebrow}</span>
              <h2 id="toolkit-title">{t.toolkitSection.title}</h2>
              <p>{t.toolkitSection.text}</p>
            </SectionReveal>
            <SectionReveal>
              <TechConstellation
                groups={t.technologyGroups}
                knowledge={t.scientificKnowledge}
                labels={t.toolkit}
              />
            </SectionReveal>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid" aria-hidden="true" />
          <div className="site-shell contact-content">
            <SectionReveal>
              <span className="eyebrow">{t.contact.eyebrow}</span>
              <h2 id="contact-title">{t.contact.titleTop}<br /><span>{t.contact.titleBottom}</span></h2>
              <p>{t.contact.text}</p>
              <div className="contact-actions">
                <a className="button button-primary" href={`mailto:${profile.email}`}>
                  <Mail className="size-4" /> {t.contact.emailAction}
                </a>
                {assets.cvUrl ? (
                  <>
                    <a
                      className="button button-secondary"
                      href={assets.cvUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="size-4" /> {t.contact.viewCv}
                    </a>
                    <a className="button button-secondary" href={assets.cvUrl} download>
                      <Download className="size-4" /> {t.contact.downloadCv}
                    </a>
                  </>
                ) : (
                  <button className="button button-disabled" type="button" disabled title={t.contact.cvComingSoonTitle}>
                    <Download className="size-4" /> {t.contact.cvComingSoon}
                  </button>
                )}
              </div>
            </SectionReveal>
            <SectionReveal className="contact-details">
              <a href={`mailto:${profile.email}`}>
                <span><Mail className="size-4" /> {t.contact.emailLabel}</span>
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span><Link2 className="size-4" /> LinkedIn</span>
                /in/annabohun83 <ExternalLink className="size-3.5" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span><Code2 className="size-4" /> GitHub</span>
                /Anna-Bohun-art <ExternalLink className="size-3.5" />
              </a>
              <div>
                <span><MapPin className="size-4" /> {t.contact.locationLabel}</span>
                {t.profile.location}
              </div>
              <div className="contact-languages">
                <span>{t.contact.languagesLabel}</span>
                {t.languages.join(" · ")}
              </div>
            </SectionReveal>
          </div>
          <footer className="site-shell footer">
            <p>© {new Date().getFullYear()} Anna Kladova Bohun</p>
            <p>{t.footer.builtWith}</p>
            <a href="#top">{t.footer.backToTop}</a>
          </footer>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
