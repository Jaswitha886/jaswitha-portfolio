function Notes() {
  return (
    <section className="notes" id="notes">
      <div className="section-label">
        <span>03</span> NOTES
      </div>

      <div className="notes-header">
        <h2>Things I'm thinking about.</h2>

        <p>
          Experiments, ideas, and things I'm learning while
          building with AI.
        </p>
      </div>

      <div className="notes-list">
        <article className="note">
          <span>01</span>
          <div>
            <h3>Building with Local LLMs</h3>
            <p>
              Experiments with Ollama, RAG, and running AI locally.
            </p>
          </div>
          <span>↗</span>
        </article>

        <article className="note">
          <span>02</span>
          <div>
            <h3>What RAG Actually Solves</h3>
            <p>
              Notes from building retrieval-augmented AI systems.
            </p>
          </div>
          <span>↗</span>
        </article>

        <article className="note">
          <span>03</span>
          <div>
            <h3>Why I Built QSIGN</h3>
            <p>
              Quantum computing, cryptography, and digital trust.
            </p>
          </div>
          <span>↗</span>
        </article>
      </div>
    </section>
  )
}

export default Notes