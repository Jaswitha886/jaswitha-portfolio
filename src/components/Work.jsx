import { projects } from '../data/projects'

function Work() {
  return (
    <section className="work" id="work">
      <div className="section-label">
        <span>02</span>
        <span>SELECTED WORK</span>
      </div>

      <div className="work__intro">
        <h2>
          Things I've
          <br />
          actually built.
        </h2>

        <p>
          A selection of projects exploring AI,
          intelligent systems, and software.
        </p>
      </div>

      <div className="work__list">
        {projects.map((project) => (
          <article className="project" key={project.number}>
            <span className="project__number">
              {project.number}
            </span>

            <div className="project__main">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <span className="project__arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work