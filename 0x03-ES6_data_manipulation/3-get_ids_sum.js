import getListStudentIds from './1-get_list_student_ids';

const getStudentIdsSum = (listStudents) => {
  const reducer = (sum, id) => sum + id;
  const sumIds = getListStudentIds(listStudents);

  return sumIds.reduce(reducer);
};

export default getStudentIdsSum;
