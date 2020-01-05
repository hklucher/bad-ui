export function getRandomDigit(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getNextDigit(currentDigit: number | null): number {
  if (currentDigit === null) {
    return 0;
  }

  if (currentDigit === 9) {
    return 0;
  }

  return currentDigit + 1;
}
