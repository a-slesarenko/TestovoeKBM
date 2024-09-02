import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Data, Wallpaper } from "@/@types";

export const wallpapersApi = createApi({
  reducerPath: "wallpapersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com/" }),
  endpoints: (builder) => ({
    getWallpapers: builder.query<Data, string>({
      query: (string = "") =>
        `search/photos?query=${string}&client_id=uLNOXEZ6Ik_CJYHPvsB1q9osoTJzA5ASzcvR8-TRGWs`,
    }),
    getWallpaperById: builder.query<Wallpaper, string>({
      query: (id = "") =>
        `/photos/${id}?client_id=uLNOXEZ6Ik_CJYHPvsB1q9osoTJzA5ASzcvR8-TRGWs`,
    }),
  }),
});

export const { useGetWallpapersQuery, useGetWallpaperByIdQuery } =
  wallpapersApi;
