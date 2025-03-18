fn busca_menor(lista: &Vec<i32>) -> usize {
    let mut menor_indice = 0;

    for i in 1..lista.len() {
        if lista[i] < lista[menor_indice] {
            menor_indice = i;
        }
    }

    menor_indice
}

fn ordenacao_por_selecao(mut lista: Vec<i32>) -> Vec<i32> {
    let mut nova_lista = Vec::new();

    while !lista.is_empty() {
        let menor = busca_menor(&lista);
        nova_lista.push(lista.remove(menor));
    }

    nova_lista
}

fn main() {
    let lista = vec![5, 3, 6, 2, 10];
    println!("{:?}", ordenacao_por_selecao(lista));
}
