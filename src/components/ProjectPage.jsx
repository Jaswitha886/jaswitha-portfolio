import { Link } from 'react-router-dom'

function ProjectPage({
  projectNumber,
  title,
  subtitle,
  description,
  githubUrl,
  githubLabel = 'GitHub',
}) {
  return (
    <main className="qsign-page">
      <header className="qsign-nav">
        <Link to="/" className="qsign-nav__brand">Jaswitha</Link>
        <Link to="/" className="qsign-nav__back">Back to portfolio</Link>
      </header>

      <section className="qsign-hero">
        <p className="qsign-hero__eyebrow">
          <span>PROJECT {projectNumber}</span> — Project
        </p>

        <h1>{title}</h1>

        <p className="qsign-hero__subtitle">
          {subtitle}
        </p>

        <p className="qsign-hero__intro">
          {description}
        </p>

        <Link to="/" className="qsign-hero__back">Back to portfolio</Link>
      </section>

      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>01</span>
          <span>LINKS</span>
        </div>

        <h2>Explore</h2>

        <div className="qsign-links">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            {githubLabel} ↗
          </a>
        </div>
      </section>

      <footer className="qsign-footer">
        <span>© 2026 Jaswitha Sai Rajanala</span>
        <span>{title}</span>
      </footer>
    </main>
  )
}

export default ProjectPage
