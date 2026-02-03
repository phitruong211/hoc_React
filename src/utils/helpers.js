import { GRADE_RANGES, GRADE_WEIGHTS } from "../constants/businessRules";

/**
 * Format date to DD/MM/YYYY
 */
export const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Format date to YYYY-MM-DD for input
 */
export const formatDateForInput = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().split("T")[0];
};

/**
 * Check if date is valid and not in the future
 */
export const isValidBirthDate = (date) => {
  if (!date) return false;
  const birthDate = new Date(date);
  const today = new Date();
  return birthDate <= today;
};

/**
 * Check if date range is valid (start <= end)
 */
export const isValidDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) return false;
  return new Date(startDate) <= new Date(endDate);
};

/**
 * Calculate total score based on grade weights
 */
export const calculateTotalScore = (midterm, final, other) => {
  const mid = parseFloat(midterm) || 0;
  const fin = parseFloat(final) || 0;
  const oth = parseFloat(other) || 0;

  return (
    mid * GRADE_WEIGHTS.MIDTERM +
    fin * GRADE_WEIGHTS.FINAL +
    oth * GRADE_WEIGHTS.OTHER
  ).toFixed(2);
};

/**
 * Get grade classification based on total score
 */
export const getGradeClassification = (totalScore) => {
  const score = parseFloat(totalScore);

  if (score >= GRADE_RANGES.A.min) return "A";
  if (score >= GRADE_RANGES.B.min) return "B";
  if (score >= GRADE_RANGES.C.min) return "C";
  if (score >= GRADE_RANGES.D.min) return "D";
  return "F";
};

/**
 * Get grade label with description
 */
export const getGradeLabel = (totalScore) => {
  const classification = getGradeClassification(totalScore);
  return GRADE_RANGES[classification].label;
};

/**
 * Calculate attendance percentage
 */
export const calculateAttendanceRate = (present, late, excused, total) => {
  if (total === 0) return 0;
  return (((present + late + excused) / total) * 100).toFixed(2);
};

/**
 * Validate grade value
 */
export const isValidGrade = (grade) => {
  const g = parseFloat(grade);
  return !isNaN(g) && g >= 0 && g <= 10;
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  return phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
};

/**
 * Generate unique code
 */
export const generateCode = (prefix) => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `${prefix}${timestamp}${random}`;
};
