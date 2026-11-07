import { useEffect, useRef, useState } from 'react'
import type { Project } from './projectsData.ts'
import { TechIcons } from './TechIcons.tsx'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const [imageError, setImageError] = useState(false)
  const [isRendered, setIsRendered] = useState(false)

  // Trigger entrance transition on mount
  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsRendered(true))
    return () => cancelAnimationFrame(frameId)
  }, [])

  // Lock background scroll while modal is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  // Keyboard navigation: Escape to dismiss & focus trap
  useEffect(() => {
    closeBtnRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        if (focusables.length === 0) return

        const first = focusables[0]
        const last = focusables[focusables.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === last) {
            first.focus()
            e.preventDefault()
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      aria-describedby="modal-project-desc"
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs transition-opacity duration-200 motion-reduce:transition-none ${
        isRendered ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-thin rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl transition-all duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          isRendered ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-2'
        }`}
      >
        {/* Sticky Close Button (always accessible and visible while scrolling) */}
        <div className="sticky top-0 z-30 flex justify-end pointer-events-none p-3.5 sm:p-4 -mb-13">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] cursor-pointer"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Clean Screenshot Area (zero grid overlays, zero filters, pristine image colors & sharpness) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--border)] bg-[var(--surface-elevated)]">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] font-mono text-sm font-semibold text-[var(--text-muted)]">
                /{project.code}
              </div>
              <span className="mt-3 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                {project.category}
              </span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]/60">
                [{project.code}]
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {project.featured && (
                <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 select-none">
                  <span className="h-1 w-1 rounded-full bg-amber-500" aria-hidden="true" />
                  Featured
                </span>
              )}

              {project.liveUrl && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-medium select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Live
                </span>
              )}
            </div>
          </div>

          {/* Project Title */}
          <h2
            id="modal-project-title"
            className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            {project.title}
          </h2>

          {/* Full description */}
          <p
            id="modal-project-desc"
            className="mt-3.5 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]"
          >
            {project.description}
          </p>

          {/* Key Highlights */}
          <div className="mt-7 pt-6 border-t border-[var(--border)]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
              Key Highlights
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack using reusable TechIcons component */}
          <div className="mt-7 pt-6 border-t border-[var(--border)]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3.5">
              Technology Stack
            </h3>
            <TechIcons technologies={project.technologies} variant="chips" />
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Live Demo button: only rendered if liveUrl exists (not rendered for Hospix) */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--background)] font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] shadow-xs select-none"
              >
                <span>Live Demo</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            )}

            {/* GitHub Repository button */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] font-medium text-xs sm:text-sm hover:border-[var(--text-muted)] hover:bg-[var(--surface)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border)] select-none"
              >
                <span>GitHub Repository</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
