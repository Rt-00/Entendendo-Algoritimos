use std::collections::{HashMap, HashSet, VecDeque};

fn is_seller(name: &str) -> bool {
    name.ends_with("m")
}

fn breadth_first_search(graph: &HashMap<&str, Vec<&str>>, start: &str) {
    let mut queue: VecDeque<&str> = VecDeque::from(graph[start].clone());
    let mut verified: HashSet<&str> = HashSet::new();

    while let Some(person) = queue.pop_front() {
        if !verified.contains(person) {
            println!("Verifing {}", person);

            if is_seller(person) {
                println!("{} is seller", person);
                return;
            } else {
                if let Some(neighbors) = graph.get(person) {
                    for neighbor in neighbors {
                        queue.push_back(neighbor);
                    }
                }

                verified.insert(person);
            }
        }
    }
}

fn main() {
    let mut graph: HashMap<&str, Vec<&str>> = HashMap::new();
    graph.insert("you", vec!["alice", "bob", "claire"]);
    graph.insert("bob", vec!["anuj", "peggy"]);
    graph.insert("alice", vec!["peggy"]);
    graph.insert("claire", vec!["thom", "jonny"]);
    graph.insert("anuj", vec![]);
    graph.insert("peggy", vec![]);
    graph.insert("thom", vec![]);
    graph.insert("jonny", vec![]);

    breadth_first_search(&graph, "you");
}
