'use client';

import {useEffect, useState} from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract H2 and H3 headings from article
    const elements = Array.from(
      document.querySelectorAll('article h2, article h3')
    );

    const headingData = elements.map((elem) => ({
      id: elem.id || elem.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      text: elem.textContent || '',
      level: parseInt(elem.tagName.charAt(1)),
    }));

    // Add IDs to headings if they don't have one
    elements.forEach((elem, index) => {
      if (!elem.id) {
        elem.id = headingData[index].id;
      }
    });

    setHeadings(headingData);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {rootMargin: '-80px 0px -80% 0px'}
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-8 hidden lg:block" aria-label="Table of contents">
      <h2 className="text-lg font-semibold mb-4">On This Page</h2>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{paddingLeft: `${(heading.level - 2) * 1}rem`}}
          >
            <a
              href={`#${heading.id}`}
              className={`block py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                activeId === heading.id
                  ? 'text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
