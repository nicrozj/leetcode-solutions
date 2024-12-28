var getSneakyNumbers = function (nums) {
  let sortedArr = nums.sort();
  let result = [];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) {
      result.push(sortedArr[i]);
    }
  }
  return result;
};

console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));
