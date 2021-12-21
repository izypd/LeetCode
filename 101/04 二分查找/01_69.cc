class Solution {
  public:
    int mySqrt(int x) {
      int l = 0;
      int r = x;
      int mid = -1;
      int sqrt = -1;
      while (l <= r) {
        mid = l + (r - l) / 2;
        if ((long long)mid * mid <= x) {
          sqrt = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      return sqrt;
    }
};
