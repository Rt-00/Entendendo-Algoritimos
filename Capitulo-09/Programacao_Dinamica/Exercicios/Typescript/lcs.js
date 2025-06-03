//  Long Common Subsequence
function lcs(X, Y) {
    var m = X.length;
    var n = Y.length;
    var dp = Array.from({ length: m + 1 }, function () {
        return Array(n + 1).fill(0);
    });
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (X[i - 1] === Y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}
console.log(lcs("ABCBDAB", "BDCABA")); // Output: 4
