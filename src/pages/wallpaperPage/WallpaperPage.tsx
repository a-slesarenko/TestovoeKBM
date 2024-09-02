import * as styles from "./WallpaperPage.module.scss";
import { useGetWallpaperByIdQuery } from "@/redux/wallpapersApi";
import { NavLink, useParams } from "react-router-dom";
import BackButton from "@/assets/images/svg/left-arrow.svg";
import CalcModal from "@/components/calcModal/CalcModal";

const WallpaperPage = () => {
  const { id } = useParams();
  const { data: wallpaper, error, isLoading } = useGetWallpaperByIdQuery(id);
  const wallpaperPrice = wallpaper?.height;

  return (
    <div className={styles.page}>
      {error ? (
        <h1>Something went wrong...</h1>
      ) : isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <NavLink to={`/`}>
              <div className={styles.icon_container}>
                <BackButton className={styles.backbtn} />
              </div>
            </NavLink>
          </div>
          <div className={styles.middle}>
            <div className={styles?.image}>
              <img
                src={wallpaper?.urls?.regular}
                alt="wallpaper regular image"
              />
            </div>
            <div className={styles.info}>
              <h1>Wallpaper texture: {wallpaper?.alt_description}</h1>
              <p>Likes: {wallpaper?.likes}</p>
              <p>Country: Switzerland</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>Wallpaper roll price: {wallpaperPrice}RUB.</p>
          </div>
          <CalcModal wallpaperPrice={wallpaperPrice} />
        </div>
      )}
    </div>
  );
};

export default WallpaperPage;
