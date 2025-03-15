public class PesquisaBinaria {
    public static Integer pesquisaBinaria(int[] lista, int alvo) {
        int baixo = 0;
        int alto = lista.length - 1;

        while (baixo <= alto) {
            int meio = (baixo + alto) / 2;

            if (lista[meio] == alvo) {
                return meio;
            } else if (lista[meio] < alvo) {
                baixo = meio + 1;
            } else {
                alto = meio - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {
        int[] minhaLista = { 1, 3, 5, 7, 9 };

        System.out.println(pesquisaBinaria(minhaLista, 1));
        System.out.println(pesquisaBinaria(minhaLista, 3));
        System.out.println(pesquisaBinaria(minhaLista, 5));
        System.out.println(pesquisaBinaria(minhaLista, 7));
        System.out.println(pesquisaBinaria(minhaLista, 9));
        System.out.println(pesquisaBinaria(minhaLista, 20));
    }
}
