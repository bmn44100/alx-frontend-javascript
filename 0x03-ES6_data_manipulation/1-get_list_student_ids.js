const getListStudentIds = (arrayStudents) => {
  if (Array.isArray(arrayStudents) === false) {
    return [];
  }

  return arrayStudents.map((x) => x.id);
};

export default getListStudentIds;
