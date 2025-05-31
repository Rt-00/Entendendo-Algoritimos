type Graph = { [key: string]: { [key: string]: number } };

function dijkstra(graph: Graph, start: string) {
  const costs: { [key: string]: number } = {};
  const processed: Set<string> = new Set();

  for (const node in graph) {
    costs[node] = Infinity;
  }
  costs[start] = 0;

  function findLowestCostNode(
    costs: { [key: string]: number },
    processed: Set<string>
  ): string | null {
    let lowestCost = Infinity;
    let lowestNode: string | null = null;

    for (const node in costs) {
      if (costs[node] < lowestCost && !processed.has(node)) {
        lowestCost = costs[node];
        lowestNode = node;
      }
    }
    return lowestNode;
  }

  let node = findLowestCostNode(costs, processed);

  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];

    for (const n in neighbors) {
      const newCost = cost + neighbors[n];
      if (newCost < (costs[n] ?? Infinity)) {
        costs[n] = newCost;
      }
    }
    processed.add(node);
    node = findLowestCostNode(costs, processed);
  }

  return costs;
}

const graph: Graph = {
  start: { a: 6, b: 2 },
  a: { end: 1 },
  b: { a: 3, end: 5 },
  end: {},
};

console.log(dijkstra(graph, "start"));
