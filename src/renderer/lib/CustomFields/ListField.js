import { Field } from './Field'
// import { OptionValue } from './OptionValue'

export class ListField extends Field {
  constructor (name, value, label, valuesList) {
    super(name, value)
    this._label = label
    this._valuesList = valuesList
    this._value = value
  }

  get value () {
    return this._value
  }

  set value (value) {
    this.valuesList.forEach((item) => { console.log(item === value ? 'MATCH' : 'NOT MATCH') })
    this._value = value
  }

  get valuesList () {
    return this._valuesList
  }

  set valuesList (value) {
    if (!Array.isArray(value)) {
      throw new Error('Values List should be an array')
    }
    this._valuesList = value
  }

  getFieldType () {
    return 'ListField'
  }
}
