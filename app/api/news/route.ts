import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/blog';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    // For now, we'll use the blog posts as news articles
    // In a real app, you might have separate news and blog data
    const newsData = await getBlogPosts(locale);

    // Convert blog post format to news format and add mock data
    const news = newsData.map((post: any, index: number) => ({
      _id: post.slug,
      title: post.title,
      slug: { current: post.slug },
      publishedAt: post.publishedAt,
      author: post.author,
      categories: post.categories || [],
      excerpt: post.excerpt,
      image: `/images/blog/blog-${index + 1}.jpg`,
      imageAlt: `${post.title} - Featured Image`,
    }));

    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}