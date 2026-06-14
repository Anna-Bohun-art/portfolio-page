"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/content";

function UIPreview({ accent }: { accent: Project["accent"] }) {
  return (
    <div className={`ui-preview accent-${accent}`} role="img" aria-label="Illustrative user interface preview">
      <div className="ui-topbar"><span /><span /><span /></div>
      <div className="ui-body">
        <div className="ui-sidebar"><i /><i /><i /><i /></div>
        <div className="ui-content">
          <div className="ui-metrics"><span /><span /><span /></div>
          <div className="ui-chart">
            <svg viewBox="0 0 260 90" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 74 C25 68 34 42 57 53 S94 82 116 45 S159 18 181 35 S220 70 260 15" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitecturePreview({ project }: { project: Project }) {
  return (
    <div className={`architecture-preview accent-${project.accent}`} role="img" aria-label="Illustrative architecture diagram">
      {project.nodes.map((node, index) => (
        <div className="architecture-node" key={node}>
          <span>0{index + 1}</span>
          {node}
          {index < project.nodes.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [view, setView] = useState<"ui" | "architecture">("ui");
  const labelId = `project-${index}-view`;

  return (
    <article className="project-card">
      <div className="project-card-topline">
        <span>Coming soon</span>
        <span>Case study 0{index + 1}</span>
      </div>
      <div className="project-preview">
        {view === "ui" ? <UIPreview accent={project.accent} /> : <ArchitecturePreview project={project} />}
      </div>
      <div className="project-copy">
        <div className="segmented-control" role="group" aria-labelledby={labelId}>
          <span id={labelId} className="sr-only">Preview type</span>
          <button
            type="button"
            className={view === "ui" ? "selected" : ""}
            onClick={() => setView("ui")}
            aria-pressed={view === "ui"}
          >
            UI
          </button>
          <button
            type="button"
            className={view === "architecture" ? "selected" : ""}
            onClick={() => setView("architecture")}
            aria-pressed={view === "architecture"}
          >
            Architecture
          </button>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  );
}

export function ProjectShowcase() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
    </div>
  );
}
