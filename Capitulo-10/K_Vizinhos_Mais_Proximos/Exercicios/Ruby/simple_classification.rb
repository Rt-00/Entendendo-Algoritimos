def euclidean_distance(p1, p2)
  Math.sqrt(p1.zip(p2).map { |a, b| (a - b)**2 }.sum)
end

def knn(data, query, k)
  distances = data.map do |point|
    [euclidean_distance(point[:features], query), point[:label]]
  end

  k_nearest = distances.sort_by { |dist, _| dist }.first(k)
  labels = k_nearest.map { |_, label| label }
  labels.group_by { |x| x }.values.max_by(&:size).first
end

data = [
  {features: [1, 2], label: 'A'},
  {features: [2, 3], label: 'A'},
  {features: [3, 1], label: 'B'},
  {features: [6, 5], label: 'B'},
  {features: [7, 7], label: 'B'}
]

query = [2, 2]
k = 3

puts knn(data, query, k)  # Output: 'A'
