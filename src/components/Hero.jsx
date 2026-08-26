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
        <div className="hero__placeholder">
          <span>Visual coming here</span>
        </div>

        <p className="hero__note">
          currently exploring →
        </p>

        <div className="hero__exploring">
          <p>AI systems</p>
          <p>RAG</p>
          <p>Agentic AI</p>
          <p>Local LLMs</p>
        </div>
      </div>
    </section>
  )
}

export default Hero