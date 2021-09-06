
export const numberToKiloString = (value) => {
  if (typeof(value) === "number" && value > 1000) {
    const v = Math.round(Math.trunc(value) / 100) / 10;
    return `${v}k`;
  }

  return String(value);
};
