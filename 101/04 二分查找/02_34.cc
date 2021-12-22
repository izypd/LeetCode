class Solution {
  public:
    vector<int> searchRange(vector<int>& nums, int target) {
      if (nums.empty()) return vector<int>{-1, -1};
      int lower = LowerBound(nums, target, true);
      int upper = LowerBound(nums, target, false) - 1;
      if (lower == nums.size() || nums[lower] != target) return vector<int>{-1, -1};
      return vector<int>{lower, upper};
    }

    int LowerBound(vector<int>& nums, int target, bool lower) {
      int l = 0;
      int r = nums.size();
      int mid = -1;
      while (l < r) {
        mid = l + (r - l) / 2;
        bool condition = lower ? (nums[mid] >= target) : (nums[mid] > target);
        if (condition) {
          r = mid;
        } else {
          l = mid + 1;
        }
      }
      return l;
    }
};
