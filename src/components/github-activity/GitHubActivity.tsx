import { useMemo } from 'react'
import { useGitHubContributions } from './useGitHubContributions.ts'
import { ContributionGraph } from './ContributionGraph.tsx'

function parseUtcDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}

function formatDateRange(startDate?: string, endDate?: string): string {
  if (!startDate || !endDate) return ''
  const start = parseUtcDate(startDate)
  const end = parseUtcDate(endDate)
  const format = (d: Date) =>
    d.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    })
  return `${format(start)} — ${format(end)}`
}

export function GitHubActivity() {
  const { data, isLoading, error } = useGitHubContributions()

  const totalContributions = data?.total?.lastYear ?? 0

  const { activeDays, longestStreak, dateRange } = useMemo(() => {
    if (!data?.contributions || data.contributions.length === 0) {
      return { activeDays: 0, longestStreak: 0, dateRange: '' }
    }

    let active = 0
    let maxStreak = 0
    let currentStreak = 0

    for (const day of data.contributions) {
      if (day.count > 0) {
        active++
        currentStreak++
        if (currentStreak > maxStreak) {
          maxStreak = currentStreak
        }
      } else {
        currentStreak = 0
      }
    }

    const range = formatDateRange(
      data.contributions[0]?.date,
      data.contributions[data.contributions.length - 1]?.date,
    )

    return {
      activeDays: active,
      longestStreak: maxStreak,
      dateRange: range,
    }
  }, [data?.contributions])

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 border-t border-[var(--border)]">
      {/* Section Header */}
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
              02 / Activity
            </span>
            <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" aria-hidden="true" />
            <span className="text-xs text-[var(--text-muted)]">GitHub</span>
          </div>

          <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--text-primary)] font-mono sm:font-sans">
              {isLoading ? (
                <span className="inline-block h-10 w-32 animate-pulse rounded bg-[var(--surface-elevated)]" />
              ) : (
                totalContributions.toLocaleString()
              )}
            </h2>
            <span className="text-base sm:text-lg text-[var(--text-secondary)]">
              contributions in the last year
            </span>
          </div>

          {/* Supporting editorial metrics */}
          <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[var(--text-muted)] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-[var(--text-primary)] font-medium">
                {isLoading ? '—' : activeDays}
              </span>
              <span>active days</span>
            </div>
            <span className="h-3 w-px bg-[var(--border)]" aria-hidden="true" />
            <div className="flex items-center gap-1.5">
              <span className="text-[var(--text-primary)] font-medium">
                {isLoading ? '—' : `${longestStreak} days`}
              </span>
              <span>longest streak</span>
            </div>
            {dateRange && (
              <>
                <span className="h-3 w-px bg-[var(--border)]" aria-hidden="true" />
                <span className="hidden sm:inline">{dateRange}</span>
              </>
            )}
          </div>
        </div>

        {/* Profile link */}
        <div className="flex items-center">
          <a
            href="https://github.com/anaskhan-pd"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <span>@anaskhan-pd</span>
            <span
              aria-hidden="true"
              className="text-[var(--text-muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text-primary)]"
            >
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* Contribution Grid integrated directly into page */}
      {error && !data ? (
        <div className="py-12 text-center text-sm text-[var(--text-secondary)]">
          <p>GitHub activity data is temporarily unavailable.</p>
          <a
            href="https://github.com/anaskhan-pd"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--text-primary)] underline hover:no-underline"
          >
            <span>View profile on GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      ) : (
        <ContributionGraph
          contributions={data?.contributions ?? []}
          isLoading={isLoading}
          dateRange={dateRange}
        />
      )}
    </section>
  )
}
