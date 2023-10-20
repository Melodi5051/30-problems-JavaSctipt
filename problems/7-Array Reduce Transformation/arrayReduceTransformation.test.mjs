import { reduce } from "./main.mjs";
import { expect } from "chai";

describe('Задача 7, работа с массивами "Сложение все значение массива"', () => {
  it("Тест суммирование массива [1,2,3,4]", () => {
    const arr = [1, 2, 3, 4];
    const fn = (acc, n) => {
      return acc + n;
    };
    expect(reduce(arr, fn, 0)).to.equal(10);
  });
  it("Тест умножение массива [1,2,3,4]", () => {
    const arr = [1, 2, 3, 4];
    const fn = (acc, n) => {
      return acc + n * n;
    };
    expect(reduce(arr, fn, 0)).to.equal(30);
  });
  it("Тест умножение массива [1,1,3,2] ", () => {
    const arr = [1, 1, 3, 2];
    const fn = (acc, n) => {
      return acc + n * n;
    };
    expect(reduce(arr, fn, 0)).to.equal(15);
  });
});
