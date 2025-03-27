function reverse(x) {
  let reversed = 0;
  const isNegative = x < 0;
  x = Math.abs(x);

  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  while (x > 0) {
    const digit = x % 10;
    x = Math.floor(x / 10);
    if (reversed > (INT_MAX - digit) / 10) {
      return 0;
    }

    reversed = reversed * 10 + digit;
  }

  if (isNegative) {
    reversed = -reversed;
  }
  if (reversed < INT_MIN || reversed > INT_MAX) {
    return 0;
  }

  return reversed;
}
