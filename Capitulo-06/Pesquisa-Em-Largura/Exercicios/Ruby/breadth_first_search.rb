def is_seller(name)
  name.end_with? "m"
end

def breadth_first_search(graph, start)
  queue = graph[start].dup
  verified = []

  until queue.empty?
    person = queue.shift

    unless verified.include? person
      puts "Verifiying #{person}"

      if is_seller(person)
        puts "#{person} is seller"
        return true
      else
        queue.concat(graph[person] || [])
        verified << person
      end
    end
  end

  false
end

graph = {
  "you" => ["alice", "bob", "claire"],
  "bob" => ["anuj", "peggy"],
  "alice" => ["peggy"],
  "claire" => ["thom", "jonny"],
  "anuj" => [],
  "peggy" => [],
  "thom" => [],
  "jonny" => []
}

breadth_first_search(graph, "you")