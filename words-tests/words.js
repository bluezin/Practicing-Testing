function modifyMultiply(str, loc, num) {
  if (str === "") return;
  if (typeof loc !== "number") return false;
  if (typeof num !== "number") return false;

  const newArray = str.split(" ");

  if (!newArray[loc]) return null;

  const results = Array.from({ length: num }, (_) => newArray[loc]);
  return results.join("-");
}

module.exports = { modifyMultiply };
