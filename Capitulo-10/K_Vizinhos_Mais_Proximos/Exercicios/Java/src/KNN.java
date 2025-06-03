import java.util.*;

class Point {
    double[] features;
    String label;

    Point(double[] features, String label) {
        this.features = features;
        this.label = label;
    }
}

public class KNN {

    static double euclideanDistance(double[] p1, double[] p2) {
        double sum = 0;
        for (int i = 0; i < p1.length; i++) {
            sum += Math.pow(p1[i] - p2[i], 2);
        }
        return Math.sqrt(sum);
    }

    static String knn(List<Point> data, double[] query, int k) {
        List<Map.Entry<Double, String>> distances = new ArrayList<>();
        for (Point point : data) {
            double dist = euclideanDistance(point.features, query);
            distances.add(new AbstractMap.SimpleEntry<>(dist, point.label));
        }
        distances.sort(Comparator.comparingDouble(Map.Entry::getKey));

        Map<String, Integer> counts = new HashMap<>();
        for (int i = 0; i < k; i++) {
            counts.put(distances.get(i).getValue(),
                    counts.getOrDefault(distances.get(i).getValue(), 0) + 1);
        }

        return Collections.max(counts.entrySet(), Map.Entry.comparingByValue()).getKey();
    }

    public static void main(String[] args) {
        List<Point> data = Arrays.asList(
                new Point(new double[] { 1, 2 }, "A"),
                new Point(new double[] { 2, 3 }, "A"),
                new Point(new double[] { 3, 1 }, "B"),
                new Point(new double[] { 6, 5 }, "B"),
                new Point(new double[] { 7, 7 }, "B"));

        double[] query = { 2, 2 };
        int k = 3;

        System.out.println(knn(data, query, k)); // Output: 'A'
    }
}
