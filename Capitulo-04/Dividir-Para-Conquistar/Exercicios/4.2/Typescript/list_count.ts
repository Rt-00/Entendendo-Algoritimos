function count(list: number[]): number {
  if (list.length === 0) {
    return 0;
  }

  return 1 + count(list.slice(1));
}

console.log(count([1, 3, 5, 7]));
console.log(count([2, 4, 6, 10, 12]));
console.log(count([3, 5, 7, 9, 13, 15]));
