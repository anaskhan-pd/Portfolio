import { useEffect, useMemo, useRef, useState } from 'react'
import type { ContributionDay, MonthLabel } from './types.ts'

interface ContributionGraphProps {
  contributions: ContributionDay[]
  isLoading?: boolean
}

const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const LEVEL_CLASS_MAP: Record<number, string> = {
  0: 'bg-[var(--contrib-level-0)]',
  1: 'bg-[var(--contrib-level-1)]',
  2: 'bg-[var(--contrib-level-2)]',
  3: 'bg-[var(--contrib-level-3)]',
  4: 'bg-[var(--contrib-level-4)]',
}

function parseUtcDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}

function formatDisplayDate(dateStr: string): string {
  const d = parseUtcDate(dateStr)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function ContributionGraph({ contributions, isLoading = false }: ContributionGraphProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeDay, setActiveDay] = useState<ContributionDay | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null)

  // Auto-scroll mobile view to the most recent weeks on initial load
  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return

    const scrollToLatest = () => {
      if (el.scrollWidth > el.clientWidth) {
        el.scrollLeft = el.scrollWidth - el.clientWidth
      }
    }

    // Small delay to allow layout calculation
    const timeout = setTimeout(scrollToLatest, 50)
    return () => clearTimeout(timeout)
  }, [contributions])

  // Group continuous days into 7-day columns (Sunday = index 0 to Saturday = index 6)
  const { weeks, monthLabels } = useMemo(() => {
    if (!contributions || contributions.length === 0) {
      return { weeks: [], monthLabels: [] }
    }

    const groupedWeeks: (ContributionDay | null)[][] = []
    let currentWeek: (ContributionDay | null)[] = []

    // Pad first week if it doesn't start on Sunday
    const firstDayUtc = parseUtcDate(contributions[0].date)
    const startDayOfWeek = firstDayUtc.getUTCDay()

    for (let i = 0; i < startDayOfWeek; i++) {
      currentWeek.push(null)
    }

    for (const day of contributions) {
      currentWeek.push(day)
      if (currentWeek.length === 7) {
        groupedWeeks.push(currentWeek)
        currentWeek = []
      }
    }

    // Pad last week if incomplete
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null)
      }
      groupedWeeks.push(currentWeek)
    }

    // Compute month label positions
    const labels: MonthLabel[] = []
    let lastMonth = -1
    let lastLabelWeek = -3

    groupedWeeks.forEach((week, weekIndex) => {
      const firstValidDay = week.find((d): d is ContributionDay => d !== null)
      if (!firstValidDay) return

      const month = parseUtcDate(firstValidDay.date).getUTCMonth()
      if (month !== lastMonth && weekIndex - lastLabelWeek >= 2) {
        labels.push({
          label: MONTH_NAMES[month],
          weekIndex,
        })
        lastMonth = month
        lastLabelWeek = weekIndex
      }
    })

    return { weeks: groupedWeeks, monthLabels: labels }
  }, [contributions])

  const handleCellEnter = (
    day: ContributionDay,
    e: React.MouseEvent<HTMLButtonElement> | React.FocusEvent<HTMLButtonElement>,
  ) => {
    const container = scrollContainerRef.current
    if (!container) return

    const cellRect = e.currentTarget.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    setActiveDay(day)
    setTooltipPos({
      x: cellRect.left - containerRect.left + container.scrollLeft + cellRect.width / 2,
      y: cellRect.top - containerRect.top + container.scrollTop,
    })
  }

  const handleCellLeave = () => {
    setActiveDay(null)
    setTooltipPos(null)
  }

  // Skeleton state
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="h-4 w-40 animate-pulse rounded bg-[var(--surface-elevated)] mb-4" />
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex gap-1">
            {Array.from({ length: 53 }).map((_, w) => (
              <div key={w} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, d) => (
                  <div
                    key={d}
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3 animate-pulse rounded-[2px] bg-[var(--surface-elevated)]"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Scrollable calendar view */}
      <div
        ref={scrollContainerRef}
        tabIndex={0}
        aria-label="GitHub contribution calendar, scrollable horizontally"
        className="relative overflow-x-auto pb-3 pt-1 scrollbar-thin focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--border)] rounded-lg"
      >
        <div className="relative inline-block min-w-max select-none pr-4">
          {/* Tooltip positioned within scroll container */}
          {activeDay && tooltipPos && (
            <div
              role="tooltip"
              className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-full rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-2.5 py-1.5 text-xs shadow-xl whitespace-nowrap transition-opacity duration-150"
              style={{
                left: `${tooltipPos.x}px`,
                top: `${tooltipPos.y - 8}px`,
              }}
            >
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[var(--text-primary)]">
                  {activeDay.count === 0
                    ? 'No contributions'
                    : `${activeDay.count} contribution${activeDay.count === 1 ? '' : 's'}`}
                </span>
                <span className="text-[var(--text-muted)]">on {formatDisplayDate(activeDay.date)}</span>
              </div>
            </div>
          )}

          {/* Month labels row */}
          <div className="flex h-5 items-end text-[10px] text-[var(--text-muted)]">
            {/* Offset spacer matching weekday label column width */}
            <div className="w-7 shrink-0" aria-hidden="true" />
            <div className="relative flex">
              {monthLabels.map((item) => (
                <span
                  key={`${item.label}-${item.weekIndex}`}
                  className="absolute"
                  style={{
                    left: `${item.weekIndex * 15}px`, // 12px cell + 3px gap = 15px
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Main Grid: Weekdays on left + 53 columns on right */}
          <div className="mt-1 flex items-start">
            {/* Weekday labels */}
            <div
              className="flex w-7 shrink-0 flex-col gap-[3px] pr-1.5 text-[10px] text-[var(--text-muted)]"
              aria-hidden="true"
            >
              <span className="h-2.5 sm:h-3 leading-none" />
              <span className="h-2.5 sm:h-3 leading-none">Mon</span>
              <span className="h-2.5 sm:h-3 leading-none" />
              <span className="h-2.5 sm:h-3 leading-none">Wed</span>
              <span className="h-2.5 sm:h-3 leading-none" />
              <span className="h-2.5 sm:h-3 leading-none">Fri</span>
              <span className="h-2.5 sm:h-3 leading-none" />
            </div>

            {/* Calendar weeks */}
            <div
              role="grid"
              aria-label="Contribution squares"
              className="flex gap-[3px]"
            >
              {weeks.map((week, weekIndex) => (
                <div
                  key={`week-${weekIndex}`}
                  role="row"
                  className="flex flex-col gap-[3px]"
                >
                  {week.map((day, dayIndex) => {
                    if (!day) {
                      return (
                        <div
                          key={`empty-${weekIndex}-${dayIndex}`}
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                          aria-hidden="true"
                        />
                      )
                    }

                    const levelClass = LEVEL_CLASS_MAP[day.level] ?? LEVEL_CLASS_MAP[0]
                    const label = `${day.count === 0 ? 'No' : day.count} contribution${
                      day.count === 1 ? '' : 's'
                    } on ${formatDisplayDate(day.date)}`

                    return (
                      <button
                        key={day.date}
                        type="button"
                        role="gridcell"
                        aria-label={label}
                        onMouseEnter={(e) => handleCellEnter(day, e)}
                        onMouseLeave={handleCellLeave}
                        onFocus={(e) => handleCellEnter(day, e)}
                        onBlur={handleCellLeave}
                        className={`h-2.5 w-2.5 sm:h-3 sm:w-3 cursor-pointer rounded-[2px] transition-transform duration-100 hover:scale-125 hover:z-20 focus-visible:scale-125 focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] focus-visible:outline-none ${levelClass}`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Graph footer: Legend */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-2 text-[11px] text-[var(--text-muted)]">
        <span className="hidden sm:inline">
          Continuous commit, pull request and code activity.
        </span>

        <div className="flex items-center gap-1.5 ml-auto">
          <span>Less</span>
          <div className="flex items-center gap-[3px]">
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-0)]"
              aria-hidden="true"
            />
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-1)]"
              aria-hidden="true"
            />
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-2)]"
              aria-hidden="true"
            />
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-3)]"
              aria-hidden="true"
            />
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-4)]"
              aria-hidden="true"
            />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
