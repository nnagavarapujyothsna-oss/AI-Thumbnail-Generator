import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Toast from "./components/Toast";
import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage";
import Community from "./pages/Community";
import Generate from "./pages/Generate";
import Home from "./pages/Home";
import MyGenerations from "./pages/MyGenerations";

const App = () => {
  const [toast, setToast] = useState({ type: "info", message: "" });

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/generate"
          element={
            <ProtectedRoute>
              <Generate setToast={setToast} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-generations"
          element={
            <ProtectedRoute>
              <MyGenerations setToast={setToast} />
            </ProtectedRoute>
          }
        />
        <Route path="/community" element={<Community setToast={setToast} />} />
        <Route path="/login" element={<AuthPage mode="login" setToast={setToast} />} />
        <Route path="/signup" element={<AuthPage mode="signup" setToast={setToast} />} />
      </Routes>
      <Toast toast={toast} onClose={() => setToast({ type: "info", message: "" })} />
    </MainLayout>
  );
};

export default App;