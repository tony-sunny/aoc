const fs = require("node:fs");

const calculate = (arr) => {
  return arr.reduce((acc, m) => {
    // arr => mul(1,2)
    const [a, b] = m.match(/\d+/g);
    return acc + a * b;
  }, 0);
};

const input = fs.readFileSync("./input.txt", "utf8");
const muls = input.match(/mul\(\d+,\d+\)/g);
const result = calculate(muls);
console.log(result);
