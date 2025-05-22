fn count(list: &[i32]) -> usize {
    if list.is_empty() {
        0
    } else {
        1 + count(&list[1..])
    }
}

fn main() {
    println!("{}", count(&[1, 3, 5, 7]));
    println!("{}", count(&[2, 4, 6, 10, 12]));
    println!("{}", count(&[3, 5, 7, 9, 13, 15]));
}
