// Long Common Subsequence
fn lcs(x: &str, y: &str) -> usize {
    let m = x.len();
    let n = y.len();
    let x = x.as_bytes();
    let y = y.as_bytes();

    let mut dp = vec![vec![0; n + 1]; m + 1];

    for i in 1..=m {
        for j in 1..=n {
            if x[i - 1] == y[j - 1] {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = dp[i - 1][j].max(dp[i][j - 1]);
            }
        }
    }

    dp[m][n]
}

fn main() {
    println!("{}", lcs("ABCBDAB", "BDCABA")); // Output: 4
}
