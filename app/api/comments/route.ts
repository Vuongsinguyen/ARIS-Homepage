import { NextRequest, NextResponse } from 'next/server'
import { client, isSanityConfigured } from '@/lib/sanity'

export async function GET(request: NextRequest) {
  if (!isSanityConfigured) {
    return NextResponse.json({ comments: [] })
  }

  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')

    if (!postId) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 })
    }

    const query = `*[_type == "comment" && post._ref == $postId && isApproved == true] | order(publishedAt desc) {
      _id,
      content,
      author,
      publishedAt
    }`

    const comments = await client!.fetch(query, { postId })

    return NextResponse.json({ comments })
  } catch (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!isSanityConfigured) {
    return NextResponse.json({ error: 'Comments not available' }, { status: 503 })
  }

  try {
    const { postId, content, authorName, authorEmail } = await request.json()

    if (!postId || !content || !authorName || !authorEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const comment = {
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: postId,
      },
      author: {
        name: authorName,
        email: authorEmail,
      },
      content,
      publishedAt: new Date().toISOString(),
      isApproved: true,
    }

    const result = await client!.create(comment)

    return NextResponse.json({ comment: result }, { status: 201 })
  } catch (error) {
    console.error('Error creating comment:', error)
    return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 })
  }
}