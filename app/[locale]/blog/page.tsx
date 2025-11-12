import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
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
    mainImage
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

export default async function BlogPage() {
  const posts = await getPosts();
  const t = await getTranslations('nav');
  
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-5xl w-full">
        {/* H1 - Main heading for the page */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4">{t('blog')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Latest articles and updates
          </p>
        </header>
        
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
            <h2 id="posts-heading" className="sr-only">Blog Posts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post: any) => (
                <article 
                  key={post._id}
                  className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-2xl font-semibold mb-2">
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {post.title.en}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
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
