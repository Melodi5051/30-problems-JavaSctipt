export const ToBeOrNotToBe = (firstValue) => {
  return {
    toBe: (secondValue) => {
      return firstValue === secondValue ? true : "Not Equal";
    },
    notToBe: (secondValue) => {
      return firstValue !== secondValue ? true : "Equal";
    },
  };
};
