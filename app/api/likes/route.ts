import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  if (!isSupabaseConfigured) {
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
    const { count: totalLikes, error: countError } = await supabaseAdmin!
      .from('likes')
      .select('*', { count: 'exact', head: true })
      .eq('post_id', postId)

    if (countError) {
      console.error('Error counting likes:', countError)
      return NextResponse.json({ error: 'Failed to count likes' }, { status: 500 })
    }

    // Check if current user has liked this post
    let userHasLiked = false
    if (userEmail) {
      const { count: userLikes, error: userError } = await supabaseAdmin!
        .from('likes')
        .select('*', { count: 'exact', head: true })
        .eq('post_id', postId)
        .eq('user_email', userEmail)

      if (userError) {
        console.error('Error checking user like:', userError)
      } else {
        userHasLiked = (userLikes || 0) > 0
      }
    }

    return NextResponse.json({ likes: totalLikes || 0, userHasLiked })
  } catch (error) {
    console.error('Error fetching likes:', error)
    return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!isSupabaseConfigured || !supabaseAdmin) {
    return NextResponse.json({ error: 'Likes not available' }, { status: 503 })
  }

  try {
    const { postId, userName, userEmail, action } = await request.json()

    if (!postId || !userName || !userEmail || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (action === 'like') {
      // Check if user already liked this post
      const { data: existingLike, error: checkError } = await supabaseAdmin!
        .from('likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_email', userEmail)
        .single()

      if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error checking existing like:', checkError)
        return NextResponse.json({ error: 'Failed to check existing like' }, { status: 500 })
      }

      if (existingLike) {
        return NextResponse.json({ error: 'Already liked' }, { status: 400 })
      }

      // Create new like
      const { data, error } = await supabaseAdmin!
        .from('likes')
        .insert({
          post_id: postId,
          user_name: userName,
          user_email: userEmail,
          created_at: new Date().toISOString(),
        })
        .select()
        .single()

      if (error) {
        console.error('Error creating like:', error)
        return NextResponse.json({ error: 'Failed to create like' }, { status: 500 })
      }

      return NextResponse.json({ like: data }, { status: 201 })
    } else if (action === 'unlike') {
      // Remove like
      const { error } = await supabaseAdmin!
        .from('likes')
        .delete()
        .eq('post_id', postId)
        .eq('user_email', userEmail)

      if (error) {
        console.error('Error removing like:', error)
        return NextResponse.json({ error: 'Failed to remove like' }, { status: 500 })
      }

      return NextResponse.json({ message: 'Like removed' })
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Error handling like:', error)
    return NextResponse.json({ error: 'Failed to handle like' }, { status: 500 })
  }
}