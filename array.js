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
var trap = function(height) {
    if (height.length === 0) return 0;
    // two pointer and correspoding variables
    let left = 0, leftMax = 0;
    let right = height.length - 1, rightMax = 0;
    let waterTrapped = 0;
    while (left < right){
        if (height[left] < height[right]){
            if (height[left] >= leftMax){
                leftMax = height[left];
            }else{
                waterTrapped += leftMax - height[left]
            }
            left++;
        }else{
            if (height[right] >= rightMax){
                rightMax = height[right];
            }else{
                waterTrapped += rightMax - height[right]
            }
            right--;
        }
    }
    return waterTrapped;
};