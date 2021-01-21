// Runtime complexity
// The runtime complexity of this solution is linear, O(n)O(n).

// Memory complexity
// The memory complexity of this algorithm is constant, O(1)O(1).

let findBuySellStockPrices = function(array) {
  if (!array || array.length < 2) {
    return;
  }

  let currentBuy = array[0];
  let globalSell = array[1];
  let globalProfit = globalSell - currentBuy;

  let currentProfit = 0;

  for (let i = 1; i < array.length; i++) {
    currentProfit = array[i] - currentBuy;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = array[i];
    }

    if (currentBuy > array[i]) {
      currentBuy = array[i];
    } 
  }
  return [globalSell - globalProfit, globalSell];
};

let arrayForStockPrices = [1, 2, 3, 4, 3, 2, 1, 2, 5];
let result = findBuySellStockPrices(arrayForStockPrices);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);

arrayForStockPrices = [8, 6, 5, 4, 3, 2, 1];
result = findBuySellStockPrices(arrayForStockPrices);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);
