export const map = (arr, fn) => {
  let arrResult = [];
  arr.forEach((el, index) => {
    arrResult[index] = fn(el, index);
  });
  return arrResult;
};
