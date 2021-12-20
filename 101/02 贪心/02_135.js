/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const size = ratings.length;
  if (size < 2) return size;
  const num = new Array(size).fill(1);
  for (let i = 1; i < size; ++i) {
    if (ratings[i] > ratings[i - 1]) {
      num[i] = num[i - 1] + 1;
    }
  }
  for (let i = size - 1; i > 0; --i) {
    if (ratings[i] < ratings[i - 1]) {
      num[i - 1] = Math.max(num[i - 1], num[i] + 1);
    }
  }
  return num.reduce((sum, item) => sum + item);
};
