def dijkstra(graph, start)
  costs = {}
  parents = {}
  processed = []

  graph.each_key { |node| costs[node] = Float::INFINITY }
  costs[start] = 0

  node = find_lowest_cost_node(costs, processed)

  while node
    cost = costs[node]
    neighbors = graph[node]

    neighbors.each do |n, w|
      new_cost = cost + w
      if new_cost < costs[n]
        costs[n] = new_cost
        parents[n] = node
      end
    end

    processed << node
    node = find_lowest_cost_node(costs, processed)
  end

  costs
end

def find_lowest_cost_node(costs, processed)
  lowest = Float::INFINITY
  lowest_node = nil

  costs.each do |node, cost|
    if cost < lowest && !processed.include?(node)
      lowest = cost
      lowest_node = node
    end
  end

  lowest_node
end

graph = {
  "start" => { "a" => 6, "b" => 2 },
  "a" => { "end" => 1 },
  "b" => { "a" => 3, "end" => 5 },
  "end" => {}
}

puts dijkstra(graph, "start")