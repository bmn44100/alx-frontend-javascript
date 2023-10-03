const getListStudents = () => {
  const listStudents = [];
  const st1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const st2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const st3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  listStudents.push(st1, st2, st3);

  return listStudents;
};

export default getListStudents;
