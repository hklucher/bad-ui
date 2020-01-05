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

export function parsePhoneNumberFromDigits(digits: Array<number | null>): string {
  const digitsString = digits.filter(d => d !== null).join("");

  // If we only have the first section of the phone number
  if (digitsString.length < 3) {
    return digitsString
  }

  // If we have the first & part of the second section
  if (digitsString.length >= 3 && digitsString.length < 7) {
    return `${digitsString.substring(0, 3)}-${digitsString.substring(3, 6)}`
  }

  // Othewrise, we the full phone number is provided
  return `${digitsString.substring(0, 3)}-${digitsString.substring(
    3,
    6
  )}-${digitsString.substring(6, 10)}`;
}
