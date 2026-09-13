import codeCaddyImg from "../assets/codecaddy.jpg"
import Bloggen from "../assets/Bloggen.jpg"
import MyTasks from "../assets/mytasks1.png"
import GuestList from "../assets/Guest-List.png"

import weatherApp from "../assets/weather-app2.png"
import weatherDemo from "../assets/weatherdemo.mov"
import ttc from "../assets/ttc.jpg"

export const projects = [
    
   {
      id: 1,
      title: "Weather-App",
      description: "A weather application that allows users to search for the current weather conditions of any city worldwide, providing real-time data and forecasts.",
      techstack: ["React", "JavaScript", "Tailwind CSS", "Open-Meteo API"],
      image: weatherApp,
      demo: weatherDemo,
      link: "https://karoline-sol.github.io/Weather-App/",
      repo:"https://github.com/karoline-sol/Weather-App"
    },

    { 
      id: 2,
      title: "Task Manager",
      description: "A responsive task management application that allows users to add, complete, delete, and filter tasks while tracking progress and remaining tasks. Tasks are saved with localStorage so they persist after refreshing the page.",
      techstack: ["HTML","CSS","Javascript","Localstorage API"],
      image: MyTasks,
      link: "https://karoline-sol.github.io/Task-Manager/",
      repo:"https://github.com/karoline-sol/Task-Manager",
    },

    {
      id: 3,
      title: "Guest-List",
      description: "A responsive guest management application that allows users to add, search, edit, and delete guests while displaying the total guest count. Guest data is saved with localStorage so the list persists between sessions.",
      techstack: ["HTML","CSS","Javascript", "Localstorage API"],
      image: GuestList,
      link: "https://karoline-sol.github.io/Guest-List-Manager/",
      repo:"https://github.com/karoline-sol/Guest-List-Manager"
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

