import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GreedCoinChange {
    public static List<Integer> greedyCoinChange(int[] coins, int amount) {
        Arrays.sort(coins);
        List<Integer> result = new ArrayList<>();

        for (int i = coins.length - 1; i >= 0; i--) {
            while (amount >= coins[i]) {
                amount -= coins[i];
                result.add(coins[i]);
            }
        }

        return result;
    }

    public static void main(String[] args) throws Exception {
        int[] coins = { 25, 10, 5, 1 };
        int amount = 63;
        List<Integer> result = greedyCoinChange(coins, amount);
        System.out.println(result);
    }
}
