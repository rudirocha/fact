import {AbstractField} from './AbstractField'

/**
 * Class: CustomField
 * @see: Yeah... I use _var to keep the distance between private and public vars
 */
export class Field extends AbstractField {
  constructor (name, value, label) {
    super(name, value)
    this._name = name
    this._value = value
    this._label = label
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

  get label () {
    return this._label || this._name
  }

  set label (value) {
    this._label = value
  }

  getFieldType () {
    return 'Field'
  }
}
