import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';
import {client, isSanityConfigured} from '@/lib/sanity';
import Navbar from '@/components/Navbar';

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...10] {
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
    console.error('Error fetching posts from Sanity:', err);
    return [];
  }
}

export async function generateMetadata() {
  return {
    title: 'Blog | ARIS',
    description: 'Explore our latest insights, tutorials, and industry perspectives on technology and innovation.',
  };
}

export default async function BlogPage() {
  const posts = await getPosts();
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/blog';
  const locale = pathname.split('/')[1] || 'en';

  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('blog')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Explore our latest insights, tutorials, and industry perspectives on technology and innovation
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
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
                <span className="text-gray-900 dark:text-white font-medium">Blog</span>
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
                    Latest Insights
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Dive deep into technology trends, development best practices, industry insights,
                    and innovative solutions. Our blog covers everything from cutting-edge web
                    development techniques to emerging technologies shaping the future.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    What You'll Find Here
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Technical tutorials and guides</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Industry trends and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Best practices and tips</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Case studies and success stories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Technology reviews and comparisons</span>
                    </li>
                  </ul>
                </div>

                {/* Blog Categories */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Popular Topics
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Web Development</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">AI & Machine Learning</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Mobile Apps</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Cloud Computing</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">DevOps</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Security</span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Stay Updated
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Subscribe to our newsletter to receive the latest blog posts and insights directly in your inbox.
                    </p>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-600 bg-purple-50 hover:bg-purple-100 dark:text-purple-400 dark:bg-purple-900/40 dark:hover:bg-purple-900/60 transition-colors"
                    >
                      Subscribe Now →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blog Posts */}
              {posts.length === 0 ? (
                !isSanityConfigured ? (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-semibold mb-3">Sanity not configured</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-3">The Sanity project ID and dataset are not set. To view blog posts locally, add your project details to <code>.env.local</code>.</p>
                    <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-auto mx-auto max-w-lg text-left">
                      NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id\nNEXT_PUBLIC_SANITY_DATASET=production
                    </pre>
                  </div>
                ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No blog posts yet. Create some in Sanity Studio!
                  </p>
                </div>
                )
              ) : (
                <section aria-labelledby="posts-heading">
                  <h2 id="posts-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Recent Posts
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post: any) => (
                      <article
                        key={post._id}
                        className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                      >
                        <h3 className="text-2xl font-semibold mb-3">
                          <Link
                            href={`/${locale}/blog/${post.slug.current}`}
                            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                          >
                            {post.title.en}
                          </Link>
                        </h3>

                        {post.excerpt && (
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {post.excerpt.en}
                          </p>
                        )}

                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {post.author && (
                            <span>By {post.author}</span>
                          )}
                          {post.publishedAt && (
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </time>
                          )}
                        </div>

                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.categories.map((cat: any, idx: number) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
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
                className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
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
