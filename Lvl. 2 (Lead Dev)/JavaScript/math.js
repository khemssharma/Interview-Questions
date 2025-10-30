var fib = function(n) {
    if (n <= 1){
        return n;
    }
    return fib(n-1)+fib(n-2);
};

var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(candies);
    let result = []
    for (let candy in candies){
        result.push(candy+extraCandies >= max)
    }
    return result;
};

var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = []
    for (let candy of candies){
        result.push(candy+extraCandies >= max)
    }
    return result;
};

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        // Check if the current plot is empty and the plots to the left and right are also empty or out of bounds
        if (flowerbed[i] === 0 && 
            (i === 0 || flowerbed[i - 1] === 0) && 
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            
            // Plant a flower
            flowerbed[i] = 1;
            n--;  // Reduce the count of flowers we need to plant

            // If we have planted enough flowers, return true
            if (n === 0) return true;
        }
    }
    return n <= 0;  // If there are still flowers left to plant, return false
};
