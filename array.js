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

// trapping rain water
var trap = function (height) {
    if (height.length === 0) return 0;
    // two pointer and correspoding variables
    let left = 0,
        leftMax = 0;
    let right = height.length - 1,
        rightMax = 0;
    let waterTrapped = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left]
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right]
            }
            right--;
        }
    }
    return waterTrapped;
};

// first missing positive 
var firstMissingPositive = function (nums) {
    let n = nums.length;
    // Place the numbers in thier correct position
    for (let i in nums) {
        // while the number is in range but not in correct position
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // swap number at i with its correct position
            let correctIndex = nums[i] - 1;
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
        }
    }
    // Identify the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    // If all numbers are at their correct position return i+1
    return n + 1;
};