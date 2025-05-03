export const ACCEPTED = ["image/png", "image/jpeg", "image/jpg"];

export const MAX_SIZE = 3;

export const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
  const result = sizeInBytes / (1024 * 1024);
  return +result.toFixed(decimalsNum);
};
