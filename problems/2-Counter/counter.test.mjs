import { counter } from "./main.mjs";
import { expect } from "chai";

describe('Задача 2, замыкание "Счетчик"', () => {
  it("Тест с 0 до 3", () => {
    const result = counter(0);
    new Array(3).fill(null).forEach((_) => {
      result();
    });
    expect(result()).to.equal(3);
  });
  it("Тест с 0 до 20", () => {
    const result = counter(0);
    new Array(20).fill(null).forEach((_) => {
      result();
    });
    expect(result()).to.equal(20);
  });
  it("Тест с 10 до 10", () => {
    const result = counter(10);
    new Array(0).fill(null).forEach((_) => {
      result();
    });
    expect(result()).to.equal(10);
  });
});
