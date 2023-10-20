import { counterII } from "./main.mjs";
import { expect } from "chai";

describe('Задача 4, замыкание "Универсальный счетчик"', () => {
  it("Тест с 5 до 4", () => {
    const result = counterII(5);
    const arrResult = [];
    arrResult.push(result.increment());
    arrResult.push(result.reset());
    arrResult.push(result.decrement());
    expect(JSON.stringify(arrResult)).to.equal(JSON.stringify([6, 5, 4]));
  });
  it("Тест с 0 до 0", () => {
    const result = counterII(0);
    const arrResult = [];
    arrResult.push(result.increment());
    arrResult.push(result.increment());
    arrResult.push(result.decrement());
    arrResult.push(result.reset());
    arrResult.push(result.reset());
    expect(JSON.stringify(arrResult)).to.equal(JSON.stringify([1, 2, 1, 0, 0]));
  });
  it("Тест с 10 до 7", () => {
    const result = counterII(10);
    const arrResult = [];
    arrResult.push(result.decrement());
    arrResult.push(result.decrement());
    arrResult.push(result.decrement());
    arrResult.push(result.decrement());
    arrResult.push(result.decrement());
    arrResult.push(result.increment());
    expect(JSON.stringify(arrResult)).to.equal(
      JSON.stringify([9, 8, 7, 6, 5, 6])
    );
  });
});
