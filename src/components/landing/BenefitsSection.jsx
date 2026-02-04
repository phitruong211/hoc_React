import { CheckCircle2, Zap, TrendingUp, Users2 } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Tiết kiệm thời gian",
    description: "Tự động hóa quy trình, giảm 70% thời gian làm việc thủ công",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: Zap,
    title: "Hiệu suất cao",
    description: "Xử lý nhanh chóng với hiệu suất tối ưu cho mọi quy mô",
    gradient: "from-amber-600 to-amber-700",
  },
  {
    icon: TrendingUp,
    title: "Tăng trưởng bền vững",
    description: "Mở rộng dễ dàng theo nhu cầu phát triển của tổ chức",
    gradient: "from-amber-500 to-amber-700",
  },
  {
    icon: Users2,
    title: "Hỗ trợ tận tình",
    description: "Đội ngũ hỗ trợ 24/7, sẵn sàng giải đáp mọi thắc mắc",
    gradient: "from-amber-500 to-amber-600",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 -right-40 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main gradient box */}
              <div className="relative bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 h-full">
                  <div className="space-y-6">
                    {/* Floating cards */}
                    <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-3">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-stone-900">
                            99.9%
                          </div>
                          <div className="text-sm text-stone-600">
                            Độ chính xác
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-8">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-3">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-stone-900">
                            &lt;2s
                          </div>
                          <div className="text-sm text-stone-600">
                            Thời gian phản hồi
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl p-3">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-stone-900">
                            100%
                          </div>
                          <div className="text-sm text-stone-600">Hài lòng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl blur-2xl opacity-50"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full">
                <span className="text-sm font-semibold text-amber-600">
                  Lợi ích vượt trội
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
                Tại sao chọn
                <span className="block bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent mt-2">
                  Hệ thống của chúng tôi?
                </span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Được thiết kế dành riêng cho các tổ chức đào tạo, đáp ứng mọi
                nhu cầu từ cơ bản đến nâng cao
              </p>
            </div>
            {/* Benefits List */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-5 bg-stone-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-transparent hover:border-stone-200"
                  >
                    <div
                      className={`flex-shrink-0 bg-gradient-to-br ${benefit.gradient} rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-lg font-bold text-stone-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>{" "}
            {/* CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/40 hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105 active:scale-95">
                Tìm hiểu thêm
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
        </div>
      </div>
    </section>
  );
}
