const arrayAnalysis = require("../code/arrayAnalysis");

test("ARRAY ANALYSIS TEST 1", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("ARRAY ANALYSIS TEST 2", () => {
  expect(arrayAnalysis([1, 1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  });
});

test("ARRAY ANALYSIS TEST 3", () => {
  expect(arrayAnalysis([5, 1, 2, 3, 7, 1])).toEqual({
    average: 19 / 6,
    min: 1,
    max: 7,
    length: 6,
  });
});

test("ARRAY ANALYSIS TEST 4", () => {
  expect(arrayAnalysis([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});