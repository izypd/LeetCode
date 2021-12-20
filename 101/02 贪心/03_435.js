/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;
  const compareEnd = (a, b) => a[1] - b[1];
  intervals.sort(compareEnd);
  let removed = 0;
  let current_min_end = 0;
  for (let i = 1; i < intervals.length; ++i) {
    if (intervals[i][0] < current_min_end) {
      ++removed;
    } else {
      current_min_end = intervals[i][1];
    }
  }
  return removed;
};
