function diagonalDifference(arr) {
  // Write your code here
  let i = 0;
  let primarydiagonal = 0;
  let secondarydiagonal = 0;
  for (let j = 0; j < arr[0].length; j++) {
    primarydiagonal += arr[i][j];
    i++;
  }
  i = 0;
  for (let j = arr[0].length - 1; 0 <= j; j--) {
    secondarydiagonal += arr[i][j];
    i++;
  }
  return Math.abs(primarydiagonal - secondarydiagonal);
}

console.log(
  diagonalDifference([
    [4, 2, 3],
    [2, 1, 3],
    [3, 4, 5],
  ])
);
