import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {client, isSanityConfigured} from '@/lib/sanity';
import {PortableText} from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import Navbar from '@/components/Navbar';
import LikeButton from '@/components/LikeButton';
import CommentsSection from '@/components/CommentsSection';

const builder = isSanityConfigured ? imageUrlBuilder(client!) : null;

function urlFor(source: any) {
  if (!builder) return null;
  return builder.image(source);
}

async function getPost(slug: string, locale: string) {
  if (!isSanityConfigured) {
    return null;
  }
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body,
    "author": author->{
      name,
      image,
      bio
    },
    "categories": categories[]->title
  }`;
  
  return await client!.fetch(query, {slug});
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  if (!isSanityConfigured) {
    // Dev message: Sanity isn't configured yet.
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center p-24">
          <div className="max-w-4xl w-full text-center py-24">
            <h1 className="text-3xl font-bold mb-4">Sanity not configured</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              The Sanity project ID and dataset are not set for this environment. To view blog posts locally, add your project details to <span className="font-mono">.env.local</span>:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-auto mx-auto max-w-lg text-left">
              NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id\nNEXT_PUBLIC_SANITY_DATASET=production
            </pre>
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">See <Link href="/README.md" className="text-blue-600">README</Link> for setup instructions.</p>
          </div>
        </main>
      </>
    );
  }

  const post = await getPost(slug, locale);
  
  if (!post) {
    notFound();
  }
  
  const currentLocale = locale as 'en' | 'vi';
  const title = post.title[currentLocale] || post.title.en;
  const body = post.body?.[currentLocale] || post.body?.en;
  
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
              {title}
            </li>
          </ol>
        </nav>
        
        {/* Article header */}
        <header className="mb-12">
          {/* H1 - Main article title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            {title}
          </h1>
          
          {/* Article metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && builder && (
                  <Image
                    src={urlFor(post.author.image)!.width(48).height(48).url()}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium">By {post.author.name}</span>
              </div>
            )}
            
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
              {post.categories.map((cat: any, idx: number) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {cat[currentLocale] || cat.en}
                </span>
              ))}
            </div>
          )}
          
          {/* Featured image */}
          {post.mainImage && builder && (
            <figure className="mb-12 rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.mainImage)!.width(1200).height(630).url()}
                alt={title}
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </figure>
          )}
        </header>
        
        {/* Article content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {body && <PortableText value={body} />}
        </div>

        {/* Like and Comment Actions */}
        <div className="flex items-center gap-4 mb-12">
          <LikeButton postId={post._id} />
        </div>

        {/* Comments Section */}
        <CommentsSection postId={post._id} />
        
        {/* Author bio section */}
        {post.author && post.author.bio && (
          <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6">About the Author</h2>
            <div className="flex gap-6">
              {post.author.image && builder && (
                <Image
                  src={urlFor(post.author.image)!.width(96).height(96).url()}
                  alt={post.author.name}
                  width={96}
                  height={96}
                  className="rounded-full flex-shrink-0"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
                <div className="prose dark:prose-invert">
                  {post.author.bio[currentLocale] && (
                    <PortableText value={post.author.bio[currentLocale]} />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
        
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
  
  const currentLocale = locale as 'en' | 'vi';
  const title = post.title[currentLocale] || post.title.en;
  
  return {
    title: title,
    description: `Read ${title} on our blog`,
    openGraph: {
      title: title,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : [],
      images: post.mainImage && builder
        ? [urlFor(post.mainImage)!.width(1200).height(630).url()]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      images: post.mainImage && builder
        ? [urlFor(post.mainImage)!.width(1200).height(630).url()]
        : [],
    },
  };
}
