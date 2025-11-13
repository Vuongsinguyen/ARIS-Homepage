import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';
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

export async function generateMetadata() {
  return {
    title: 'News & Updates | ARIS',
    description: 'Stay updated with the latest company news, industry insights, and announcements from ARIS.',
  };
}

export default async function NewsPage() {
  const news = await getNews();
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/news';
  const locale = pathname.split('/')[1] || 'en';

  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">📰</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('news')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Stay updated with the latest company news, industry insights, and announcements
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900 dark:text-white font-medium">News</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Latest Updates
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Stay informed about our latest developments, industry insights, product releases,
                    and company announcements. We regularly share updates about our innovations,
                    partnerships, and contributions to the technology community.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    What You'll Find Here
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Product announcements and updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Industry insights and trends</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Company milestones and achievements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Technology innovations and research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Community events and partnerships</span>
                    </li>
                  </ul>
                </div>

                {/* News Categories */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    News Categories
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Product Updates</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Industry News</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Company Events</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Tech Insights</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Partnerships</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Awards</span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Stay Updated
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
                    </p>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-600 bg-green-50 hover:bg-green-100 dark:text-green-400 dark:bg-green-900/40 dark:hover:bg-green-900/60 transition-colors"
                    >
                      Subscribe Now →
                    </Link>
                  </div>
                </div>
              </div>

              {/* News Articles */}
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
                  <h2 id="news-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Recent Articles
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {news.map((article: any) => (
                      <article
                        key={article._id}
                        className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                      >
                        <h3 className="text-2xl font-semibold mb-3">
                          <Link
                            href={`/${locale}/news/${article.slug.current}`}
                            className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                          >
                            {article.title.en}
                          </Link>
                        </h3>

                        {article.excerpt && (
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {article.excerpt.en}
                          </p>
                        )}

                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
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
                                className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
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
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}