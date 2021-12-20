/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let pre = -1;
  const m = flowerbed.length;
  flowerbed.forEach((isFlower, i) => {
    if (isFlower === 1) {
      if (pre < 0) {
        count += Math.floor(i / 2);
      } else {
        count += Math.floor((i - pre - 2) / 2);
      }
      if (count >= n) return true;
      pre = i;
    }
  });
  if (pre < 0) {
    count += Math.floor((m + 1) / 2);
  } else {
    count += Math.floor((m - pre - 1) / 2);
  }
  return count >= n;
};
