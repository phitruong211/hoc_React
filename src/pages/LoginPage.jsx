import { useState } from "react";
import { Mail, Lock, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import Alert from "../components/common/Alert";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
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

  // Handle email blur (validate when user leaves email field)
  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Email không hợp lệ",
      }));
    }
  };
  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setErrors({ email: "", password: "" });

    // Validate email
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Vui lòng nhập email" }));
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Email không hợp lệ" }));
      return;
    }

    // Validate password
    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: "Vui lòng nhập mật khẩu" }));
      return;
    } // Set loading state
    setIsLoading(true);

    try {
      // Simulate API call (replace this with actual API call later)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock user database - CHECK EMAIL FIRST
      let userRole = null;
      let userName = "";

      // Check if email exists in system
      if (formData.email === "student@gmail.com") {
        userRole = "student";
        userName = "Nguyễn Văn Học Trò";
      } else if (formData.email === "teacher@gmail.com") {
        userRole = "teacher";
        userName = "Nguyễn Thị Giáo Viên";
      } else if (formData.email === "admin@gmail.com") {
        userRole = "admin";
        userName = "Nguyễn Văn Quản Trị";
      } else {
        // Email not found - throw error and stop
        throw new Error("Email không tồn tại trong hệ thống");
      }

      // Only check password if email exists
      if (formData.password !== "123456") {
        throw new Error("Mật khẩu không chính xác");
      }

      // Mock response from server
      const mockResponse = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        user: {
          id: userRole === "admin" ? 1 : userRole === "teacher" ? 2 : 3,
          name: userName,
          email: formData.email,
          role: userRole,
        },
      };

      // Save token to localStorage
      localStorage.setItem("accessToken", mockResponse.token);
      localStorage.setItem("user", JSON.stringify(mockResponse.user));

      // Redirect based on role
      switch (mockResponse.user.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "teacher":
          navigate("/teacher/dashboard");
          break;
        case "student":
          navigate("/student/home");
          break;
        default:
          setError("Vai trò người dùng không hợp lệ");
      }
    } catch (error) {
      setError(
        error.message ||
          "Email hoặc mật khẩu không chính xác. Vui lòng thử lại."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image & Quote */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop"
            alt="Library"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 via-amber-900/90 to-stone-800/90"></div>
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
                <h1 className="text-3xl font-bold">Quản lý Đào tạo</h1>
                <p className="text-amber-200">Education Management System</p>
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
                  Giáo dục là vũ khí mạnh mẽ nhất mà bạn có thể sử dụng để thay
                  đổi thế giới
                </blockquote>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"></div>
                <p className="text-lg text-amber-200">Nelson Mandela</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-amber-300">10K+</div>
                <div className="text-sm text-gray-300 mt-1">Học viên</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-sm text-gray-300 mt-1">Giáo viên</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-amber-300">200+</div>
                <div className="text-sm text-gray-300 mt-1">Khóa học</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cream-50">
        <div className="w-full max-w-md space-y-8">
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
              Chào mừng trở lại!
            </h2>
            <p className="text-stone-600">
              Đăng nhập để tiếp tục sử dụng hệ thống
            </p>
          </div>{" "}
          {/* Error Alert */}
          {error && (
            <Alert
              variant="danger"
              title="Đăng nhập thất bại"
              message={error}
              show={!!error}
            />
          )}
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
              autoComplete="current-password"
              icon={<Lock className="h-5 w-5" />}
            />{" "}
            {/* Forgot Password */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors duration-200"
              >
                Quên mật khẩu?
              </button>
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isLoading}
              icon={
                !isLoading && (
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                )
              }
              iconPosition="right"
            >
              {" "}
              {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </form>
          {/* Register Button */}
          <Button
            type="button"
            variant="outline"
            size="lg"
            fullWidth
            onClick={() => navigate("/register")}
            icon={
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
            }
            iconPosition="left"
          >
            Đăng ký tài khoản
          </Button>
          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-stone-300"></div>
            </div>
          </div>
          {/* Footer */}
          <div className="text-center text-sm text-stone-600">
            <p>© 2026 Quản lý Đào tạo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
