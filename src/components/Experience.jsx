import { experience } from '../data'
import SectionHeading from './SectionHeading'

function ExperienceItem({ job }) {
  return (
    <div className="relative pl-10">
      <span
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
          job.current ? 'border-accent bg-accent' : 'border-border bg-surface'
        }`}
      />
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-heading text-lg font-bold text-text">{job.role}</h3>
          <span className="text-sm font-medium text-accent">{job.duration}</span>
        </div>
        <p className="mt-0.5 text-sm font-semibold text-muted">
          {job.company}
          {job.location && <span className="font-normal"> · {job.location}</span>}
        </p>
        <ul className="mt-4 space-y-2.5">
          {job.bullets.map((b) => (
            <li key={b.slice(0, 24)} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          subtitle="Five internships and one full-time role, each building on the last."
        />
        <div className="space-y-6 border-l border-border">
          {experience.map((job) => (
            <ExperienceItem key={job.company + job.duration} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
