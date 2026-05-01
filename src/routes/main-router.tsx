import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/dashboard";
import { Tasks } from "../pages/tasks";
import { EditTask } from "../pages/edit-task";
import { Auth } from "../pages/auth";
import { useAppSelector } from "../hooks/redux/useAppSelector";

const MainRouter = () => {
  const user = useAppSelector((state) => state.AuthUser);
  const isAuth = user.email.length > 0;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Navigate to="/dashboard" /> : <Auth />}
        />
        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/tasks"
          element={isAuth ? <Tasks /> : <Navigate to="/" />}
        />
        <Route
          path="/tasks/:id"
          element={isAuth ? <EditTask /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
