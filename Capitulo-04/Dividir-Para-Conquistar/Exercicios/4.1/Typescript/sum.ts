function sum(list: number[]): number {
  if (list.length === 0) {
    return 0;
  } else {
    return list[0] + sum(list.slice(1));
  }
}

console.log(sum([1, 2, 3, 4]));
console.log(sum([2, 5, 6, 7]));
console.log(sum([3, 5, 7, 9]));
