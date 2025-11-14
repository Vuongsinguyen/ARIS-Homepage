import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {getBlogPost} from '@/lib/blog';
import Navbar from '@/components/Navbar';
import LikeButton from '@/components/LikeButton';
import CommentsSection from '@/components/CommentsSection';

async function getPost(slug: string, locale: string) {
  try {
    return await getBlogPost(slug, locale);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  const post = await getPost(slug, locale);
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <Navbar />
      <article className="flex min-h-screen flex-col items-center p-6 md:p-12 lg:p-24">
      <div className="max-w-4xl w-full">
        {/* Breadcrumb navigation */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link href={`/${locale}`} className="hover:text-gray-900 dark:hover:text-gray-100">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/${locale}/blog`} className="hover:text-gray-900 dark:hover:text-gray-100">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-gray-100" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>
        
        {/* Article header */}
        <header className="mb-12">
          {/* H1 - Main article title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            {post.title}
          </h1>
          
          {/* Article metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-medium">By {post.author}</span>
            </div>
            
            {post.publishedAt && (
              <time dateTime={post.publishedAt} className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.publishedAt).toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>
          
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.categories.map((cat: string, idx: number) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </header>
        
        {/* Article content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>

        {/* Like and Comment Actions */}
        <div className="flex items-center gap-4 mb-12">
          <LikeButton postId={post.slug} />
        </div>

        {/* Comments Section */}
        <CommentsSection postId={post.slug} />
        
        {/* Back to blog link */}
        <nav className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link 
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </nav>
      </div>
    </article>
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  const post = await getPost(slug, locale);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on our blog`,
    openGraph: {
      title: post.title,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
    },
  };
}
