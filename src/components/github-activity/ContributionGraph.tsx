import { useEffect, useMemo, useRef, useState } from 'react'
import type { ContributionDay, MonthLabel } from './types.ts'

interface ContributionGraphProps {
  contributions: ContributionDay[]
  isLoading?: boolean
  dateRange?: string
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
  0: 'bg-[var(--contrib-level-0)] border border-[var(--contrib-level-0-border)]',
  1: 'bg-[var(--contrib-level-1)] border border-transparent',
  2: 'bg-[var(--contrib-level-2)] border border-transparent',
  3: 'bg-[var(--contrib-level-3)] border border-transparent',
  4: 'bg-[var(--contrib-level-4)] border border-transparent',
}

const WEEKDAY_SLOTS = [
  { day: 0, label: '', isVisible: false },
  { day: 1, label: 'Mon', isVisible: true },
  { day: 2, label: '', isVisible: false },
  { day: 3, label: 'Wed', isVisible: true },
  { day: 4, label: '', isVisible: false },
  { day: 5, label: 'Fri', isVisible: true },
  { day: 6, label: '', isVisible: false },
]

function parseUtcDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}

function formatDisplayDate(dateStr: string): string {
  const d = parseUtcDate(dateStr)
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function ContributionGraph({
  contributions,
  isLoading = false,
  dateRange,
}: ContributionGraphProps) {
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

    // Identify all weeks that contain the 1st of a month
    const firstOfMonths: { weekIndex: number; month: number }[] = []
    groupedWeeks.forEach((week, weekIndex) => {
      const dayOne = week.find(
        (d): d is ContributionDay => d !== null && parseUtcDate(d.date).getUTCDate() === 1,
      )
      if (dayOne) {
        firstOfMonths.push({
          weekIndex,
          month: parseUtcDate(dayOne.date).getUTCMonth(),
        })
      }
    })

    const labels: MonthLabel[] = []
    let lastLabelWeek = -4

    // If the first day 1 is at least 3 weeks into the calendar, label week 0 with the initial month
    if (firstOfMonths.length > 0 && firstOfMonths[0].weekIndex >= 3) {
      const firstValid = groupedWeeks[0].find((d): d is ContributionDay => d !== null)
      if (firstValid) {
        const m = parseUtcDate(firstValid.date).getUTCMonth()
        labels.push({ label: MONTH_NAMES[m], weekIndex: 0 })
        lastLabelWeek = 0
      }
    }

    // Place each subsequent month label on the week where day 1 occurs, ensuring proper spacing
    for (const item of firstOfMonths) {
      if (item.weekIndex - lastLabelWeek >= 3 && item.weekIndex < groupedWeeks.length - 2) {
        labels.push({
          label: MONTH_NAMES[item.month],
          weekIndex: item.weekIndex,
        })
        lastLabelWeek = item.weekIndex
      }
    }

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

    // Center tooltip on the cell, clamped within scroll container boundaries
    const rawX = cellRect.left - containerRect.left + container.scrollLeft + cellRect.width / 2
    const minX = 85
    const maxX = container.scrollWidth - 85
    const clampedX = Math.max(minX, Math.min(rawX, maxX))

    setTooltipPos({
      x: clampedX,
      y: cellRect.top - containerRect.top + container.scrollTop,
    })
  }

  const handleCellLeave = () => {
    setActiveDay(null)
    setTooltipPos(null)
  }

  // Skeleton loading state
  if (isLoading) {
    return (
      <div className="w-full">
        {/* Month labels placeholder */}
        <div className="mb-2 flex items-center">
          <div className="w-7 sm:w-8 shrink-0" aria-hidden="true" />
          <div className="flex flex-1 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-8 animate-pulse rounded bg-[var(--surface-elevated)]"
              />
            ))}
          </div>
        </div>

        {/* Heatmap grid placeholder */}
        <div className="flex items-stretch">
          <div
            className="grid w-7 sm:w-8 shrink-0 pr-2 select-none"
            style={{
              gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
              rowGap: '3px',
            }}
            aria-hidden="true"
          >
            {WEEKDAY_SLOTS.map((slot) => (
              <div
                key={slot.day}
                className={`flex items-center text-[10px] font-mono leading-none text-[var(--text-muted)] ${
                  slot.isVisible ? 'opacity-40' : 'opacity-0 select-none'
                }`}
              >
                {slot.label}
              </div>
            ))}
          </div>

          <div
            className="grid flex-1"
            style={{
              gridTemplateColumns: 'repeat(53, minmax(0, 1fr))',
              columnGap: '3px',
            }}
          >
            {Array.from({ length: 53 }).map((_, w) => (
              <div key={w} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, d) => (
                  <div
                    key={d}
                    className="w-full aspect-square animate-pulse rounded-[2px] bg-[var(--surface-elevated)]"
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
        className="relative overflow-x-auto pt-5 pb-2 scrollbar-thin focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--border)] rounded-md"
      >
        <div className="relative inline-block w-full min-w-[760px] sm:min-w-[840px] select-none">
          {/* Tooltip positioned within scroll container */}
          {activeDay && tooltipPos && (
            <div
              role="tooltip"
              className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-full rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)]/95 px-3 py-1.5 text-xs shadow-xl backdrop-blur-md whitespace-nowrap transition-all duration-150"
              style={{
                left: `${tooltipPos.x}px`,
                top: `${tooltipPos.y - 8}px`,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${LEVEL_CLASS_MAP[activeDay.level]}`}
                  aria-hidden="true"
                />
                <span className="font-medium text-[var(--text-primary)]">
                  {activeDay.count === 0
                    ? 'No contributions'
                    : `${activeDay.count} contribution${activeDay.count === 1 ? '' : 's'}`}
                </span>
                <span className="text-[var(--text-muted)] font-mono text-[11px]">
                  {formatDisplayDate(activeDay.date)}
                </span>
              </div>
            </div>
          )}

          {/* Month labels row */}
          <div className="mb-2 flex items-center">
            {/* Offset spacer matching weekday label column width */}
            <div className="w-7 sm:w-8 shrink-0" aria-hidden="true" />
            <div
              className="relative grid flex-1 h-4 select-none"
              style={{
                gridTemplateColumns: 'repeat(53, minmax(0, 1fr))',
                columnGap: '3px',
              }}
            >
              {monthLabels.map((item) => (
                <div
                  key={`${item.label}-${item.weekIndex}`}
                  className="relative"
                  style={{
                    gridColumnStart: item.weekIndex + 1,
                  }}
                >
                  <span className="absolute left-0 bottom-0 text-[11px] font-mono text-[var(--text-muted)] tracking-tight whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Grid: Weekdays on left + 53 columns on right */}
          <div className="flex items-stretch">
            {/* Weekday labels */}
            <div
              className="grid w-7 sm:w-8 shrink-0 pr-2 select-none"
              style={{
                gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
                rowGap: '3px',
              }}
              aria-hidden="true"
            >
              {WEEKDAY_SLOTS.map((slot) => (
                <div
                  key={slot.day}
                  className={`flex items-center text-[10px] font-mono leading-none text-[var(--text-muted)] ${
                    slot.isVisible ? 'opacity-100' : 'opacity-0 select-none'
                  }`}
                >
                  {slot.label}
                </div>
              ))}
            </div>

            {/* Calendar weeks */}
            <div
              role="grid"
              aria-label="Contribution squares"
              className="grid flex-1"
              style={{
                gridTemplateColumns: 'repeat(53, minmax(0, 1fr))',
                columnGap: '3px',
              }}
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
                          className="w-full aspect-square"
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
                        className={`w-full aspect-square cursor-pointer rounded-[2px] transition-all duration-150 hover:scale-110 hover:z-20 hover:ring-1 hover:ring-[var(--text-primary)]/50 focus-visible:scale-110 focus-visible:z-20 focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:outline-none ${levelClass}`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Graph footer: Legend and period summary */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-2 text-[11px] text-[var(--text-muted)] font-mono">
        <div>
          {dateRange && <span>{dateRange}</span>}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <span>Less</span>
          <div className="flex items-center gap-[3px]">
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-0)] border border-[var(--contrib-level-0-border)]"
              aria-hidden="true"
            />
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-1)] border border-transparent"
              aria-hidden="true"
            />
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-2)] border border-transparent"
              aria-hidden="true"
            />
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-3)] border border-transparent"
              aria-hidden="true"
            />
            <span
              className="h-2.5 w-2.5 rounded-[2px] bg-[var(--contrib-level-4)] border border-transparent"
              aria-hidden="true"
            />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
