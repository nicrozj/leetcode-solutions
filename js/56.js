intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

var merge = function (intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const current = intervals[i];

    console.log(`last: ${last}, current: ${current}`);

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
};

console.log(merge(intervals));
