def buscaMenor(arr):
    menor = arr[0]
    menor_indice = 0

    for i in range(1, len(arr)):
        if arr[i] < menor:
            menor = arr[i]
            menor_indice = i

    return menor_indice

def ordenacaoPorSelecao(arr: list[int]):
    novoArr = []

    for _ in range(len(arr)):
        menor = buscaMenor(arr)
        novoArr.append(arr.pop(menor))

    return novoArr


print(ordenacaoPorSelecao([5, 3, 6, 2, 10]))