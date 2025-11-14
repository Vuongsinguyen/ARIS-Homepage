'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface LikeButtonProps {
  postId: string
}

export default function LikeButton({ postId }: LikeButtonProps) {
  const { data: session } = useSession()
  const [likes, setLikes] = useState(0)
  const [userHasLiked, setUserHasLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchLikes()
  }, [postId, session?.user?.email])

  const fetchLikes = async () => {
    try {
      const params = new URLSearchParams({
        postId,
        ...(session?.user?.email && { userEmail: session.user.email }),
      })
      const response = await fetch(`/api/likes?${params}`)
      const data = await response.json()
      setLikes(data.likes || 0)
      setUserHasLiked(data.userHasLiked || false)
    } catch (error) {
      console.error('Error fetching likes:', error)
    }
  }

  const handleLike = async () => {
    if (!session?.user) {
      // Redirect to sign in
      window.location.href = '/auth/signin'
      return
    }

    setLoading(true)
    try {
      const action = userHasLiked ? 'unlike' : 'like'
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          userName: session.user.name || 'Anonymous',
          userEmail: session.user.email || '',
          action,
        }),
      })

      if (response.ok) {
        setUserHasLiked(!userHasLiked)
        setLikes(prev => userHasLiked ? prev - 1 : prev + 1)
      } else {
        console.error('Failed to toggle like')
      }
    } catch (error) {
      console.error('Error toggling like:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
        userHasLiked
          ? 'text-red-600 hover:text-red-700 bg-red-50 dark:bg-red-900/20'
          : 'text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 bg-gray-50 dark:bg-gray-800'
      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span className={`text-lg ${userHasLiked ? 'text-red-600' : 'text-gray-400'}`}>
        {userHasLiked ? '❤️' : '🤍'}
      </span>
      <span className="text-sm font-medium">
        {likes} {likes === 1 ? 'Like' : 'Likes'}
      </span>
    </button>
  )
}