function staircase(n) {
  // Write your code here
  let row = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= n - i - 1) {
        row += "#";
      } else {
        row += " ";
      }
    }
    console.log(row);
    row = "";
  }
}
staircase(10);
