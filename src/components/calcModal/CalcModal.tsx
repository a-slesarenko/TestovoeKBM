import { CalculateFormInputValues, EstimateState } from "@/@types";
import * as styles from "./CalcModal.module.scss";
import { useEffect, useState } from "react";
import calcPrice from "@/utils/calcPrice";

interface CalcModalProps {
  wallpaperPrice: number;
}

const CalcModal = ({ wallpaperPrice }: CalcModalProps) => {
  const squareMeterWrkCost = 250;
  const [isOpen, setIsOpen] = useState(false);
  const [inputValueErrorText, setInputValueErrorText] = useState("");
  const [inputValues, setInputValues] = useState<CalculateFormInputValues>({
    height: "3",
    width1: "4",
    width2: "4",
    width3: "4",
    width4: "4",
    wallpaperWidth: "0.53",
    wallpaperLength: "10.05",
  });
  const [estimate, setEstimate] = useState<EstimateState>({
    totalCost: 0,
    costOfWorks: 0,
    costOfWallpaper: 0,
    numberOfRolls: 0,
  });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { costOfWorks, numberOfRolls, costOfWallpaper, totalCost } =
      calcPrice({ formData, squareMeterWrkCost, wallpaperPrice });
    setEstimate(() => ({
      totalCost,
      costOfWorks,
      costOfWallpaper,
      numberOfRolls,
    }));
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = event.target.value;
    if (Number(value) <= 0) {
      setInputValueErrorText("Please enter valid values!");
      return;
    }

    switch (input.name) {
      case "wall-height": {
        setInputValues((prev) => ({ ...prev, height: value }));
        break;
      }
      case "wall-1-width": {
        setInputValues((prev) => ({ ...prev, width1: value }));
        break;
      }
      case "wall-2-width": {
        setInputValues((prev) => ({ ...prev, width2: value }));
        break;
      }
      case "wall-3-width": {
        setInputValues((prev) => ({ ...prev, width3: value }));
        break;
      }
      case "wall-4-width": {
        setInputValues((prev) => ({ ...prev, width4: value }));
        break;
      }
      case "wallpaper-width": {
        setInputValues((prev) => ({ ...prev, wallpaperWidth: value }));
        break;
      }
      case "wallpaper-length": {
        setInputValues((prev) => ({ ...prev, wallpaperLength: value }));
        break;
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lockScroll");
    } else {
      document.body.classList.remove("lockScroll");
    }
  }, [isOpen]);

  return (
    <>
      <button
        className={styles.open_button}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Calculate
      </button>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={(event) => {
            event.currentTarget === event.target && setIsOpen(false);
          }}
        >
          <div className={styles.window}>
            <div className={styles.flex_container}>
              <div className={styles.calc_block}>
                <h2>Calculate price</h2>
                <form
                  action=""
                  className={styles.form}
                  onSubmit={submitHandler}
                >
                  <div className={styles.walls}>
                    <label>
                      Wall height, m
                      <input
                        type="number"
                        name="wall-height"
                        value={inputValues.height}
                        onChange={onChangeInput}
                      />
                    </label>
                    <label>
                      Wall width 1, m
                      <input
                        type="number"
                        name="wall-1-width"
                        value={inputValues.width1}
                        onChange={onChangeInput}
                      />
                    </label>
                    <label>
                      Wall width 2, m
                      <input
                        type="number"
                        name="wall-2-width"
                        value={inputValues.width2}
                        onChange={onChangeInput}
                      />
                    </label>
                    <label>
                      Wall width 3, m
                      <input
                        type="number"
                        name="wall-3-width"
                        value={inputValues.width3}
                        onChange={onChangeInput}
                      />
                    </label>
                    <label>
                      Wall width 4, m
                      <input
                        type="number"
                        name="wall-4-width"
                        value={inputValues.width4}
                        onChange={onChangeInput}
                      />
                    </label>
                  </div>
                  <div className={styles.wp_rolls}>
                    <label>
                      Wallpaper width, m
                      <input
                        type="number"
                        name="wallpaper-width"
                        value={inputValues.wallpaperWidth}
                        onChange={onChangeInput}
                      />
                    </label>
                    <label>
                      Wallpaper length, m
                      <input
                        type="number"
                        name="wallpaper-length"
                        value={inputValues.wallpaperLength}
                        onChange={onChangeInput}
                      />
                    </label>
                  </div>
                  <button type="submit">Calculate</button>
                </form>
              </div>
              <div className={styles.estimate}>
                <h3>
                  To get an estimate, enter all parameters and click the
                  calculate button
                </h3>
                <p className={styles.error}>{inputValueErrorText}</p>
                <p>Wallpaper roll price: {wallpaperPrice}RUB.</p>
                <p>Price of works per square meter {squareMeterWrkCost} RUB.</p>
                <p>
                  Total cost: {estimate.totalCost} RUB, Cost of works:{" "}
                  {estimate.costOfWorks} RUB, Cost of wallpaper:{" "}
                  {estimate.costOfWallpaper} RUB, Number of rolls:{" "}
                  {estimate.numberOfRolls}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalcModal;
