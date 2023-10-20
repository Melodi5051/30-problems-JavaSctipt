export const counterII = (init) => {
  let startValue = init;
  let arr = [];
  return {
    increment: () => {
      startValue++;
      arr.push(startValue);
      return startValue;
    },
    decrement: () => {
      startValue--;
      arr.push(startValue);
      return startValue;
    },
    reset: () => {
      startValue = init;
      arr.push(startValue);
      return startValue;
    },
  };
};
