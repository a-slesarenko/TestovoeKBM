import "./index.scss";
import ReactDOM from "react-dom/client";
import App from "@/components/App";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import WallpapersList from "./pages/wallpapersListPage/WallpapersList";
import WallpaperPage from "./pages/wallpaperPage/WallpaperPage";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<WallpapersList />} />
      <Route path="wallpapers/wallpaper/:id" element={<WallpaperPage />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
