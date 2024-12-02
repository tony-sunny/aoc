const { open } = require("node:fs/promises");

const isSafe = (levels) => {
  const sign = Math.sign(levels[0] - levels[1]);
  return levels.every((_, index) => {
    if (index === levels.length - 1) {
      return true;
    } else {
      const diff = levels[index] - levels[index + 1];
      return diff !== 0 && Math.abs(diff) <= 3 && sign === Math.sign(diff);
    }
  });
};

(async () => {
  const reports = await open("./input.txt");
  let safeLevelCount = 0;
  for await (const line of reports.readLines()) {
    const levels = line.split(/\s+/).map(Number);
    if (isSafe(levels)) {
      safeLevelCount++;
    }
  }
  console.log(safeLevelCount);
})();
