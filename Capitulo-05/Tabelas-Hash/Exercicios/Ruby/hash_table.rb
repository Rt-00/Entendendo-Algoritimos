table = {}

# 1. Insert
table["name"] = "Bob"
table["age"] = 30
table["city"] = "São Paulo"

# 2. Recovery
puts table["name"]

# 3. Update
table["age"] = 20
puts table["age"]

# 3. Delete
table.delete("city")

puts table
