import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Applications from "./pages/Applications";
import Documents from "./pages/Documents";
import Matching from "./pages/Matching";
import InterviewAI from "./pages/InterviewAI";
import Settings from "./pages/Settings";

import ProtectedRoute from "./context/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages publiques */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Pages protégées */}

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/matching" element={<Matching />} />
            <Route path="/interview" element={<InterviewAI />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}