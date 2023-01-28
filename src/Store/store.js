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

export const { ChangeBaskets, DeleteBaskets } = baskets.actions;

export default configureStore({
  reducer: {
    baskets: baskets.reducer,
  },
});
