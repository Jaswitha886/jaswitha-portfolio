function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Hi, I'm</p>

        <h1 className="hero__title">
            <span className="hero__name">Jaswitha Sai</span>
            <br />
            <span className="hero__surname">Rajanala.</span>
        </h1>

        <p className="hero__description">
          I build AI systems, software, and experiments
          that make an impact.
        </p>

        <p className="hero__meta">
          CSE (AIML) · SRM IST · CHENNAI
        </p>

        <div className="hero__actions">
          <a href="#work" className="button button--primary">
            View my work ↗
          </a>

          <a href="/resume.pdf" className="button button--secondary">
            Resume ↓
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <img
          src="/hero-illustration.png"
          alt="Illustration of a developer at a desk with books, code, and plants"
          className="hero__illustration"
        />

        <div className="hero__exploring">
          <span className="hero__exploring-label">
            currently exploring →
          </span>
          <span className="hero__exploring-list">
            AI systems · RAG · Agentic AI · Local LLMs
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero