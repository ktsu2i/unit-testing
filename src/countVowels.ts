export function countVowels(s: string): number {
  const vowels = ["a", "e", "i", "o", "u"];
  const chars = s.toLowerCase().split("");
  let count: number = 0;

  for (const c of chars) {
    if (vowels.includes(c)) {
      count++;
    }
  }

  return count;
}