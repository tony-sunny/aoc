const { open } = require("node:fs/promises");

const getCount = (lines) => {
  return lines.reduce((count, line) => {
    const straightMatch = line.match("XMAS");
    const backwardsMatch = line.match("SAMX");
    const straightCount = Array.isArray(straightMatch)
      ? straightMatch.length
      : 0;
    const backCount = Array.isArray(backwardsMatch) ? backwardsMatch.length : 0;
    return count + straightCount + backCount;
  }, 0);
};

(async () => {
  const reports = await open("./input.txt");
  const horizontal = [];
  const vertical = [];
  for await (const line of reports.readLines()) {
    horizontal.push(line);
    for (let i = 0; i < line.length; i++) {
      vertical[i] = vertical[i] ? `${vertical[i]}${line[i]}` : line[i];
    }
  }
  const horizontalCount = getCount(horizontal);
  const verticalCount = getCount(vertical);
  // const diagonalCount = how ??
  console.log(horizontalCount + verticalCount); // + diagonalCount;
})();
