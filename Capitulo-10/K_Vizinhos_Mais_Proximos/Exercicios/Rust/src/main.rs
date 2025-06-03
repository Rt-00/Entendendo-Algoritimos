use std::collections::HashMap;

fn euclidean_distance(p1: &[f64], p2: &[f64]) -> f64 {
    p1.iter()
        .zip(p2.iter())
        .map(|(a, b)| (a - b).powi(2))
        .sum::<f64>()
        .sqrt()
}

fn knn(data: &Vec<(Vec<f64>, &str)>, query: &[f64], k: usize) -> String {
    let mut distances: Vec<(f64, &str)> = data
        .iter()
        .map(|(features, label)| (euclidean_distance(features, query), *label))
        .collect();

    distances.sort_by(|a, b| a.0.partial_cmp(&b.0).unwrap());

    let mut counts = HashMap::new();
    for (_, label) in distances.iter().take(k) {
        *counts.entry(*label).or_insert(0) += 1;
    }

    counts
        .into_iter()
        .max_by_key(|&(_, count)| count)
        .unwrap()
        .0
        .to_string()
}

fn main() {
    let data = vec![
        (vec![1.0, 2.0], "A"),
        (vec![2.0, 3.0], "A"),
        (vec![3.0, 1.0], "B"),
        (vec![6.0, 5.0], "B"),
        (vec![7.0, 7.0], "B"),
    ];

    let query = vec![2.0, 2.0];
    let k = 3;

    println!("{}", knn(&data, &query, k));
}
