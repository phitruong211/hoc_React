import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainStudentLayout from "./pages/student/MainStudentLayout";
import StudentHome from "./pages/student/StudentHome";
import StudentCourses from "./pages/student/StudentCourses";
import StudentSchedule from "./pages/student/StudentSchedule";
import StudentGrades from "./pages/student/StudentGrades";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Placeholder routes - replace with actual components later */}
        <Route
          path="/admin/dashboard"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
          }
        />
        <Route
          path="/teacher/dashboard"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
            </div>
          }
        />

        {/* Student Routes with Layout */}
        <Route path="/student" element={<MainStudentLayout />}>
          <Route path="home" element={<StudentHome />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="schedule" element={<StudentSchedule />} />
          <Route path="grades" element={<StudentGrades />} />
        </Route>

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
