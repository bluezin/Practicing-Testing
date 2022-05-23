function sumTwoSmallestNumbers(array) {
  if (!array) return null;
  if (!array.length) return undefined;
  if (array.length === 1) return "The length of array must be at least 2";

  const order = array.sort((num1, num2) => {
    return num1 - num2;
  });

  const sum = order.slice(0, 2).reduce((a, b) => a + b);
  return sum;
}

// sumTwoSmallestNumbers([5, 8, 12, 19, 22]);

module.exports = { sumTwoSmallestNumbers };
