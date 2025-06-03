function greedyCoinChange(coins: number[], amount: number): number[] {
  coins.sort((a, b) => b - a);
  const result: number[] = [];

  for (const coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }

  return result;
}

const coins = [25, 10, 5, 1];
const amount = 63;

console.log(greedyCoinChange(coins, amount));
