import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-label">
        <span>04</span>
        <span>CONTACT</span>
      </div>

      <div className="contact-content">
        <h2>
          Let's build
          <br />
          something useful.
        </h2>

        <div className="contact-right">
          <p>
            I'm interested in interesting problems,
            ambitious ideas, and opportunities to build.
          </p>

          <a
            href="mailto:jaswith0808@gmail.com"
            className="contact-email"
          >
            jaswith0808@gmail.com ↗
          </a>

          <div className="contact-links">
            <a href="https://github.com/Jaswitha886"target="_blank"rel="noreferrer">
              GitHub ↗
            </a>

            <a href="https://www.linkedin.com/in/jaswitha-sai-rajanala/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Resume ↓
            </a>
          </div>
        </div>
      </div>

      <footer>
        <span>© 2026 Jaswitha Sai Rajanala</span>
        <span>Built with curiosity.</span>
      </footer>
    </section>
  )
}

export default Contact