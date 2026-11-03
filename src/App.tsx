import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

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
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <span className="text-sm font-medium tracking-wide">
          Anas Khan.
        </span>

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border border-[var(--border)] px-4 py-2 text-sm transition-colors hover:bg-[var(--surface)]"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </header>
    </main>
  )
}

export default App