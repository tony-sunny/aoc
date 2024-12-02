const { open } = require("node:fs/promises");

(async () => {
  const file = await open("./input.txt");
  const left = [];
  const right = [];
  for await (const line of file.readLines()) {
    const [a, b] = line.split(/\s+/);
    left.push(a);
    right.push(b);
  }
  const sortedLeft = left.sort();
  const sortedRight = right.sort();
  const sum = sortedLeft.reduce((acc, val, index) => {
    const diff = Math.abs(val - sortedRight[index]);
    return acc + diff;
  }, 0);
  console.log(sum);
})();
