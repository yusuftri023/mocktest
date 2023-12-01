function gradingStudents(grades) {
  let final = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      final[i] = grades[i];
    } else if (grades[i] % 5 < 3) {
      final[i] = grades[i];
    } else if (grades[i] % 5 >= 3) {
      final[i] = grades[i] + (5 - (grades[i] % 5));
    }
  }
  return final;
}
