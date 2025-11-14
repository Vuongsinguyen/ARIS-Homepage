import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';

export async function generateMetadata() {
  return {
    title: 'CEO Message | ARIS',
    description: 'Message from our CEO about ARIS vision and commitment to excellence.',
  };
}

export default async function CEOPage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/about/ceo';
  const locale = pathname.split('/')[1] || 'en';

  return (
    <div className="space-y-8">
      {/* CEO Message Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CEO Photo */}
          <div className="lg:col-span-1">
            <div className="relative">
              <img
                src="/ceo.jpg"
                alt="Nhat Tran - CEO of ARIS"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Nhat Tran</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Chief Executive Officer</p>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Message from Our CEO
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Welcome to ARIS. For over 15 years, we have been at the forefront of technological
                innovation, delivering exceptional software solutions that transform businesses and
                create lasting value for our clients.
              </p>

              <p className="leading-relaxed">
                In today's rapidly evolving digital landscape, we believe that technology should
                empower businesses, not complicate them. Our commitment to excellence drives us
                to continuously push boundaries, adopt cutting-edge technologies, and maintain
                the highest standards of quality in everything we do.
              </p>

              <p className="leading-relaxed">
                Our team of passionate professionals brings together diverse expertise and
                creative thinking to solve complex challenges. We don't just build software –
                we build partnerships, we build trust, and we build the future together with
                our clients.
              </p>

              <blockquote className="border-l-4 border-green-500 pl-6 italic text-lg">
                "At ARIS, we believe in delivering quality software solutions that drive real
                business value. With our unwavering dedication to innovation and excellence,
                we are committed to being your trusted technology partner for years to come."
              </blockquote>

              <p className="leading-relaxed">
                As we continue to grow and evolve, our core values remain unchanged: integrity,
                innovation, collaboration, and customer-centricity. These principles guide every
                decision we make and every solution we deliver.
              </p>

              <p className="leading-relaxed">
                Thank you for considering ARIS as your technology partner. We look forward to
                working with you to bring your vision to life.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Best regards,
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">Nhat Tran</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">CEO & Founder, ARIS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Learn More About ARIS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href={`/${locale}/about/vision`}
            className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
          >
            <span className="text-2xl mr-3">🎯</span>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Our Vision</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Where we're heading</div>
            </div>
          </Link>
          <Link
            href={`/${locale}/about/mission`}
            className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
          >
            <span className="text-2xl mr-3">🚀</span>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Our Mission</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">What drives us</div>
            </div>
          </Link>
          <Link
            href={`/${locale}/about/values`}
            className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
          >
            <span className="text-2xl mr-3">💎</span>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Core Values</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Our principles</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}