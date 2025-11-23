import React from "react"
import ProjectCard from "~/components/ProjectCard"
import { projects } from '~/data/projects'
import "~/Styles/portfolio.css"

export default function ProjectGallery() {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
