var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function buscaMenor(arr) {
    var menorIndice = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[menorIndice])
            menorIndice = i;
    }
    return menorIndice;
}
function ordenacaoPorSelecao(arr) {
    var novoArr = [];
    var lista = __spreadArray([], arr, true);
    while (lista.length) {
        var menor = buscaMenor(lista);
        novoArr.push.apply(novoArr, lista.splice(menor, 1));
    }
    return novoArr;
}
console.log(ordenacaoPorSelecao([5, 3, 6, 2, 10]));
