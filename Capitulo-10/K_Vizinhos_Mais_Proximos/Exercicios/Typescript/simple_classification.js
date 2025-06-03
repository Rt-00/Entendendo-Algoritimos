function euclideanDistance(p1, p2) {
    return Math.sqrt(p1.reduce(function (sum, val, i) { return sum + Math.pow(val - p2[i], 2); }, 0));
}
function knn(data, query, k) {
    var distances = data.map(function (point) { return ({
        distance: euclideanDistance(point.features, query),
        label: point.label,
    }); });
    distances.sort(function (a, b) { return a.distance - b.distance; });
    var kNearest = distances.slice(0, k).map(function (d) { return d.label; });
    var counts = {};
    kNearest.forEach(function (label) {
        counts[label] = (counts[label] || 0) + 1;
    });
    return Object.keys(counts).reduce(function (a, b) { return (counts[a] > counts[b] ? a : b); });
}
var data = [
    { features: [1, 2], label: "A" },
    { features: [2, 3], label: "A" },
    { features: [3, 1], label: "B" },
    { features: [6, 5], label: "B" },
    { features: [7, 7], label: "B" },
];
var query = [2, 2];
var k = 3;
console.log(knn(data, query, k));
