import { NextRequest, NextResponse } from 'next/server'
import { client, isSanityConfigured } from '@/lib/sanity'

export async function GET(request: NextRequest) {
  if (!isSanityConfigured) {
    return NextResponse.json({ likes: 0 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')
    const userEmail = searchParams.get('userEmail')

    if (!postId) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 })
    }

    // Get total likes for the post
    const totalLikesQuery = `count(*[_type == "like" && post._ref == $postId])`
    const totalLikes = await client!.fetch(totalLikesQuery, { postId })

    // Check if current user has liked this post
    let userHasLiked = false
    if (userEmail) {
      const userLikeQuery = `count(*[_type == "like" && post._ref == $postId && user.email == $userEmail])`
      const userLikes = await client!.fetch(userLikeQuery, { postId, userEmail })
      userHasLiked = userLikes > 0
    }

    return NextResponse.json({ likes: totalLikes, userHasLiked })
  } catch (error) {
    console.error('Error fetching likes:', error)
    return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!isSanityConfigured) {
    return NextResponse.json({ error: 'Likes not available' }, { status: 503 })
  }

  try {
    const { postId, userName, userEmail, action } = await request.json()

    if (!postId || !userName || !userEmail || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (action === 'like') {
      // Check if user already liked this post
      const existingLikeQuery = `*[_type == "like" && post._ref == $postId && user.email == $userEmail][0]`
      const existingLike = await client!.fetch(existingLikeQuery, { postId, userEmail })

      if (existingLike) {
        return NextResponse.json({ error: 'Already liked' }, { status: 400 })
      }

      // Create new like
      const like = {
        _type: 'like',
        post: {
          _type: 'reference',
          _ref: postId,
        },
        user: {
          name: userName,
          email: userEmail,
        },
        createdAt: new Date().toISOString(),
      }

      const result = await client!.create(like)
      return NextResponse.json({ like: result }, { status: 201 })
    } else if (action === 'unlike') {
      // Remove like
      const likeToDeleteQuery = `*[_type == "like" && post._ref == $postId && user.email == $userEmail][0]`
      const likeToDelete = await client!.fetch(likeToDeleteQuery, { postId, userEmail })

      if (likeToDelete) {
        await client!.delete(likeToDelete._id)
        return NextResponse.json({ message: 'Like removed' })
      } else {
        return NextResponse.json({ error: 'Like not found' }, { status: 404 })
      }
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Error handling like:', error)
    return NextResponse.json({ error: 'Failed to handle like' }, { status: 500 })
  }
}