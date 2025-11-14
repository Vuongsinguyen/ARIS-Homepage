'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = pathname.split('/')[1];

  const footerNavItems = [
    {href: `/${locale}`, label: tNav('home')},
    {href: `/${locale}/blog`, label: tNav('blog')},
    {href: `/${locale}/news`, label: tNav('news')},
    {href: `/${locale}/services`, label: tNav('services')},
    {href: `/${locale}/use-cases`, label: tNav('use-cases')},
    {href: `/${locale}/about`, label: tNav('about')},
    {href: `/${locale}/contact`, label: tNav('contact')},
  ];

  const socialLinks: Array<{
    name: string;
    href: string;
    icon: React.ReactElement;
  }> = [
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Facebook Page Plugin */}
            <div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FARISVNVIETNAM&tabs=timeline&width=350&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="350"
                height="250"
                style={{border: 'none', overflow: 'hidden'}}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page Plugin"
              ></iframe>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase">{t('navigation')}</h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase">{t('services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/services/one-stop-services`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t('oneStopServices')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/system-development`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t('systemDevelopment')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/mobile-development`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t('mobileDevelopment')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/quality-control`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t('qualityControl')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/ui-ux-design`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t('uiUxDesign')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/research-development`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t('researchDevelopment')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/digital-transformation`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t('digitalTransformation')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/bpo-services`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t('bpoServices')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/system-maintenance`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t('systemMaintenance')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase">{t('contact')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@aris-vn.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@aris-vn.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+842838424483"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +84 28 3842-4483
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    (Waseco Building) No. 10 Pho Quang Street,<br />
                    Tan Son Hoa Ward, Ho Chi Minh City, Vietnam
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}