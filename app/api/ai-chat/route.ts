import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Body = { message: string; locale?: string };

function detectVietnamese(text: string): boolean {
  // Vietnamese specific characters and diacritics
  const vietnamesePattern = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/i;
  return vietnamesePattern.test(text);
}

function generateFallbackReply(message: string, locale = 'vi') {
  // Auto-detect language if not specified
  const isVietnamese = locale.startsWith('vi') || detectVietnamese(message);
  const text = message.toLowerCase();

  // Simple keyword-based replies (free tier fallback)
  if (text.includes('công ty') || text.includes('company')) {
    if (isVietnamese) return 'ARIS là một công ty chuyên phát triển các giải pháp web và ứng dụng, tập trung vào hiệu suất, SEO và trải nghiệm người dùng.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
    return 'ARIS is a company focusing on web and app development, specializing in performance, SEO, and great UX.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  if (text.includes('dự án') || text.includes('project')) {
    if (isVietnamese) return 'Chúng tôi có nhiều dự án: ARIS Platform, ARIS Analytics. Mỗi dự án có các giai đoạn phát triển rõ ràng từ discovery, design, implementation, và deployment.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
    return 'We have projects such as ARIS Platform and ARIS Analytics. Each project follows discovery, design, implementation, and deployment stages.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  if (text.includes('thời gian') || text.includes('deadline') || text.includes('giai đoạn')) {
    if (isVietnamese) return 'Thời gian dự án thường từ 3-6 tháng cho MVP, tuỳ thuộc phạm vi. Giai đoạn Discovery: 2-4 tuần, Implementation: 8-16 tuần.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
    return 'Project timelines typically range from 3-6 months for an MVP, depending on scope. Discovery: 2-4 weeks, Implementation: 8-16 weeks.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  if (text.includes('tình hình') || text.includes('trạng thái') || text.includes('status')) {
    if (isVietnamese) return 'Tình hình dự án hiện tại có thể khác nhau; vui lòng cung cấp mã dự án hoặc tên để biết trạng thái chi tiết. Thông thường, giai đoạn hiện tại và các vấn đề liên quan sẽ được cập nhật  hàng tuần.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
    return 'Project status varies by project; please provide the project ID or name for detailed status. Normally, updates are posted weekly.\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  }

  // fallback
  if (isVietnamese) return 'Xin chào! Tôi có thể trả lời câu hỏi về Công ty, Dự án, Thời gian và Tình hình dự án. Hãy thử hỏi: "Công ty làm gì?" hoặc "Dự án ARIS Platform đang ở giai đoạn nào?"\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
  return 'Hello! I can answer about Company, Projects, Timelines, and Project Status. Try asking: "What does the company do?" or "What is the status of ARIS Platform?"\n\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';
}

async function generateReply(message: string, locale = 'auto') {
  // Auto-detect language from message content if locale is 'auto'
  const isVietnamese = locale === 'auto' ? detectVietnamese(message) : locale.startsWith('vi');
  const detectedLocale = isVietnamese ? 'vi' : 'en';

  try {
    const systemPrompt = isVietnamese
      ? 'Bạn là AI Consultant của công ty ARIS Vietnam. Hãy trả lời một cách chuyên nghiệp, hữu ích và bằng tiếng Việt. Luôn đề cập đến thông tin liên hệ của ARIS Vietnam ở cuối câu trả lời với định dạng xuống dòng. ARIS là công ty phát triển web và ứng dụng, tập trung vào hiệu suất, SEO và trải nghiệm người dùng. Thông tin liên hệ:\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com'
      : 'You are the AI Consultant for ARIS Vietnam company. Respond professionally and helpfully in English. Always include ARIS Vietnam contact information at the end of your response with line breaks. ARIS is a web and app development company focusing on performance, SEO, and user experience. Contact information:\nARIS VIETNAM\nEmail: contact@aris-vn.com\nPhone: (+84) 28 3842 4483\nWebsite: aris-vn.com';

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
      return generateFallbackReply(message, detectedLocale);
    }

    return isVietnamese ? 'Xin lỗi, có lỗi xảy ra khi xử lý yêu cầu của bạn.' : 'Sorry, an error occurred while processing your request.';
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    // Use provided locale or default to 'auto' for auto-detection
    const locale = body.locale || 'auto';
    const reply = await generateReply(body.message || '', locale);
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json({ reply: 'Sorry, error' });
  }
}
