# Supabase Setup Guide

## 1. Tạo Supabase Project

1. Truy cập [supabase.com](https://supabase.com)
2. Đăng ký tài khoản (có free tier)
3. Tạo project mới
4. Chờ project được khởi tạo (khoảng 2-3 phút)

## 2. Lấy API Keys

Sau khi project được tạo:

1. Vào **Settings** > **API**
2. Copy các giá trị sau:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - **service_role key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## 3. Cập nhật Environment Variables

Cập nhật file `.env.local`:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

## 4. Tạo Database Tables

1. Vào **SQL Editor** trong Supabase Dashboard
2. Copy và chạy toàn bộ nội dung file `supabase-setup.sql`
3. Đợi tables được tạo thành công

## 5. Test Like Button

1. Chạy `npm run dev`
2. Truy cập `http://localhost:3000/en/blog/mastering-react-development`
3. Đăng nhập và thử like/unlike

## Free Tier Limits

Supabase free tier bao gồm:
- 500MB database
- 50MB file storage
- 2GB bandwidth/tháng
- 50,000 monthly active users

Đủ cho một blog cá nhân hoặc nhỏ!

## Troubleshooting

Nếu gặp lỗi:
1. Kiểm tra lại API keys có đúng không
2. Đảm bảo tables đã được tạo trong Supabase
3. Kiểm tra console browser có lỗi gì không
4. Restart dev server sau khi cập nhật env variables