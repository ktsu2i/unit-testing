export function countVowels(s: string): number {
  const chars = s.toLowerCase().split("");
  let count: number = 0;

  for (const c of chars) {
    if (c.match(/[aeiou]/)) {
      count++;
    }
  }

  return count;
}