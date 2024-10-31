
var twoSum = function (nums, target) { // Find two numbers which are two-sum of target in nums                      
    const map = new Map(); // create a new map
    for (let i = 0; i < nums.length; i++) { // now iterate over nums
        const complement = target - nums[i] // find complement of target to current
        if (map.has(complement)) { // if there's complement in map
            return [map.get(complement), i] // return complement and current index
        }
        map.set(nums[i], i) // map current number to current index otherwise
    }
};
