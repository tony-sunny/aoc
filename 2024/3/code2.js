const fs = require("node:fs");

const calculate = (arr) => {
  return arr.reduce((acc, m) => {
    // arr => mul(1,2)
    const [a, b] = m.match(/\d+/g);
    return acc + a * b;
  }, 0);
};

const input = fs.readFileSync("./input.txt", "utf8");

const donts = input.split("do()");
const valid = donts.reduce((acc, d) => {
  const [dos] = d.split("don't()");
  return `${acc}${dos}`;
}, "");

const muls = valid.match(/mul\(\d+,\d+\)/g);
const result = calculate(muls);

console.log(result);
