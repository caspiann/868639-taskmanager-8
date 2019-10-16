export const generateNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
