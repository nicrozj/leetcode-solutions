var transformArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) nums[i] = 1;
    else nums[i] = 0;
  }
  return nums.sort((a, b) => a - b);
};

console.log(transformArray([4, 3, 2, 1]));
