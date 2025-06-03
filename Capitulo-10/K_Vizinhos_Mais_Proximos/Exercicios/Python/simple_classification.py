import math
from collections import Counter


def euclidian_distance(point1, point2):
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(point1, point2)))


def knn(data, query, k):
    distances = []

    for point in data:
        distance = euclidian_distance(point["features"], query)
        distances.append((distance, point["label"]))

    distances.sort(key=lambda x: x[0])
    k_nearest = distances[:k]

    labels = [label for _, label in k_nearest]
    most_common = Counter(labels).most_common(1)

    return most_common[0][0]


# Dataset
data = [
    {"features": [1, 2], "label": "A"},
    {"features": [2, 3], "label": "A"},
    {"features": [3, 1], "label": "B"},
    {"features": [6, 5], "label": "B"},
    {"features": [7, 7], "label": "B"},
]

query = [2, 2]
k = 3

print(knn(data, query, k))
