export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
    this.verifyTypeAttr();
  }

  verifyTypeAttr() {
    if (typeof this._name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof this._length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    const isArray = Array.isArray(this._students);
    if (isArray !== true) {
      throw new TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(attr) {
    if (typeof attr !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = attr;
  }

  get length() {
    return this._length;
  }

  set length(attr) {
    if (typeof attr !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = attr;
  }

  get students() {
    return this._students;
  }

  set students(attr) {
    const stringArray = Array.isArray(attr);
    if (stringArray !== true) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = attr;
  }
}
