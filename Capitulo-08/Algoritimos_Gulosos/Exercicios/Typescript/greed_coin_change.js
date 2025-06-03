function greedyCoinChange(coins, amount) {
    coins.sort(function (a, b) { return b - a; });
    var result = [];
    for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
        var coin = coins_1[_i];
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }
    return result;
}
var coins = [25, 10, 5, 1];
var amount = 63;
console.log(greedyCoinChange(coins, amount));
