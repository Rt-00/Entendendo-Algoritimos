def dijkstra(graph, costs, parents):
    processed = set()

    def find_lowest_cost_node(costs):
        lowest_cost = float("inf")
        lowest_node = None

        for node in costs:
            if costs[node] < lowest_cost and node not in processed:
                lowest_cost = costs[node]
                lowest_node = node

        return lowest_node

    node = find_lowest_cost_node(costs)
    while node is not None:
        cost = costs[node]
        neighbors = graph[node]

        for n in neighbors:
            new_cost = cost + neighbors[n]

            if costs[n] > new_cost:
                costs[n] = new_cost
                parents[n] = node

        processed.add(node)
        node = find_lowest_cost_node(costs)


graph = {"start": {"a": 6, "b": 2}, "a": {"end": 1}, "b": {"a": 3, "end": 5}, "end": {}}

costs = {"a": 6, "b": 2, "end": float("inf")}
parents = {"a": "start", "b": "start", "end": None}

dijkstra(graph, costs, parents)

print("Costs:", costs)
print("Parents:", parents)
