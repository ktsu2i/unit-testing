import { countVowels } from "../src/countVowels";

// all vowels, no spaces
test("'aeiou' should return 5", () => {
  expect(countVowels("aeiou")).toBe(5);
});

// all consonants, no spaces
test("'bcdfgh' should return 0", () => {
  expect(countVowels("bcdfgh")).toBe(0);
});

// vowels & consonants, no spaces
test("'abcdef' should return 2", () => {
  expect(countVowels("abcdef")).toBe(2);
});

// vowels & consonants, with spaces
test("'a b c d e f' should return 2", () => {
  expect(countVowels("a b c d e f")).toBe(2);
});

// all numbers, no spaces
test("'123' should return 0", () => {
  expect(countVowels("123")).toBe(0);
});

// vowels, consonants, numbers, & symbols, no spaces
test("'abcde123!=&' should return 2", () => {
  expect(countVowels("abcde123!=&")).toBe(2);
});

// vowels, consonants, numbers, & symbols, with spaces
test("'abc + 123 = idk' should return 2", () => {
  expect(countVowels("abc + 123 = idk")).toBe(2);
});

// only spaces
test("'  ' should return 0", () => {
  expect(countVowels("  ")).toBe(0);
});

// empty string
test("'' should return 0", () => {
  expect(countVowels("")).toBe(0);
});