import { skills } from '../data'
import SectionHeading from './SectionHeading'

function SkillCard({ group }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h3 className="font-heading text-base font-bold text-accent">{group.category}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Toolbox" title="Technical Skills" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
