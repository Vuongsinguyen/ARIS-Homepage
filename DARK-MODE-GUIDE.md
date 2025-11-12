# 🌓 Dark Mode & Light Mode - Quản lý màu sắc

## ✅ Đã hoàn chỉnh hệ thống Dark/Light Mode!

Website đã được cấu hình với hệ thống quản lý theme chuyên nghiệp.

---

## 🎨 Tính năng Dark Mode

### ✅ Đã có:

1. **Manual Theme Toggle** - Nút chuyển đổi theme
2. **System Theme Detection** - Tự động theo hệ thống
3. **Persistent Selection** - Lưu lựa chọn của user
4. **Smooth Transitions** - Chuyển đổi mượt mà
5. **No Flash** - Không nhấp nháy khi load trang
6. **Full Color Palette** - Bộ màu đầy đủ cho cả 2 theme

---

## 🎯 3 Theme Modes

### 1. 🌞 Light Mode
- Background: Trắng sáng (#ffffff)
- Text: Đen (#171717)
- Tối ưu cho môi trường sáng

### 2. 🌙 Dark Mode  
- Background: Đen (#0a0a0a)
- Text: Trắng (#ededed)
- Giảm mỏi mắt, tiết kiệm pin OLED

### 3. 💻 System Mode (Auto)
- Tự động theo cài đặt hệ thống
- Thay đổi theo giờ trong ngày
- Trải nghiệm nhất quán với OS

---

## 🎨 Color Palette

### Light Mode Colors:
```css
Background: #ffffff (trắng)
Foreground: #171717 (đen)
Primary: #2563eb (xanh blue)
Secondary: #f5f5f5 (xám nhạt)
Muted: #737373 (xám)
Border: #e5e5e5 (xám border)
```

### Dark Mode Colors:
```css
Background: #0a0a0a (đen)
Foreground: #ededed (trắng)
Primary: #2563eb (xanh blue - giữ nguyên)
Secondary: #262626 (xám đậm)
Muted: #a3a3a3 (xám sáng)
Border: #262626 (xám đậm border)
```

---

## 🔧 Components

### 1. ThemeToggle Button (Floating)
- **File**: `components/ThemeToggle.tsx`
- **Vị trí**: Bottom-right corner
- **Icons**: Sun ☀️ (Light) / Moon 🌙 (Dark)
- **Click**: Toggle giữa light và dark

### 2. ThemeSelector Dropdown (Advanced)
- **File**: `components/ThemeSelector.tsx`
- **Options**: Light / Dark / System
- **Features**: 
  - Dropdown menu với icons
  - Hiển thị theme hiện tại
  - Checkmark cho theme đang active

---

## 💻 Cách sử dụng trong Components

### Đơn giản - Dùng Tailwind classes:

```tsx
// Tự động đổi màu theo theme
<div className="bg-background text-foreground">
  <h1 className="text-primary">Title</h1>
  <p className="text-muted-foreground">Subtitle</p>
</div>
```

### Màu cụ thể cho từng theme:

```tsx
<div className="bg-white dark:bg-black">
  <p className="text-gray-900 dark:text-gray-100">Text</p>
  <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
    Button
  </button>
</div>
```

### Dùng useTheme hook (Client Component):

```tsx
'use client';
import {useTheme} from 'next-themes';

export default function MyComponent() {
  const {theme, setTheme} = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
    </div>
  );
}
```

---

## 🎨 Color Variables

### Trong Tailwind Config:

```typescript
// tailwind.config.ts
colors: {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... more colors
}
```

### Trong CSS:

```css
/* globals.css */
:root {
  --background: 0 0% 100%; /* Light mode */
}

.dark {
  --background: 0 0% 4%; /* Dark mode */
}
```

---

## 📱 Responsive Dark Mode

```tsx
// Colors tự động đổi theo theme và screen size
<div className="
  bg-white dark:bg-gray-900
  p-4 md:p-8 lg:p-12
  text-sm md:text-base lg:text-lg
  text-gray-900 dark:text-gray-100
">
  Responsive content
</div>
```

---

## 🎯 Best Practices

### ✅ Nên làm:

1. **Dùng semantic colors** (`bg-background`, `text-foreground`)
2. **Test cả 2 themes** khi develop
3. **Avoid hardcoded colors** (#ffffff, #000000)
4. **Use Tailwind dark: prefix** cho custom colors
5. **Images có alt text** và tối ưu cho dark mode

### ❌ Không nên:

1. ❌ Hardcode màu trắng/đen
2. ❌ Quên test dark mode
3. ❌ Dùng màu không có contrast đủ
4. ❌ Image không phù hợp với dark theme

---

## 🎨 Image trong Dark Mode

### Option 1: CSS Filter

```tsx
<Image 
  src="/logo.png"
  alt="Logo"
  className="dark:invert"
  width={200}
  height={50}
/>
```

### Option 2: Hai image khác nhau

```tsx
'use client';
import {useTheme} from 'next-themes';

export default function Logo() {
  const {theme} = useTheme();
  
  return (
    <Image 
      src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
      alt="Logo"
      width={200}
      height={50}
    />
  );
}
```

---

## 🔧 Thêm Theme Toggle vào trang

### Homepage (đã có):
```tsx
// app/[locale]/page.tsx
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main>
      <ThemeToggle /> {/* Floating button */}
      {/* Your content */}
    </main>
  );
}
```

### Navigation Bar (nên thêm):
```tsx
// components/Navbar.tsx
import ThemeSelector from '@/components/ThemeSelector';

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <ThemeSelector /> {/* Dropdown selector */}
    </nav>
  );
}
```

---

## 🎯 Custom Colors

### Thêm màu mới vào theme:

1. **Thêm vào globals.css**:
```css
:root {
  --success: 142 76% 36%;
  --warning: 38 92% 50%;
  --info: 199 89% 48%;
}

.dark {
  --success: 142 71% 45%;
  --warning: 48 96% 53%;
  --info: 199 89% 58%;
}
```

2. **Thêm vào tailwind.config.ts**:
```typescript
colors: {
  success: "hsl(var(--success))",
  warning: "hsl(var(--warning))",
  info: "hsl(var(--info))",
}
```

3. **Sử dụng**:
```tsx
<div className="bg-success text-white">Success!</div>
<div className="bg-warning text-white">Warning!</div>
<div className="bg-info text-white">Info!</div>
```

---

## 🔍 Testing Dark Mode

### Browser DevTools:
1. F12 → Console
2. `document.documentElement.classList.toggle('dark')`
3. Or inspect `<html>` tag → Add/remove `dark` class

### OS Settings:
- **macOS**: System Preferences → General → Appearance
- **Windows**: Settings → Personalization → Colors
- **Linux**: System Settings → Appearance

### Browser:
- Chrome DevTools → Rendering → Emulate CSS media prefers-color-scheme

---

## 📊 Performance

### ✅ Tối ưu đã áp dụng:

1. **No Flash on Load** - `suppressHydrationWarning` trong HTML
2. **Client-side Only** - Theme logic chỉ chạy client-side
3. **LocalStorage** - Lưu theme choice
4. **CSS Variables** - Efficient color switching
5. **No Re-render** - Theme change không re-mount components

---

## 🎉 Kết luận

### ✅ Đã có đầy đủ:

- [x] Dark Mode & Light Mode
- [x] System Auto Detection
- [x] Manual Toggle Button
- [x] Theme Selector Dropdown
- [x] Full Color Palette
- [x] Smooth Transitions
- [x] Persistent Storage
- [x] No Flash on Load
- [x] Tailwind Integration
- [x] TypeScript Support

### 🚀 Sẵn sàng sử dụng:

1. **ThemeToggle** - Floating button (đã thêm vào homepage)
2. **ThemeSelector** - Dropdown (có thể thêm vào navbar)
3. **All colors** work with dark/light mode
4. **Easy to customize** - Chỉ cần edit CSS variables

---

**✅ Dark Mode đã hoàn chỉnh và professional!** 🌓
