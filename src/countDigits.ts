export function countDigits(s: string): number {
  const chars = [...s];
  let count: number = 0;

  for (const c of chars) {
    if (c.match(/[0-9]/)) {
      count++;
    }
  }

  return count;
}