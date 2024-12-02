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
    const isLevelSafe = isSafe(levels);
    if (isLevelSafe) {
      safeLevelCount++;
    } else {
      // Brute force approach
      // is there a better way?
      const isNewLevelSafe = levels.some((_, index) => {
        // remove current value and check if new array is safe
        const newLevel = [...levels];
        newLevel.splice(index, 1);
        return isSafe(newLevel);
      });
      if (isNewLevelSafe) {
        safeLevelCount++;
      }
    }
  }
  console.log(safeLevelCount);
})();
