import { Outlet } from "react-router-dom";
import { Bell, GraduationCap } from "lucide-react";
import SegmentedNav from "../../components/common/SegmentedNav";

export default function MainStudentLayout() {
  // Navigation items
  const navItems = [
    { label: "Trang chủ", href: "/student/home" },
    { label: "Đăng ký Môn", href: "/student/courses" },
    { label: "Lịch học", href: "/student/schedule" },
    { label: "Kết quả", href: "/student/grades" },
  ];

  // Mock student info
  const studentInfo = {
    name: "Nguyễn Văn Học Trò",
    role: "STUDENT",
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Modern Unified Header - Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-stone-900">QLDT</h1>
                <p className="text-xs text-stone-500 -mt-0.5">
                  Quản lý Đào tạo
                </p>{" "}
              </div>
            </div>{" "}
            {/* Segmented Control Navigation - Center with Animated Pill */}
            <SegmentedNav items={navItems} className="px-8" />
            {/* User Section - Right */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Notification Bell */}
              <button
                className="relative p-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-all duration-300"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-cream-50"></span>
              </button>

              {/* User Info */}
              <div className="hidden md:flex items-center gap-2 pl-3 border-l border-stone-300">
                <div className="text-right">
                  <p className="text-sm font-semibold text-stone-900 leading-tight">
                    {studentInfo.name}
                  </p>
                  <p className="text-xs text-stone-500">{studentInfo.role}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {studentInfo.name.charAt(0)}
                </div>
              </div>

              {/* Mobile Avatar Only */}
              <div className="md:hidden w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {studentInfo.name.charAt(0)}
              </div>

              {/* Logout Button */}
              <button
                type="button"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <Outlet />
    </div>
  );
}
