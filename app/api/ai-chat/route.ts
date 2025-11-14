import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Body = { message: string; locale?: string };

function generateFallbackReply(message: string) {
  const text = message.toLowerCase();

  // Simple keyword-based replies (free tier fallback)
  if (text.includes('công ty') || text.includes('company')) {
    return 'ARIS is a company focusing on web and app development, specializing in performance, SEO, and great UX.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  if (text.includes('dự án') || text.includes('project')) {
    return 'We have projects such as ARIS Platform and ARIS Analytics. Each project follows discovery, design, implementation, and deployment stages.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  if (text.includes('thời gian') || text.includes('deadline') || text.includes('giai đoạn') || text.includes('time') || text.includes('timeline')) {
    return 'Project timelines typically range from 3-6 months for an MVP, depending on scope. Discovery: 2-4 weeks, Implementation: 8-16 weeks.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  if (text.includes('tình hình') || text.includes('trạng thái') || text.includes('status')) {
    return 'Project status varies by project; please provide the project ID or name for detailed status. Normally, updates are posted weekly.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  if (text.includes('quản lý') || text.includes('management') || text.includes('mobile') || text.includes('app')) {
    return 'ARIS specializes in developing management applications for mobile devices. We can create custom mobile apps for project management, inventory control, customer relationship management, and more. Our solutions include cross-platform development, offline capabilities, and seamless integration with existing systems.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  if (text.includes('chuyển đổi số') || text.includes('digital transformation') || text.includes('digital')) {
    return 'Digital transformation involves using digital technologies to fundamentally change how businesses operate and deliver value to customers. ARIS helps companies with digital transformation through web applications, mobile apps, cloud migration, AI integration, and process automation. We focus on creating scalable, user-friendly solutions that drive business growth.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  // fallback
  return 'Hello! I can answer questions about ARIS company, our projects, timelines, project status, management applications, and digital transformation. Try asking: "What does the company do?" or "Tell me about digital transformation services"\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
}

async function generateReply(message: string) {
  try {
    const systemPrompt = 'You are the AI Consultant for ARIS Vietnam company. Respond professionally and helpfully in English. Always include ARIS Vietnam contact information at the end of your response with line breaks. ARIS is a web and app development company focusing on performance, SEO, and user experience. We specialize in management applications, mobile development, and digital transformation solutions. Contact information:\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      max_tokens: 500,
    });

    return response.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';
  } catch (error: any) {
    console.error('OpenAI API error:', error);

    // Check if it's a quota exceeded error
    if (error?.code === 'insufficient_quota' || error?.status === 429) {
      // Fallback to free responses when quota exceeded
      return generateFallbackReply(message);
    }

    return 'Sorry, an error occurred while processing your request.';
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const reply = await generateReply(body.message || '');
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json({ reply: 'Sorry, error' });
  }
}
