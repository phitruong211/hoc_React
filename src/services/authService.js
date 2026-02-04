import { authAPI } from "./api";

// ============================================
// AUTHENTICATION SERVICE
// ============================================

/**
 * Service quản lý authentication và authorization
 * Xử lý login, logout, token management
 */

class AuthService {
  constructor() {
    this.TOKEN_KEY = "accessToken";
    this.REFRESH_TOKEN_KEY = "refreshToken";
    this.USER_KEY = "user";
  }

  // ============================================
  // TOKEN MANAGEMENT
  // ============================================

  /**
   * Lưu token vào localStorage
   */
  setTokens(accessToken, refreshToken) {
    if (accessToken) {
      localStorage.setItem(this.TOKEN_KEY, accessToken);
    }
    if (refreshToken) {
      localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    }
  }

  /**
   * Lấy access token
   */
  getAccessToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Lấy refresh token
   */
  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  /**
   * Xóa tất cả tokens
   */
  clearTokens() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  /**
   * Kiểm tra có token hay không
   */
  hasToken() {
    return !!this.getAccessToken();
  }

  // ============================================
  // USER MANAGEMENT
  // ============================================

  /**
   * Lưu thông tin user
   */
  setUser(user) {
    if (user) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  /**
   * Lấy thông tin user
   */
  getUser() {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        console.error("Error parsing user data:", error);
        return null;
      }
    }
    return null;
  }

  /**
   * Xóa thông tin user
   */
  clearUser() {
    localStorage.removeItem(this.USER_KEY);
  }

  /**
   * Kiểm tra user đã đăng nhập chưa
   */
  isAuthenticated() {
    return this.hasToken() && this.getUser() !== null;
  }

  /**
   * Lấy role của user
   */
  getUserRole() {
    const user = this.getUser();
    return user?.role || null;
  }

  /**
   * Kiểm tra user có role cụ thể không
   */
  hasRole(role) {
    const userRole = this.getUserRole();
    if (Array.isArray(role)) {
      return role.includes(userRole);
    }
    return userRole === role;
  }

  /**
   * Kiểm tra user có quyền cụ thể không
   */
  hasPermission(permission) {
    const user = this.getUser();
    const permissions = user?.permissions || [];
    return permissions.includes(permission);
  }

  // ============================================
  // AUTHENTICATION ACTIONS
  // ============================================

  /**
   * Đăng nhập
   * @param {Object} credentials - { email, password }
   * @returns {Promise<Object>} User data
   */
  async login(credentials) {
    try {
      const response = await authAPI.login(credentials);

      const { accessToken, refreshToken, user } = response; // Lưu tokens và user info
      this.setTokens(accessToken, refreshToken);
      this.setUser(user);

      console.log("// Login successful:", user);
      return { success: true, user };
    } catch (error) {
      console.error("// Login failed:", error);
      throw error;
    }
  }

  /**
   * Đăng ký
   * @param {Object} userData - Thông tin đăng ký
   * @returns {Promise<Object>} User data
   */
  async register(userData) {
    try {
      const response = await authAPI.register(userData);

      const { accessToken, refreshToken, user } = response;

      // Lưu tokens và user info (tùy backend có tự động login hay không)
      if (accessToken) {
        this.setTokens(accessToken, refreshToken);
        this.setUser(user);
      }

      console.log("// Registration successful");
      return { success: true, user };
    } catch (error) {
      console.error("// Registration failed:", error);
      throw error;
    }
  }

  /**
   * Đăng xuất
   */
  async logout() {
    try {
      // Gọi API logout (optional - tùy backend)
      await authAPI.logout();
    } catch (error) {
      console.error("// Logout API failed:", error);
      // Vẫn clear local storage dù API fail
    } finally {
      // Xóa tất cả thông tin local
      this.clearTokens();
      this.clearUser();
      console.log("// Logout successful");
    }
  }

  /**
   * Refresh access token
   */
  async refreshAccessToken() {
    try {
      const refreshToken = this.getRefreshToken();

      if (!refreshToken) {
        throw new Error("No refresh token available");
      }

      const response = await authAPI.refreshToken(refreshToken);
      const { accessToken } = response; // Cập nhật access token mới
      this.setTokens(accessToken, null);

      console.log("// Token refreshed successfully");
      return accessToken;
    } catch (error) {
      console.error("// Token refresh failed:", error);

      // Refresh token hết hạn -> logout
      this.logout();
      throw error;
    }
  }

  /**
   * Quên mật khẩu
   */ async forgotPassword(email) {
    try {
      await authAPI.forgotPassword(email);
      console.log("// Password reset email sent");
      return { success: true };
    } catch (error) {
      console.error("// Forgot password failed:", error);
      throw error;
    }
  }

  /**
   * Reset mật khẩu
   */
  async resetPassword(token, newPassword) {
    try {
      await authAPI.resetPassword(token, newPassword);
      console.log("// Password reset successful");
      return { success: true };
    } catch (error) {
      console.error("// Password reset failed:", error);
      throw error;
    }
  }

  /**
   * Xác thực email
   */
  async verifyEmail(token) {
    try {
      await authAPI.verifyEmail(token);
      console.log("// Email verified successfully");
      return { success: true };
    } catch (error) {
      console.error("// Email verification failed:", error);
      throw error;
    }
  }

  /**
   * Lấy thông tin user hiện tại từ server
   */
  async getCurrentUser() {
    try {
      const user = await authAPI.getCurrentUser();
      this.setUser(user);
      return user;
    } catch (error) {
      console.error("// Get current user failed:", error);
      throw error;
    }
  }

  /**
   * Cập nhật thông tin user local (sau khi cập nhật profile)
   */
  updateLocalUser(updates) {
    const currentUser = this.getUser();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...updates };
      this.setUser(updatedUser);
    }
  }
}

// Export singleton instance
const authService = new AuthService();
export default authService;
