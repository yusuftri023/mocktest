function miniMaxSum(arr) {
  // Write your code here
  let array = arr;
  let swap = true;
  for (let i = 0; i < array.length; i++) {
    swap = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swap = true;
      }
    }
    if (swap === false) {
      break;
    }
  }
  let min = 0;
  let max = 0;
  for (let i = 0; i < array.length - 1; i++) {
    min += array[i];
    max += array[i + 1];
  }
  console.log(`${min} ${max}`);
}
const array = [12, 1, 29, 22, 5];
miniMaxSum(array);
