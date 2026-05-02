import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Task = {
  title: string;
  time: string;
  status: string;
  description: string;
};

type Tasks = {
  morning: Task;
  afternoon: Task;
  evening: Task;
};

type TasksTypes = {
  tasks: Tasks[];
};

const initialState: TasksTypes = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    listTasks: (state, action: PayloadAction<Tasks[]>) => {
      const tasks = action.payload;
      state.tasks = tasks;
    },
  },
});

export const { listTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
