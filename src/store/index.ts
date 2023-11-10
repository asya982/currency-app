import { configureStore } from "@reduxjs/toolkit";
import symbols from "./symbolsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    symbols,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useStoreDispatch = () => useDispatch<AppDispatch>();
