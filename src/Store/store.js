import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "kim",
});

const baskets = createSlice({
  name: "baskets",
  initialState: JSON.parse(localStorage.getItem("baskets")),
  reducers: {
    ChangeBaskets(state, a) {
      return a.payload;
    },
    DeleteBaskets(state, a) {
      return localStorage.removeItem("baskets");
    },
  },
});

export const { ChangeBaskets, DeleteBaskets } = baskets.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    baskets: baskets.reducer,
  },
});
