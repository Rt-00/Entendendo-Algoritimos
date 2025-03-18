import java.util.ArrayList;
import java.util.List;

public class OrdenacaoPorSelecao {
    public static int buscaMenor(List<Integer> lista) {
        int menorIndice = 0;

        for (int i = 1; i < lista.size(); i++) {
            if (lista.get(i) < lista.get(menorIndice)) {
                menorIndice = i;
            }
        }

        return menorIndice;
    }

    public static List<Integer> ordenacaoPorSelecao(List<Integer> lista) {
        List<Integer> novaLista = new ArrayList<>();
        List<Integer> listaMutavel = new ArrayList<>(lista);

        while (!listaMutavel.isEmpty()) {
            int menor = buscaMenor(listaMutavel);
            novaLista.add(listaMutavel.remove(menor));
        }

        return novaLista;
    }

    public static void main(String[] args) throws Exception {
        List<Integer> lista = List.of(5, 3, 6, 2, 10);
        System.out.println(ordenacaoPorSelecao(lista));
    }
}
