export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, val] of array.entries()) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
