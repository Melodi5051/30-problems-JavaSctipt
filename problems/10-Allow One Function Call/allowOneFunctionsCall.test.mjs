import { once } from "./main.mjs";
import { expect } from "chai";
describe('Задача 10, работа с функциями "Вызов функции"', () => {
  it("Тест вызор функции сложения на масси в длинной 3, только один раз", () => {
    const fn = (a, b, c) => {
      return { call: 1, value: a + b + c };
    };
    const onceFn = once(fn);
    expect(JSON.stringify(onceFn(1, 2, 3))).to.equal(
      JSON.stringify({ call: 1, value: 6 })
    );
  });
  it("Тест возврат умножения всех числе в массива, только один раз", () => {
    const fn = (a, b, c) => {
      return { call: 1, value: a * b * c };
    };
    const onceFn = once(fn);
    expect(JSON.stringify(onceFn(5, 7, 4))).to.equal(
      JSON.stringify({ call: 1, value: 140 })
    );
  });
});
