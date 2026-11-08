import { getBrandOrSkillIcon } from './brandLogos.tsx'

interface TechIconsProps {
  technologies: string[]
  maxVisible?: number
  variant?: 'overlap' | 'chips'
}

function renderBrandLogo(name: string) {
  const icon = getBrandOrSkillIcon(name, 'w-[18px] h-[18px]')
  if (icon) return icon

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[18px] h-[18px]">
      <circle cx="12" cy="12" r="8" strokeWidth="1.5" stroke="#94A3B8" />
      <path d="M12 8v8M8 12h8" strokeWidth="1.5" strokeLinecap="round" stroke="#94A3B8" />
    </svg>
  )
}

export function TechIcons({
  technologies,
  maxVisible = 3,
  variant = 'overlap',
}: TechIconsProps) {
  // Labeled chips variant for modal presentation
  if (variant === 'chips') {
    return (
      <div
        className="flex flex-wrap gap-2.5"
        aria-label={`Technologies: ${technologies.join(', ')}`}
      >
        {technologies.map((tech) => (
          <div
            key={tech}
            title={tech}
            aria-label={tech}
            className="group/tech inline-flex items-center gap-2.5 pl-1.5 pr-3.5 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors shadow-xs select-none"
          >
            <div className="w-7 h-7 rounded-full bg-[#18181b] border border-[var(--border)]/60 flex items-center justify-center shrink-0 shadow-xs">
              {renderBrandLogo(tech)}
            </div>
            <span className="font-mono text-xs font-medium text-[var(--text-secondary)] group-hover/tech:text-[var(--text-primary)] transition-colors">
              {tech}
            </span>
          </div>
        ))}
      </div>
    )
  }

  // Compact overlapping variant for project card presentation
  const visible = technologies.slice(0, maxVisible)
  const remaining = technologies.slice(maxVisible)
  const remainingCount = remaining.length

  return (
    <div
      className="relative flex items-center"
      aria-label={`Technologies: ${technologies.join(', ')}`}
    >
      {visible.map((tech) => (
        <div
          key={tech}
          title={tech}
          aria-label={tech}
          className="group/tech relative w-8 h-8 rounded-full bg-[#18181b] border-2 border-[var(--surface)] flex items-center justify-center -ml-2 first:ml-0 shadow-sm cursor-default transition-transform duration-150 ease-out hover:scale-120 hover:z-30 motion-reduce:transition-none motion-reduce:transform-none"
        >
          {renderBrandLogo(tech)}

          {/* Accessible Tooltip */}
          <span
            role="tooltip"
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-150 px-2 py-0.5 rounded font-mono text-[10px] bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] whitespace-nowrap shadow-md z-40 motion-reduce:transition-none"
          >
            {tech}
          </span>
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          title={`Additional: ${remaining.join(', ')}`}
          aria-label={`Plus ${remainingCount} more technologies: ${remaining.join(', ')}`}
          className="group/tech relative w-8 h-8 rounded-full bg-[#18181b] border-2 border-[var(--surface)] flex items-center justify-center -ml-2 font-mono text-[10px] font-semibold text-neutral-300 select-none shadow-sm cursor-default transition-transform duration-150 ease-out hover:scale-120 hover:z-30 motion-reduce:transition-none motion-reduce:transform-none"
        >
          <span>+{remainingCount}</span>

          {/* Accessible Tooltip for overflow technologies */}
          <span
            role="tooltip"
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-150 px-2 py-0.5 rounded font-mono text-[10px] bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] whitespace-nowrap shadow-md z-40 motion-reduce:transition-none"
          >
            +{remainingCount} ({remaining.join(', ')})
          </span>
        </div>
      )}
    </div>
  )
}
