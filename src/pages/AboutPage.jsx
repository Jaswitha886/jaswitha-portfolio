import { Link } from 'react-router-dom'
import '../styles/AboutPage.css'

function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-page__nav">
        <Link to="/" className="about-page__nav-brand">Jaswitha</Link>
        <Link to="/" className="about-page__nav-back">Back to portfolio</Link>
      </header>

      <section className="about-page__hero">
        <p className="about-page__eyebrow">
          <span>01</span> / ABOUT
        </p>

        <h1>A little more about me.</h1>

        <Link to="/" className="about-page__hero-back">← Back to portfolio</Link>
      </section>

      {/* Section 1 — The Unexpected Route Into Tech */}
      <section className="about-page__section">
        <div className="about-page__section-label">
          <span>01</span>
          <span>THE UNEXPECTED ROUTE INTO TECH</span>
        </div>

        <h2>The unexpected route into tech.</h2>

        <div className="about-page__body">
          <p>
            I didn't originally plan on becoming a software engineer. I spent
            my school years focused on biology, chemistry, and physics because
            I wanted to pursue medicine. When that path didn't work out, I
            found myself in CSE with almost no experience in coding.
          </p>
          <p>
            I didn't even like coding at first. AI and hackathons gradually
            changed that. They gave me something I hadn't expected from
            programming: a reason to be curious.
          </p>
        </div>
      </section>

      {/* Section 2 — How I Tend to Work */}
      <section className="about-page__section">
        <div className="about-page__section-label">
          <span>02</span>
          <span>HOW I TEND TO WORK</span>
        </div>

        <h2>How I tend to work.</h2>

        <div className="about-page__body">
          <p>
            I'm naturally curious, and probably overthink more than I need to.
            If I don't understand something, my brain tends to keep looking for
            the missing pieces.
          </p>
          <p>
            When I'm building something, that usually turns into a mix of
            researching, experimenting, breaking the problem down, trying
            things, fixing what breaks, and then wondering what else I can add
            once it finally works.
          </p>
        </div>

        <div className="about-page__process">
          <span>research</span>
          <span className="about-page__process-arrow">→</span>
          <span>break it down</span>
          <span className="about-page__process-arrow">→</span>
          <span>experiment</span>
          <span className="about-page__process-arrow">→</span>
          <span>build</span>
          <span className="about-page__process-arrow">→</span>
          <span>fix</span>
          <span className="about-page__process-arrow">→</span>
          <span>explore</span>
        </div>
      </section>

      {/* Section 3 — What I'm Exploring */}
      <section className="about-page__section">
        <div className="about-page__section-label">
          <span>03</span>
          <span>WHAT I'M EXPLORING</span>
        </div>

        <h2>What I'm exploring.</h2>

        <div className="about-page__tags">
          <span>Artificial Intelligence</span>
          <span>RAG & Agentic AI</span>
          <span>Local LLMs</span>
          <span>Software Development</span>
          <span>DSA & Problem Solving</span>
        </div>
      </section>

      {/* Section 4 — Outside the Screen */}
      <section className="about-page__section">
        <div className="about-page__section-label">
          <span>04</span>
          <span>OUTSIDE THE SCREEN</span>
        </div>

        <h2>Outside the screen.</h2>

        <div className="about-page__body">
          <p>
            When I'm not building something, I usually end up doing something
            creative—drawing, painting, crafts, dancing, listening to
            music—or simply spending some time by myself.
          </p>
          <p>
            I also have a habit of trying random new things... and occasionally
            spending far too much time scrolling.
          </p>
        </div>
      </section>

      {/* Section 5 — Where I'm Heading */}
      <section className="about-page__section about-page__section--closing">
        <div className="about-page__section-label">
          <span>05</span>
          <span>WHERE I'M HEADING</span>
        </div>

        <h2>Where I'm heading.</h2>

        <div className="about-page__body about-page__body--emphasis">
          <p>
            I'm still figuring out exactly where I want the road to take me.
            But I know I want to become someone who understands AI deeply
            instead of simply using AI tools—someone who can take a real
            problem, understand it properly, and build something genuinely
            useful.
          </p>
        </div>
      </section>

      {/* Currently */}
      <section className="about-page__section">
        <div className="about-page__section-label">
          <span>06</span>
          <span>CURRENTLY</span>
        </div>

        <h2>A few things I'm doing.</h2>

        <div className="about-page__currently">
          <div className="about-page__currently-item">
            <span className="about-page__currently-label">Study</span>
            <p>B.Tech CSE (AI & ML) — SRMIST, Chennai</p>
          </div>

          <div className="about-page__currently-item">
            <span className="about-page__currently-label">Achievements</span>
            <ul className="about-page__currently-list">
              <li>Webmaster — IEEE Computational Intelligence Society Student Branch at SRMIST</li>
              <li>TechVistra'25 HackFest — 2nd Place with Team TriNova</li>
              <li>Also participated in multiple hackathons and conducted events</li>
            </ul>
          </div>

          <div className="about-page__currently-item">
            <span className="about-page__currently-label">Learning</span>
            <ul className="about-page__currently-list">
              <li>AI, RAG and agentic systems</li>
              <li>Python, NumPy, Pandas & Scikit-learn</li>
              <li>TensorFlow & machine learning fundamentals</li>
              <li>DSA & problem solving</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="about-page__footer">
        <span>© 2026 Jaswitha Sai Rajanala</span>
        <span>Built with curiosity.</span>
      </footer>
    </main>
  )
}

export default AboutPage
