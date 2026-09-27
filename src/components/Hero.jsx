import { useEffect, useState } from 'react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from './Icons'

function useTypedRoles(roles) {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex % roles.length]
    const delay = deleting ? 40 : 70
    const atEnd = !deleting && text === current
    const atStart = deleting && text === ''

    const timer = setTimeout(() => {
      if (atEnd) {
        setDeleting(true)
        return
      }
      if (atStart) {
        setDeleting(false)
        setRoleIndex((i) => i + 1)
        return
      }
      setText(current.slice(0, text.length + (deleting ? -1 : 1)))
    }, atEnd ? 1400 : delay)

    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex, roles])

  return text
}

export default function Hero() {
  const typed = useTypedRoles(profile.roles)

  return (
    <section
      id="home"
      className="flex min-h-screen items-center border-b border-border bg-[radial-gradient(circle_at_top,_rgba(89,178,244,0.12),transparent_55%)] px-6 pt-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Open to frontend & full-stack opportunities
          </p>

          <h1 className="font-heading text-4xl font-extrabold leading-tight text-text sm:text-5xl lg:text-6xl">
            Hi, I'm {profile.name}
          </h1>

          <p className="mt-3 h-9 font-heading text-xl font-semibold text-accent sm:text-2xl">
            {typed}
            <span className="animate-pulse">|</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              View Experience
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              View Projects
            </a>
            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon width={16} height={16} /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-sm md:block">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-accent/25 to-accent-2/25 blur-2xl" />
          <img
            src="/img/me.png"
            alt={profile.name}
            className="relative h-full w-full rounded-3xl border border-border object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
