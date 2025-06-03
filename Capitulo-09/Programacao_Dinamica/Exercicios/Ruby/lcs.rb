# Long Common Subsequence
def lcs(x, y)
  m = x.length
  n = y.length
  dp = Array.new(m + 1) { Array.new(n + 1, 0) }

  (1..m).each do |i|
    (1..n).each do |j|
      if x[i - 1] == y[j - 1]
        dp[i][j] = dp[i - 1][j - 1] + 1
      else
        dp[i][j] = [dp[i - 1][j], dp[i][j - 1]].max
      end
    end
  end

  dp[m][n]
end

puts lcs("ABCBDAB", "BDCABA")  # Output: 4
