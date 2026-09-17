import { Link } from 'react-router-dom'
import '../styles/QSign.css'

function QSign() {
  return (
    <main className="qsign-page">
      <header className="qsign-nav">
        <Link to="/" className="qsign-nav__brand">Jaswitha</Link>
        <Link to="/" className="qsign-nav__back">Back to portfolio</Link>
      </header>

      <section className="qsign-hero">
        <p className="qsign-hero__eyebrow">
          <span>PROJECT 04</span> — Case Study
        </p>

        <h1>QSIGN</h1>

        <p className="qsign-hero__subtitle">
          Quantum-certified document notarization
        </p>

        <p className="qsign-hero__intro">
          A system that binds document integrity to quantum-generated
          randomness and post-quantum signatures, creating verification
          trails that hold up against both classical and quantum threats.
        </p>

        <Link to="/" className="qsign-hero__back">Back to portfolio</Link>
      </section>

      {/* Problem */}
      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>01</span>
          <span>PROBLEM</span>
        </div>

        <h2>Establishing trust that actually lasts</h2>

        <div className="qsign-section__body">
          <p>
            Digital documents are trivially forgeable. Traditional notarization
            relies on centralized authorities and cryptographic signatures that
            may become vulnerable as computing power evolves — particularly
            with the rise of quantum computers capable of breaking current
            public-key cryptography.
          </p>
          <p>
            The core problem isn't just proving a document existed at a point
            in time. It's proving that the verification method itself is
            trustworthy, that it doesn't depend on assumptions that could
            fail in the future, and that anyone can audit the process
            independently.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>02</span>
          <span>APPROACH</span>
        </div>

        <h2>Verification through entanglement</h2>

        <div className="qsign-section__body">
          <p>
            QSIGN combines quantum mechanics with post-quantum cryptography
            to create a document certification system with verifiable
            integrity. Every notarized document receives a composite trust
            record — a bundle of five independent verification layers that
            can each be independently validated.
          </p>
          <p>
            The verification flow starts when a user submits a document for
            notarization. The system generates a document fingerprint, runs
            a quantum circuit to produce Bell-pair measurements, binds those
            measurements to the specific document, signs everything with a
            post-quantum algorithm, and records the full trail in an audit
            log. Anyone verifying the document can check each layer
            independently without trusting a central authority.
          </p>
        </div>
      </section>

      {/* Five-layer trust model */}
      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>03</span>
          <span>TRUST MODEL</span>
        </div>

        <h2>Five independent verification layers</h2>

        <div className="qsign-section__body">
          <p>
            Each layer provides a distinct guarantee. No single layer is
            the source of trust — the strength comes from their independence.
          </p>
        </div>

        <div className="qsign-trust-grid">
          <div className="qsign-trust-card">
            <span className="qsign-trust-card__number">Layer 01</span>
            <h3>Document Fingerprint</h3>
            <p>
              A SHA-256 hash of the document content, providing a
              tamper-evident record. Any modification to the document
              produces a different fingerprint, making unauthorized changes
              immediately detectable.
            </p>
          </div>

          <div className="qsign-trust-card">
            <span className="qsign-trust-card__number">Layer 02</span>
            <h3>Quantum Origin</h3>
            <p>
              Bell-pair measurements from a real quantum processor,
              verified through the CHSH inequality. This establishes that
              the certification process was anchored to genuine quantum
              randomness, not a classical simulation.
            </p>
          </div>

          <div className="qsign-trust-card">
            <span className="qsign-trust-card__number">Layer 03</span>
            <h3>Document-Bound Circuit</h3>
            <p>
              The quantum circuit parameters are derived from the document
              fingerprint itself. This binds the quantum measurements to
              this specific document, preventing reuse or replay of quantum
              proofs across different documents.
            </p>
          </div>

          <div className="qsign-trust-card">
            <span className="qsign-trust-card__number">Layer 04</span>
            <h3>Post-Quantum Signature</h3>
            <p>
              An ML-DSA-65 (CRYSTALS-Dilithium) signature from NIST's
              post-quantum cryptography standard. This provides long-term
              authenticity that remains secure even against quantum
              adversaries.
            </p>
          </div>

          <div className="qsign-trust-card">
            <span className="qsign-trust-card__number">Layer 05</span>
            <h3>Trusted Issuer</h3>
            <p>
              An auditable record of who performed the notarization and
              when. Combined with the other layers, this creates a complete
              provenance chain that can be independently verified.
            </p>
          </div>
        </div>
      </section>

      {/* Quantum Proof */}
      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>04</span>
          <span>QUANTUM PROOF</span>
        </div>

        <h2>Bell–CHSH verification</h2>

        <div className="qsign-section__body">
          <p>
            The Bell–CHSH inequality provides a way to verify that
            measurement outcomes come from a genuinely quantum source.
            Classical systems — no matter how random they appear — cannot
            produce correlations that violate the CHSH bound. Quantum
            mechanics predicts a maximum of approximately 2.828.
          </p>
        </div>

        <div className="qsign-chsh">
          <div className="qsign-chsh__meter">
            <div className="qsign-chsh__bar-group">
              <span className="qsign-chsh__bar-value">2.0</span>
              <div className="qsign-chsh__bar qsign-chsh__bar--classical" />
              <span className="qsign-chsh__bar-label">Classical limit</span>
            </div>

            <div className="qsign-chsh__bar-group">
              <span className="qsign-chsh__bar-value" style={{ color: 'var(--color-accent)' }}>2.70</span>
              <div className="qsign-chsh__bar qsign-chsh__bar--measured" />
              <span className="qsign-chsh__bar-label">Measured (QSIGN)</span>
            </div>

            <div className="qsign-chsh__bar-group">
              <span className="qsign-chsh__bar-value">2.828</span>
              <div className="qsign-chsh__bar qsign-chsh__bar--quantum" />
              <span className="qsign-chsh__bar-label">Quantum maximum</span>
            </div>
          </div>

          <p className="qsign-chsh__note">
            Our measured CHSH score of <strong>2.70</strong> clearly
            exceeds the classical limit of <strong>2.0</strong>,
            demonstrating genuine quantum correlations. The theoretical
            quantum maximum of <strong>≈ 2.828</strong> represents the
            Tsirelson bound — the upper limit imposed by quantum mechanics.
            The gap between our measurement and this bound reflects
            real-world noise on the quantum hardware, which is expected
            and accounted for in the verification process.
          </p>
        </div>
      </section>

      {/* Product / Workspaces */}
      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>05</span>
          <span>PRODUCT</span>
        </div>

        <h2>Workspaces</h2>

        <div className="qsign-workspaces">
          <div className="qsign-workspace">
            <div className="qsign-workspace__label">Notarize</div>
            <img
              src="/qsign/notarize.png"
              alt="QSIGN notarize workspace — issue a quantum certificate"
              className="qsign-workspace__img"
            />
          </div>

          <div className="qsign-workspace">
            <div className="qsign-workspace__label">Verify</div>
            <img
              src="/qsign/verify.png"
              alt="QSIGN verify workspace — verify a certificate"
              className="qsign-workspace__img"
            />
          </div>

          <div className="qsign-workspace">
            <div className="qsign-workspace__label">Quantum Proof</div>
            <img
              src="/qsign/quantum-proof.png"
              alt="QSIGN quantum proof — notarization certificate with CHSH readout"
              className="qsign-workspace__img"
            />
          </div>

          <div className="qsign-workspace qsign-workspace--audit">
            <div className="qsign-workspace__label">Audit Log</div>
            <img
              src="/qsign/audit-log.png"
              alt="QSIGN audit log — live tamper-evident record"
              className="qsign-workspace__img"
            />
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>06</span>
          <span>TECHNOLOGY</span>
        </div>

        <h2>Built with</h2>

        <div className="qsign-tech-list">
          <span className="qsign-tech-tag">React</span>
          <span className="qsign-tech-tag">FastAPI</span>
          <span className="qsign-tech-tag">IBM Quantum / Qiskit</span>
          <span className="qsign-tech-tag">IBM Quantum Runtime</span>
          <span className="qsign-tech-tag">ibm_marrakesh</span>
          <span className="qsign-tech-tag">NIST ML-DSA-65</span>
          <span className="qsign-tech-tag">IBM Granite</span>
          <span className="qsign-tech-tag">SHA-256</span>
          <span className="qsign-tech-tag">Post-Quantum Cryptography</span>
        </div>
      </section>

      {/* Engineering Results */}
      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>07</span>
          <span>ENGINEERING RESULTS</span>
        </div>

        <h2>Pipeline optimization</h2>

        <div className="qsign-section__body">
          <p>
            The CHSH verification pipeline was profiled and optimized
            through caching, connection pooling, and request batching.
            These improvements target the classical orchestration layer —
            the quantum contribution is device-independent certification
            and post-quantum longevity, not runtime speed.
          </p>
        </div>

        <div className="qsign-benchmark">
          <div className="qsign-benchmark__card">
            <span className="qsign-benchmark__value">2.7×</span>
            <span className="qsign-benchmark__label">
              Pipeline speedup<br />
              581 ms → 216 ms
            </span>
          </div>

          <div className="qsign-benchmark__card">
            <span className="qsign-benchmark__value">0.004</span>
            <span className="qsign-benchmark__label">
              CHSH std. deviation<br />
              (improved from 0.036)
            </span>
          </div>

          <div className="qsign-benchmark__card">
            <span className="qsign-benchmark__value">5</span>
            <span className="qsign-benchmark__label">
              Independent trust layers<br />
              per notarized document
            </span>
          </div>
        </div>
      </section>

      {/* What I built / learned */}
      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>08</span>
          <span>REFLECTIONS</span>
        </div>

        <h2>What I built and learned</h2>

        <div className="qsign-section__body">
          <p>
            QSIGN started as a question: can you make document verification
            verifiably quantum? The answer turned into a full-stack system
            that required thinking about cryptography, quantum hardware
            interfaces, state management, and trust architecture — not as
            separate problems, but as one cohesive design challenge.
          </p>
          <p>
            Working with real quantum hardware changed how I think about
            reliability. You can't control the noise profile of a quantum
            processor the way you control a database connection. The system
            had to be designed around that uncertainty — making the
            verification process robust to hardware variance while still
            producing meaningful certifications.
          </p>
          <p>
            The post-quantum cryptography layer taught me that security is
            temporal. An algorithm that's secure today might not be tomorrow.
            ML-DSA-65 was chosen specifically because it's designed to resist
            both classical and quantum attacks, giving the certification
            record a much longer shelf life than traditional RSA or ECC
            signatures.
          </p>
          <p>
            The biggest engineering lesson was that the interesting part
            isn't any single component — it's how the five trust layers
            compose into something stronger than any individual guarantee.
            That's the core design insight of QSIGN.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="qsign-section">
        <div className="qsign-section__label">
          <span>09</span>
          <span>LINKS</span>
        </div>

        <h2>Explore</h2>

        <div className="qsign-links">
          <a
            href="https://github.com/Jaswitha886/qsign-hackathon1/tree/main"
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <footer className="qsign-footer">
        <span>© 2026 Jaswitha Sai Rajanala</span>
        <span>QSIGN — Case Study</span>
      </footer>
    </main>
  )
}

export default QSign
