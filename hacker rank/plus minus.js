function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    }
    if (arr[i] < 0) {
      negative++;
    }
    if (arr[i] === 0) {
      zero++;
    }
  }
  console.log((positive / arr.length).toPrecision(6));
  console.log((negative / arr.length).toPrecision(6));
  console.log((zero / arr.length).toPrecision(6));
}
