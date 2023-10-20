import { map } from "./main.mjs";
import { expect } from "chai";
describe('Задание 5, работа с массивами "Трансофрмация массива"', () => {
  it("Тест на увелечение всех числе массива на 1 ", () => {
    const arr = [1, 2, 3];
    const fn = (n) => {
      return n + 1;
    };
    expect(JSON.stringify(map(arr, fn))).to.equal(JSON.stringify([2, 3, 4]));
  });
  it("Тест на увелечение всех числе массива на их index ", () => {
    const arr = [1, 2, 3];
    const fn = (n, i) => {
      return n + i;
    };
    expect(JSON.stringify(map(arr, fn))).to.equal(JSON.stringify([1, 3, 5]));
  });
  it("Тест на преобразование всех числе массива на определнное число", () => {
    const arr = [1, 2, 3];
    const fn = () => {
      return 42;
    };
    expect(JSON.stringify(map(arr, fn))).to.equal(JSON.stringify([42, 42, 42]));
  });
});
