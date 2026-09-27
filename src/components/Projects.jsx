import { projects } from '../data'
import SectionHeading from './SectionHeading'
import { ExternalLinkIcon, LockIcon } from './Icons'

function ProjectCard({ project, featured }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-border bg-surface ${
        featured ? 'lg:col-span-2 lg:flex-row' : ''
      }`}
    >
      <div
        className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-linear-to-br from-surface-2 to-bg ${
          featured ? 'h-48 lg:h-auto lg:w-2/5' : 'h-44'
        }`}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <span className="font-heading text-3xl font-extrabold text-border">{project.title.slice(0, 2)}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-heading text-lg font-bold text-text">{project.title}</h3>
          <span className="text-xs font-medium text-accent">{project.duration}</span>
        </div>
        <p className="mt-0.5 text-sm font-semibold text-muted">{project.subtitle}</p>

        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.bullets.map((b) => (
            <li key={b.slice(0, 24)} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>

        {project.demoCreds && (
          <p className="mt-4 text-xs text-muted">
            Demo credentials — {project.demoCreds}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              {project.linkLabel} <ExternalLinkIcon width={15} height={15} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted">
              <LockIcon width={15} height={15} /> {project.linkLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          subtitle="A mix of a live team SaaS product and solo full-stack builds."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
