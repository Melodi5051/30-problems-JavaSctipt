import { compose } from "./main.mjs";
import { expect } from "chai";

describe('Задача 8, работа с функциями "Преобразование функций"', () => {
  it("Тест действие над числом в массиве", () => {
    const fnArray = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    const result = compose(fnArray);
    expect(result(4)).to.equal(65);
  });
  it("Тест действие над числом в массиве", () => {
    const fnArray = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
    const result = compose(fnArray);
    expect(result(1)).to.equal(1000);
  });
  it("Тест возврат пустого массива", () => {
    const fnArray = [];
    const result = compose(fnArray);
    expect(result(42)).to.equal(42);
  });
});
