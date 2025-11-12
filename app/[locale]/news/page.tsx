import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {client, isSanityConfigured} from '@/lib/sanity';
import Navbar from '@/components/Navbar';

async function getNews() {
  const query = `*[_type == "news"] | order(publishedAt desc)[0...10] {
    _id,
    title,
    slug,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title,
    mainImage,
    excerpt
  }`;

  if (!isSanityConfigured) {
    // Sanity isn't configured for dev: return an empty list and allow the page
    // to render a helpful message instead of crashing the server.
    return [];
  }
  try {
    return await client!.fetch(query);
  } catch (err) {
    // Log the error server-side and return an empty list so the page still renders.
    console.error('Error fetching news from Sanity:', err);
    return [];
  }
}

export default async function NewsPage() {
  const news = await getNews();
  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('news')}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto">
              Stay updated with the latest company news, industry insights, and announcements
            </p>
          </div>
        </div>
      </section>

      <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-5xl w-full">
        {news.length === 0 ? (
          !isSanityConfigured ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-3">Sanity not configured</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-3">The Sanity project ID and dataset are not set. To view news articles locally, add your project details to <code>.env.local</code>.</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-auto mx-auto max-w-lg text-left">
                NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id\nNEXT_PUBLIC_SANITY_DATASET=production
              </pre>
            </div>
          ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No news articles yet. Create some in Sanity Studio!
            </p>
          </div>
          )
        ) : (
          <section aria-labelledby="news-heading">
            <h2 id="news-heading" className="sr-only">News Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map((article: any) => (
                <article
                  key={article._id}
                  className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-2xl font-semibold mb-2">
                    <Link
                      href={`/news/${article.slug.current}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {article.title.en}
                    </Link>
                  </h3>

                  {article.excerpt && (
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {article.excerpt.en}
                    </p>
                  )}

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {article.author && (
                      <span>By {article.author}</span>
                    )}
                    {article.publishedAt && (
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </time>
                    )}
                  </div>

                  {article.categories && article.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.categories.map((cat: any, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                        >
                          {cat.en}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
    </>
  );
}