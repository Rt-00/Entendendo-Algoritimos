def greedy_coin_change(coins, amount)
  coins.sort!.reverse!
  result = []

  coins.each do |coin|
    while amount >= coin
      amount -= coin
      result << coin
    end
  end

  result
end

coins = [25, 10, 5, 1]
amount = 63
puts greedy_coin_change(coins, amount).inspect