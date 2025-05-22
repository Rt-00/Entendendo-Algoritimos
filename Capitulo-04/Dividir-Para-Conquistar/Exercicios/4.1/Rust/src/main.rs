fn sum(lista: &[i32]) -> i32 {
    if lista.is_empty() {
        0
    } else {
        lista[0] + sum(&lista[1..])
    }
}

fn main() {
    let mut result = sum(&[1, 2, 3, 4]);
    println!("{}", result);

    result = sum(&[2, 5, 6, 7]);
    println!("{}", result);

    result = sum(&[3, 5, 7, 9]);
    println!("{}", result);
}
