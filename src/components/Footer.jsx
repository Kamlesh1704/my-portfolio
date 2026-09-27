import { ArrowUpIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-6 py-6 text-sm text-muted">
      <p>© {new Date().getFullYear()} Kamlesh Chandel. All rights reserved.</p>
      <a
        href="#home"
        className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 hover:border-accent hover:text-accent"
      >
        <ArrowUpIcon width={14} height={14} /> Top
      </a>
    </footer>
  )
}
