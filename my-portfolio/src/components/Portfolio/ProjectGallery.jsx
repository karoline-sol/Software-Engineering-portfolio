import React from "react"
import ProjectCard from "../Portfolio/ProjectCard"
import "../../styles/projectgallery.css"

export default function Projects() {
  const projects = [
    {
      title: "Rune-of-Chance",
      description: "A simple interactive web game built with JavaScript allowing users to create a character, collect runes, and track progress.",
      image: "https://via.placeholder.com/400x250",
      link: "https://github.com/karoline-sol/Rune-of-Chance",
    },
    {
      title: "Character-Gallery",
      description: "A JavaScript application allowing users to create and display character cards using localStorage, so characters remain visible even after refreshing the page.",
      image: "https://via.placeholder.com/400x250",
      link: "https://github.com/karoline-sol/Character-Gallery",
    },
    {
      title: "Dragon-Realms",
      description: "Users can create and customize dragons using TypeScript, store them in local storage, and manage their collection through the app.",
      image: "https://via.placeholder.com/400x250",
      link: "https://github.com/karoline-sol/Dragon-Realms",
    },
    {
      title: "Blog-Generator",
      description: "A static blog generator built with Node.js, EJS, and Markdown. It reads Markdown files from your content folder, converts them into HTML, and outputs a complete static website automatically.",
      image: "https://via.placeholder.com/400x250",
      link: "https://github.com/karoline-sol/Blog-Generator",
    },
    {
      title: "CodeCaddy",
      description: "a project that integrates Google Books API into a JavaScript or React application that allows users to search for books, view details by ID, and test API connectivity.",
      image: "https://via.placeholder.com/400x250",
      link: "https://github.com/karoline-sol/Codecaddy",
    },
  ]

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
