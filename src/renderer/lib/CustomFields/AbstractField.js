export class AbstractField {
  constructor (name, value) {
    this._name = name
    this._value = value
  }

  getValueType () {
    return typeof this._value
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  get value () {
    return this._value
  }

  set value (value) {
    this._value = value
  }

  getFieldType () {
    return 'AbstractField'
  }
}
