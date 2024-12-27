var scoreOfString = function (s) {
  let chars = s.split("");
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(chars[i + 1].charCodeAt(0) - chars[i].charCodeAt(0));
  }
  return sum;
};

console.log(scoreOfString("zaz"));
