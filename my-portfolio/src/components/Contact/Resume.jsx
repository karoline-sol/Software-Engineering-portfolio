import React from "react";
import "../../Styles/resume.css";


export default function Resume() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Caroline Soliman</h1>
        <p>
         Orlando, FL · (321)-324-6139 
        </p>
      </header>

      <section>
        <h2>SUMMARY</h2>
        <p>
          Ambitious Front-End Developer & UX Designer with strong foundations in JavaScript,
          TypeScript, React, and scalable UI design. Passionate about building fast, accessible,
          user‑focused products. Experienced in designing and developing end‑to‑end features,
          integrating APIs, and improving usability through research‑backed design decisions.
          Demonstrated ability to learn quickly, build polished interfaces, and solve complex
          problems—seeking a software engineering Frontend role where I can contribute to impactful
          products used by millions.
        </p>
      </section>

      <section>
        <h2>TECHNICAL SKILLS</h2>
        <ul>
          <li><strong>Front-End:</strong> HTML · CSS · JavaScript · React · React-TypeScript · TypeScript · APIs · Responsive Design</li>
          <li><strong>UX/UI:</strong> Figma · Wireframing · Prototyping · User Flows · Visual Design · Design Psychology · Usability Testing</li>
          <li><strong>Tools:</strong> Git/GitHub · Whimsical · OpenAI API · Figma</li>
        </ul>
      </section>

      <section>
        <h2>PROJECTS</h2>

        <div className="project">
          <h3>Tiffany Town Car (React + TypeScript)</h3>
          <ul>
            <li>Built a responsive multi-step booking form with reusable component architecture.</li>
            <li>Simplified onboarding with validation rules and guided workflows.</li>
            <li>Implemented mobile-first design for accessibility and faster task completion.</li>
          </ul>
        </div>

        <div className="project">
          <h3>Rune-of-Chance (JavaScript Web Game)</h3>
          <ul>
            <li>Engineered modular JavaScript game functions for smoother UI interactions.</li>
            <li>Improved engagement with dynamic UI updates and animated game states.</li>
            <li>Streamlined game logic and reduced repeated functions.</li>
          </ul>
        </div>

        <div className="project">
          <h3>Character-Gallery (JavaScript + LocalStorage)</h3>
          <ul>
            <li>Developed persistent character system using LocalStorage.</li>
            <li>Enhanced form validation for improved accuracy.</li>
            <li>Designed clean and organized UI for readability.</li>
          </ul>
        </div>

        <div className="project">
          <h3>Dragon-Realms (TypeScript App)</h3>
          <ul>
            <li>Built structured TypeScript system using interfaces and strong typing.</li>
            <li>Reduced errors with clear data models and validation.</li>
            <li>Designed responsive UI for desktop and mobile.</li>
          </ul>
        </div>

        <div className="project">
          <h3>Blog-Generator (Node.js + EJS + Markdown)</h3>
          <ul>
            <li>Automated static-page creation with Node.js scripting.</li>
            <li>Used templating for consistent branding and UI.</li>
            <li>Improved workflow by converting Markdown to styled HTML.</li>
          </ul>
        </div>

        <div className="project">
          <h3>CodeCaddy (React + Google Books API)</h3>
          <ul>
            <li>Integrated Google Books API for real-time search and detailed views.</li>
            <li>Optimized data fetching and reduced load times.</li>
            <li>Designed clean search UI to improve discoverability.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>EXPERIENCE</h2>
        <h3>Freelance UX/UI Designer — Orlando, FL (Dec 2023 – Present)</h3>
        <ul>
          <li>Designed logos and responsive interfaces for startups such as Tiffany Town Car & Aiquilibrio.</li>
          <li>Created user flows, wireframes, and prototypes improving task clarity.</li>
          <li>Delivered polished UI components and HTML/CSS layouts with accessibility best practices.</li>
        </ul>
      </section>

      <section>
        <h2>EDUCATION</h2>
        <h3>Split‑Stack Software Development Program — UCF (Aug 2025 – Nov 2025)</h3>
        <p>Front-end development: HTML, CSS, JavaScript, React, TypeScript, APIs, Node basics.</p>
        

        <h3>UX/UI Design Certification — Entry Level (Nov 2023 – Jan 2024)</h3>
        <p>UX fundamentals, research, prototyping, UI design, typography.</p>
        <p>
            UX Portfolio:{" "}
         <a
            href="https://uxfolio.io/carolinesoliman"
            target="_blank"
            rel="noopener noreferrer"
        >
           uxfolio.io/carolinesoliman
         </a>
</p>


        <h3>B.S. Psychology — University of Central Florida (2017–2019)</h3>
        <p>Studied cognition, behavior, decision‑making, applied to UX.</p>
      </section>
    </div>
  );
}

