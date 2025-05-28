import java.util.HashMap;

public class HashTable {
    public static void main(String[] args) throws Exception {
        HashMap<String, Object> table = new HashMap<>();

        // 1. Insert
        table.put("name", "Bob");
        table.put("age", 30);
        table.put("city", "São Paulo");

        // 2. Recovery
        System.out.println(table.get("name"));

        // 3. Update
        table.put("age", 20);
        System.out.println(table.get("age"));

        // 4. Delete
        table.remove("city");

        System.out.println(table);
    }
}
