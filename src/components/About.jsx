function About() {
  return (
    <section className="about" id="about">
      <div className="section-label">
        <span>01</span>
        <span>ABOUT</span>
      </div>

      <div className="about__content">
        <h2>
          I like building things
          <br />
          that make complicated
          <br />
          technology feel simple.
        </h2>

        <div className="about__text">
          <p>
            I'm a CSE (AIML) student interested in the space
            between artificial intelligence and real-world
            software.
          </p>

          <p>
            I enjoy turning ideas into working systems —
            from AI experiments and local LLMs to applications
            that solve actual problems.
          </p>

          <a href="#contact" className="about__link">
            A little more about me ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default About