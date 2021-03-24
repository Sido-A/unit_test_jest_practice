const { expect } = require("@jest/globals");
const chunkArr = require("./chunk");

test("Check if chunkArr function exist", () => {
  expect(chunkArr).toBeDefined();
});

test("Chunk an array of 10 values with length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const length = 2;
  expect(chunkArr(numbers, length)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("Chunk an array of 3 values with length of 1", () => {
  const numbers = [1, 2, 3];
  const length = 1;
  expect(chunkArr(numbers, length)).toEqual([[1], [2], [3]]);
});
