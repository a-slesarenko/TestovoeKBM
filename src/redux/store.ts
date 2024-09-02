import { configureStore } from "@reduxjs/toolkit";
import { wallpapersApi } from "./wallpapersApi";

export const store = configureStore({
  reducer: {
    [wallpapersApi.reducerPath]: wallpapersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wallpapersApi.middleware),
});
