// contiguous ranges
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let max_length = 0;
    const map = new Map();
    for (let right = 0; right < s.length; right++) {
        while (map.has(s[right])) {
            map.delete(s[left]);
            left++
        }
        map.set(s[right], right)
        max_length = Math.max(max_length, right - left + 1)
    }
    return max_length;
};