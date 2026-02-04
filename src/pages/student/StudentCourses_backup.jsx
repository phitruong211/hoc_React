import { useState } from "react";
import {
  Search,
  CheckCircle2,
  XCircle,
  BookOpen,
  GraduationCap,
  MapPin,
  User,
  LayoutGrid,
  PlusCircle,
  AlertCircle,
  Clock,
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
      schedule: "Thứ 2, 4 (7:00 - 9:30)",
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
      schedule: "Thứ 3, 5 (9:30 - 12:00)",
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
      schedule: "Thứ 2, 6 (13:00 - 15:30)",
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
      schedule: "Thứ 4, 6 (15:30 - 18:00)",
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
      schedule: "Thứ 3, 5 (7:00 - 9:30)",
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
      schedule: "Thứ 2, 4 (9:30 - 12:00)",
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
      schedule: "Thứ 6 (13:00 - 15:30)",
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
      schedule: "Thứ 3, 6 (13:00 - 15:30)",
      room: "LAB2",
      type: "ELECTIVE",
      status: "AVAILABLE",
    },
  ];

  // Filter courses based on category and search
  const filteredCourses = availableCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "ALL" || course.category === selectedCategory;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate enrollment statistics
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
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-24">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-200">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Đăng ký môn học
            </h1>
            <p className="text-gray-500">
              Chọn các môn học phù hợp với kế hoạch học tập của bạn
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">
                Môn đã chọn
              </p>
              <p className="text-3xl font-bold text-violet-600">
                {selectedCourses.length}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-violet-600" />
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">
                Tổng tín chỉ
              </p>
              <p className="text-3xl font-bold text-fuchsia-600">
                {totalCredits}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-fuchsia-50 flex items-center justify-center">
              <LayoutGrid className="w-5 h-5 text-fuchsia-600" />
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">
                Môn khả dụng
              </p>
              <p className="text-3xl font-bold text-emerald-600">
                {
                  availableCourses.filter((c) => c.status === "AVAILABLE")
                    .length
                }
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <PlusCircle className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Filter & Search Bar - STICKY */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 sticky top-24 z-30 bg-gray-50/95 backdrop-blur py-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm môn học, mã môn, giảng viên..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent shadow-sm bg-white"
            />
          </div>
          <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
            {[
              { id: "ALL", label: "Tất cả (12)" },
              { id: "REQUIRED", label: "Bắt buộc (6)" },
              { id: "ELECTIVE", label: "Tự chọn (4)" },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-violet-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course List */}
        <div className="space-y-4">
          {filteredCourses.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
              <div className="p-4 rounded-2xl bg-gray-100 w-fit mx-auto mb-4">
                <BookOpen className="h-12 w-12 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">
                Không tìm thấy môn học nào
              </p>
            </div>
          ) : (
            filteredCourses.map((course) => {
              const isSelected = selectedCourses.includes(course.id);
              const isConflict = course.status === "CONFLICT";
              const isFull = course.status === "FULL";

              return (
                <div
                  key={course.id}
                  className={`relative bg-white rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? "border-violet-500 ring-1 ring-violet-500 bg-violet-50/30"
                      : "border-gray-100 hover:border-violet-200 hover:shadow-md"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      {/* Left: Main Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2.5 py-1 rounded-md bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider">
                            {course.code}
                          </span>
                          {course.type === "REQUIRED" && (
                            <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-700 text-xs font-bold">
                              Bắt buộc
                            </span>
                          )}
                          {isSelected && (
                            <span className="px-2.5 py-1 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Đã chọn
                            </span>
                          )}
                        </div>
                        <h3
                          className={`text-lg font-bold mb-4 ${
                            isSelected ? "text-violet-900" : "text-gray-900"
                          }`}
                        >
                          {course.name}
                        </h3>

                        {/* Meta Data Grid - WITH ICON BACKGROUND */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                              <LayoutGrid className="w-4 h-4 text-gray-500" />
                            </div>
                            <span className="font-medium">
                              {course.credits} Tín chỉ
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-gray-500" />
                            </div>
                            <span>
                              {course.enrolled}/{course.capacity} SV
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                              <Clock className="w-4 h-4 text-gray-500" />
                            </div>
                            <span>{course.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-4 h-4 text-gray-500" />
                            </div>
                            <span>Phòng {course.room}</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                          <span className="font-semibold text-gray-400 uppercase">
                            Giảng viên:
                          </span>
                          <span className="text-gray-700 font-medium">
                            {course.instructor}
                          </span>
                        </div>
                      </div>

                      {/* Right: Action Button */}
                      <div className="flex flex-col items-end justify-between min-w-[140px]">
                        {isConflict ? (
                          <div className="flex items-center gap-2 text-red-500 bg-red-50 px-3 py-2 rounded-lg text-sm font-medium w-full justify-center">
                            <AlertCircle className="w-4 h-4" />
                            Trùng lịch
                          </div>
                        ) : isFull && !isSelected ? (
                          <div className="flex items-center gap-2 text-gray-400 bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium w-full justify-center">
                            Đã đầy
                          </div>
                        ) : (
                          <button
                            onClick={() => toggleCourse(course.id)}
                            className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                              isSelected
                                ? "bg-white border-2 border-red-100 text-red-500 hover:bg-red-50 hover:border-red-200"
                                : "bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-700 hover:-translate-y-0.5"
                            }`}
                          >
                            {isSelected ? (
                              <>
                                <XCircle className="w-4 h-4" /> Hủy chọn
                              </>
                            ) : (
                              <>
                                <PlusCircle className="w-4 h-4" /> Đăng ký
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      {selectedCourses.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="hidden sm:block">
              <p className="text-sm text-gray-500">Đã chọn</p>
              <p className="text-lg font-bold text-violet-900">
                {selectedCourses.length} môn học{" "}
                <span className="text-gray-400 font-normal">
                  ({totalCredits} tín chỉ)
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setSelectedCourses([])}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
              >
                Hủy tất cả
              </button>
              <button className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-violet-600 text-white font-bold shadow-lg shadow-violet-200 hover:bg-violet-700 transition-all transform hover:-translate-y-0.5">
                Xác nhận đăng ký
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
