import codeCaddyImg from "../assets/codecaddy.jpg"
import Bloggen from "../assets/Bloggen.jpg"
import Dragonrealm from"../assets/dragonrealm.jpg"
import Charactergallery from "../assets/charactergallery.jpg"
import Runeofchance from "../assets/runeofchance.jpg"

export const projects = [
    {
      id: 1,
      title: "Rune-of-Chance",
      description: "A simple interactive web game built with JavaScript allowing users to create a character, collect runes, and track progress.",
      image: Runeofchance,
      link: "https://karoline-sol.github.io/Rune-of-Chance/",
    },
    { 
      id: 2,
      title: "Character-Gallery",
      description: "A JavaScript application allowing users to create and display character cards using localStorage, so characters remain visible even after refreshing the page.",
      image: Charactergallery,
      link: "https://karoline-sol.github.io/Character-Gallery/",
    },
    {
      id: 3,
      title: "Dragon-Realms",
      description: "Users can create and customize dragons using TypeScript, store them in local storage, and manage their collection through the app.",
      image: Dragonrealm,
      link: "https://karoline-sol.github.io/Dragon-Realms/",
    },
    {
      id: 4,
      title: "Blog-Generator",
      description: "A static blog generator built with Node.js, EJS, and Markdown. It reads Markdown files from your content folder, converts them into HTML, and outputs a complete static website automatically.",
      image: Bloggen,
      link: "https://karoline-sol.github.io/Blog-Generator/",
    },
    {
      id: 5,
      title: "CodeCaddy",
      description: "a project that integrates Google Books API into a JavaScript or React application that allows users to search for books, view details by ID, and test API connectivity.",
      image: codeCaddyImg,
      link: "https://github.com/karoline-sol/Codecaddy",
    },
  ]

