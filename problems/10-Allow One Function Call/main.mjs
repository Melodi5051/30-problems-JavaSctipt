export const once = (fn) => {
  let isCall = true;
  return (...args) => {
    if (isCall) {
      isCall = !isCall;
      return fn(...args);
    }
  };
};
