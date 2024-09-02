import { Outlet } from "react-router-dom";
import * as styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
