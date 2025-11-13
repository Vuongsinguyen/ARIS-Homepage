import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''

export const isSanityConfigured = Boolean(projectId && projectId !== 'your-project-id')

// Sanity is disabled - no warning needed
// To enable: Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local

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
