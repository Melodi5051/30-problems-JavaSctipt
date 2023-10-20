import { filter } from "./main.mjs";
import { expect } from "chai";
describe('Задача 6, работа с массивами "Фильтрация массива"', () => {
  it("Тест получение все чисел больше 10", () => {
    const arr = [5, 10, 20, 30];
    const fn = (n) => {
      return n > 10;
    };
    expect(JSON.stringify(filter(arr, fn))).to.equal(JSON.stringify([20, 30]));
  });
  it("Тест получение все чисел больше 10 и меньше 30", () => {
    const arr = [5, 10, 20, 30];
    const fn = (n) => {
      return n > 10 && n < 30;
    };
    expect(JSON.stringify(filter(arr, fn))).to.equal(JSON.stringify([20]));
  });
  it("Тест получение числе чей индекс равень index > 1 и index < 4", () => {
    const arr = [5, 10, 20, 30];
    const fn = (n, index) => {
      return index > 1 && index < 4;
    };
    expect(JSON.stringify(filter(arr, fn))).to.equal(JSON.stringify([20, 30]));
  });
});
