import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {client} from '@/lib/sanity';

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
  
  return await client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();
  const t = useTranslations('nav');
  
  return (
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
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts yet. Create some in Sanity Studio!
            </p>
          </div>
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
  );
}
