const updateStudentGradeByCity = (listOfStudents, city, newGrades) => {
  const grades = listOfStudents.filter((k) => k.location === city);

  for (const x of grades) {
    const student = newGrades.find((g) => g.studentId === x.id);
    if (typeof student === 'undefined') {
      x.grade = 'N/A';
    } else {
      x.grade = student.grade;
    }
  }

  return grades.map((s) => s);
};

export default updateStudentGradeByCity;
