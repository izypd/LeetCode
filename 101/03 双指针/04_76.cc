class Solution {
  public:
    string minWindow(string s, string t) {
      vector<int> chars(128, 0);
      vector<bool> flag(128, false);
      for (int i = 0; i < t.size(); ++i) {
        ++chars[t[i]];
        flag[t[i]] = true;
      }
      int count = 0;
      int l = 0;
      int min_l = 0;
      int min_size = s.size() + 1;
      for (int r = 0; r < s.size(); ++r) {
        if (flag[s[r]]) {
          if (--chars[s[r]] >= 0) ++count;
          while (count == t.size()) {
            int current_size = r - l + 1;
            if (current_size < min_size) {
              min_size = current_size;
              min_l = l;
            }
            if (flag[s[l]] && ++chars[s[l]] > 0) --count;
            ++l;
          }
        }
      }
      return min_size > s.size() ? "" : s.substr(min_l, min_size);
    }
};
