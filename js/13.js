/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  const symbolValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let temp;
  for (let i = 0; i < s.length; i++) {
    if (symbolValues[s[i + 1]] > symbolValues[s[i]]) {
      result -= symbolValues[s[i]];
    } else {
      result += symbolValues[s[i]];
    }
  }
  return result;
};

console.log(romanToInt("III"));
