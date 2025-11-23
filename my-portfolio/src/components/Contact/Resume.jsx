import React from "react";
import "~/Styles/resume.css";

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-container">
        {/* Header */}
        <header className="resume-header">
          <h1>Caroline Soliman</h1>
          <h2>UX Designer | Front-end Developer</h2>
          
          <div className="resume-contact">
            <p>📞 321-324-6139</p>
            <p>✉️ karoline.soliman@gmail.com</p>
            <p>📍 7175 SW 88th Ln, Ocala, FL 34476</p>
          </div>
        </header>

       

        {/* Experience */}
        <section className="resume-section-block">
          <h3>Experience</h3>

          <div className="resume-job">
            <p>
              <strong>Front-End Developer Course</strong> — Aug 2025 – Nov 2025
            </p>
            <ul>
              <li>Learned HTML, CSS, JavaScript</li>
              <li>React & React TypeScript</li>
              <li>TypeScript, Node.js</li>
              <li>OpenAI & API Key integration</li>
            </ul>

            <h4>Freelance UX Designer — June 2023 – Present</h4>
            <ul>
              <li>UX/UI Design Certification</li>
              <li>
                Portfolio:{" "}
                <a
                  href="https://uxfol.io/carolinesoliman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uxfol.io/carolinesoliman
                </a>
              </li>
            </ul>

            <h5>Projects:</h5>
            <ul>
              <li>
                <strong>FitSync:</strong> Designed a user-friendly fitness app
                focused on personalized workout plans and progress tracking.
                Conducted UX research, user interviews, and usability testing to
                identify pain points. Created wireframes and prototypes using
                Figma, emphasizing responsive design and accessibility.
              </li>
              <li>
                <strong>Trevi:</strong> Created an e-commerce fashion app that
                enhances the shopping experience through intuitive navigation
                and personalized recommendations. Led the UI/UX design process
                from concept to final prototype, focusing on color psychology,
                typography, and visual hierarchy.
              </li>
              <li>
                <strong>Tiffany Town Car Redesign:</strong> Redesigned a
                transportation company’s website to improve user experience and
                accessibility for booking services. Conducted user research to
                inform design decisions, updated information architecture, and
                delivered high-fidelity prototypes using Figma.
              </li>
            </ul>
          </div>

          <div className="resume-job">
            <h4>Teacher — Seminole County Public Schools / Creative World School</h4>
            <p>May 2021 – May 2023</p>
            <ul>
              <li>Maintained an organized classroom environment</li>
              <li>
                Collaborated with teachers to deliver curriculum effectively and
                timely
              </li>
              <li>
                Attended meetings to discuss student progress/issues and
                implemented improvement plans
              </li>
            </ul>
          </div>

          <div className="resume-job">
            <h4>Claims Specialist — Titan Technologies</h4>
            <p>April 2020 – October 2020</p>
            <ul>
              <li>Delivered excellent customer service</li>
              <li>
                Performed administrative tasks with a high degree of accuracy
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section-block">
          <h3>Education</h3>

          <div className="resume-education">
            <p>
              <strong>University of Central Florida</strong> — Psychology Degree
              (B.S.C.), 2019
            </p>
            
          </div>
        </section>

        {/* Skills */}
        <section className="resume-section-block">
          <h3>Skills</h3>
          <ul>
            <li>Figma (Software)</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>User Interface Design</li>
            <li>User Experience Design</li>
            <li>User Research</li>
          </ul>
        </section>

        {/* Soft Skills */}
        <section className="resume-section-block">
          <h3>Soft Skills</h3>
          <ul>
            <li>Flexible and Adaptive</li>
            <li>Organized</li>
            <li>Time Management</li>
            <li>Good Team Player</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

