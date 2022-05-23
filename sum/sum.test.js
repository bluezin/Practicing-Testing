const { sumTwoSmallestNumbers } = require("./sum");

describe("sum", () => {
  test("Sum of the two smallest numbers in an array", () => {
    const component = sumTwoSmallestNumbers([5, 8, 12, 19, 22]);

    expect(component).toEqual(13);
  });

  test("Missing array", () => {
    const component = sumTwoSmallestNumbers();

    expect(component).toBeNull();
  });

  test("Missing values in an array", () => {
    const component = sumTwoSmallestNumbers([]);

    expect(component).toBeUndefined();
  });

  test("If the array only has one value", () => {
    const component = sumTwoSmallestNumbers([3]);

    expect(component).toStrictEqual("The length of array must be at least 2");
  });
});
