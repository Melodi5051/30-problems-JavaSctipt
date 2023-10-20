export const reduce = (nums, fn, acc) => {
  nums.forEach((element) => {
    acc = fn(acc, element);
  });
  return acc;
};
