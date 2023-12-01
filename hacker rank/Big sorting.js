function bigSorting(unsorted) {
  let ditukar;
  for (i = 0; i < unsorted.length; i++) {
    ditukar = false;
    for (j = 0; j < unsorted.length - 1; j++) {
      if (unsorted[j] > unsorted[j + 1]) {
        [unsorted[j], unsorted[j + 1]] = [unsorted[j + 1], unsorted[j]];
        ditukar = true;
      }
    }
    if (ditukar == false) break;
  }
  return unsorted;
}
console.log(bigSorting([3, 5, 1, 2]));
