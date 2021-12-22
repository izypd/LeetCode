/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  const lower = lowerBound(nums, target, true);
  const upper = lowerBound(nums, target, false) - 1;
  if (lower === nums.length || nums[lower] !== target) return [-1, -1];
  return [lower, upper];
};

function lowerBound(nums, target, lower) {
  let l = 0;
  let r = nums.length;
  let mid = -1;
  while (l < r) {
    mid = l + Math.floor((r - l) / 2);
    condition = lower ? (nums[mid] >= target) : (nums[mid] > target);
    if (condition) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}
