import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Dijkstra {
    public static Map<String, Integer> dijkstra(Map<String, Map<String, Integer>> graph, String start) {
        Map<String, Integer> costs = new HashMap<>();
        Set<String> processed = new HashSet<>();

        for (String node : graph.keySet()) {
            costs.put(node, Integer.MAX_VALUE);
        }
        costs.put(start, 0);

        String node = findLowestCostNode(costs, processed);

        while (node != null) {
            int cost = costs.get(node);
            Map<String, Integer> neighbors = graph.get(node);

            for (String neighbor : neighbors.keySet()) {
                int newCost = cost + neighbors.get(neighbor);

                if (newCost < costs.get(neighbor)) {
                    costs.put(neighbor, newCost);
                }
            }

            processed.add(node);
            node = findLowestCostNode(costs, processed);
        }

        return costs;
    }

    private static String findLowestCostNode(Map<String, Integer> costs, Set<String> processed) {
        int lowestCost = Integer.MAX_VALUE;
        String lowestNode = null;

        for (String node : costs.keySet()) {
            int cost = costs.get(node);

            if (cost < lowestCost && !processed.contains(node)) {
                lowestCost = cost;
                lowestNode = node;
            }
        }

        return lowestNode;
    }

    public static void main(String[] args) throws Exception {
        Map<String, Map<String, Integer>> graph = new HashMap<>();

        Map<String, Integer> startEdges = new HashMap<>();
        startEdges.put("a", 6);
        startEdges.put("b", 2);

        Map<String, Integer> aEdges = new HashMap<>();
        aEdges.put("end", 1);

        Map<String, Integer> bEdges = new HashMap<>();
        bEdges.put("a", 3);
        bEdges.put("end", 5);

        graph.put("start", startEdges);
        graph.put("a", aEdges);
        graph.put("b", bEdges);
        graph.put("end", new HashMap<>());

        System.out.println(dijkstra(graph, "start"));
    }
}
