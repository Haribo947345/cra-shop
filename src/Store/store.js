import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "kim",
});

const baskets = createSlice({
  name: "baskets",
  initialState: JSON.parse(localStorage.getItem("baskets")),
});

export default configureStore({
  reducer: {
    user: user.reducer,
    baskets: baskets.reducer,
  },
});
