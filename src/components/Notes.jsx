function Notes() {
  return (
    <section className="notes" id="notes">
      <div className="notes__inner">
        <div className="section-label">
          <span>03</span> NOTES
        </div>

        <div className="notes-header">
          <h2>Things I'm thinking about.</h2>

          <p>
            Problems I'm exploring, skills I'm developing, and ideas I'm working through.
          </p>
        </div>

        <div className="notes-list">
          <article className="note">
            <span>01</span>
            <div>
              <h3>Solving Real-World Problems</h3>
              <p>
                Exploring how software and AI can turn everyday problems into practical, usable solutions.
              </p>
            </div>
            <span className="note__arrow">↗</span>
          </article>

          <article className="note">
            <span>02</span>
            <div>
              <h3>Getting Better at DSA</h3>
              <p>
                Working through data structures and algorithms to strengthen problem-solving and build better programming fundamentals.
              </p>
            </div>
            <span className="note__arrow">↗</span>
          </article>

          <article className="note">
            <span>03</span>
            <div>
              <h3>Building Beyond the Idea</h3>
              <p>
                Learning how to turn an idea into something that actually works — from breaking down the problem to building and testing the solution.
              </p>
            </div>
            <span className="note__arrow">↗</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Notes