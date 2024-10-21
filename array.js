// remove duplicates in nums
var removeDuplicates = function (nums) {
    let k = 0;
    for (let i in nums) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i]
        }
    }
    return k + 1;
};

// maximum water area
var maxArea = function (height) {
    // two pointers
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left)
        // update maxWater only when necessary
        maxWater = Math.max(maxWater, area)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater
};
