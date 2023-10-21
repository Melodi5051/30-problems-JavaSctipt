export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const keyArgs = JSON.stringify(args);
    if (cache.has(keyArgs)) {
      return cache.get(keyArgs);
    }
    const result = fn(...args);
    cache.set(keyArgs, result);
    return result;
  };
};
