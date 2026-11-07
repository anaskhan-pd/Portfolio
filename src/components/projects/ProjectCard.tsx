import { useState } from 'react'
import type { Project } from './projectsData.ts'
import { TechIcons } from './TechIcons.tsx'
import { ProjectRibbonPattern } from './ProjectRibbonPattern.tsx'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  const isLive = Boolean(project.liveUrl)

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(project)
        }
      }}
      aria-haspopup="dialog"
      aria-label={`View project details for ${project.title}`}
      className="group flex flex-col h-full w-full text-left bg-transparent cursor-pointer rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] select-none motion-reduce:transition-none"
    >
      {/* Main Visual Container: Rounded Preview Canvas */}
      <div className="relative aspect-[16/10] w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] overflow-hidden transition-colors duration-300 group-hover:border-[var(--text-muted)]/50">
        {/* Layer 1: Subtle Straight Grid (normal state; fades out on hover) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25 transition-opacity duration-500 ease-out group-hover:opacity-0 motion-reduce:transition-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />

        {/* Layer 2: Abstract Flowing Ribbon Pattern (fades in and glides on hover behind screenshot) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 scale-95 translate-y-1.5 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 motion-reduce:transition-none motion-reduce:transform-none"
          aria-hidden="true"
        >
          <ProjectRibbonPattern />
        </div>

        {/* Layer 3: Floating Category Pill (moves to center floating pill on hover) */}
        <span
          className="absolute top-2.5 left-2.5 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 ease-out z-20 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text-primary)] border border-transparent group-hover:border-[var(--border)] group-hover:bg-[var(--surface)] group-hover:shadow-xs rounded-full px-2 py-0.5 whitespace-nowrap motion-reduce:transition-none"
        >
          {project.category}
        </span>

        {/* Small Featured Label for Heavy Equipment */}
        {project.featured && (
          <div className="absolute top-2.5 right-2.5 z-20 inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500">
            <span className="h-1 w-1 rounded-full bg-amber-500" aria-hidden="true" />
            <span>Featured</span>
          </div>
        )}

        {/* Layer 4: Screenshot Container (anchored in lower part, glides up on hover) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[82%] sm:w-[84%] aspect-[16/10] overflow-hidden rounded-t-lg rounded-b-none border border-[var(--border)] border-b-0 bg-[var(--surface)] shadow-md transition-transform duration-500 ease-out z-10 translate-y-12 sm:translate-y-14 group-hover:translate-y-3 sm:group-hover:translate-y-4 touch-preview-static motion-reduce:transition-none">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-3 bg-[var(--surface)]">
              <span className="font-mono text-xs font-semibold text-[var(--text-muted)]">
                /{project.code}
              </span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[var(--text-muted)]">
                {project.category}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Project Information */}
      <div className="pt-3 pb-1 px-1 w-full flex flex-col flex-1 justify-between">
        <div>
          {/* Title and Live status row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <h3 className="text-base sm:text-[17px] font-semibold tracking-tight text-[var(--text-primary)] relative inline-flex items-center">
                <span>{project.title}</span>
                <span
                  className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-[var(--text-primary)] transition-all duration-300 ease-out group-hover:w-full pointer-events-none motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </h3>

              {/* Revealable chain-link icon beside title */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-all duration-200 scale-0 group-hover:scale-100 shrink-0 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path d="M9.14339 10.691L9.35031 10.4841C11.329 8.50532 14.5372 8.50532 16.5159 10.4841C18.4947 12.4628 18.4947 15.671 16.5159 17.6497L13.6497 20.5159C11.671 22.4947 8.46279 22.4947 6.48405 20.5159C4.50532 18.5372 4.50532 15.329 6.48405 13.3503L6.9484 12.886" />
                <path d="M17.0516 11.114L17.5159 10.6497C19.4947 8.67095 19.4947 5.46279 17.5159 3.48405C15.5372 1.50532 12.329 1.50532 10.3503 3.48405L7.48405 6.35031C5.50532 8.32904 5.50532 11.5372 7.48405 13.5159C9.46279 15.4947 12.671 15.4947 14.6497 13.5159L14.8566 13.309" />
              </svg>
            </div>

            {/* Live status badge: green dot with ping + Live label */}
            {isLive && (
              <span className="text-[11px] font-mono flex items-center gap-1.5 shrink-0 text-emerald-600 dark:text-emerald-400 font-medium select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Live
              </span>
            )}
          </div>

          {/* Compact two-line description */}
          <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[var(--text-secondary)] line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Bottom row: Overlapping technology icons & View Project action */}
        <div className="mt-4 pt-1 flex items-center justify-between w-full">
          <TechIcons technologies={project.technologies} maxVisible={3} />

          <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-200 select-none">
            <span>View Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
