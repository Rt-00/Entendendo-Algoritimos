fn greed_coin_change(mut coins: Vec<u32>, mut amount: u32) -> Vec<u32> {
    coins.sort_by(|a, b| b.cmp(a));
    let mut result = Vec::new();

    for &coin in &coins {
        while amount >= coin {
            amount -= coin;
            result.push(coin);
        }
    }

    result
}

fn main() {
    let coins = vec![25, 10, 5, 1];
    let amount = 63;
    let result = greed_coin_change(coins, amount);

    println!("{:?}", result);
}
