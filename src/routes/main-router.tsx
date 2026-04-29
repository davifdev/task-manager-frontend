import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";
import Login from "../pages/login";
import Tasks from "../pages/tasks";
import { Sidebar } from "../components/sidebar";
import EditTask from "../pages/edit-task";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
