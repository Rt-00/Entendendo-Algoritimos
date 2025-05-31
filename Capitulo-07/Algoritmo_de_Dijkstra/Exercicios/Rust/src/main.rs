use std::collections::{HashMap, HashSet};

fn dijkstra<'a>(
    graph: &'a HashMap<&'a str, HashMap<&'a str, u32>>,
    start: &'a str,
) -> HashMap<&'a str, u32> {
    let mut costs: HashMap<&'a str, u32> = HashMap::new();
    let mut processed: HashSet<&'a str> = HashSet::new();

    for &node in graph.keys() {
        costs.insert(node, u32::MAX);
    }
    costs.insert(start, 0);

    loop {
        // Criamos uma cópia do próximo nó de custo mínimo
        let next_node = costs
            .iter()
            .filter(|(n, _)| !processed.contains(*n))
            .min_by_key(|(_, c)| *c)
            .map(|(&n, &c)| (n, c));

        if let Some((node, cost)) = next_node {
            if cost == u32::MAX {
                break;
            }

            if let Some(neighbors) = graph.get(node) {
                for (&neighbor, &weight) in neighbors {
                    let new_cost = cost + weight;
                    let neighbor_cost = *costs.get(neighbor).unwrap_or(&u32::MAX);
                    if new_cost < neighbor_cost {
                        costs.insert(neighbor, new_cost);
                    }
                }
            }

            processed.insert(node);
        } else {
            break;
        }
    }

    costs
}

fn main() {
    let mut graph: HashMap<&str, HashMap<&str, u32>> = HashMap::new();

    graph.insert("start", HashMap::from([("a", 6), ("b", 2)]));
    graph.insert("a", HashMap::from([("end", 1)]));
    graph.insert("b", HashMap::from([("a", 3), ("end", 5)]));
    graph.insert("end", HashMap::new());

    let result = dijkstra(&graph, "start");
    println!("{:?}", result);
}
