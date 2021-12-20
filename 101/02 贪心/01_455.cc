class Solution {
  public:
    int findContentChildren(vector<int>& children, vector<int>& cookies) {
      sort(children.begin(), children.end());
      sort(cookies.begin(), cookies.end());
      int i_children = 0;
      int i_cookies = 0;
      while (i_children < children.size() && i_cookies < cookies.size()) {
        if (children[i_children] <= cookies[i_cookies]) ++i_children;
        ++i_cookies;
      }
      return i_children;
    }
};
