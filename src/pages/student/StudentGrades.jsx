import { Award, TrendingUp, CheckCircle, XCircle } from "lucide-react";

export default function StudentGrades() {
  // Mock grades data
  const gradesData = [
    {
      id: 1,
      courseCode: "CS101",
      courseName: "Nhập môn Lập trình",
      credits: 3,
      attendanceScore: 9.5,
      midtermScore: 8.5,
      finalScore: 9.0,
      totalScore: 8.83,
      letterGrade: "A",
      gpa: 4.0,
      status: "Đạt",
    },
    {
      id: 2,
      courseCode: "ENG101",
      courseName: "Tiếng Anh chuyên ngành",
      credits: 3,
      attendanceScore: 8.0,
      midtermScore: 7.5,
      finalScore: 8.0,
      totalScore: 7.75,
      letterGrade: "B+",
      gpa: 3.5,
      status: "Đạt",
    },
    {
      id: 3,
      courseCode: "MATH202",
      courseName: "Toán rời rạc",
      credits: 4,
      attendanceScore: null,
      midtermScore: null,
      finalScore: null,
      totalScore: null,
      letterGrade: null,
      gpa: null,
      status: "Đang học",
    },
  ];

  const summary = {
    totalCredits: 6,
    completedCredits: 6,
    gpa: 3.75,
    rank: "Khá",
  };

  const getGradeColor = (grade) => {
    if (!grade) return "text-gray-400";
    if (grade === "A" || grade === "A+") return "text-green-600";
    if (grade === "B+" || grade === "B") return "text-blue-600";
    if (grade === "C+" || grade === "C") return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusBadge = (status) => {
    if (status === "Đạt") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg bg-green-100 text-green-700 border border-green-200">
          <CheckCircle className="h-3 w-3" />
          Đạt
        </span>
      );
    }
    if (status === "Không đạt") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg bg-red-100 text-red-700 border border-red-200">
          <XCircle className="h-3 w-3" />
          Không đạt
        </span>
      );
    }
    return (
      <span className="px-2 py-1 text-xs font-medium rounded-lg bg-gray-100 text-gray-700 border border-gray-200">
        Đang học
      </span>
    );
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          Kết quả học tập
        </h1>
        <p className="text-stone-500">Xem điểm số và kết quả học tập của bạn</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-300 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <Award className="h-5 w-5 text-amber-600" />
            </div>
            <p className="text-sm text-stone-500">GPA</p>
          </div>
          <p className="text-3xl font-bold text-amber-600">{summary.gpa}</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-300 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-amber-700" />
            </div>
            <p className="text-sm text-stone-500">Xếp loại</p>
          </div>
          <p className="text-2xl font-bold text-stone-900">{summary.rank}</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-300 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-sm text-stone-500">TC hoàn thành</p>
          </div>
          <p className="text-2xl font-bold text-stone-900">
            {summary.completedCredits}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-300 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <Award className="h-5 w-5 text-amber-700" />
            </div>
            <p className="text-sm text-stone-500">Tổng TC</p>
          </div>
          <p className="text-2xl font-bold text-stone-900">
            {summary.totalCredits}
          </p>
        </div>
      </div>

      {/* Grades Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-6 border-b border-stone-200">
          <h2 className="text-xl font-bold text-stone-900">
            Bảng điểm chi tiết
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  Mã HP
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  Tên học phần
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  TC
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  CC (10%)
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  GK (30%)
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  CK (60%)
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  Tổng
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  Điểm chữ
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {gradesData.map((grade) => (
                <tr
                  key={grade.id}
                  className="hover:bg-stone-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-amber-600">
                      {grade.courseCode}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-stone-900">
                      {grade.courseName}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm text-stone-900">
                      {grade.credits}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm text-stone-900">
                      {grade.attendanceScore ?? "-"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm text-stone-900">
                      {grade.midtermScore ?? "-"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm text-stone-900">
                      {grade.finalScore ?? "-"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-bold text-stone-900">
                      {grade.totalScore ?? "-"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`text-lg font-bold ${getGradeColor(
                        grade.letterGrade
                      )}`}
                    >
                      {grade.letterGrade ?? "-"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {getStatusBadge(grade.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4">
        <p className="text-sm text-amber-700">
          <strong>Chú ý:</strong> CC: Chuyên cần, GK: Giữa kỳ, CK: Cuối kỳ. Điểm
          được tính theo thang điểm 10.
        </p>
      </div>
    </div>
  );
}
