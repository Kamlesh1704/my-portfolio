import { education } from '../data'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="border-b border-border bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Background" title="Education" />
        <div className="space-y-4">
          {education.map((e) => (
            <div
              key={e.school}
              className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-border bg-surface p-5"
            >
              <div>
                <h3 className="font-heading text-base font-bold text-text">{e.school}</h3>
                <p className="mt-0.5 text-sm text-muted">{e.detail}</p>
              </div>
              <span className="text-sm font-medium text-accent">{e.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
