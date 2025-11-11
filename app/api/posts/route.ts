import {NextResponse} from 'next/server'
import {client} from '@/lib/sanity'

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
  
  const posts = await client.fetch(query)
  
  return NextResponse.json(posts)
}
