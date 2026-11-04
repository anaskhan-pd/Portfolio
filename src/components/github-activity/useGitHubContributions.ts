import { useEffect, useState } from 'react'
import { GITHUB_CONTRIBUTIONS_SNAPSHOT } from '../../data/githubContributionsSnapshot.ts'
import {
  isValidContributionsResponse,
  type GitHubContributionsResponse,
  type UseGitHubContributionsResult,
} from './types.ts'

const API_URL = 'https://github-contributions-api.jogruber.de/v4/anaskhan-pd?y=last'
const STORAGE_KEY = 'github_contributions_anaskhan_pd'
const TWO_HOURS_MS = 2 * 60 * 60 * 1000

interface CachedPayload {
  timestamp: number
  data: GitHubContributionsResponse
}

function readSessionCache(): GitHubContributionsResponse | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw) as Partial<CachedPayload>
    if (
      typeof parsed?.timestamp === 'number' &&
      Date.now() - parsed.timestamp < TWO_HOURS_MS &&
      isValidContributionsResponse(parsed.data)
    ) {
      return parsed.data
    }
  } catch {
    // sessionStorage disabled or unavailable in private browsing
  }
  return null
}

function writeSessionCache(data: GitHubContributionsResponse): void {
  try {
    const payload: CachedPayload = {
      timestamp: Date.now(),
      data,
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // SessionStorage quota exceeded or restricted
  }
}

export function useGitHubContributions(): UseGitHubContributionsResult {
  const [data, setData] = useState<GitHubContributionsResponse | null>(() => readSessionCache())
  const [isLoading, setIsLoading] = useState<boolean>(() => !readSessionCache())
  const [error, setError] = useState<string | null>(null)
  const [source, setSource] = useState<UseGitHubContributionsResult['source']>(() =>
    readSessionCache() ? 'cache' : null,
  )

  useEffect(() => {
    // If already loaded from session cache during initialization, no network fetch is needed
    if (readSessionCache()) {
      return
    }

    const controller = new AbortController()

    fetch(API_URL, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`)
        }
        return response.json()
      })
      .then((json: unknown) => {
        if (!isValidContributionsResponse(json)) {
          throw new Error('API returned an invalid payload structure')
        }

        setData(json)
        setSource('live')
        setIsLoading(false)
        writeSessionCache(json)
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return

        console.warn(
          'GitHub contributions live fetch failed; falling back to verified snapshot.',
          err,
        )

        // Fall back to verified snapshot
        if (isValidContributionsResponse(GITHUB_CONTRIBUTIONS_SNAPSHOT)) {
          setData(GITHUB_CONTRIBUTIONS_SNAPSHOT)
          setSource('snapshot')
          setIsLoading(false)
          setError(null)
        } else {
          setError('Unable to load GitHub contribution activity.')
          setIsLoading(false)
        }
      })

    return () => {
      controller.abort()
    }
  }, [])

  return { data, isLoading, error, source }
}
