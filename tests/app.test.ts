import { describe, test, expect } from "@jest/globals";

describe("el test para probar que funcione", () => {
  // describe el test en general

  // en cambio de it() tambien es comun usar test()
  test("the result should be 30", () => {
    // describe el nombre del test especifico

    // Arange
    const num1 = 28;
    const num2 = 2;

    // Act

    const sum = num1 + num2;

    // Assert
    expect(sum).toBe(30);
  });
});
