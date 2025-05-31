import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class BreadthFirstSearch {
    public static boolean isSeller(String name) {
        return name.endsWith("m");
    }

    public static boolean breadthFirstSearch(Map<String, List<String>> graph, String start) {
        Queue<String> queue = new LinkedList<>(graph.get(start));
        Set<String> verified = new HashSet<>();

        while (!queue.isEmpty()) {
            String person = queue.poll();

            if (!verified.contains(person)) {
                System.out.println("Veriying " + person);

                if (isSeller(person)) {
                    System.out.println(person + " is seller");
                    return true;
                } else {
                    List<String> neighbor = graph.getOrDefault(person, new ArrayList<>());
                    queue.addAll(neighbor);
                    verified.add(person);
                }
            }
        }

        return false;
    }

    public static void main(String[] args) throws Exception {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("you", Arrays.asList("alice", "bob", "claire"));
        graph.put("bob", Arrays.asList("anuj", "peggy"));
        graph.put("alice", Arrays.asList("peggy"));
        graph.put("claire", Arrays.asList("thom", "jonny"));
        graph.put("anuj", Collections.emptyList());
        graph.put("peggy", Collections.emptyList());
        graph.put("thom", Collections.emptyList());
        graph.put("jonny", Collections.emptyList());

        breadthFirstSearch(graph, "you");
    }
}
