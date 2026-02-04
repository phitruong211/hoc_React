import axios from "axios";

// ============================================
// API BASE CONFIGURATION
// ============================================

// Base URL - Thay đổi theo môi trường
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

// Tạo Axios instance với cấu hình mặc định
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// ============================================
// REQUEST INTERCEPTOR
// ============================================
// Tự động thêm token vào mỗi request
apiClient.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } // Log request trong development mode
    if (import.meta.env.DEV) {
      console.log("// API Request:", {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
        headers: config.headers,
      });
    }

    return config;
  },
  (error) => {
    console.error("// Request Error:", error);
    return Promise.reject(error);
  }
);

// ============================================
// RESPONSE INTERCEPTOR
// ============================================
// Xử lý response và error tự động
apiClient.interceptors.response.use(
  (response) => {
    // Log response trong development mode
    if (import.meta.env.DEV) {
      console.log("// API Response:", {
        status: response.status,
        data: response.data,
      });
    }

    return response.data; // Chỉ trả về data, không cần response wrapper
  },
  async (error) => {
    const originalRequest = error.config;

    // Log error
    console.error("// API Error:", {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      url: originalRequest?.url,
    });

    // Handle 401 Unauthorized - Token hết hạn
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Lấy refresh token
        const refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken) {
          // Gọi API refresh token
          const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refreshToken,
          });

          const { accessToken } = response.data;

          // Lưu token mới
          localStorage.setItem("accessToken", accessToken);

          // Retry request với token mới
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh token thất bại -> Logout
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    } // Handle 403 Forbidden - Không có quyền truy cập
    if (error.response?.status === 403) {
      // Có thể redirect về trang không có quyền
      console.error("// Access Denied");
    }

    // Handle 404 Not Found
    if (error.response?.status === 404) {
      console.error("// Resource Not Found");
    }

    // Handle 500 Internal Server Error
    if (error.response?.status === 500) {
      console.error("// Server Error");
    }

    // Trả về lỗi với format chuẩn
    return Promise.reject({
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      errors: error.response?.data?.errors || [],
    });
  }
);

// ============================================
// API ENDPOINTS
// ============================================

// === AUTH APIs ===
export const authAPI = {
  // Đăng nhập
  login: (credentials) => apiClient.post("/auth/login", credentials),

  // Đăng ký
  register: (userData) => apiClient.post("/auth/register", userData),

  // Đăng xuất
  logout: () => apiClient.post("/auth/logout"),

  // Refresh token
  refreshToken: (refreshToken) =>
    apiClient.post("/auth/refresh", { refreshToken }),

  // Quên mật khẩu
  forgotPassword: (email) => apiClient.post("/auth/forgot-password", { email }),

  // Reset mật khẩu
  resetPassword: (token, newPassword) =>
    apiClient.post("/auth/reset-password", { token, newPassword }),

  // Xác thực email
  verifyEmail: (token) => apiClient.post("/auth/verify-email", { token }),

  // Lấy thông tin user hiện tại
  getCurrentUser: () => apiClient.get("/auth/me"),
};

// === STUDENT APIs ===
export const studentAPI = {
  // Lấy thông tin sinh viên
  getProfile: (studentId) => apiClient.get(`/students/${studentId}`),

  // Cập nhật thông tin sinh viên
  updateProfile: (studentId, data) =>
    apiClient.put(`/students/${studentId}`, data),

  // Lấy danh sách môn học đã đăng ký
  getEnrolledCourses: (studentId, params) =>
    apiClient.get(`/students/${studentId}/courses`, { params }),

  // Lấy lịch học
  getSchedule: (studentId, params) =>
    apiClient.get(`/students/${studentId}/schedule`, { params }),

  // Lấy điểm số
  getGrades: (studentId, params) =>
    apiClient.get(`/students/${studentId}/grades`, { params }),

  // Lấy thông báo
  getNotifications: (studentId, params) =>
    apiClient.get(`/students/${studentId}/notifications`, { params }),

  // Đánh dấu thông báo đã đọc
  markNotificationRead: (studentId, notificationId) =>
    apiClient.put(
      `/students/${studentId}/notifications/${notificationId}/read`
    ),
};

// === COURSE APIs ===
export const courseAPI = {
  // Lấy danh sách tất cả môn học
  getAll: (params) => apiClient.get("/courses", { params }),

  // Lấy chi tiết môn học
  getById: (courseId) => apiClient.get(`/courses/${courseId}`),

  // Lấy danh sách môn học khả dụng để đăng ký
  getAvailableCourses: (params) =>
    apiClient.get("/courses/available", { params }),

  // Tìm kiếm môn học
  search: (query, params) =>
    apiClient.get("/courses/search", { params: { q: query, ...params } }),

  // Lấy các lớp học của môn
  getClasses: (courseId, params) =>
    apiClient.get(`/courses/${courseId}/classes`, { params }),

  // Đăng ký môn học
  enroll: (courseId, classId) =>
    apiClient.post("/enrollments", { courseId, classId }),

  // Hủy đăng ký môn học
  unenroll: (enrollmentId) => apiClient.delete(`/enrollments/${enrollmentId}`),

  // Lấy danh sách sinh viên trong môn
  getStudents: (courseId, classId) =>
    apiClient.get(`/courses/${courseId}/classes/${classId}/students`),
};

// === GRADE APIs ===
export const gradeAPI = {
  // Lấy điểm của sinh viên theo môn
  getByCourse: (studentId, courseId) =>
    apiClient.get(`/grades/student/${studentId}/course/${courseId}`),

  // Lấy bảng điểm tổng hợp
  getTranscript: (studentId, params) =>
    apiClient.get(`/grades/student/${studentId}/transcript`, { params }),

  // Lấy GPA
  getGPA: (studentId) => apiClient.get(`/grades/student/${studentId}/gpa`),

  // Xuất bảng điểm (PDF)
  exportTranscript: (studentId) =>
    apiClient.get(`/grades/student/${studentId}/export`, {
      responseType: "blob",
    }),
};

// === SCHEDULE APIs ===
export const scheduleAPI = {
  // Lấy lịch học theo tuần
  getWeekly: (studentId, startDate) =>
    apiClient.get(`/schedules/student/${studentId}/weekly`, {
      params: { startDate },
    }),

  // Lấy lịch học theo tháng
  getMonthly: (studentId, year, month) =>
    apiClient.get(`/schedules/student/${studentId}/monthly`, {
      params: { year, month },
    }),

  // Lấy lịch thi
  getExamSchedule: (studentId, params) =>
    apiClient.get(`/schedules/student/${studentId}/exams`, { params }),

  // Kiểm tra xung đột lịch
  checkConflict: (studentId, courseId, classId) =>
    apiClient.post("/schedules/check-conflict", {
      studentId,
      courseId,
      classId,
    }),
};

// === TEACHER APIs (nếu cần) ===
export const teacherAPI = {
  // Lấy danh sách lớp giảng dạy
  getClasses: (teacherId, params) =>
    apiClient.get(`/teachers/${teacherId}/classes`, { params }),

  // Lấy danh sách sinh viên
  getStudents: (teacherId, classId) =>
    apiClient.get(`/teachers/${teacherId}/classes/${classId}/students`),

  // Nhập điểm
  submitGrades: (teacherId, classId, grades) =>
    apiClient.post(`/teachers/${teacherId}/classes/${classId}/grades`, {
      grades,
    }),

  // Điểm danh
  takeAttendance: (teacherId, classId, date, attendance) =>
    apiClient.post(`/teachers/${teacherId}/classes/${classId}/attendance`, {
      date,
      attendance,
    }),
};

// === ADMIN APIs (nếu cần) ===
export const adminAPI = {
  // Quản lý người dùng
  getUsers: (params) => apiClient.get("/admin/users", { params }),
  createUser: (userData) => apiClient.post("/admin/users", userData),
  updateUser: (userId, userData) =>
    apiClient.put(`/admin/users/${userId}`, userData),
  deleteUser: (userId) => apiClient.delete(`/admin/users/${userId}`),

  // Quản lý môn học
  getCourses: (params) => apiClient.get("/admin/courses", { params }),
  createCourse: (courseData) => apiClient.post("/admin/courses", courseData),
  updateCourse: (courseId, courseData) =>
    apiClient.put(`/admin/courses/${courseId}`, courseData),
  deleteCourse: (courseId) => apiClient.delete(`/admin/courses/${courseId}`),

  // Thống kê
  getStatistics: (params) => apiClient.get("/admin/statistics", { params }),
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Upload file
export const uploadFile = async (file, onProgress) => {
  const formData = new FormData();
  formData.append("file", file);

  return apiClient.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      if (onProgress && progressEvent.total) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgress(percentCompleted);
      }
    },
  });
};

// Download file
export const downloadFile = async (url, filename) => {
  const response = await apiClient.get(url, {
    responseType: "blob",
  });

  const blob = new Blob([response]);
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(link.href);
};

// Export default apiClient để sử dụng trực tiếp nếu cần
export default apiClient;
