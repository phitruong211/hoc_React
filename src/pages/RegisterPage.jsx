import { useState } from "react";
import { Mail, Lock, User, GraduationCap, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import Alert from "../components/common/Alert";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validate phone format
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone);
  };

  // Validate password strength
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear general error when user types
    if (error) {
      setError("");
    }
  };

  // Handle email blur
  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Email không hợp lệ",
      }));
    }
  };

  // Handle phone blur
  const handlePhoneBlur = () => {
    if (formData.phone && !validatePhone(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Số điện thoại phải có 10-11 chữ số",
      }));
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setErrors({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    // Validate full name
    if (!formData.fullName.trim()) {
      setErrors((prev) => ({ ...prev, fullName: "Vui lòng nhập họ và tên" }));
      return;
    }

    // Validate email
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Vui lòng nhập email" }));
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Email không hợp lệ" }));
      return;
    }

    // Validate phone
    if (!formData.phone) {
      setErrors((prev) => ({ ...prev, phone: "Vui lòng nhập số điện thoại" }));
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Số điện thoại phải có 10-11 chữ số",
      }));
      return;
    }

    // Validate password
    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: "Vui lòng nhập mật khẩu" }));
      return;
    }

    if (!validatePassword(formData.password)) {
      setErrors((prev) => ({
        ...prev,
        password: "Mật khẩu phải có ít nhất 6 ký tự",
      }));
      return;
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Vui lòng nhập lại mật khẩu",
      }));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Mật khẩu không khớp",
      }));
      return;
    }

    // Set loading state
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock successful registration
      setSuccess(true);

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch {
      setError("Đăng ký thất bại. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image & Quote */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-stone-900 via-amber-800 to-stone-800 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop"
            alt="Students"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 via-amber-800/90 to-stone-800/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="max-w-lg space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-4 shadow-2xl">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Tham gia cùng chúng tôi</h1>
                <p className="text-amber-200">Join Our Education Platform</p>
              </div>
            </div>

            {/* Quote */}
            <div className="space-y-6">
              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 h-12 w-12 text-amber-400 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="relative z-10 text-2xl font-semibold leading-relaxed">
                  Đầu tư vào kiến thức mang lại lợi nhuận tốt nhất
                </blockquote>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"></div>
                <p className="text-lg text-amber-200">Benjamin Franklin</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-sm">Truy cập 200+ khóa học chất lượng cao</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-sm">
                  Học tập với giáo viên giàu kinh nghiệm
                </p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-sm">
                  Chứng chỉ được công nhận khi hoàn thành
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cream-50">
        <div className="w-full max-w-md space-y-6">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-3">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-stone-900">
                  Quản lý Đào tạo
                </h1>
                <p className="text-sm text-stone-600">Education Management</p>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-stone-900 mb-2">
              Tạo tài khoản mới
            </h2>
            <p className="text-stone-600">Bắt đầu hành trình học tập của bạn</p>
          </div>

          {/* Success Alert */}
          {success && (
            <Alert
              variant="success"
              title="Đăng ký thành công!"
              message="Đang chuyển hướng đến trang đăng nhập..."
              show={success}
            />
          )}

          {/* Error Alert */}
          {error && (
            <Alert
              variant="danger"
              title="Đăng ký thất bại"
              message={error}
              show={!!error}
            />
          )}

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <InputField
              label="Họ và tên"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="Nguyễn Văn A"
              required
              autoComplete="name"
              icon={<User className="h-5 w-5" />}
            />
            {/* Email Input */}
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
            {/* Phone Input */}
            <InputField
              label="Số điện thoại"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handlePhoneBlur}
              error={errors.phone}
              placeholder="0123456789"
              required
              autoComplete="tel"
              icon={<Phone className="h-5 w-5" />}
            />
            {/* Password Input */}
            <InputField
              label="Mật khẩu"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="••••••••"
              required
              autoComplete="new-password"
              helpText="Mật khẩu phải có ít nhất 6 ký tự"
              icon={<Lock className="h-5 w-5" />}
            />
            {/* Confirm Password Input */}
            <InputField
              label="Xác nhận mật khẩu"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="••••••••"
              required
              autoComplete="new-password"
              icon={<Lock className="h-5 w-5" />}
            />{" "}
            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isLoading}
              disabled={success}
              icon={
                !isLoading &&
                !success && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                )
              }
              iconPosition="left"
            >
              {isLoading
                ? "Đang đăng ký..."
                : success
                ? "Đăng ký thành công!"
                : "Đăng ký"}
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-stone-600">
              Đã có tài khoản?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-200"
              >
                Đăng nhập ngay
              </button>
            </p>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-stone-500 pt-4">
            <p>© 2026 Quản lý Đào tạo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
