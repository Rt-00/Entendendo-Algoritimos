def count(lista):
    if lista == []:
        return 0

    return 1 + count(lista[1:])

print(count([1, 3, 5, 7]))
print(count([2, 4, 6, 10, 12]))
print(count([3, 5, 7, 9, 13, 15]))
