import { memoize } from "./main.mjs";
import { expect } from "chai";
describe("Задача 11", () => {
  it("Тест вызов массива и возврат суммы числем", () => {
    const sum = (a, b) => a + b;
    const result = [];
    let count = 0;
    const memoizedSum = memoize(sum);
    result.push(memoizedSum(2, 2));
    result.push(memoizedSum(2, 2));
    result.push(memoizedSum() ? null : ++count);
    result.push(memoizedSum(1, 2));
    result.push(memoizedSum() ? null : ++count);
    expect(JSON.stringify(result)).to.equal(JSON.stringify([4, 4, 1, 3, 2]));
  });
});
