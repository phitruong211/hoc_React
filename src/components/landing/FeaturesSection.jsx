import {
  BookOpen,
  Users,
  Calendar,
  BarChart3,
  Shield,
  Clock,
  FileText,
  Award,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quản lý Môn học",
    description:
      "Tạo, chỉnh sửa và quản lý môn học với đầy đủ thông tin tín chỉ, giáo trình",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Quản lý Học viên",
    description:
      "Theo dõi thông tin, lịch sử học tập và kết quả của từng học viên",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Xếp lịch học",
    description:
      "Tự động xếp lịch học, tránh trùng lặp và tối ưu hóa thời gian",
    gradient: "from-green-500 to-emerald-500",
  },  
  {
    icon: BarChart3,
    title: "Thống kê & Báo cáo",
    description: "Dashboard trực quan với biểu đồ và báo cáo chi tiết",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Bảo mật cao",
    description: "Mã hóa dữ liệu, phân quyền chi tiết theo vai trò",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Clock,
    title: "Điểm danh tự động",
    description: "Hệ thống điểm danh thông minh, theo dõi tỷ lệ vắng mặt",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: FileText,
    title: "Quản lý điểm số",
    description: "Nhập điểm, tính toán điểm trung bình theo quy tắc nghiệp vụ",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Chứng chỉ & Bằng cấp",
    description: "Tự động tạo và quản lý chứng chỉ hoàn thành khóa học",
    gradient: "from-teal-500 to-green-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full">
            <span className="text-sm font-semibold text-indigo-600">
              Tính năng nổi bật
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Giải pháp toàn diện cho
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              Quản lý Đào tạo
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Hệ thống cung cấp đầy đủ các công cụ cần thiết để quản lý toàn bộ
            quy trình đào tạo một cách hiệu quả
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="space-y-4">
                  <div
                    className={`inline-flex bg-gradient-to-br ${feature.gradient} rounded-xl p-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>{" "}
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/40 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
            Khám phá tất cả tính năng
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
