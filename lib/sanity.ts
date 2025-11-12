import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''

export const isSanityConfigured = Boolean(projectId && projectId !== 'your-project-id')

if (!isSanityConfigured) {
  // Helpful dev warning so the server logs indicate why requests will fail
  // when NEXT_PUBLIC_SANITY_PROJECT_ID wasn't set.
  // This is intentionally not an exception so the dev server can still run.
  // In production you should set the env variables in your deployment platform.
  // See README.md for details.
  // eslint-disable-next-line no-console
  console.warn('[sanity] NEXT_PUBLIC_SANITY_PROJECT_ID not set — Sanity client is disabled. Add a .env.local with your project ID and dataset to enable content fetching.')
}

// Create a real client only when the environment is configured. Otherwise export `null` and
// let callers guard their requests. This prevents the SDK from attempting to contact a
// non-existent dataset and causing an early runtime crash during development.
export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null
