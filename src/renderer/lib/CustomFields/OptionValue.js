export class OptionValue {
  constructor (text, value) {
    this._text = text
    this._value = value
  }

  get text () {
    return this._text
  }

  set text (value) {
    this._text = value
  }

  get value () {
    return this._value
  }

  set value (value) {
    this._value = value
  }
}
