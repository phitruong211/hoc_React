import { Calendar, Clock, MapPin, Video } from "lucide-react";

export default function StudentSchedule() {
  // Mock schedule data
  const scheduleData = [
    {
      id: 1,
      courseCode: "CS101",
      courseName: "Nhập môn Lập trình",
      day: "Thứ Hai",
      time: "08:00 - 10:00",
      room: "A101",
      type: "Lý thuyết",
      teacher: "TS. Nguyễn Văn A",
      isOnline: false,
    },
    {
      id: 2,
      courseCode: "ENG101",
      courseName: "Tiếng Anh chuyên ngành",
      day: "Thứ Ba",
      time: "13:00 - 15:00",
      room: "B205",
      type: "Thực hành",
      teacher: "ThS. Trần Thị B",
      isOnline: false,
    },
    {
      id: 3,
      courseCode: "MATH202",
      courseName: "Toán rời rạc",
      day: "Thứ Tư",
      time: "15:00 - 17:00",
      room: "Online",
      type: "Lý thuyết",
      teacher: "PGS.TS. Lê Văn C",
      isOnline: true,
    },
  ];

  const daysOfWeek = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          Lịch học tuần này
        </h1>
        <p className="text-stone-500">
          Xem lịch học và sắp xếp thời gian hợp lý
        </p>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {daysOfWeek.map((day) => {
          const daySchedule = scheduleData.filter(
            (schedule) => schedule.day === day
          );

          return (
            <div
              key={day}
              className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-300 transition-all duration-300"
            >
              <h3 className="font-bold text-stone-900 mb-4 text-center pb-2 border-b border-stone-200">
                {day}
              </h3>

              {daySchedule.length > 0 ? (
                <div className="space-y-3">
                  {daySchedule.map((schedule) => (
                    <div
                      key={schedule.id}
                      className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 hover:border-amber-300 transition-all duration-300"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        {schedule.isOnline ? (
                          <Video className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-amber-700">
                            {schedule.courseCode}
                          </p>
                          <p className="text-xs text-stone-600 line-clamp-2">
                            {schedule.courseName}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-stone-600">
                          <Clock className="h-3 w-3" />
                          <span>{schedule.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-600">
                          {schedule.isOnline ? (
                            <>
                              <Video className="h-3 w-3" />
                              <span className="text-amber-600 font-medium">
                                Online
                              </span>
                            </>
                          ) : (
                            <>
                              <MapPin className="h-3 w-3" />
                              <span>Phòng {schedule.room}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="mt-2 pt-2 border-t border-amber-200">
                        <p className="text-xs text-stone-500">
                          {schedule.teacher}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-stone-400 text-sm">
                  Không có lịch học
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
        <h3 className="font-bold text-stone-900 mb-4">Chú thích</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-amber-600" />
            <span className="text-sm text-stone-600">Học trực tiếp</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="h-5 w-5 text-amber-600" />
            <span className="text-sm text-stone-600">Học online</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-amber-600" />
            <span className="text-sm text-stone-600">Lịch học cố định</span>
          </div>
        </div>
      </div>
    </div>
  );
}
