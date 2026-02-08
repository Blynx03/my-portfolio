const generateRGB = () => {
  let colorR = Math.floor(Math.random() * 256);
  let colorG = Math.floor(Math.random() * 256);
  let colorB = Math.floor(Math.random() * 256);

  if (colorR < 51) {
    colorR += 50;
  }
  if (colorG < 51) {
    colorG += 50;
  }
  if (colorB < 51) {
    colorB += 50;
  }
  return { colorR, colorG, colorB };
};

export default generateRGB;
