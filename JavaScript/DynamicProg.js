
var maxProfit = function (prices) { //   Best time to buy and sell stocks
    let maxProfit = 0; // no profit
    let minPrice = Infinity; // highest price
    for (let price=0; price < prices.length; price++) { //  look for every price
        minPrice = Math.min(minPrice, price); //  compare cuurent price with minimum price
        const profit = price - minPrice; // find current profit 
        maxProfit = Math.max(maxProfit, profit); //  compare current profit with maximum profit  
    }
    return maxProfit;
};
