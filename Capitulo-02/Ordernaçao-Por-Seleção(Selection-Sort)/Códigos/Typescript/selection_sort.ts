function buscaMenor(arr: number[]): number {
  let menorIndice = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[menorIndice]) menorIndice = i;
  }

  return menorIndice;
}

function ordenacaoPorSelecao(arr: number[]): number[] {
  let novoArr: number[] = [];
  let lista = [...arr];

  while (lista.length) {
    let menor = buscaMenor(lista);
    novoArr.push(...lista.splice(menor, 1));
  }

  return novoArr;
}

console.log(ordenacaoPorSelecao([5, 3, 6, 2, 10]));
