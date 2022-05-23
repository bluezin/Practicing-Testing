function toCamelCase(str) {
  if (!str) return;
  if (typeof str !== "string") return false;

  const value = str.includes("-") ? "-" : str.includes("_") && "_";
  const newArray = str.split(`${value}`);

  const results = newArray
    .slice(1)
    .map((item) => item[0].toUpperCase() + item.slice(1));

  return `${newArray.slice(0, 1)}${results.join("")}`;
}

module.exports = { toCamelCase };
