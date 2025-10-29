import React from "react"
import ProjectCard from "../components/ProjectCard/ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Rune-of-Chance",
      description: "A simple interactive web game built with JavaScript allowing users to create a character, collect runes, and track progress.",
      image: "",
      link: "https://github.com/karoline-sol/Rune-of-Chance",
    },
    {
      title: "Character-Gallery",
      description: "This project is a simple JavaScript application that allows users to create and display character cards. Each card contains a name, type, description, and image. The data is stored in localStorage, so characters remain visible even after refreshing the page.",
      image: "",
      link: "https://github.com/karoline-sol/Character-Gallery",
    },
    {
      title: "Dragon-Realms",
      description: "The app will allow users to create custom dragon characters using a form, and use TypeScript and object-oriented JavaScript to manage dragon objects and their properties. All created dragons will be stored in the browser's local storage, so users can revisit and manage their collection.",
      image: "",
      link: "https://github.com/karoline-sol/Dragon-Realms",
    },
    {
      title: "Blog-Generator",
      description: "A static blog generator built with Node.js, EJS, and Markdown. It reads Markdown files from your content folder, converts them into HTML, and outputs a complete static website automatically.",
      image: "",
      link: "https://github.com/karoline-sol/Blog-Generator",
    },
    {
      title: "CodeCaddy",
      description: "a project that integrates Google Books API into a JavaScript or React application that allows users to search for books, view details by ID, and test API connectivity.",
      image: "",
      link: "https://github.com/karoline-sol/Codecaddy",
    },
  ]

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
