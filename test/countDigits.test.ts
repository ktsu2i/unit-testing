import { countDigits } from "../src/countDigits";

// all characters, no spaces
test("'abcdefg' should return 0", () => {
  expect(countDigits("abcdefg")).toBe(0);
});

// all characters, with spaces
test("'o n e' should return 0", () => {
  expect(countDigits("o n e")).toBe(0);
});

// all numbers, no spaces
test("'1234' should return 4", () => {
  expect(countDigits("1234")).toBe(4);
});

// all numbers, no spaces
test("'1 2 3' should return 3", () => {
  expect(countDigits("1 2 3")).toBe(3);
});

// characters & numbers, no spaces
test("'a1b2c3' should return 3", () => {
  expect(countDigits("a1b2c3")).toBe(3);
});

// characters & numbers, with spaces
test("'one is 1' should return 1", () => {
  expect(countDigits("one is 1")).toBe(1);
});

// all symbols, no spaces
test("'!&*$#' should return 0", () => {
  expect(countDigits("!&*$#")).toBe(0);
});

// characters, numbers, & symbols, no spaces
test("'one_+_two_=3' should return 1", () => {
  expect(countDigits("one_+_two_=3")).toBe(1);
});

// characters, numbers, & symbols, with spaces
test("'three * nine = 27' should return 2", () => {
  expect(countDigits("three * nine = 27")).toBe(2);
});

// only spaces
test("'  ' should return 0", () => {
  expect(countDigits("  ")).toBe(0);
});

// empty string
test("'' should return 0", () => {
  expect(countDigits("")).toBe(0);
});