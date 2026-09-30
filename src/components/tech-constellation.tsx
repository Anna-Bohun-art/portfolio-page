"use client";

import { useState } from "react";
import type { KnowledgeArea, TechnologyGroup, ToolkitLabels } from "@/data/content";

type TechConstellationProps = {
  groups: TechnologyGroup[];
  knowledge: KnowledgeArea[];
  labels: ToolkitLabels;
};

export function TechConstellation({ groups, knowledge, labels }: TechConstellationProps) {
  const [active, setActive] = useState("React");
  const activeTechnology = groups
    .flatMap((group) => group.technologies)
    .find((technology) => technology.name === active);

  return (
    <div className="toolkit-domain-layout">
      <div className="constellation-layout">
        <div className="constellation-stage" aria-label={labels.stage}>
          <svg className="constellation-lines" viewBox="0 0 800 520" preserveAspectRatio="none" aria-hidden="true">
            <path d="M400 260L145 105M400 260L655 105M400 260L145 415M400 260L655 415" />
            <circle cx="400" cy="260" r="115" />
            <circle cx="400" cy="260" r="195" />
          </svg>
          <div className="constellation-core">
            <span>{labels.coreTop}</span>
            <strong>{labels.coreBottom}</strong>
          </div>

          {groups.map((group, groupIndex) => (
            <div className={`tech-cluster cluster-${groupIndex + 1}`} key={group.title}>
              <p>{group.title}</p>
              <div>
                {group.technologies.map((technology) => (
                  <button
                    type="button"
                    className={`tech-node ${active === technology.name ? "tech-node-active" : ""}`}
                    key={technology.name}
                    onMouseEnter={() => setActive(technology.name)}
                    onFocus={() => setActive(technology.name)}
                    onClick={() => setActive(technology.name)}
                    aria-pressed={active === technology.name}
                  >
                    {technology.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proof-panel" role="status" aria-live="polite">
          <span className="eyebrow">{labels.proofEyebrow}</span>
          <h3>{activeTechnology?.name}</h3>
          <p>{activeTechnology?.proof}</p>
          <div className="proof-signal">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <section className="scientific-knowledge" aria-labelledby="scientific-knowledge-title">
        <div className="scientific-knowledge-heading">
          <span className="eyebrow">{labels.scienceEyebrow}</span>
          <h3 id="scientific-knowledge-title">{labels.scienceTitle}</h3>
        </div>
        <div className="scientific-knowledge-grid">
          {knowledge.map((skill) => (
            <article key={skill.name}>
              <h4>{skill.name}</h4>
              <p>{skill.proof}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
