import React from "react"
import "../styles/Home.css"
import profileimg from '../assets/profileimg.png'
export default function Home() {
  return (
    
    <section className="home">
      <div className="home-content">
        <div className="intro">
          <h1>
            Hi, I’m <span className="highlight">Caroline Soliman</span>
          </h1>
          <h2>UX Designer & Front-End Developer</h2>
          <p>
            I design and build user-centered digital experiences that blend
            clean design with functional code. My focus is on creating intuitive
            interfaces that make complex interactions feel effortless.
          </p>
          <a href="/portfolio" className="btn">
            View My Work
          </a>
        </div>

        <div className="profile-img">
          <img src={profileimg} alt="profile-image" />
        </div>
      </div>
    </section>
    
  )
}
