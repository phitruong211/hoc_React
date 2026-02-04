import { Check, Mail, Phone, MapPin } from "lucide-react";

const checklist = [
  "Miễn phí dùng thử 30 ngày",
  "Không yêu cầu thẻ tín dụng",
  "Hỗ trợ đào tạo miễn phí",
  "Tích hợp dễ dàng",
  "Bảo mật cấp ngân hàng",
  "Hỗ trợ 24/7",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@quanly-daotao.vn",
  },
  {
    icon: Phone,
    label: "Điện thoại",
    value: "(+84) 123 456 789",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "Hà Nội, Việt Nam",
  },
];

export function CallToActionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - CTA Content */}
          <div className="text-white space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-amber-200">
                  Bắt đầu ngay hôm nay
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Sẵn sàng chuyển đổi số
                <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent mt-2">
                  Quản lý Đào tạo?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Hàng ngàn tổ chức đào tạo đã tin tưởng và sử dụng hệ thống của
                chúng tôi. Hãy là người tiếp theo!
              </p>
            </div>{" "}
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/50 hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105 active:scale-95">
                Dùng thử miễn phí
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md">
                Đặt lịch demo
              </button>
            </div>
            {/* Contact Info */}
            <div className="pt-8 space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Liên hệ với chúng tôi
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-2">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-400">
                          {item.label}
                        </div>
                        <div className="text-sm font-medium text-white truncate">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Features List */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Những gì bạn nhận được
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
              </div>{" "}
              {/* Checklist */}
              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-base text-gray-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              {/* Testimonial */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      TN
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      "Hệ thống đã giúp chúng tôi quản lý hơn 5000 học viên một
                      cách dễ dàng và hiệu quả!"
                    </p>
                    <div className="text-xs">
                      <div className="text-white font-semibold">Trần Ngọc</div>
                      <div className="text-gray-400">
                        Giám đốc Trung tâm Đào tạo ABC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
