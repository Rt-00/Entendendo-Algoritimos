def busca_binaria(lista, alvo)
  baixo = 0
  alto = lista.length - 1

  while baixo <= alto
    meio = (baixo + alto) / 2

    if lista[meio] == alvo
      return meio
    elsif lista[meio] < alvo
      baixo = meio + 1
    else
      alto = meio - 1
    end
  end

  nil
end

minha_lista = [1, 3, 5, 7, 9]

puts busca_binaria(minha_lista, 1)
puts busca_binaria(minha_lista, 3)
puts busca_binaria(minha_lista, 5)
puts busca_binaria(minha_lista, 7)
puts busca_binaria(minha_lista, 9)
puts busca_binaria(minha_lista, 20)
