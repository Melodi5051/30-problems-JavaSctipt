import { argumentsLength } from "./main.mjs";
import { expect } from "chai";
describe('Задача 9, работа с функциями "Возврат длинны массива"', () => {
  it("Тест возврат массива длиной 3", () => {
    expect(argumentsLength(23, 54, 23)).to.equal(3);
  });
  it("Тест возврат пустого массива", () => {
    expect(argumentsLength()).to.equal(0);
  });
  it("Тест возврат массива длиной 2", () => {
    expect(argumentsLength(23, 45)).to.equal(2);
  });
});
