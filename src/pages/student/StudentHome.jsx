import { Book, TrendingUp, Bell, Clock, CheckCircle2 } from "lucide-react";

export default function StudentHome() {
  // Mock data - replace with actual data from API
  const studentInfo = {
    credits: { current: 45, total: 120 },
    gpa: { current: 3.45, max: 4.0 },
  };

  const courses = [
    {
      id: 1,
      code: "CS101",
      name: "Nhập môn Lập trình",
      status: "ACTIVE",
      progress: 75,
      grade: "A",
      credits: 3,
    },
    {
      id: 2,
      code: "ENG101",
      name: "Tiếng Anh chuyên ngành",
      status: "ACTIVE",
      progress: 40,
      grade: null,
      credits: 3,
    },
    {
      id: 3,
      code: "MATH202",
      name: "Toán rời rạc",
      status: "ACTIVE",
      progress: 60,
      grade: null,
      credits: 4,
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "warning",
      title: "Hạn nộp học phí",
      description: "Vui lòng hoàn thành đóng học phí trước ngày 15/05.",
      time: "2 giờ trước",
    },
    {
      id: 2,
      type: "success",
      title: "Đăng ký lớp thành công",
      description: "Bạn đã vào lớp CS101 thành công.",
      time: "1 ngày trước",
    },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      ACTIVE: "bg-green-100 text-green-700 border border-green-200",
      PENDING: "bg-yellow-100 text-yellow-700 border border-yellow-200",
      COMPLETED: "bg-gray-100 text-gray-700 border border-gray-200",
    };
    return styles[status] || styles.ACTIVE;
  };

  const getNotificationIcon = (type) => {
    if (type === "warning")
      return <Clock className="h-5 w-5 text-orange-500" />;
    if (type === "success")
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    return <Bell className="h-5 w-5 text-blue-500" />;
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Course List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Credits Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-300 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <Book className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-1">
                    Số tín chỉ tích lũy
                  </p>
                  <p className="text-2xl font-bold text-stone-900">
                    {studentInfo.credits.current} / {studentInfo.credits.total}
                  </p>
                </div>
              </div>
            </div>

            {/* GPA Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-300 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-1">GPA hiện tại</p>
                  <p className="text-2xl font-bold text-stone-900">
                    {studentInfo.gpa.current} / {studentInfo.gpa.max}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
            <h2 className="text-xl font-bold text-stone-900 mb-4">
              Lớp học phần đang tham gia
            </h2>
            <div className="space-y-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="border border-stone-200 rounded-2xl p-4 hover:shadow-md hover:border-amber-300 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-amber-600 hover:text-amber-700 cursor-pointer">
                          {course.code} - {course.name}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-lg ${getStatusBadge(
                            course.status
                          )}`}
                        >
                          {course.status}
                        </span>
                      </div>
                    </div>
                    {course.grade && (
                      <div className="ml-4 text-right">
                        <p className="text-xs text-stone-500">Điểm dự kiến</p>
                        <p className="text-2xl font-bold text-amber-600">
                          {course.grade}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-stone-500">Tiến độ</span>
                      <span className="font-semibold text-stone-900">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Notifications */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 sticky top-28">
            <h2 className="text-xl font-bold text-stone-900 mb-4">
              Thông báo mới
            </h2>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex gap-3 p-3 rounded-xl hover:bg-stone-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-stone-900 mb-1">
                      {notification.title}
                    </p>
                    <p className="text-sm text-stone-500 mb-2">
                      {notification.description}
                    </p>
                    <p className="text-xs text-stone-500">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
