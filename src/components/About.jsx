import { about } from '../data'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="About Me" title="Building real products, not tutorials" />
        <div className="space-y-5 text-base leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
