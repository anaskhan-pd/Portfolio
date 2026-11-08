import { useState } from 'react'
import { PROJECTS_DATA, type Project } from './projectsData.ts'
import { ProjectCard } from './ProjectCard.tsx'
import { ProjectModal } from './ProjectModal.tsx'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="pt-8 sm:pt-10 pb-16 sm:pb-20 border-t border-[var(--border)]"
    >
      {/* Section Header */}
      <div className="mb-6 sm:mb-8 flex items-baseline justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Selected Projects<span className="text-[var(--text-muted)]">.</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
            Machine learning pipelines, full-stack software, and analytical explorations.
          </p>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
          04 works
        </span>
      </div>

      {/* Projects Grid: 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
