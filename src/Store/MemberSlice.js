import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = memberSlice.actions;

export default memberSlice;
