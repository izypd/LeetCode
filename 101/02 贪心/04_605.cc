class Solution {
  public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int count = 0;
        int pre = -1;
        int m = flowerbed.size();
        for (int i = 0; i < m; ++i) {
            if (flowerbed[i] == 1) {
                if (pre < 0) {
                    count += i / 2;
                } else {
                    count += (i - pre - 2) / 2;
                }
                if (count >= n) return true;
                pre = i;
            }
        }
        if (pre < 0) {
            count += (m + 1) / 2;
        } else {
            count += (m - pre - 1) / 2;
        }
        return count >= n;
    }
};
