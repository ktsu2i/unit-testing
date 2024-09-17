import { countChars } from "../src/countChars";

// all characters, no spaces
test("'testing' should return 7", () => {
  expect(countChars("testing")).toBe(7);
});

// all characters, with spaces
test("'this is testing' should return 13", () => {
  expect(countChars("this is testing")).toBe(13);
});

// characters & symbols, no spaces
test("'testing...!!' should return 12", () => {
  expect(countChars("testing...!!")).toBe(12);
});

// all numbers, no spaces
test("'12345' should return 5", () => {
  expect(countChars("12345")).toBe(5);
});

// symbols & numbers, with spaces
test("'1 + 2 = 3' should return 5", () => {
  expect(countChars("1 + 2 = 3")).toBe(5);
});

// characters, numbers, & symbols, with spaces
test("'<input id=3296 />' should return 15", () => {
  expect(countChars("<input id=3296 />")).toBe(15);
});

// only one space
test("' ' should return 0", () => {
  expect(countChars(" ")).toBe(0);
});

// multiple spaces
test("'    ' should return 0", () => {
  expect(countChars("    ")).toBe(0);
});

// empty string
test("'' should return 0", () => {
  expect(countChars("")).toBe(0);
});