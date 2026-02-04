import { useState } from "react";
import {
  Search,
  CheckCircle2,
  BookOpen,
  LayoutGrid,
  PlusCircle,
  XCircle,
  Clock,
  MapPin,
  User,
  AlertCircle,
} from "lucide-react";

export default function StudentCourses() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([1, 5]); // Mock enrolled courses

  // Mock data - replace with actual API data
  const availableCourses = [
    {
      id: 1,
      code: "CS101",
      name: "Nhập môn Lập trình",
      category: "REQUIRED",
      instructor: "TS. Nguyễn Văn A",
      credits: 3,
      enrolled: 45,
      capacity: 60,
      schedule: "T2, T4 (7:00-9:30)",
      room: "A101",
      type: "REQUIRED",
      status: "AVAILABLE",
    },
    {
      id: 2,
      code: "MATH202",
      name: "Toán rời rạc",
      category: "REQUIRED",
      instructor: "PGS.TS. Trần Thị B",
      credits: 4,
      enrolled: 58,
      capacity: 60,
      schedule: "T3, T5 (9:30-12:00)",
      room: "B205",
      type: "REQUIRED",
      status: "AVAILABLE",
    },
    {
      id: 3,
      code: "ENG301",
      name: "Tiếng Anh chuyên ngành IT",
      category: "REQUIRED",
      instructor: "ThS. Lê Văn C",
      credits: 3,
      enrolled: 60,
      capacity: 60,
      schedule: "T2, T6 (13:00-15:30)",
      room: "C102",
      type: "REQUIRED",
      status: "FULL",
    },
    {
      id: 4,
      code: "WEB201",
      name: "Phát triển Web",
      category: "ELECTIVE",
      instructor: "ThS. Phạm Thị D",
      credits: 3,
      enrolled: 35,
      capacity: 50,
      schedule: "T4, T6 (15:30-18:00)",
      room: "LAB1",
      type: "ELECTIVE",
      status: "AVAILABLE",
    },
    {
      id: 5,
      code: "DB301",
      name: "Cơ sở dữ liệu",
      category: "REQUIRED",
      instructor: "TS. Hoàng Văn E",
      credits: 4,
      enrolled: 42,
      capacity: 55,
      schedule: "T3, T5 (7:00-9:30)",
      room: "A203",
      type: "REQUIRED",
      status: "AVAILABLE",
    },
    {
      id: 6,
      code: "AI401",
      name: "Trí tuệ nhân tạo",
      category: "ELECTIVE",
      instructor: "PGS.TS. Đỗ Văn F",
      credits: 4,
      enrolled: 48,
      capacity: 50,
      schedule: "T2, T4 (9:30-12:00)",
      room: "B301",
      type: "ELECTIVE",
      status: "AVAILABLE",
    },
    {
      id: 7,
      code: "ART101",
      name: "Mỹ thuật đại cương",
      category: "ELECTIVE",
      instructor: "ThS. Nguyễn Thị H",
      credits: 2,
      enrolled: 10,
      capacity: 40,
      schedule: "T6 (13:00-15:30)",
      room: "C301",
      type: "ELECTIVE",
      status: "CONFLICT",
    },
    {
      id: 8,
      code: "ML401",
      name: "Machine Learning",
      category: "ELECTIVE",
      instructor: "TS. Vũ Thị G",
      credits: 3,
      enrolled: 40,
      capacity: 45,
      schedule: "T3, T6 (13:00-15:30)",
      room: "LAB2",
      type: "ELECTIVE",
      status: "AVAILABLE",
    },
  ];

  // Filter courses
  const filteredCourses = availableCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "ALL" || course.category === selectedCategory;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate stats
  const selectedCoursesData = availableCourses.filter((c) =>
    selectedCourses.includes(c.id)
  );
  const totalCredits = selectedCoursesData.reduce(
    (sum, c) => sum + c.credits,
    0
  );

  const toggleCourse = (id) => {
    if (selectedCourses.includes(id)) {
      setSelectedCourses((prev) => prev.filter((cId) => cId !== id));
    } else {
      setSelectedCourses((prev) => [...prev, id]);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-900">
              Đăng ký môn học
            </h1>
            <p className="text-stone-600">
              Chọn các môn học phù hợp với kế hoạch học tập của bạn
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 flex items-center justify-between">
            <div>
              <p className="text-sm text-stone-500 font-medium mb-1">
                Môn đã chọn
              </p>
              <p className="text-3xl font-bold text-amber-600">
                {selectedCourses.length}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 flex items-center justify-between">
            <div>
              <p className="text-sm text-stone-500 font-medium mb-1">
                Tổng tín chỉ
              </p>
              <p className="text-3xl font-bold text-amber-700">
                {totalCredits}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <LayoutGrid className="w-5 h-5 text-amber-700" />
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 flex items-center justify-between">
            <div>
              <p className="text-sm text-stone-500 font-medium mb-1">
                Môn khả dụng
              </p>
              <p className="text-3xl font-bold text-green-600">
                {
                  availableCourses.filter((c) => c.status === "AVAILABLE")
                    .length
                }
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <PlusCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>

        {/* Filter & Search Bar - STICKY */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 sticky top-20 z-30 bg-cream-50/95 backdrop-blur py-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              placeholder="Tìm kiếm môn học, mã môn, giảng viên..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-sm bg-white text-stone-900 placeholder:text-stone-400"
            />
          </div>
          <div className="flex bg-white p-1 rounded-xl border border-stone-200 shadow-sm overflow-x-auto">
            {[
              { id: "ALL", label: "Tất cả" },
              { id: "REQUIRED", label: "Bắt buộc" },
              { id: "ELECTIVE", label: "Tự chọn" },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md"
                      : "text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Grid - 4 columns */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-12 text-center">
            <div className="p-4 rounded-2xl bg-stone-100 w-fit mx-auto mb-4">
              <BookOpen className="h-12 w-12 text-stone-400" />
            </div>
            <p className="text-stone-500 text-lg">Không tìm thấy môn học nào</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCourses.map((course) => {
              const isSelected = selectedCourses.includes(course.id);
              const isConflict = course.status === "CONFLICT";
              const isFull = course.status === "FULL";

              return (
                <div
                  key={course.id}
                  className={`relative bg-white rounded-2xl border p-4 transition-all duration-300 hover:shadow-lg ${
                    isSelected
                      ? "border-amber-500 ring-2 ring-amber-500 bg-amber-50/30"
                      : "border-stone-200 hover:border-amber-300"
                  }`}
                >
                  {/* Badge Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
                      {course.code}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    )}
                  </div>

                  {/* Course Name */}
                  <h3 className="text-base font-bold text-stone-900 mb-3 line-clamp-2 min-h-[3rem]">
                    {course.name}
                  </h3>

                  {/* Type Badge */}
                  {course.type === "REQUIRED" && (
                    <span className="inline-block px-2 py-1 rounded-md bg-red-100 text-red-700 text-xs font-semibold mb-3">
                      Bắt buộc
                    </span>
                  )}
                  {course.type === "ELECTIVE" && (
                    <span className="inline-block px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
                      Tự chọn
                    </span>
                  )}

                  {/* Info Grid */}
                  <div className="space-y-2 mb-4 text-xs text-stone-600">
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="w-3.5 h-3.5 text-stone-400" />
                      <span className="font-medium">{course.credits} TC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-stone-400" />
                      <span>
                        {course.enrolled}/{course.capacity} SV
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span className="truncate">{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>P.{course.room}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="text-xs text-stone-500 mb-4 pb-4 border-t border-stone-100 pt-3">
                    <span className="font-semibold">GV: </span>
                    {course.instructor}
                  </div>

                  {/* Action Button */}
                  {isConflict ? (
                    <div className="flex items-center justify-center gap-2 text-red-500 bg-red-50 px-3 py-2 rounded-lg text-xs font-medium">
                      <AlertCircle className="w-4 h-4" />
                      Trùng lịch
                    </div>
                  ) : isFull && !isSelected ? (
                    <div className="flex items-center justify-center gap-2 text-stone-400 bg-stone-50 px-3 py-2 rounded-lg text-xs font-medium">
                      Đã đầy
                    </div>
                  ) : (
                    <button
                      onClick={() => toggleCourse(course.id)}
                      className={`w-full py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? "bg-white border-2 border-red-200 text-red-600 hover:bg-red-50"
                          : "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md hover:shadow-lg hover:scale-105"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Hủy
                        </>
                      ) : (
                        <>
                          <PlusCircle className="w-3.5 h-3.5" /> Đăng ký
                        </>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Sticky Bottom Action Bar */}
      {selectedCourses.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-stone-200 p-4 shadow-lg z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="hidden sm:block">
              <p className="text-sm text-stone-500">Đã chọn</p>
              <p className="text-lg font-bold text-stone-900">
                {selectedCourses.length} môn học{" "}
                <span className="text-stone-400 font-normal">
                  ({totalCredits} tín chỉ)
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setSelectedCourses([])}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl border-2 border-stone-300 text-stone-600 font-semibold hover:bg-stone-50 transition-colors"
              >
                Hủy tất cả
              </button>
              <button className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold shadow-lg shadow-amber-200 hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 active:scale-95">
                Xác nhận đăng ký
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
