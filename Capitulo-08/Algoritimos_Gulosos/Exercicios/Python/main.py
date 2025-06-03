def greedy_coin_change(coins, amount):
    coins.sort(reverse=True)

    result = []

    for coin in coins:
        while amount >= coin:
            amount -= coin
            result.append(coin)

    return result


coins = [25, 10, 5, 1]
amount = 63

print(greedy_coin_change(coins, amount))
