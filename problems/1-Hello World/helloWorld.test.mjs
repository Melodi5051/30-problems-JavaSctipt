import { printHelloWorld } from "./main.mjs";
import { expect } from "chai";

describe('Задача 1, замыкание "Hello Wolrd"', () => {
  it("Тест с 2 аргументами", () => {
    const result = printHelloWorld();
    expect(result(1, 2)).to.equal("Hello World");
  });

  it("Тест без аргументов", () => {
    const result = printHelloWorld();
    expect(result()).to.equal("Hello World");
  });

  it("Тест с аргументов массивом", () => {
    const result = printHelloWorld();
    expect(result([2, 3])).to.equal("Hello World");
  });
});
