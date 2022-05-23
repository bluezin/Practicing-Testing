const { modifyMultiply } = require("./words");

test("check word repetition", () => {
  const results = modifyMultiply("Hi Yadira", 1, 4);

  expect(results).toBe("Yadira-Yadira-Yadira-Yadira");
});

test("missing first parameter", () => {
  const resulst = modifyMultiply("", 1, 4);

  expect(resulst).toBeUndefined();
});

test("second parameter must be number", () => {
  const results = modifyMultiply("Hi Yadira", "", 4);

  expect(results).toBeFalsy();
});

test("third parameter must be number", () => {
  const results = modifyMultiply("Hi Yadira", 1, "");

  expect(results).toBeFalsy();
});

test("If the srting with the given loc is not found", () => {
  const results = modifyMultiply("Hi", 1, 4);

  expect(results).toBeNull();
});
