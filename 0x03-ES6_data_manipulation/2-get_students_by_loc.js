const getStudentsByLocation = (listStudents, city) => listStudents.filter((x) => x.location === city);

export default getStudentsByLocation;
