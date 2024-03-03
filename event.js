function firstElementKTime(n, k, arr) {
  let count = 0,
    val = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        val[count] = {
          v: arr[i],
          s: i,
          e: j
        };
        count++;
      }
    }
  }
  return [count, val];
}
console.log(firstElementKTime(7, 2, [1, 2, 4, 7, 7, 7, 4]));