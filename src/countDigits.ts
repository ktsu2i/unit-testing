export function countDigits(s: string): number {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const chars = [...s];
  let count: number = 0;

  for (const c of chars) {
    if (digits.includes(c)) {
      count++;
    }
  }

  return count;
}