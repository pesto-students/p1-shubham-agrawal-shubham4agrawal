const getMaxProfit = (stockPriceArr) => {
    let maxProfit = 0;
    let profit = 0;
    let days;
    for(let i = 0; i < stockPriceArr.length - 1; i++) {
        for(let j = i+1; j < stockPriceArr.length; j++) {
            profit = stockPriceArr[j] - stockPriceArr[i];
            if (profit > maxProfit) {
                maxProfit = profit;
                days = [i+1, j+1];
            }
        }
    }

    return [maxProfit, days];
}

[profit, [startDay, endDay]] = (getMaxProfit([7,1,5,3,6,4,13]));

console.log(`Max profit of $${profit} will earned if buyer buys on day ${startDay} and sells on day ${endDay}`);