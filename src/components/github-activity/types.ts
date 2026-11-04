export type ContributionLevel = 0 | 1 | 2 | 3 | 4

export interface ContributionDay {
  date: string // ISO date string: YYYY-MM-DD
  count: number
  level: ContributionLevel
}

export interface GitHubContributionsResponse {
  total: {
    [year: string]: number
    lastYear: number
  }
  contributions: ContributionDay[]
}

export interface MonthLabel {
  label: string
  weekIndex: number
}

export type ContributionDataSource = 'live' | 'cache' | 'snapshot'

export interface UseGitHubContributionsResult {
  data: GitHubContributionsResponse | null
  isLoading: boolean
  error: string | null
  source: ContributionDataSource | null
}

/**
 * Validates the runtime shape of a GitHub contributions API response.
 */
export function isValidContributionsResponse(data: unknown): data is GitHubContributionsResponse {
  if (!data || typeof data !== 'object') return false

  const candidate = data as Partial<GitHubContributionsResponse>
  if (!candidate.total || typeof candidate.total.lastYear !== 'number') {
    return false
  }

  if (!Array.isArray(candidate.contributions) || candidate.contributions.length === 0) {
    return false
  }

  // Validate the first and last days
  const sampleFirst = candidate.contributions[0]
  const sampleLast = candidate.contributions[candidate.contributions.length - 1]

  const isValidDay = (d: unknown): boolean => {
    if (!d || typeof d !== 'object') return false
    const day = d as Partial<ContributionDay>
    return (
      typeof day.date === 'string' &&
      /^\d{4}-\d{2}-\d{2}$/.test(day.date) &&
      typeof day.count === 'number' &&
      day.count >= 0 &&
      typeof day.level === 'number' &&
      day.level >= 0 &&
      day.level <= 4
    )
  }

  return isValidDay(sampleFirst) && isValidDay(sampleLast)
}
