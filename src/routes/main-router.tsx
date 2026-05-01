import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/dashboard";
import { Tasks } from "../pages/tasks";
import { EditTask } from "../pages/edit-task";
import { Auth } from "../pages/auth";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
