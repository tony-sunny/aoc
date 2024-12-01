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
  const sum = left.reduce((acc, l) => {
    const count = right.filter((r) => r === l);
    return acc + l * count.length;
  }, 0);
  console.log(sum);
})();
