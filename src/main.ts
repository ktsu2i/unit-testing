import * as readline from "readline";
import { countChars } from "./countChars";
import { countVowels } from "./countVowels";
import { countDigits } from "./countDigits";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string: ", (input) => {
  console.log("Input: ", input);
  console.log("No. of total characters: ", countChars(input));
  console.log("No. of total vowels: ", countVowels(input));
  console.log("No. of total digits: ", countDigits(input));
  rl.close();
});
