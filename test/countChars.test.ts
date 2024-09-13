import { countChars } from "../src/countChars";

test("&quot;testing&quot; should return 7", () => {
  expect(countChars("testing")).toBe(7);
});