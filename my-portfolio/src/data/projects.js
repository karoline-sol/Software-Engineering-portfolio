import comingSoon from "../assets/comingsoon.jpg"
import MyTasks from "../assets/mytasks1.png"
import taskDemo from "../assets/mytaskdemo.mov"
import GuestList from "../assets/Guest-List.png"
import guestDemo from "../assets/guestlistdemo.mov"
import ttcDemo from "../assets/demo.gif"

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
      demo: taskDemo,
      link: "https://karoline-sol.github.io/Task-Manager/",
      repo:"https://github.com/karoline-sol/Task-Manager",
    },

    {
      id: 3,
      title: "Guest-List",
      description: "A responsive guest management application that allows users to add, search, edit, and delete guests while displaying the total guest count. Guest data is saved with localStorage so the list persists between sessions.",
      techstack: ["HTML","CSS","Javascript", "Localstorage API"],
      image: GuestList,
      demo: guestDemo,
      link: "https://karoline-sol.github.io/Guest-List-Manager/",
      repo:"https://github.com/karoline-sol/Guest-List-Manager"
    },
    {
      id: 4,
      title: "Expense Tracker",
      description: "An interactive expense-tracking application that allows users to record and organize their financial transactions.",
      techstack: ["HTML","CSS","React","Javascript", "Localstorage API"],
      image: comingSoon,
      link: " ",
      repo:" ",
      status: "Coming soon"
    },

    {
      id: 5,
      title: "Sweet & Savory",
      description: "A responsive booking application designed for Sweet & Savory Cart Co. to help customers explore catering options, select event details, and submit booking inquiries through a streamlined workflow.",
      techstack: ["React","Typescript","Tailwind CSS","Vite", "Form Validation"],
      image: comingSoon,
      link: " ",
      repo: " ",
      status: "Coming soon"
      
    },

    {
      id: 6,
      title: "Tiffany Town Car",
      description: "A sleek and responsive React + TypeScript transportation booking app built for a luxury town car service. ",
      techstack: ["React(Typescript)","Vite","Tailwind", "React router DOM" ],
      image: ttc,
      demo: ttcDemo,
      link: "https://karoline-sol.github.io/Tiffany-Town-Car/",
      repo: "https://github.com/karoline-sol/Tiffany-Town-Car",
      
    },
  ]

