const hasValuesFromArray = (setValues, arrValues) => {
  const elmnts = Array.from(setValues);

  return elmnts.includes(...arrValues);
};

export default hasValuesFromArray;
