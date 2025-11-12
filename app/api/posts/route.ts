import {NextResponse} from 'next/server'
import {client, isSanityConfigured} from '@/lib/sanity'

export async function GET() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title,
    mainImage
  }`
  
  if (!isSanityConfigured) {
    return NextResponse.json({error: 'Sanity not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local.'}, {status: 500})
  }
  try {
    const posts = await client!.fetch(query)
    return NextResponse.json(posts)
  } catch (err) {
    console.error('Error fetching posts from Sanity (API):', err)
    return NextResponse.json({error: 'Failed to fetch posts from Sanity'}, {status: 502})
  }
  
}
