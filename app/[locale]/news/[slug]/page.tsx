import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {client, isSanityConfigured} from '@/lib/sanity';
import {PortableText} from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import Navbar from '@/components/Navbar';

const builder = isSanityConfigured ? imageUrlBuilder(client!) : null;

function urlFor(source: any) {
  if (!builder) return null;
  return builder.image(source);
}

async function getNewsArticle(slug: string, locale: string) {
  if (!isSanityConfigured) {
    return null;
  }
  const query = `*[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body,
    excerpt,
    "author": author->{
      name,
      image,
      bio
    },
    "categories": categories[]->title
  }`;

  return await client!.fetch(query, {slug});
}

export default async function NewsArticlePage({
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
              The Sanity project ID and dataset are not set for this environment. To view news articles locally, add your project details to <span className="font-mono">.env.local</span>:
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

  const article = await getNewsArticle(slug, locale);

  if (!article) {
    notFound();
  }

  const currentLocale = locale as 'en' | 'vi';
  const title = article.title[currentLocale] || article.title.en;
  const body = article.body?.[currentLocale] || article.body?.en;

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
              <Link href={`/${locale}/news`} className="hover:text-gray-900 dark:hover:text-gray-100">
                News
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
            {article.author && (
              <div className="flex items-center gap-3">
                {article.author.image && builder && (
                  <Image
                    src={urlFor(article.author.image)!.width(48).height(48).url()}
                    alt={article.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium">By {article.author.name}</span>
              </div>
            )}

            {article.publishedAt && (
              <time dateTime={article.publishedAt} className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(article.publishedAt).toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>

          {/* Categories */}
          {article.categories && article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {article.categories.map((cat: any, idx: number) => (
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
          {article.mainImage && builder && (
            <figure className="mb-12 rounded-lg overflow-hidden">
              <Image
                src={urlFor(article.mainImage)!.width(1200).height(630).url()}
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

        {/* Author bio section */}
        {article.author && article.author.bio && (
          <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6">About the Author</h2>
            <div className="flex gap-6">
              {article.author.image && builder && (
                <Image
                  src={urlFor(article.author.image)!.width(96).height(96).url()}
                  alt={article.author.name}
                  width={96}
                  height={96}
                  className="rounded-full flex-shrink-0"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{article.author.name}</h3>
                <div className="prose dark:prose-invert">
                  {article.author.bio[currentLocale] && (
                    <PortableText value={article.author.bio[currentLocale]} />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back to news link */}
        <nav className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
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
  const article = await getNewsArticle(slug, locale);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const currentLocale = locale as 'en' | 'vi';
  const title = article.title[currentLocale] || article.title.en;

  return {
    title: title,
    description: `Read ${title} in our news section`,
    openGraph: {
      title: title,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author.name] : [],
      images: article.mainImage && builder
        ? [urlFor(article.mainImage)!.width(1200).height(630).url()]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      images: article.mainImage && builder
        ? [urlFor(article.mainImage)!.width(1200).height(630).url()]
        : [],
    },
  };
}