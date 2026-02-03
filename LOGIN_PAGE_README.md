# 🔐 Login Page - Hệ Thống Quản Lý Đào Tạo

Trang đăng nhập hiện đại với **React + JavaScript + Tailwind CSS**

## ✨ Tính năng chính

### 🎨 Giao diện (UI/UX)

1. **Split Layout (Bố cục chia đôi)**

   - **Bên trái (Desktop)**: Ảnh minh họa với overlay gradient + Quote truyền cảm hứng
   - **Bên phải**: Form đăng nhập căn giữa
   - **Mobile**: Ẩn ảnh, chỉ hiển thị form

2. **Form Components**

   - Logo và tên hệ thống
   - Input Email với validation
   - Input Password với toggle show/hide
   - Nút "Quên mật khẩu?"
   - Nút "Đăng nhập" với loading state
   - Error messages với animation

3. **Visual Effects**
   - Gradient backgrounds
   - Animated blobs
   - Smooth transitions
   - Hover states
   - Loading spinner
   - Error alerts với icons

### 🔒 Logic Nghiệp vụ (Backend Driven Role)

#### ❌ KHÔNG có chọn vai trò trên UI

- Không có Dropdown/Radio button chọn Admin/Teacher/Student
- Role được quyết định hoàn toàn bởi Backend

#### ✅ Authentication Flow

1. **User nhập Email + Password**
2. **Submit form** → Gửi API POST `/api/auth/login`

   ```javascript
   body: {
     email, password;
   }
   ```

3. **Nhận response từ server**

   ```json
   {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "user": {
       "id": 1,
       "name": "Nguyen Van A",
       "email": "user@email.com",
       "role": "teacher" // Backend decides: admin, teacher, student
     }
   }
   ```

4. **Lưu token vào LocalStorage**

   ```javascript
   localStorage.setItem("accessToken", token);
   localStorage.setItem("user", JSON.stringify(user));
   ```

5. **Redirect dựa trên role**

   - `role === 'admin'` → `/admin/dashboard`
   - `role === 'teacher'` → `/teacher/dashboard`
   - `role === 'student'` → `/student/profile`

6. **Nếu lỗi** → Hiển thị error message

## 🎯 Validation Rules

### Email Validation

```javascript
// Format: example@domain.com
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate on blur (when user leaves field)
// Show error if invalid format
```

### Password Validation

```javascript
// Required field
// No format validation (handled by backend)
```

## 🖼️ Image Assets

Các link ảnh minh họa từ Unsplash:

```javascript
// Library/Modern Education
https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop

// Campus/Students (Dark mood)
https://images.unsplash.com/photo-1708548172199-72f7796d4206?q=80&w=1080&auto=format&fit=crop

// Technology/Abstract
https://images.unsplash.com/photo-1649451844931-57e22fc82de3?q=80&w=1080&auto=format&fit=crop
```

## 🎨 Color Palette

```css
Primary Colors:
- Indigo: #6366f1, #4f46e5
- Purple: #a855f7, #9333ea
- Slate: #0f172a, #1e293b

Neutral Colors:
- Gray: #f9fafb, #f3f4f6, #6b7280
- Red (Error): #ef4444, #dc2626
```

## 📱 Responsive Breakpoints

```javascript
// Mobile First Approach
lg: 1024px → Show split layout
< lg: → Full width form only
```

## 🔧 Component Structure

```jsx
LoginPage.jsx
├── Left Panel (Hidden on mobile)
│   ├── Background Image + Overlay
│   ├── Logo & System Name
│   ├── Quote Section
│   └── Stats Cards
│
└── Right Panel (Login Form)
    ├── Mobile Logo (Visible < lg)
    ├── Welcome Header
    ├── Error Alert (Conditional)
    ├── Email Input + Validation
    ├── Password Input + Toggle
    ├── Forgot Password Link
    ├── Submit Button + Loading
    ├── Divider
    ├── Demo Accounts Info
    └── Footer
```

## 🎭 States Management

```javascript
const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const [showPassword, setShowPassword] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");
const [emailError, setEmailError] = useState("");
```

## 🚀 Usage

### 1. Truy cập trang Login

```
http://localhost:5173/login
```

### 2. Demo Accounts (Mock Data)

| Role    | Email          | Password | Redirect To        |
| ------- | -------------- | -------- | ------------------ |
| Admin   | admin@edu.vn   | 123456   | /admin/dashboard   |
| Teacher | teacher@edu.vn | 123456   | /teacher/dashboard |
| Student | student@edu.vn | 123456   | /student/profile   |

### 3. Test Flow

1. **Successful Login**:

   - Nhập email: `teacher@edu.vn`
   - Nhập password: `123456`
   - Click "Đăng nhập"
   - Loading state xuất hiện
   - Redirect sang `/teacher/dashboard`

2. **Invalid Email**:

   - Nhập email: `invalid-email`
   - Blur khỏi field
   - Error message "Email không hợp lệ" xuất hiện

3. **Empty Fields**:

   - Để trống email hoặc password
   - Click "Đăng nhập"
   - Error messages xuất hiện

4. **Failed Login**:
   - Nhập sai thông tin
   - Click "Đăng nhập"
   - Red alert xuất hiện với message lỗi

## 🔗 API Integration (Future)

### Replace Mock with Real API

```javascript
// In handleSubmit function, replace this:
await new Promise(resolve => setTimeout(resolve, 1500));
const mockResponse = {...};

// With this:
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: formData.email,
    password: formData.password
  })
});

if (!response.ok) {
  throw new Error('Login failed');
}

const data = await response.json();
```

### API Endpoint Requirements

```
POST /api/auth/login

Request Body:
{
  "email": "user@email.com",
  "password": "password123"
}

Success Response (200):
{
  "token": "jwt_token_string",
  "user": {
    "id": 1,
    "name": "User Name",
    "email": "user@email.com",
    "role": "admin" | "teacher" | "student"
  }
}

Error Response (401):
{
  "error": "Invalid credentials"
}
```

## 🎨 Customization

### Change Background Image

```javascript
// In LoginPage.jsx, line ~100
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Background"
  className="w-full h-full object-cover opacity-30"
/>
```

### Change Quote

```javascript
// Line ~115
<blockquote className="...">
  Your custom quote here
</blockquote>
<p className="...">Quote Author</p>
```

### Change Color Theme

```javascript
// Replace gradient colors
from-indigo-600 via-purple-600 to-indigo-600
// With your colors
from-blue-600 via-cyan-600 to-blue-600
```

## ⚡ Performance Tips

1. **Image Optimization**: Use compressed images (Unsplash already optimized)
2. **Lazy Loading**: Images load only when visible
3. **Minimal Re-renders**: State updates are isolated
4. **CSS Animations**: Using CSS transforms for better performance

## 🔍 Accessibility

- ✅ Semantic HTML (label, input, button)
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus states visible
- ✅ Error messages descriptive

## 🐛 Troubleshooting

### Form không submit

- Kiểm tra validation errors
- Mở Console để xem logs
- Kiểm tra network tab (khi có API)

### Redirect không hoạt động

- Kiểm tra `react-router-dom` đã cài đặt
- Kiểm tra routes trong `App.jsx`
- Kiểm tra `useNavigate` hook

### Ảnh không hiển thị

- Kiểm tra URL ảnh còn valid
- Kiểm tra connection internet
- Thử URL ảnh khác

## 📚 Dependencies Required

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.0",
    "lucide-react": "latest"
  }
}
```

## 🎯 Best Practices Applied

1. ✅ **Backend-driven authentication** - No role selection on UI
2. ✅ **Client-side validation** - Immediate feedback
3. ✅ **Loading states** - Better UX during API calls
4. ✅ **Error handling** - Clear error messages
5. ✅ **Responsive design** - Works on all devices
6. ✅ **Secure** - Token stored in localStorage
7. ✅ **Accessible** - WCAG compliant
8. ✅ **Modern UI** - Following 2024+ design trends

## 📄 File Location

```
src/pages/LoginPage.jsx
```

## 🔗 Navigation

```javascript
// From Landing Page
<Link to="/login">Đăng nhập</Link>;

// Programmatic navigation
navigate("/login");
```

---

**Ready to use! 🚀**

Trang Login đã hoàn chỉnh với mọi tính năng cần thiết. Chỉ cần thay thế phần mock API bằng real API khi backend sẵn sàng.
