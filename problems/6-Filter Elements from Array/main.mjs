export const filter = (arr, fn) => {
  const resultArr = [];
  arr.forEach((el, index) => {
    if (fn(el, index)) {
      resultArr.push(el);
    }
  });
  return resultArr;
};
