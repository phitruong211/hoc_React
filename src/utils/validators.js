/**
 * Trình kiểm tra Logic Nghiệp vụ
 * Các hàm validate theo nghiệp vụ hệ thống
 */

import { CLASS_STATUS, ENROLLMENT_STATUS } from "../constants/businessRules";

/**
 * Kiểm tra tạo học viên
 */
export const validateStudentCreation = (studentData, existingStudents = []) => {
  const errors = {};

  // Mã học viên bắt buộc
  if (!studentData.studentCode || studentData.studentCode.trim() === "") {
    errors.studentCode = "Mã học viên là bắt buộc";
  }

  // Mã học viên không được trùng
  if (existingStudents.some((s) => s.studentCode === studentData.studentCode)) {
    errors.studentCode = "Mã học viên đã tồn tại";
  }

  // Email không được trùng (nếu có)
  if (studentData.email) {
    if (existingStudents.some((s) => s.email === studentData.email)) {
      errors.email = "Email đã được sử dụng";
    }
  }

  // Ngày sinh không lớn hơn ngày hiện tại
  if (studentData.birthDate) {
    const birthDate = new Date(studentData.birthDate);
    const today = new Date();
    if (birthDate > today) {
      errors.birthDate = "Ngày sinh không được lớn hơn ngày hiện tại";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Kiểm tra tạo lớp học
 */
export const validateClassCreation = (classData, existingClasses = []) => {
  const errors = {};

  // classCode phải unique
  if (!classData.classCode || classData.classCode.trim() === "") {
    errors.classCode = "Mã lớp là bắt buộc";
  }
  if (existingClasses.some((c) => c.classCode === classData.classCode)) {
    errors.classCode = "Mã lớp đã tồn tại";
  }

  // Phải chọn môn học
  if (!classData.subjectId) {
    errors.subjectId = "Phải chọn môn học";
  }

  // Phải chọn giáo viên
  if (!classData.teacherId) {
    errors.teacherId = "Phải chọn giáo viên";
  }

  // startDate <= endDate
  if (classData.startDate && classData.endDate) {
    const start = new Date(classData.startDate);
    const end = new Date(classData.endDate);
    if (start > end) {
      errors.dateRange = "Ngày bắt đầu phải nhỏ hơn hoặc bằng ngày kết thúc";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Kiểm tra đăng ký học
 */
export const validateEnrollment = (
  studentId,
  classData,
  existingEnrollments = []
) => {
  const errors = {};

  // Không cho đăng ký nếu lớp CLOSED
  if (classData.status === CLASS_STATUS.CLOSED) {
    errors.class = "Lớp học đã đóng, không thể đăng ký";
  }

  // Một học viên không được đăng ký trùng 1 lớp
  const existingEnrollment = existingEnrollments.find(
    (e) =>
      e.studentId === studentId &&
      e.classId === classData.id &&
      e.status === ENROLLMENT_STATUS.ACTIVE
  );
  if (existingEnrollment) {
    errors.enrollment = "Học viên đã đăng ký lớp này";
  }

  // Không vượt quá maxStudents
  const currentStudents = existingEnrollments.filter(
    (e) => e.classId === classData.id && e.status === ENROLLMENT_STATUS.ACTIVE
  ).length;

  if (classData.maxStudents && currentStudents >= classData.maxStudents) {
    errors.capacity = "Lớp học đã đầy";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Kiểm tra nhập điểm
 */
export const validateGradeEntry = (grade) => {
  const errors = {};
  const gradeValue = parseFloat(grade);

  if (isNaN(gradeValue)) {
    errors.grade = "Điểm phải là số";
  } else if (gradeValue < 0 || gradeValue > 10) {
    errors.grade = "Điểm phải nằm trong khoảng 0-10";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Kiểm tra ngày buổi học
 */
export const validateSessionDate = (sessionDate, classData) => {
  const errors = {};
  const session = new Date(sessionDate);
  const start = new Date(classData.startDate);
  const end = new Date(classData.endDate);

  // Ngày học nằm trong thời gian lớp
  if (session < start || session > end) {
    errors.sessionDate = "Ngày học phải nằm trong thời gian của lớp";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Kiểm tra có thể xóa học viên không
 */
export const canDeleteStudent = (student, enrollments = [], grades = []) => {
  const hasEnrollments = enrollments.some((e) => e.studentId === student.id);
  const hasGrades = grades.some((g) => g.studentId === student.id);

  return {
    canDelete: !hasEnrollments && !hasGrades,
    reason: hasEnrollments
      ? "Học viên đã đăng ký lớp"
      : hasGrades
      ? "Học viên đã có điểm"
      : null,
  };
};

/**
 * Kiểm tra có thể xóa môn học không
 */
export const canDeleteSubject = (subject, classes = []) => {
  const hasClasses = classes.some((c) => c.subjectId === subject.id);

  return {
    canDelete: !hasClasses,
    reason: hasClasses ? "Môn học đã được gán cho lớp" : null,
  };
};
