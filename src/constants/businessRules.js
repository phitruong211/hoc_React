// Business Rules Constants

// Class Status
export const CLASS_STATUS = {
  OPEN: "OPEN",
  CLOSED: "CLOSED",
  PENDING: "PENDING",
};

// Enrollment Status
export const ENROLLMENT_STATUS = {
  ACTIVE: "ACTIVE",
  DROPPED: "DROPPED",
  PENDING: "PENDING",
};

// Attendance Status
export const ATTENDANCE_STATUS = {
  PRESENT: "PRESENT",
  ABSENT: "ABSENT",
  LATE: "LATE",
  EXCUSED: "EXCUSED",
};

// Grade Ranges
export const GRADE_RANGES = {
  A: { min: 8.5, max: 10, label: "A - Xuất sắc" },
  B: { min: 7.0, max: 8.49, label: "B - Giỏi" },
  C: { min: 5.5, max: 6.99, label: "C - Khá" },
  D: { min: 4.0, max: 5.49, label: "D - Trung bình" },
  F: { min: 0, max: 3.99, label: "F - Yếu" },
};

// Grade Weights
export const GRADE_WEIGHTS = {
  MIDTERM: 0.3,
  FINAL: 0.6,
  OTHER: 0.1,
};

// Validation Rules
export const VALIDATION_RULES = {
  GRADE_MIN: 0,
  GRADE_MAX: 10,
  MIN_ATTENDANCE_PERCENT: 0,
  MAX_ATTENDANCE_PERCENT: 100,
};
