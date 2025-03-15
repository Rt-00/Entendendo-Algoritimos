def pesquisa_binaria(lista, alvo):
    baixo = 0
    alto = len(lista) - 1

    while baixo <= alto:
        meio = (baixo + alto) // 2

        if lista[meio] == alvo:
            return meio
        elif lista[meio] < alvo:
            baixo = meio + 1
        else:
            alto = meio - 1

    return None

minha_lista = [1, 3, 5, 7, 9]

print(pesquisa_binaria(minha_lista, 1))
print(pesquisa_binaria(minha_lista, 3))
print(pesquisa_binaria(minha_lista, 5))
print(pesquisa_binaria(minha_lista, 7))
print(pesquisa_binaria(minha_lista, 9))
print(pesquisa_binaria(minha_lista, 20))
