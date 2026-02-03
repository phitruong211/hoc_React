import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

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
        <Route
          path="/student/profile"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold">Student Profile</h1>
            </div>
          }
        />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
