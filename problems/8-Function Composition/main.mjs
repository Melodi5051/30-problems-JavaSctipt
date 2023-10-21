export const compose = (functions) => {
  return (args) => {
    functions.reverse().forEach((elementFn) => {
      args = elementFn(args);
    });
    return args;
  };
};
