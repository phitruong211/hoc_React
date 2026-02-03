# 🎨 Common Components - Tối ưu hóa

Các components tái sử dụng được xây dựng với **React + JavaScript + Tailwind CSS**

## 📦 Components có sẵn

### 1. Button Component

Component nút bấm với nhiều variants và states.

#### Props:

```javascript
{
  children: node,              // Nội dung button
  variant: string,             // 'primary', 'secondary', 'success', 'danger', 'outline'
  size: string,                // 'sm', 'md', 'lg'
  type: string,                // 'button', 'submit', 'reset'
  disabled: boolean,           // Disable button
  loading: boolean,            // Hiển thị loading spinner
  fullWidth: boolean,          // Button chiếm toàn bộ width
  icon: node,                  // Icon element
  iconPosition: string,        // 'left', 'right'
  onClick: function,           // Click handler
  className: string            // Custom className
}
```

#### Usage:

```jsx
import Button from '../components/common/Button';

// Primary button với loading
<Button
  variant="primary"
  size="lg"
  loading={isLoading}
  fullWidth
  type="submit"
>
  Đăng nhập
</Button>

// Secondary button với icon
<Button
  variant="secondary"
  icon={<ArrowRight />}
  iconPosition="right"
  onClick={handleClick}
>
  Tiếp tục
</Button>

// Success button
<Button variant="success" size="md">
  Xác nhận
</Button>

// Danger button
<Button variant="danger" disabled>
  Xóa
</Button>
```

---

### 2. InputField Component

Component input field với validation và toggle password.

#### Props:

```javascript
{
  label: string,               // Label của input
  name: string,                // Name attribute (required)
  type: string,                // Input type (text, email, password, number, etc.)
  value: string|number,        // Value của input
  onChange: function,          // Change handler (required)
  onBlur: function,            // Blur handler
  error: string,               // Error message
  placeholder: string,         // Placeholder text
  required: boolean,           // Required field
  disabled: boolean,           // Disabled state
  maxLength: number,           // Max length
  min: string|number,          // Min value (for number)
  max: string|number,          // Max value (for number)
  helpText: string,            // Help text
  icon: node,                  // Left icon
  autoComplete: string,        // Autocomplete attribute
  className: string            // Custom className
}
```

#### Features:

- ✅ Auto password toggle (show/hide) cho type="password"
- ✅ Icon support
- ✅ Error validation display
- ✅ Help text support
- ✅ Required indicator

#### Usage:

```jsx
import InputField from '../components/common/InputField';
import { Mail, Lock } from 'lucide-react';

// Email input với icon và validation
<InputField
  label="Email"
  name="email"
  type="email"
  value={formData.email}
  onChange={handleChange}
  onBlur={handleEmailBlur}
  error={errors.email}
  placeholder="example@email.com"
  required
  autoComplete="email"
  icon={<Mail className="h-5 w-5" />}
/>

// Password input với auto toggle
<InputField
  label="Mật khẩu"
  name="password"
  type="password"
  value={formData.password}
  onChange={handleChange}
  error={errors.password}
  placeholder="••••••••"
  required
  autoComplete="current-password"
  icon={<Lock className="h-5 w-5" />}
/>

// Number input với min/max
<InputField
  label="Tuổi"
  name="age"
  type="number"
  value={formData.age}
  onChange={handleChange}
  min="0"
  max="100"
  helpText="Nhập tuổi từ 0-100"
/>
```

---

### 3. Alert Component

Component hiển thị thông báo với nhiều variants.

#### Props:

```javascript
{
  variant: string,             // 'primary', 'success', 'danger', 'warning', 'info'
  message: node,               // Nội dung message (required)
  title: string,               // Tiêu đề alert
  dismissible: boolean,        // Có nút đóng
  onClose: function,           // Close handler
  show: boolean,               // Hiển thị alert
  className: string            // Custom className
}
```

#### Features:

- ✅ Auto icons theo variant
- ✅ Dismissible với nút close
- ✅ Animation fade in/slide in
- ✅ Support title và message

#### Usage:

```jsx
import Alert from '../components/common/Alert';

// Success alert
<Alert
  variant="success"
  title="Thành công"
  message="Đăng nhập thành công!"
  show={showSuccess}
/>

// Error alert với dismissible
<Alert
  variant="danger"
  title="Lỗi đăng nhập"
  message="Email hoặc mật khẩu không chính xác"
  dismissible
  onClose={() => setError('')}
  show={!!error}
/>

// Warning alert
<Alert
  variant="warning"
  message="Vui lòng kiểm tra thông tin trước khi tiếp tục"
  show={showWarning}
/>

// Info alert
<Alert
  variant="info"
  title="Thông báo"
  message="Hệ thống sẽ bảo trì vào 2h sáng"
/>
```

---

### 4. Loader Component

Component loading spinner với nhiều sizes và variants.

#### Props:

```javascript
{
  size: string,                // 'sm', 'md', 'lg', 'xl'
  variant: string,             // 'primary', 'secondary', 'white'
  text: string,                // Loading text
  fullScreen: boolean,         // Full screen overlay
  className: string            // Custom className
}
```

#### Usage:

```jsx
import Loader from '../components/common/Loader';

// Small loader
<Loader size="sm" />

// Medium loader với text
<Loader
  size="md"
  text="Đang tải dữ liệu..."
/>

// Large loader
<Loader
  size="lg"
  variant="primary"
/>

// Full screen loader
<Loader
  size="xl"
  text="Đang xử lý..."
  fullScreen
/>

// White loader (for dark backgrounds)
<Loader
  size="md"
  variant="white"
/>
```

---

## 🎨 Styling Guide

### Color Variants

```javascript
// Primary (Indigo-Purple gradient)
variant="primary"
→ bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600

// Success (Green gradient)
variant="success"
→ bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600

// Danger (Red gradient)
variant="danger"
→ bg-gradient-to-r from-red-600 to-pink-600

// Warning (Yellow)
variant="warning"
→ bg-yellow-50 border-yellow-200

// Info (Blue)
variant="info"
→ bg-blue-50 border-blue-200
```

### Size Scale

```javascript
// Small
size="sm" → px-4 py-2 text-sm

// Medium
size="md" → px-6 py-3 text-base

// Large
size="lg" → px-8 py-4 text-base
```

---

## 💡 Best Practices

### 1. Form Validation

```jsx
const [errors, setErrors] = useState({
  email: "",
  password: "",
});

// Clear error on change
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  // Clear specific error
  if (errors[name]) {
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }
};

// Validate on blur
const handleEmailBlur = () => {
  if (formData.email && !validateEmail(formData.email)) {
    setErrors((prev) => ({ ...prev, email: "Email không hợp lệ" }));
  }
};
```

### 2. Loading States

```jsx
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    await apiCall();
  } catch (error) {
    // Handle error
  } finally {
    setIsLoading(false); // Always reset loading
  }
};

// In JSX
<Button loading={isLoading} type="submit">
  {isLoading ? "Đang xử lý..." : "Submit"}
</Button>;
```

### 3. Error Handling

```jsx
const [error, setError] = useState("");

// Clear error when user starts typing
const handleChange = (e) => {
  // ... update form
  if (error) setError("");
};

// Show error
<Alert
  variant="danger"
  title="Có lỗi xảy ra"
  message={error}
  show={!!error}
  dismissible
  onClose={() => setError("")}
/>;
```

---

## 📝 Example: Login Form với Components

```jsx
import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import Alert from "../components/common/Alert";

export function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // API call
      await login(formData);
    } catch (err) {
      setError("Đăng nhập thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Alert */}
      <Alert
        variant="danger"
        title="Đăng nhập thất bại"
        message={error}
        show={!!error}
        dismissible
        onClose={() => setError("")}
      />

      {/* Email */}
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        icon={<Mail className="h-5 w-5" />}
        required
      />

      {/* Password */}
      <InputField
        label="Mật khẩu"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        icon={<Lock className="h-5 w-5" />}
        required
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isLoading}
      >
        {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
      </Button>
    </form>
  );
}
```

---

## 🔧 Customization

### Override Styles

```jsx
// Add custom className
<Button
  variant="primary"
  className="mt-4 !bg-blue-600"
>
  Custom Button
</Button>

<InputField
  name="email"
  className="mb-6"
  // ...other props
/>
```

### Extend Components

```jsx
// Create custom variant
import Button from "../components/common/Button";

export function DangerButton(props) {
  return <Button variant="danger" icon={<Trash />} {...props} />;
}
```

---

## 📚 Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "lucide-react": "latest",
    "prop-types": "^15.8.1"
  }
}
```

---

**Components đã sẵn sàng để sử dụng! 🚀**
