import codeCaddyImg from "../assets/codecaddy.jpg"
import Bloggen from "../assets/Bloggen.jpg"
import Dragonrealm from"../assets/dragonrealm.jpg"
import Charactergallery from "../assets/Charactergallery.jpg"
import Runeofchance from "../assets/runeofchance.jpg"
import ttc from "../assets/ttc.jpg"

export const projects = [
    {
      id: 1,
      title: "Rune-of-Chance",
      description: "A simple interactive web game built with JavaScript allowing users to create a character, collect runes, and track progress.",
      techstack: ["HTML","CSS","Javascript"],
      image: Runeofchance,
      link: "https://karoline-sol.github.io/Rune-of-Chance/",
      repo:"https://github.com/karoline-sol/Rune-of-Chance",
    },
    { 
      id: 2,
      title: "Character-Gallery",
      description: "A JavaScript application allowing users to create and display character cards using localStorage, so characters remain visible even after refreshing the page.",
      techstack: ["HTML","CSS","Javascript"],
      image: Charactergallery,
      link: "https://karoline-sol.github.io/Character-Gallery/",
      repo:"https://github.com/karoline-sol/Character-Gallery",
    },
    {
      id: 3,
      title: "Dragon-Realms",
      description: "Users can create and customize dragons using TypeScript, store them in local storage, and manage their collection through the app.",
      techstack: ["HTML","CSS","Javascript, Typescript, Localstorage API"],
      image: Dragonrealm,
      link: "https://karoline-sol.github.io/Dragon-Realms/",
      repo:"https://github.com/karoline-sol/Dragon-Realms"
    },
    {
      id: 4,
      title: "Blog-Generator",
      description: "A static blog generator built with Node.js, EJS, and Markdown. It reads Markdown files from your content folder, converts them into HTML, and outputs a complete static website automatically.",
      techstack: ["HTML","CSS","Javascript, Node.js, EJS, Markeddown to HTML converter, Grunt"],
      image: Bloggen,
      link: "https://karoline-sol.github.io/Blog-Generator/",
      repo:"https://github.com/karoline-sol/Blog-Generator"
    },

    {
      id: 5,
      title: "CodeCaddy",
      description: "a project that integrates Google Books API into a JavaScript or React application that allows users to search for books, view details by ID, and test API connectivity.",
      techstack: ["React(Typescript)","Vite","Tailwind CSS","React Router", "Context API", "OpenAI API"],
      image: codeCaddyImg,
      link: "https://karoline-sol.github.io/Codecaddy/",
      repo: "https://github.com/karoline-sol/Codecaddy",
      
    },

    {
      id: 6,
      title: "Tiffany Town Car",
      description: "A sleek and responsive React + TypeScript transportation booking app built for a luxury town car service. ",
      techstack: ["React(Typescript)","Vite","Tailwind", "React router DOM" ],
      image: ttc,
      link: "https://karoline-sol.github.io/Tiffany-Town-Car/",
      repo: "https://github.com/karoline-sol/Tiffany-Town-Car",
      
    },
  ]

