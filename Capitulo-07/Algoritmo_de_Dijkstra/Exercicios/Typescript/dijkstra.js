function dijkstra(graph, start) {
    var _a;
    var costs = {};
    var processed = new Set();
    for (var node_1 in graph) {
        costs[node_1] = Infinity;
    }
    costs[start] = 0;
    function findLowestCostNode(costs, processed) {
        var lowestCost = Infinity;
        var lowestNode = null;
        for (var node_2 in costs) {
            if (costs[node_2] < lowestCost && !processed.has(node_2)) {
                lowestCost = costs[node_2];
                lowestNode = node_2;
            }
        }
        return lowestNode;
    }
    var node = findLowestCostNode(costs, processed);
    while (node !== null) {
        var cost = costs[node];
        var neighbors = graph[node];
        for (var n in neighbors) {
            var newCost = cost + neighbors[n];
            if (newCost < ((_a = costs[n]) !== null && _a !== void 0 ? _a : Infinity)) {
                costs[n] = newCost;
            }
        }
        processed.add(node);
        node = findLowestCostNode(costs, processed);
    }
    return costs;
}
var graph = {
    start: { a: 6, b: 2 },
    a: { end: 1 },
    b: { a: 3, end: 5 },
    end: {},
};
console.log(dijkstra(graph, "start"));
