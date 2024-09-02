interface CalcPriceProps {
  formData: FormData;
  squareMeterWrkCost: number;
  wallpaperPrice: number;
}

const calcPrice = ({
  formData,
  squareMeterWrkCost,
  wallpaperPrice,
}: CalcPriceProps) => {
  const height = parseFloat(formData.get("wall-height") as string) || 0;
  const width1 = parseFloat(formData.get("wall-1-width") as string) || 0;
  const width2 = parseFloat(formData.get("wall-2-width") as string) || 0;
  const width3 = parseFloat(formData.get("wall-3-width") as string) || 0;
  const width4 = parseFloat(formData.get("wall-4-width") as string) || 0;
  const wallpaperWidth =
    parseFloat(formData.get("wallpaper-width") as string) || 0;
  const wallpaperLength =
    parseFloat(formData.get("wallpaper-length") as string) || 0;

  const totalSquareMeters = (width1 + width2 + width3 + width4) * height;
  const wallpaperSquareMeters = wallpaperWidth * wallpaperLength;
  // Округляю в пользу покупателя
  const costOfWorks = Math.floor(totalSquareMeters * squareMeterWrkCost);
  // округляю в большую сторону чтобы хватило
  const numberOfRolls = Math.ceil(totalSquareMeters / wallpaperSquareMeters);
  // Округляю в пользу покупателя
  const costOfWallpaper = Math.floor(numberOfRolls * wallpaperPrice);
  // Округляю в пользу покупателя
  const totalCost = Math.floor(costOfWorks + costOfWallpaper);

  return { costOfWorks, numberOfRolls, costOfWallpaper, totalCost };
};

export default calcPrice;
