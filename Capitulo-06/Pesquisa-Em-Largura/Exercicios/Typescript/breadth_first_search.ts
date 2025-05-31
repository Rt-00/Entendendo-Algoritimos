function is_seller(name: string) {
  return name.endsWith("m");
}

function breadth_first_search(
  graph: Record<string, string[]>,
  start: string
): boolean {
  let queue: string[] = [...graph["you"]];
  const verified: Set<string> = new Set();

  while (queue.length > 0) {
    const person = queue.shift()!;

    if (!verified.has(person)) {
      console.log(`Verifiying ${person}`);

      if (is_seller(person)) {
        console.log(`${person} is seller`);
        return true;
      } else {
        queue.push(...(graph[person] || []));
        verified.add(person);
      }
    }
  }

  return false;
}

const graph: Record<string, string[]> = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

breadth_first_search(graph, "you");
