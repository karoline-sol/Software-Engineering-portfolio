import React from "react"
import ProjectGallery from "../components/Portfolio/ProjectGallery"


export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="portfolio-title">Featured Projects</h2>
        <ProjectGallery />
      </div>
    </section>
  )
}




