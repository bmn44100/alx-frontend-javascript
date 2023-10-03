/* eslint-disable no-unused-vars */
const cleanSet = (strSet, startString) => {
  const strArr = Array.from(strSet);
  const startStringArr = [];

  if (startString.length === 0) {
    return '';
  }

  for (const g of strArr) {
    const sliceStr = g.slice(0, startString.length);

    if (sliceStr === startString) {
      startStringArr.push(g);
    }
  }

  return startStringArr.toString().split(',').join('-').split(startString)
    .toString()
    .split(',')
    .join('');
};

export default cleanSet;
