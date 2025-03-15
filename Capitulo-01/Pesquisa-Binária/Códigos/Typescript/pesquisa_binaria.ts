const minha_lista: number[] = [1, 3, 5, 7, 9];

function pesquisa_binaria(lista: number[], alvo: number): number | null {
  let baixo = 0;
  let alto = lista.length - 1;

  while (baixo <= alto) {
    let meio = Math.floor((baixo + alto) / 2);

    if (lista[meio] === alvo) {
      return meio;
    } else if (lista[meio] < alvo) {
      baixo = meio + 1;
    } else {
      alto = meio - 1;
    }
  }

  return null;
}

console.log(pesquisa_binaria(minha_lista, 1));
console.log(pesquisa_binaria(minha_lista, 3));
console.log(pesquisa_binaria(minha_lista, 5));
console.log(pesquisa_binaria(minha_lista, 7));
console.log(pesquisa_binaria(minha_lista, 9));
console.log(pesquisa_binaria(minha_lista, 20));
