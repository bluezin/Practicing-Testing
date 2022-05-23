const { toCamelCase } = require("./camelcase.js");

describe("camelcase", () => {
  test("The first value of string is expected in uppercase", () => {
    const component = toCamelCase("the-stealth-warrior");

    expect(component).toBe("theStealthWarrior");
  });

  test("If the string is not defined", () => {
    const component = toCamelCase();

    expect(component).toBeUndefined();
  });

  test("If the string is not type string", () => {
    const component = toCamelCase(5);

    expect(component).toBeFalsy();
  });
});
