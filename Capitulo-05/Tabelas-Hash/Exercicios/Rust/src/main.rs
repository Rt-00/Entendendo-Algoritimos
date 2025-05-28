use std::collections::HashMap;

fn main() {
    let mut table = HashMap::new();

    // 1. Insert
    table.insert("name", "Bob");
    table.insert("age", "30");
    table.insert("city", "São Paulo");

    // 2. Recovery
    println!("{}", table.get("name").unwrap());

    // 3. Update
    table.insert("age", "20");
    println!("{}", table.get("age").unwrap());

    // 4. Delete
    table.remove("city");
    println!("{:?}", table);
}
