fn pesquisa_binaria(lista: &[i8], alvo: i8) -> Option<i8> {
    let mut baixo = 0;
    let mut alto = lista.len() - 1;

    while baixo <= alto {
        let meio = (baixo + alto) / 2;

        if lista[meio] == alvo {
            return Some(meio as i8);
        } else if lista[meio] < alvo {
            baixo = meio + 1;
        } else {
            alto = meio - 1;
        }
    }

    None
}

fn main() {
    let minha_lista: [i8; 5] = [1, 3, 5, 7, 9];

    println!("{:?}", pesquisa_binaria(&minha_lista, 1));
    println!("{:?}", pesquisa_binaria(&minha_lista, 3));
    println!("{:?}", pesquisa_binaria(&minha_lista, 5));
    println!("{:?}", pesquisa_binaria(&minha_lista, 7));
    println!("{:?}", pesquisa_binaria(&minha_lista, 9));
    println!("{:?}", pesquisa_binaria(&minha_lista, 20));
}
