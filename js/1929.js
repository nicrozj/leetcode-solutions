var buildArray = function (nums) {
  let result = [];
  nums.forEach((element, index) => {
    result[index] = nums[nums[index]];
  });
  return result;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
