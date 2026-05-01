import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  username: string;
  email: string;
};

const initialState: AuthUser = {
  username: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<AuthUser>) => {
      console.log("Cheguei aqui");
      const user = action.payload;
      state.email = user.email;
      state.username = user.username;
    },
    signIn: (state, action: PayloadAction<AuthUser>) => {
      const user = action.payload;
      state.email = user.email;
      state.username = user.username;
    },
  },
});

export const { signUp, signIn } = authSlice.actions;

export default authSlice.reducer;
