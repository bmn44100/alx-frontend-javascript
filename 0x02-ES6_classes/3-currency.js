export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(attr) {
    this._code = attr;
  }

  get name() {
    return this._name;
  }

  set name(attr) {
    this._name = attr;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
