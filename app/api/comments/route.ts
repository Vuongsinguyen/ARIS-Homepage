import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  if (!isSupabaseConfigured) {
    return NextResponse.json({ comments: [] })
  }

  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')

    if (!postId) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 })
    }

    const { data: comments, error } = await supabaseAdmin!
      .from('comments')
      .select('id, content, author_name, author_email, created_at')
      .eq('post_id', postId)
      .eq('is_approved', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching comments:', error)
      return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
    }

    // Transform data to match expected format
    const transformedComments = comments.map(comment => ({
      _id: comment.id,
      content: comment.content,
      author: {
        name: comment.author_name,
        email: comment.author_email,
      },
      publishedAt: comment.created_at,
    }))

    return NextResponse.json({ comments: transformedComments })
  } catch (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!isSupabaseConfigured || !supabaseAdmin) {
    return NextResponse.json({ error: 'Comments not available' }, { status: 503 })
  }

  try {
    const { postId, content, authorName, authorEmail } = await request.json()

    if (!postId || !content || !authorName || !authorEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin!
      .from('comments')
      .insert({
        post_id: postId,
        content,
        author_name: authorName,
        author_email: authorEmail,
        is_approved: true,
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating comment:', error)
      return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 })
    }

    // Transform data to match expected format
    const transformedComment = {
      _id: data.id,
      content: data.content,
      author: {
        name: data.author_name,
        email: data.author_email,
      },
      publishedAt: data.created_at,
    }

    return NextResponse.json({ comment: transformedComment }, { status: 201 })
  } catch (error) {
    console.error('Error creating comment:', error)
    return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 })
  }
}