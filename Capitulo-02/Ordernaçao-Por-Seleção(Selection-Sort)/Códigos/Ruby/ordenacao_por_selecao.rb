def busca_menor(arr)
  menor_indice = 0

  (1...arr.length).each do |i|
    menor_indice = i if arr[i] < arr[menor_indice]
  end

  menor_indice
end

def ordenacao_por_selecao(arr)
  novo_arr = []
  lista = arr.dup

  until lista.empty?
    menor = busca_menor(lista)
    novo_arr << lista.delete_at(menor)
  end

  novo_arr
end

lista = [5, 3, 6, 2, 10]
puts ordenacao_por_selecao(lista).inspect
