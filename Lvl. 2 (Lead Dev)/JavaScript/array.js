/** JSDoc comment like this is used for compile time type validation
 * @param {number[]} prices
 * @return {number}
 */

var missingNumber = function (nums) {
    const n = nums.length;
    const expextedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => num + sum, 0)
    return expextedSum - actualSum;
};

function singleNumber(nums) {
    let unique = 0;
    for (let num = 0; num < nums.length; num++) {
        unique ^= num; // XOR each number
    }
    return unique;
}

function moveZeroes(nums) {
    let lastNonZeroIndex = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }
    // Fill the rest of the array with zeros
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

var check = function (nums) { // check if array is sorted (increasing) and rotated
    // Simply check if the next number is greater than the current
    // If the array is sorted in cyclic order then the next is nums[(i+1)%nums.length]
    // in cyclic sorted array only 1 time the next number can not be greater/lesser than the current
    let countDecreasingNums = 0; // counter
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) { // iterate over nums, check and count
            countDecreasingNums++;
        }
    }
    if (countDecreasingNums > 1) {
        return false;
    }
    return true;
};

var plusOne = function (digits) { // array increment by one
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1; // simply add one and return digits
            return digits;
        }
        digits[i] = 0; // countinuosly mark digit zero if it is 9
    }
    digits.unshift(1); // if all digits are marked zero then add a one in the beginning and return digits
    return digits;
};

var removeDuplicates = function (nums) { // remove duplicates in nums
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[k]) { // we found second/third... distinct number k
            k++;
            nums[k] = nums[i] // overrides itself or previous duplicate
        }
    }
    return k + 1;
};

var removeElement = function (nums, val) { // remove element by value
    let k = 0; // pointer k
    for (let i = 0; i < nums.length; i++) { // iterate over nums
        if (nums[i] !== val) {
            nums[k] = nums[i]; //  for number not equal to given, value override itself 
            k++;
        } // for number to remove, number is overriden by next 
    } // at the end of loop there would be one duplicate number in the array
    return k; // but only the count of distinct number will be returned excluding duplicate
};

var rotate = function (matrix) { // rotate matrix 90 degree
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) { //  j is always 1 more to i to avoid unnecessary swap (overriding number itself)
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};

var firstMissingPositive = function (nums) { // first missing positive 
    let n = nums.length;
    for (let i = 0; i < nums.length; i++) { // Place the numbers in thier correct position
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) { // while the number is in range but not in correct position
            let correctIndex = nums[i] - 1; // swap number at i with its correct position
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
        }
    }
    for (let i = 0; i < n; i++) { // Identify the first missing positive integer
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1; // If all numbers are at their correct position return i+1
};