import * as styles from "./WallpapersList.module.scss";
import { useGetWallpapersQuery } from "@/redux/wallpapersApi";
import { Data } from "@/@types";
import Wallpaper from "../../components/wallpaper/Wallpaper";

const WallpapersList = () => {
  const {
    data = {} as Data,
    error,
    isLoading,
  } = useGetWallpapersQuery("texture");

  return (
    <div className={styles.container}>
      {error ? (
        <h1>Something went wrong...</h1>
      ) : isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <h1>Wallpapers</h1>
          <ul className={styles.list}>
            {data.results?.map((img) => {
              return (
                <Wallpaper
                  key={img.id}
                  id={img.id}
                  url={img.urls.small}
                  title={img.alt_description}
                  price={img.height}
                />
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default WallpapersList;
