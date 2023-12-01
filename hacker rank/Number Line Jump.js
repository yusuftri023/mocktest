function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (v1 <= v2) {
    return "NO";
  }
  let posisi1 = x1;
  let posisi2 = x2;

  while (posisi1 <= posisi2) {
    if (posisi1 === posisi2) {
      return "YES";
    }
    posisi1 = posisi1 + v1;
    posisi2 = posisi2 + v2;
  }
  return "NO";
}
console.log(kangaroo(0, 2, 5, 3));

// untuk case kelipatan
// function kangaroo(x1, v1, x2, v2) {

//   let map1 = {};
//   let loop = true;
//   let posisi1 = x1;
//   let posisi2 = x2;
//   let jarak1 = v1;
//   let jarak2 = v2;
//   let lompatan = 0;
//   while (loop === true) {
// map1[posisi1 + jarak1 * lompatan]
//   ? map1[posisi1 + jarak1 * lompatan]++
//   : (map1[posisi1 + jarak1 * lompatan] = 1);
// map1[posisi2 + jarak2 * lompatan]
//   ? map1[posisi2 + jarak2 * lompatan]++
//       : (map1[posisi2 + jarak2 * lompatan] = 1);
//     if (
//       map1[posisi1 + jarak1 * lompatan] === 2 ||
//       map1[posisi2 + jarak2 * lompatan] === 2
//     ) {
//       return "YES";
//     }
//     if (posisi1 >= 10000 || posisi2 >= 10000) {
//       return "NO";
//     }
//     lompatan++;
//   }
// }
