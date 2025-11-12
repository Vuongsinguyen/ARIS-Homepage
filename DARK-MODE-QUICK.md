# 🚀 Quick Start - Dark Mode

## ✅ Dark Mode đã sẵn sàng!

Website của bạn đã có **Dark Mode** và **Light Mode** hoạt động đầy đủ.

---

## 🎯 Cách sử dụng

### 1. Toggle Theme (Nút chuyển đổi)

Đã có **ThemeToggle** button ở góc dưới bên phải màn hình:
- ☀️ Click để chuyển sang Light Mode
- 🌙 Click để chuyển sang Dark Mode
- Tự động lưu lựa chọn của bạn

### 2. Theme Selector (Menu chọn)

Có component **ThemeSelector** với 3 options:
- ☀️ Light - Sáng
- 🌙 Dark - Tối
- 💻 System - Theo hệ thống (auto)

---

## 🎨 Dùng trong code

### Tự động (Recommended):
```tsx
// Màu tự động đổi theo theme
<div className="bg-background text-foreground">
  <h1 className="text-primary">Tiêu đề</h1>
  <p className="text-muted-foreground">Mô tả</p>
</div>
```

### Custom cho từng theme:
```tsx
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">
    Text này sẽ đen ở light mode, trắng ở dark mode
  </p>
</div>
```

### Programmatically:
```tsx
'use client';
import {useTheme} from 'next-themes';

export default function MyComponent() {
  const {theme, setTheme} = useTheme();
  
  return (
    <button onClick={() => setTheme('dark')}>
      Switch to Dark
    </button>
  );
}
```

---

## 🎨 Available Colors

### Semantic Colors (Tự động):
- `bg-background` / `text-foreground` - Nền & chữ chính
- `bg-primary` / `text-primary` - Màu chủ đạo (blue)
- `bg-secondary` - Màu phụ
- `bg-muted` / `text-muted-foreground` - Màu mờ
- `bg-accent` - Màu nhấn
- `bg-card` - Card background
- `border-border` - Border color

### Usage Examples:
```tsx
<div className="bg-card border border-border rounded-lg p-6">
  <h2 className="text-foreground font-bold">Card Title</h2>
  <p className="text-muted-foreground">Card description</p>
  <button className="bg-primary text-primary-foreground px-4 py-2 rounded">
    Button
  </button>
</div>
```

---

## 📁 Files

- `components/ThemeToggle.tsx` - Floating toggle button
- `components/ThemeSelector.tsx` - Dropdown selector
- `components/providers.tsx` - Theme provider wrapper
- `app/globals.css` - Color definitions
- `tailwind.config.ts` - Tailwind configuration

---

## 🔧 Customize Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 221 83% 53%; /* Change this for light mode */
}

.dark {
  --primary: 221 83% 53%; /* Change this for dark mode */
}
```

---

## ✅ Checklist

- [x] Dark mode active
- [x] Light mode active  
- [x] System auto-detection
- [x] Toggle button (floating)
- [x] Theme selector (dropdown)
- [x] Persistent storage
- [x] All colors defined
- [x] Smooth transitions
- [x] No flash on load

---

**🎉 Enjoy your Dark Mode!** 🌓

Xem chi tiết: **DARK-MODE-GUIDE.md**
