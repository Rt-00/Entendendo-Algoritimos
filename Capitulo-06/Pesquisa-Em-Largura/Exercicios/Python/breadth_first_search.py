from collections import deque


def is_seller(name):
    return name[-1] == "m"


def breadth_first_search(graph, start):
    queue = deque()
    queue += [start]
    verified = []

    while queue:
        person = queue.popleft()

        if person not in verified:
            print(f"Verifying {person}")

            if is_seller(person):
                print(f"{person} is seller")
                return True
            else:
                queue += graph.get(person, [])
                verified.append(person)

    return False


graph = {
    "you": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [],
    "peggy": [],
    "thom": [],
    "jonny": [],
}

breadth_first_search(graph, "you")
