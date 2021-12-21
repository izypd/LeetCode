/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const chars = new Array(128).fill(0);
  const flag = new Array(128).fill(false);
  t.split('').forEach((character) => {
    ++chars[character.codePointAt(0)];
    flag[character.codePointAt(0)] = true;
  });
  let count = 0;
  let l = 0;
  let min_l = 0;
  let min_size = s.length + 1;
  for (let r = 0; r < s.length; ++r) {
    if (flag[s[r].codePointAt(0)]) {
      if (--chars[s[r].codePointAt(0)] >= 0) ++count;
      while (count === t.length) {
        const current_size = r - l + 1;
        if (current_size < min_size) {
          min_size = current_size;
          min_l = l;
        }
        if (flag[s[l].codePointAt(0)] && ++chars[s[l].codePointAt(0)] > 0) --count;
        ++l;
      }
    }
  }
  return min_size > s.length ? "" : s.slice(min_l, min_l + min_size);
};
