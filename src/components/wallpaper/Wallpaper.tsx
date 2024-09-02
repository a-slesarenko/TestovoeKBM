import * as styles from "./Wallpaper.module.scss";
import { NavLink } from "react-router-dom";

interface WallpaperProps {
  id: string;
  url: string;
  title: string;
  price: number;
}

const Wallpaper = ({ id, url, title, price }: WallpaperProps) => {
  return (
    <li className={styles.card_container}>
      <div className={styles.card}>
        <NavLink to={`wallpapers/wallpaper/${id}`}>
          <div className={styles.card_top}>
            <div className={styles.card_image}>
                <img src={url} alt="room wallpaper" />
              </div>
          </div>
          <div className={styles.card_middle}>
            <span>Texture:</span>
            <h3>{title}</h3>
          </div>
          <div className={styles.card_bottom}>
            <span>Price:</span>
            <p>
              <span className={styles.price}>{price}</span> RUB/ROLL
            </p>
          </div>
        </NavLink>
      </div>
    </li>
  );
};

export default Wallpaper;
