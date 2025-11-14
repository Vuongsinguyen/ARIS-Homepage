import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  try {
    const useCasesDirectory = path.join(process.cwd(), 'content/use-cases');
    const fileNames = fs.readdirSync(useCasesDirectory);

    const useCases = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(useCasesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          id: fileName.replace('.md', ''),
          title: data.title,
          slug: data.slug,
          logo: data.logo,
          video: data.video,
          poster: data.poster,
          stat: data.stat,
          statLabel: data.statLabel,
          quote: data.quote,
          authorName: data.authorName,
          authorTitle: data.authorTitle,
          href: data.href,
        };
      })
      .sort((a, b) => a.id.localeCompare(b.id)); // Sort by filename for consistent order

    return NextResponse.json(useCases);
  } catch (error) {
    console.error('Error loading use cases:', error);
    return NextResponse.json({ error: 'Failed to load use cases' }, { status: 500 });
  }
}