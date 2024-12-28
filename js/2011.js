var finalValueAfterOperations = function (operations) {
  let result = 0;
  operations.forEach((element) => {
    element.includes("--") ? (result -= 1) : (result += 1);
  });
  return result;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
