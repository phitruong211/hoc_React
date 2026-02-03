// Role constants
export const ROLES = {
  ADMIN: "ADMIN",
  TEACHER: "TEACHER",
  STUDENT: "STUDENT",
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: ["*"], // Quản lý toàn bộ
  [ROLES.TEACHER]: [
    "manage_class",
    "take_attendance",
    "enter_grades",
    "view_own_classes",
  ],
  [ROLES.STUDENT]: ["view_own_info", "view_own_grades", "view_own_attendance"],
};
