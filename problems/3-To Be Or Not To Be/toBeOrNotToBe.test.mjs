import { ToBeOrNotToBe } from "./main.mjs";
import { expect } from "chai";

describe('Задача 3, замыкание "Равны или не равны"', () => {
  it("Тест сходство на проверка 5 и 5", () => {
    const result = ToBeOrNotToBe(5).toBe(5);
    expect(result).to.equal(true);
  });
  it("Тест разницу на проверка 5 и 5", () => {
    const result = ToBeOrNotToBe(5).notToBe(5);
    expect(result).to.equal("Equal");
  });
  it("Тест сходство на проверка 10 и 5", () => {
    const result = ToBeOrNotToBe(10).toBe(5);
    expect(result).to.equal("Not Equal");
  });
});
