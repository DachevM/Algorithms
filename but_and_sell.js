
//MySolution
const maxProfit = function(prices) {
        let max = 0;
        let min = prices[0];
        for (let item of prices) {
            if (item < min) {
                min = item;
            } else if (item - min > max)  {
                    max = item - min;
                }
        }
    return max;
}
console.log(maxProfit([7,1,5,3,6,4]))



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////solution1

const maxProfit1 = (prices) => {
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];

            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
};



///////////////solution 2

const maxProfit2 = function(prices) {

    let max = 0;
    let min = prices[0];

    for(let i = 0; i<prices.length; i++){
        min = Math.min(min, prices[i]);
        let current  = prices[i] - min;
        max = Math.max(current, max);
    }
    return max
};


//////////solution 3
const maxProfit3 = function(prices) {
    let min = Number.MAX_SAFE_INTEGER
    let result = 0
    for (let price of prices) {
        if (price < min) {
            min = price
        } else {
            result = Math.max(result, price - min)
        }
    }

    return result;
};



