import React from "react"
import ProjectCard from "./ProjectCard"
import { projects } from '../../data/projects'
import "../../styles/portfolio.css"

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
