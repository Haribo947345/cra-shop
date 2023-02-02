import { configureStore, createSlice } from "@reduxjs/toolkit";

const baskets = createSlice({
  name: "baskets",
  initialState: JSON.parse(localStorage.getItem("baskets")),
  reducers: {
    ChangeBaskets(state, a) {
      return a.payload;
    },
    DeleteBaskets(state, a) {
      return state === null;
    },
  },
});

const memberSlice = createSlice({
  name: "member",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { ChangeBaskets, DeleteBaskets } = baskets.actions;
export const { login, logout } = memberSlice.actions;

export default configureStore({
  reducer: {
    baskets: baskets.reducer,
    isLoggedIn: memberSlice.reducer,
  },
});
