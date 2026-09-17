import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectLink({ project, children }) {
  if (project.external) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="project__link"
        aria-label={`View ${project.title} on GitHub`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={project.link}
      className="project__link"
      aria-label={`View ${project.title}`}
    >
      {children}
    </Link>
  )
}

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
          been building.
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

            <ProjectLink project={project}>
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
            </ProjectLink>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work