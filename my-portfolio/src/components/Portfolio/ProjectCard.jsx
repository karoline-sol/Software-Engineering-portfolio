import React, { useRef, useState } from "react"
import "../../Styles/portfolio.css"

export default function ProjectCard({ title, description, image, demo,link, repo, techstack }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const isGif = demo?.toLowerCase().endsWith(".gif");

  return (
    <div className="project-card">
     {image && (
  <div
    className="project-image-wrapper"
    onMouseEnter={() => {
      setIsHovered(true)
      videoRef.current?.play()
    }}
    onMouseLeave={() => {
      setIsHovered(false)

      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }}
  >
    <img
      src={image}
      alt={title}
      className="project-image"
    />
   {demo && ( isGif ? ( <img src={demo} alt={`${title} demo`} 
   className={`project-demo ${isHovered ? "show" : ""}`} /> ) : 
   ( <video ref={videoRef} src={demo} muted loop playsInline className={`project-demo ${isHovered ? "show" : ""}`} /> ) )}
  
  </div>
)}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        { techstack && (
          <p className="techstack">
            <strong>Tech Stack:</strong> {techstack.join(".")}
          </p>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project →
            
          </a>
        )}

        {repo && (
          <a
           href={repo}
           target='_blank'
           rel="noopener noreferrer"
           className="project-link"
           >
           
            GitHub

           </a>
        )}
      </div>
    </div>
  )
}
