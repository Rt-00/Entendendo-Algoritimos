var table = new Map();
// 1. Insert
table.set("name", "Bob");
table.set("age", "30");
table.set("city", "São Paulo");
// 2. Recovery
console.log(table.get("name"));
// 3. Update
table.set("age", "20");
console.log(table.get("age"));
// 4. Delete
table.delete("city");
console.log(table);
