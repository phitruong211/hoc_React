import { Shield, GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-10">
            {" "}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Hệ Thống Quản Lý
                <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent mt-2">
                  Đào Tạo Chuyên Nghiệp
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                Quản lý học viên, giáo viên, lớp học và điểm số một cách hiệu
                quả và chính xác. Tuân thủ chặt chẽ các quy tắc nghiệp vụ đào
                tạo.
              </p>
            </div>{" "}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/login")}
                className="inline-flex items-center bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white px-8 py-4 text-base font-semibold shadow-lg shadow-amber-500/50 hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105 active:scale-95 rounded-xl group"
              >
                Bắt đầu ngay
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-1.5 text-white">
                      Bảo mật & Phân quyền
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Phân hệ Admin, Giáo viên, Học viên riêng biệt
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-1.5 text-white">
                      Quản lý Học vụ
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Đăng ký môn, điểm danh, tính điểm tự động
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Right Column - Stats */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Được tin dùng bởi
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="group text-center bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-amber-400/30">
                      <div className="text-5xl font-bold bg-gradient-to-br from-amber-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        10K+
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Học viên
                      </div>
                    </div>
                    <div className="group text-center bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-amber-400/30">
                      <div className="text-5xl font-bold bg-gradient-to-br from-amber-500 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        500+
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Giáo viên
                      </div>
                    </div>
                    <div className="group text-center bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-amber-400/30">
                      <div className="text-5xl font-bold bg-gradient-to-br from-amber-600 to-amber-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        200+
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Lớp học
                      </div>
                    </div>
                    <div className="group text-center bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-amber-400/30">
                      <div className="text-5xl font-bold bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Uptime
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed italic">
                        "Giải pháp quản lý đào tạo toàn diện và hiệu quả nhất
                        cho tổ chức của chúng tôi"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
    </section>
  );
}
