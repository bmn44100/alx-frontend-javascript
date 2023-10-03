const createInt8TypedArray = (length, position, value) => {
  if (position >= length) throw Error('Position outside range');

  const intBuffer = new ArrayBuffer(length);
  const intArray = new Int8Array(intBuffer, 0, length);
  intArray.set([value], position);

  return new DataView(intBuffer);
};

export default createInt8TypedArray;
