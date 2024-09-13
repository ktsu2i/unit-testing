export function countChars(s: string): number {
  let count: number = 0;
  const chars = [...s];

  for (const c of chars) {
    if (c !== " ") {
      count++;
    }
  }

  return count;
}