table = {}

# 1. Insert
table["name"] = "Bob"
table["age"] = 30
table["city"] = "São Paulo"

# 2. Recovery
print(table["name"])

# 3. Update
table["age"] = 20
print(table["age"])

# 4. Delete
del table["city"]

print(table)