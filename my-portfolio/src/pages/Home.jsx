import React from "react"
import "../Styles/Home.css"
import profileimg from '../../src/assets/profileimg.png'
export default function Home() {
  return (
    
    <section className="home">
      <div className="home-content">
        <div className="intro">
          <h1>
            Hi, I’m <span className="highlight">Caroline Soliman</span>
          </h1>
          <h2>Front-End Developer</h2>
          <p>
            I'm passionate about creating efficient, user-friendly web applications 
            that solve real-world problems. With expertise in JavaScript, React, 
            and modern web technologies, I bring ideas to life through code.

          </p>
          <a href="/portfolio" className="btn">
            View My Work
          </a>
          <a href='/contact' className="btn">
            Get In Touch
          </a>
        </div>

        <div className="profile-img">
          <img src={profileimg} alt="profile-image" />
        </div>
      </div>
    </section>
    
  )
}
