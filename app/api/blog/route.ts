import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/blog';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const posts = await getBlogPosts(locale);

    // Add mock likes and tech data for demonstration
    const postsWithExtras = posts.map((post: any, index: number) => ({
      ...post,
      likes: Math.floor(Math.random() * 100) + 10, // Random likes between 10-109
      tech: post.tech || ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js'][index % 5], // Mock tech tags
      image: `/images/blog/blog-${index + 1}.jpg`, // Blog image path
      imageAlt: `${post.title} - Featured Image`, // Alt text for accessibility
    }));

    return NextResponse.json(postsWithExtras);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}