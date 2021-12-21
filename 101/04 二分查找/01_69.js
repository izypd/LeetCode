/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;
  let mid = -1;
  let sqrt = -1;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (BigInt(mid) * BigInt(mid) <= x) {
      sqrt = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return sqrt;
};
