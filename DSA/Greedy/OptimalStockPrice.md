# Optimal Stock Trading
Given a list of prices, where each element prices[i] represents the price of a particular stock on day i, determine the maximum profit to be made by purchasing the stock and selling it on a future date. If it is not possible to generate a profit, return 0.

# Input 
prices: number[]: An array of integers representing the stock price on each day

## Examples

```
Input: prices = [1,2,3,4]
Output: 3
Explanation: Buy the stock at day 1 (price = 1) and sell it on day 4 (price = 4), profit: 4 - 1 = 3
```


```
Input: prices = [4,3,2,1]
Output: 0
Explanation: Not possible to profit because the prices is only declining
```

```
Input: prices = [6,8,1,2,30,19]
Output: 29
Explanation: Buy at day 3 (price = 1) and sell it on day 5 (price = 30), profit: 30 - 1 = 29
```

# Constraints
1 <= prices.length <= 10,000 <br>
0 <= prices[i] <= 10,000


# logic
- we need to buy at the lowest price, so track the lowest price
- if we are selling it for the current price what will be the profit and see if it's the max profit


```
export default function optimalStockTrading(prices: number[]): number {

  let maxProfit: number = 0;
  let lowestPrice: number = Number.MAX_SAFE_INTEGER;

  for (const currentPrice of prices) {
    lowestPrice = Math.min(lowestPrice, currentPrice);

    // Calculate potential profit for the current price
    const potentialProfit: number = currentPrice - lowestPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}

```