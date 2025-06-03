function euclideanDistance(p1: number[], p2: number[]): number {
  return Math.sqrt(
    p1.reduce((sum, val, i) => sum + Math.pow(val - p2[i], 2), 0)
  );
}

function knn(
  data: { features: number[]; label: string }[],
  query: number[],
  k: number
): string {
  const distances = data.map((point) => ({
    distance: euclideanDistance(point.features, query),
    label: point.label,
  }));

  distances.sort((a, b) => a.distance - b.distance);

  const kNearest = distances.slice(0, k).map((d) => d.label);
  const counts: Record<string, number> = {};

  kNearest.forEach((label) => {
    counts[label] = (counts[label] || 0) + 1;
  });

  return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
}

const data = [
  { features: [1, 2], label: "A" },
  { features: [2, 3], label: "A" },
  { features: [3, 1], label: "B" },
  { features: [6, 5], label: "B" },
  { features: [7, 7], label: "B" },
];

const query = [2, 2];
const k = 3;

console.log(knn(data, query, k));
