import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Let’s Connect</h2>
        <p>
          I’m always open to discussing new projects, creative ideas, or
          collaboration opportunities. Feel free to reach out and let’s make
          something great together!
        </p>

        <div className="contact-links">
          <a
            href="mailto:karoline.soliman@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/carolinesoliman/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>

          <a
            href="/resume.pdf"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
