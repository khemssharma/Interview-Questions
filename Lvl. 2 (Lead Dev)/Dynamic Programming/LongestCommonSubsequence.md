# Intuition 💡
There are `two` approaches to solve this problem. First is, `Recursive` approach that recursively checks two conditions and hence have the time complexity of `O(2 ^ N)`.

The second is `Dynamic` ` Bottom-up` approach that will use an `array` to store the `number` of `same` characters in both strings. It runs with `O(n)` time complexity.


# Approach 🧠
1. Construct a 1D array with length equal to that of one of the strings. (bottom-up approach of DP)
2. Iterate over the `characters` of one of the strings.
3. Calculate the number of same characters in both strings:
    - For every `index` in DP array, 
        - If both characters of strings match, set the number of such ocurrences at that `index` and check if it is the `largest` number of such occurences.
4. Return the result.
 

![dde60768-c476-4e14-abba-bc4774d2c351_1721913220.0033844.png](https://assets.leetcode.com/users/images/ed901e06-e853-4c24-b165-10599681811a_1739539491.9293232.png)

# Code 💻
```javascript []
var longestCommonSubsequence = function (text1, text2) {

    const dp = Array(text1.length).fill(0)
    let longest = 0

    for (const c of text2) {
        let curLength = 0;

        for (let i = 0; i < dp.length; i++) {
            if (curLength < dp[i]) { // If there's currently higher value in DP
                curLength = dp[i] // Assign the same
            } 
            else if (c === text1[i]) { // If characters match
                dp[i] = curLength + 1; // Increment the value in DP at i.
                longest = Math.max(longest, curLength + 1)
            }
        }
    }
    return longest
};
```

![Screenshot 2025-02-14 184648.png](https://assets.leetcode.com/users/images/47f84013-d5ad-494d-96d7-24f4332cfd00_1739539242.9460192.png)

# Complexity 

- Time complexity: `O(m * n)`

- Space complexity: `O(n)`