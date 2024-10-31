// subarrays
var searchMatrix = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--
        } else row++
    }
    return false
};

var maxArea = function (height) { // container with most water
    let left = 0; // two pointers
    let right = height.length - 1;
    let maxWater = 0;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left) // calculate area enclosed by left and right pillar
        maxWater = Math.max(maxWater, area) // if current area is maximum, update it 
        if (height[left] < height[right]) { // continue with next larger pillar whether it is left or right 
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
};

var searchInsert = function (nums, target) { // search insert position
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

var spiralOrder = function (matrix) {
    const result = [];
    if (matrix.length == 0) return result;
    let top = 0,
        bottom = matrix.length - 1;
    let left = 0,
        right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
        }
        bottom--;
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
        }
        left++;
    }
    return result;
};

var trap = function (height) { // trapping rain water
    if (height.length === 0) return 0;
    let left = 0, // two pointer and correspoding variables
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


var searchRange = function (nums, target) { // Find first and last position of an elemnet in a sorted array
    const binarySearch = (isleft) => {
        let left = 0,
            right = nums.length - 1;
        let index = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                index = mid;
                if (isleft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }
    const start = binarySearch(true);
    if (start === -1) {
        return [-1, -1];
    }
    const end = binarySearch(false);
    return [start, end];
};