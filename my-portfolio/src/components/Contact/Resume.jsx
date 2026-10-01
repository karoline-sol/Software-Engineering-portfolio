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
          Entry-level Front-End Developer with hands-on experience building responsive web applications
          using JavaScript, TypeScript, React, HTML, and CSS. Experienced in developing interactive
          interfaces, integrating APIs, creating reusable components, and implementing responsive
          designs. Background in UX/UI design with an understanding of usability, visual hierarchy, and
          user-centered design. Seeking a Front-End Developer opportunity to contribute to real-world
          products while continuing to grow as a software engineer.
        </p>
      </section>

      <section>
        <h2>TECHNICAL SKILLS</h2>
        <ul>
          <li><strong>Languages</strong> HTML · CSS · JavaScript · TypeScript </li>
          <li><strong>Frameworks & Libraries</strong> React · React Typescript · Tailwind CSS</li>
          <li><strong>Development</strong> Responsive Design · API Integration · Form Validation · LocalStorage · Component-Based Architecture</li>
          <li><strong>Tools:</strong> Git/GitHub · Vite · OpenAI API · Figma</li>
        </ul>
      </section>

      <section>
        <h2>PROJECTS</h2>

        <div className="project">
          <h3>Tiffany Town Car (React + TypeScript)</h3>
          <ul>
            <li>Developed a responsive transportation booking interface using React and TypeScript.</li>
            <li>Built a multi-step booking form with reusable components, input validation, and guided
             user workflows.</li>
            <li>Implemented mobile-first responsive layouts across desktop and mobile screen sizes.</li>
            <i>Applied UX/UI principles to simplify navigation and create a clear booking experience.</i>
          </ul>
        </div>

        <div className="project">
          <h3>Weather App (React + Vite)</h3>
          <ul>
            <li>Built a responsive weather application using React, Vite, and Tailwind CSS.</li>
            <li>Integrated the Open-Meteo Geocoding and Forecast APIs to retrieve location-based
             weather data.</li>
            <li>Implemented city search functionality and dynamic weather displays based on API
            responses.</li>
            <i>Designed a clean interface that adapts to desktop and mobile screen sizes.</i>
          </ul>
        </div>

        <div className="project">
          <h3>Task Manager (React)</h3>
          <ul>
            <li>Developed a task management application using React.</li>
            <li>Implemented functionality for adding, editing, completing, and removing tasks.</li>
            <i>Used component-based architecture to create reusable and maintainable interface
             elements.</i>
            <li>Designed a responsive layout focused on clear task organization and usability.</li>
          </ul>
        </div>

        <div className="project">
          <h3>Expense Tracker (React)</h3>
          <ul>
            <li>Built an interactive expense-tracking application using React to record and organize
             financial transactions.</li>
            <li>Implemented functionality for adding, editing, and deleting expenses.</li>
            <li>Created dynamic calculations to display spending totals and transaction summaries.</li>
            <li>Designed a responsive interface focused on clear organization and usability.</li>
          </ul>
        </div>

        <div className="project">
          <h3>Guest List (Javascript)</h3>
          <ul>
            <li>Built an interactive guest-list application using JavaScript, HTML, and CSS.</li>
            <li>Implemented functionality for adding, displaying, and removing guest entries.</li>
            <li>Applied DOM manipulation and event handling to create a dynamic user experience.</li>
            <li>Designed a responsive interface focused on organized information and ease of use.</li>
          </ul>
        </div>

      </section>

      <section>
        <h2>EXPERIENCE</h2>
        <h3>UX/UI Design Projects — Orlando, FL (Dec 2023 – Present)</h3>
        <ul>
          <li>Designed logos and responsive interfaces for startups such as Tiffany Town Car & Aiquilibrio.</li>
          <li>Created user flows, wireframes, and prototypes improving task clarity.</li>
          <li>Delivered polished UI components and HTML/CSS layouts with accessibility best practices.</li>
        </ul>

        <h3>Teacher (May 2021 - Present)</h3>
        <ul>
          <li>Adapted quickly to new tools, systems, and environments while managing multiple
           priorities and deadlines.</li>
         <li> Used technology and digital tools to create organized, interactive, and user-friendly
           learning experiences.</li>
         <li>Developed strong problem-solving, communication, organization, and attention-to-detail
 f          skills.</li>
        </ul>
      </section>

      <section>
        <h2>EDUCATION</h2>
        <h3>Split‑Stack Software Development Program — UCF (Aug 2025 – Nov 2025)</h3>
        <p>Front-end development: HTML, CSS, JavaScript, React, TypeScript, APIs, Node basics.</p>
        

        <h3>UX/UI Design Certification — (Nov 2023 – Jan 2024)</h3>
        <p>Studied UX fundamentals, user research, design psychology, wireframing, prototyping,
         typography, and mobile/web UI design.</p>
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

