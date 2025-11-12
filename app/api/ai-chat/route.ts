import { NextResponse } from 'next/server';

type Body = { message: string; locale?: string };

function generateReply(message: string, locale = 'vi') {
  const text = message.toLowerCase();

  // Simple keyword-based replies
  if (text.includes('công ty') || text.includes('company')) {
    if (locale.startsWith('vi')) return 'ARIS là một công ty chuyên phát triển các giải pháp web và ứng dụng, tập trung vào hiệu suất, SEO và trải nghiệm người dùng.';
    return 'ARIS is a company focusing on web and app development, specializing in performance, SEO, and great UX.';
  }

  if (text.includes('dự án') || text.includes('project')) {
    if (locale.startsWith('vi')) return 'Chúng tôi có nhiều dự án: ARIS Platform, ARIS Analytics. Mỗi dự án có các giai đoạn phát triển rõ ràng từ discovery, design, implementation, và deployment.';
    return 'We have projects such as ARIS Platform and ARIS Analytics. Each project follows discovery, design, implementation, and deployment stages.';
  }

  if (text.includes('thời gian') || text.includes('deadline') || text.includes('giai đoạn')) {
    if (locale.startsWith('vi')) return 'Thời gian dự án thường từ 3-6 tháng cho MVP, tuỳ thuộc phạm vi. Giai đoạn Discovery: 2-4 tuần, Implementation: 8-16 tuần.';
    return 'Project timelines typically range from 3-6 months for an MVP, depending on scope. Discovery: 2-4 weeks, Implementation: 8-16 weeks.';
  }

  if (text.includes('tình hình') || text.includes('trạng thái') || text.includes('status')) {
    if (locale.startsWith('vi')) return 'Tình hình dự án hiện tại có thể khác nhau; vui lòng cung cấp mã dự án hoặc tên để biết trạng thái chi tiết. Thông thường, giai đoạn hiện tại và các vấn đề liên quan sẽ được cập nhật  hàng tuần.';
    return 'Project status varies by project; please provide the project ID or name for detailed status. Normally, updates are posted weekly.';
  }

  // fallback
  if (locale.startsWith('vi')) return 'Xin chào! Tôi có thể trả lời câu hỏi về Công ty, Dự án, Thời gian và Tình hình dự án. Hãy thử hỏi: "Công ty làm gì?" hoặc "Dự án ARIS Platform đang ở giai đoạn nào?"';
  return 'Hello! I can answer about Company, Projects, Timelines, and Project Status. Try asking: "What does the company do?" or "What is the status of ARIS Platform?"';
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const locale = body.locale || 'vi';
    const reply = generateReply(body.message || '', locale);
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json({ reply: 'Sorry, error' });
  }
}
