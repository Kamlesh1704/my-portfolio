import { useState } from 'react'
import { profile } from '../data'
import SectionHeading from './SectionHeading'
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon } from './Icons'

const WEB3FORMS_ACCESS_KEY = '85032970-f300-4279-8e98-00d394334a14'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const result = await res.json()
      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's work together"
          subtitle="Open to frontend and full-stack roles — reach out directly or use the form below."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-4 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-muted hover:border-accent hover:text-accent"
          >
            <MailIcon width={16} height={16} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-muted hover:border-accent hover:text-accent"
          >
            <PhoneIcon width={16} height={16} /> {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-muted hover:border-accent hover:text-accent"
          >
            <LinkedinIcon width={16} height={16} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-muted hover:border-accent hover:text-accent"
          >
            <GithubIcon width={16} height={16} /> GitHub
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            required
            className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="text-center text-sm font-medium text-accent">Thanks! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm font-medium text-red-400">
              Something went wrong — email me directly at {profile.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
