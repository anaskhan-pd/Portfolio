import { useEffect, useState } from 'react'
import { GitHubActivity } from './components/github-activity/GitHubActivity.tsx'
import { Projects } from './components/projects/Projects.tsx'

type Theme = 'dark' | 'light'

interface NavLink {
  label: string
  href: string
  isActive?: boolean
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#', isActive: true },
  { label: 'Projects', href: '#projects', isActive: false },
  { label: 'Writing', href: '#writing', isActive: false },
]

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <main className="mx-auto max-w-2xl px-5 sm:px-6">
        {/* Navigation */}
        <header className="flex items-center justify-between pt-8 pb-8 sm:pt-10 sm:pb-10">
          <nav className="flex items-center gap-5 sm:gap-6 text-sm" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors ${
                  link.isActive
                    ? 'text-[var(--text-primary)] font-medium'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                aria-current={link.isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--border)]"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Profile Header */}
        <section aria-label="Profile" className="pb-8 sm:pb-10">
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="relative h-16 w-16 sm:h-[70px] sm:w-[70px] shrink-0 overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-0.5">
              <img
                src="/images/profile.png"
                alt="Illustrated portrait of Anas Khan"
                className="h-full w-full object-cover rounded-[12px]"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Anas Khan
              </h1>
              <p className="mt-1 font-mono text-xs sm:text-[13px] text-[var(--text-muted)]">
                Data Science student at IIT Madras
              </p>
              <div className="mt-1.5 flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Available for projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section aria-label="About" className="pb-8 sm:pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Hey, I'm Anas<span className="text-[var(--text-muted)]">.</span>
          </h2>

          <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
            <p>
              I am a Data Science student at <strong>IIT Madras</strong>, focused on{' '}
              <strong>artificial intelligence</strong>, <strong>machine learning</strong> and{' '}
              <strong>data analytics</strong>.
            </p>
            <p>
              I enjoy exploring how models learn, finding patterns in data, and turning ideas into{' '}
              <strong>practical projects</strong>. I'm always experimenting with new tools, building software and learning along the way.
            </p>
            <p>
              Beyond code and data, I have a thing for <strong>visual design</strong> and creating clean things for the internet.
            </p>
            <p className="pt-2 text-sm text-[var(--text-muted)]">
              Find my work on{' '}
              <a
                href="https://github.com/anaskhan-pd"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-primary)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--text-primary)]"
              >
                GitHub ↗
              </a>
              , connect on{' '}
              <a
                href="https://www.linkedin.com/in/anaskhan-pd/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-primary)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--text-primary)]"
              >
                LinkedIn ↗
              </a>
              , follow what I share on{' '}
              <a
                href="https://x.com/AnasMadeIt"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-primary)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--text-primary)]"
              >
                X ↗
              </a>
              , or reach out by{' '}
              <a
                href="mailto:btw.anaskhan@gmail.com"
                className="text-[var(--text-primary)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--text-primary)]"
              >
                Email ↗
              </a>
              .
            </p>
          </div>
        </section>

        {/* GitHub Activity */}
        <GitHubActivity />

        {/* Selected Projects */}
        <Projects />
      </main>
    </div>
  )
}

export default App
