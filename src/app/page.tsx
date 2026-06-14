import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
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
import { ProjectShowcase } from "@/components/project-showcase";
import { SectionReveal } from "@/components/section-reveal";
import { TechConstellation } from "@/components/tech-constellation";
import { assets, experience, languages, profile, strengths } from "@/data/content";

const strengthIcons = [FlaskConical, Workflow, CheckCircle2];
const workExperience = experience.filter((entry) => entry.kind === "work");
const education = experience.filter((entry) => entry.kind === "education");

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Software Developer",
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dornstadt",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    sameAs: [profile.linkedin],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidade Nova de Lisboa" },
      { "@type": "CollegeOrUniversity", name: "Donetsk National University" },
    ],
    knowsAbout: ["React", "TypeScript", "Python", "Flask", "Automated Testing", "Biochemistry", "Life Science", "Laboratory Systems"],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="site-shell hero-layout">
            <div className="hero-copy">
              <div className="availability-pill">
                <span />
                React · TypeScript · Life Science
              </div>
              <h1 id="hero-title">
                Software for
                <br />
                <span>life science.</span>
              </h1>
              <p className="hero-intro">
                I&apos;m <strong>Anna Kladova Bohun</strong>, a software developer combining commercial
                React and TypeScript experience with a PhD in Biochemistry.
              </p>
              <p className="hero-subtitle">{profile.headline}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowRight className="size-4" />
                </a>
                <a className="button button-secondary" href={`mailto:${profile.email}`}>
                  Start a conversation
                </a>
              </div>
              <div className="hero-proof">
                <div><strong>PhD</strong><span>Biochemistry</span></div>
                <div><strong>3+</strong><span>Commercial roles</span></div>
                <div><strong>Full-stack</strong><span>UI to APIs</span></div>
              </div>
            </div>
            <div className="hero-portrait">
              <PortraitCard portraitUrl={assets.portraitUrl} />
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>Scroll to explore</span>
            <ArrowDown className="size-4" />
          </a>
        </section>

        <section className="section section-light" id="about" aria-labelledby="about-title">
          <div className="site-shell">
            <SectionReveal className="section-heading split-heading">
              <div>
                <span className="eyebrow">Why Anna</span>
                <h2 id="about-title">A different kind of developer.</h2>
              </div>
              <p>
                Scientific depth meets practical engineering. I bring the discipline to understand hard
                problems and the delivery mindset to turn them into reliable products.
              </p>
            </SectionReveal>

            <div className="strength-grid">
              {strengths.map((strength, index) => {
                const Icon = strengthIcons[index];
                return (
                  <SectionReveal className="strength-card" delay={index * 0.08} key={strength.title}>
                    <div className="card-index">{strength.number}</div>
                    <div className="strength-icon"><Icon aria-hidden="true" /></div>
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                    <div className="strength-signal">{strength.signal}</div>
                  </SectionReveal>
                );
              })}
            </div>

            <SectionReveal className="bio-strip">
              <p>{profile.bio}</p>
            </SectionReveal>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="site-shell">
            <SectionReveal className="section-heading">
              <span className="eyebrow">Career journey</span>
              <h2 id="experience-title">From molecules to microservices.</h2>
              <p>Professional experience and education, separated for a clearer view of my path.</p>
            </SectionReveal>

            <div className="resume-groups">
              {[
                {
                  title: "Experience",
                  description: "Commercial roles and hands-on software delivery.",
                  entries: workExperience,
                  kind: "work",
                },
                {
                  title: "Education",
                  description: "Technical training and scientific foundations.",
                  entries: education,
                  kind: "education",
                },
              ].map((group) => (
                <div className={`resume-group resume-group-${group.kind}`} key={group.title}>
                  <SectionReveal className="resume-group-heading">
                    <span>{String(group.entries.length).padStart(2, "0")} entries</span>
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

        <section className="section toolkit-section" id="toolkit" aria-labelledby="toolkit-title">
          <div className="site-shell">
            <SectionReveal className="section-heading centered-heading">
              <span className="eyebrow">Technology and science</span>
              <h2 id="toolkit-title">Engineering skills, grounded in science.</h2>
              <p>Explore the software toolkit and the scientific knowledge behind my life-science focus.</p>
            </SectionReveal>
            <SectionReveal>
              <TechConstellation />
            </SectionReveal>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="site-shell">
            <SectionReveal className="section-heading split-heading">
              <div>
                <span className="eyebrow">Selected work</span>
                <h2 id="projects-title">Case studies in progress.</h2>
              </div>
              <p>
                These previews outline the areas I&apos;ll document next. They are concept showcases, not
                claims of shipped client work.
              </p>
            </SectionReveal>
            <SectionReveal>
              <ProjectShowcase />
            </SectionReveal>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid" aria-hidden="true" />
          <div className="site-shell contact-content">
            <SectionReveal>
              <span className="eyebrow">Let&apos;s build something useful</span>
              <h2 id="contact-title">Complex problem?<br /><span>Let&apos;s make it clear.</span></h2>
              <p>
                I&apos;m especially interested in software roles within life-science companies, laboratory
                systems, scientific platforms, and related digital products.
              </p>
              <div className="contact-actions">
                <a className="button button-primary" href={`mailto:${profile.email}`}>
                  <Mail className="size-4" /> Email Anna
                </a>
                {assets.cvUrl ? (
                  <>
                    <a
                      className="button button-secondary"
                      href={assets.cvUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="size-4" /> View CV
                    </a>
                    <a className="button button-secondary" href={assets.cvUrl} download>
                      <Download className="size-4" /> Download CV
                    </a>
                  </>
                ) : (
                  <button className="button button-disabled" type="button" disabled title="CV PDF coming soon">
                    <Download className="size-4" /> CV coming soon
                  </button>
                )}
              </div>
            </SectionReveal>
            <SectionReveal className="contact-details">
              <a href={`mailto:${profile.email}`}>
                <span><Mail className="size-4" /> Email</span>
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span><Link2 className="size-4" /> LinkedIn</span>
                /in/annabohun83 <ExternalLink className="size-3.5" />
              </a>
              <div>
                <span><MapPin className="size-4" /> Location</span>
                {profile.location}
              </div>
              <div className="contact-languages">
                <span>Languages</span>
                {languages.join(" · ")}
              </div>
            </SectionReveal>
          </div>
          <footer className="site-shell footer">
            <p>© {new Date().getFullYear()} Anna Kladova Bohun</p>
            <p>Built with Next.js, TypeScript & curiosity.</p>
            <a href="#top">Back to top ↑</a>
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
