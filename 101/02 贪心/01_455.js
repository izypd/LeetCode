/**
 * @param {number[]} children
 * @param {number[]} cookies
 * @return {number}
 */
function findContentChildren(children, cookies) {
  const compareNum = (a, b) => a - b;
  children.sort(compareNum);
  cookies.sort(compareNum);
  let i_children = 0;
  let i_cookies = 0;
  while (i_children < children.length && i_cookies < cookies.length) {
    if (children[i_children] <= cookies[i_cookies]) ++i_children;
    ++i_cookies;
  }
  return i_children;
}
