export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </div>
  )
}
