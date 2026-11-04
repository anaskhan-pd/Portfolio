import { useGitHubContributions } from './useGitHubContributions.ts'
import { ContributionGraph } from './ContributionGraph.tsx'

export function GitHubActivity() {
  const { data, isLoading, error } = useGitHubContributions()

  const totalContributions = data?.total?.lastYear ?? 0

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Activity
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl text-[var(--text-primary)]">
            {isLoading ? (
              <span className="inline-block h-8 w-60 animate-pulse rounded bg-[var(--surface-elevated)]" />
            ) : (
              <>
                {totalContributions.toLocaleString()}{' '}
                <span className="font-normal text-xl sm:text-2xl text-[var(--text-secondary)]">
                  contributions in the last year
                </span>
              </>
            )}
          </h2>
        </div>

        <a
          href="https://github.com/anaskhan-pd"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          <span>github.com/anaskhan-pd</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </a>
      </div>

      {/* Main Heatmap Container */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7">
        {error && !data ? (
          <div className="py-10 text-center text-sm text-[var(--text-secondary)]">
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
          />
        )}
      </div>
    </section>
  )
}
