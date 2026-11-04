import { useEffect, useState } from 'react'
import { GitHubActivity } from './components/github-activity/GitHubActivity.tsx'

type Theme = 'dark' | 'light'

const INTEREST_TAGS = [
  'Artificial Intelligence',
  'Machine Learning',
  'Data Science',
  'Data Analytics',
  'Creative Design',
] as const

interface SocialLink {
  label: string
  href: string
  isExternal?: boolean
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/anaskhan-pd',
    isExternal: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anaskhan-pd/',
    isExternal: true,
  },
  {
    label: 'X',
    href: 'https://x.com/AnasMadeIt',
    isExternal: true,
  },
  {
    label: 'Email',
    href: 'mailto:btw.anaskhan@gmail.com',
  },
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
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      {/* Navigation */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="#" className="text-sm font-semibold tracking-tight">
          Anas Khan<span className="text-[var(--text-muted)]">.</span>
        </a>

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border border-[var(--border)] px-4 py-2 text-xs transition-colors hover:bg-[var(--surface)]"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </header>

      {/* Introduction */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-6 py-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <img
                src="/images/profile.png"
                alt="Illustrated portrait of Anas Khan"
                className="block aspect-square w-full object-cover"
              />
            </div>
            <span className="mt-3 block text-center text-xs text-[var(--text-muted)]">
              A little illustration of me.
            </span>
          </div>

          {/* Introduction text */}
          <div className="max-w-2xl">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Hey, I'm Anas<span className="text-[var(--text-muted)]">.</span>
            </h1>

            <div className="mt-6 space-y-4 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              <p>
                I'm a Data Science student at IIT Madras, interested in the intersection of AI, machine learning and data.
              </p>
              <p>
                I enjoy exploring how models learn, finding patterns in data, and turning ideas into practical projects. I'm always experimenting with new tools, building things and learning along the way.
              </p>
              <p>
                Beyond code and data, I have a thing for visual design and creating things for the internet.
              </p>
            </div>

            {/* Interest tags */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
              {INTEREST_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-3.5 py-1.5 text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6 text-sm">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noreferrer' : undefined}
                  className="group inline-flex items-center gap-1 text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity */}
      <GitHubActivity />
    </main>
  )
}

export default App
