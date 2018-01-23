/**
 * Created by man.nv on 1/23/18.
 */
import I18n from '../../I18n'
export const required = value => (value ? undefined : I18n.t('validate_required'))

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const email = value => (emailPattern.test(value) ? undefined : I18n.t('validate_email'))


const maxLength = max => value => {
  return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

const minLength = min => value => {
  return value && value.length < min ? `Must be ${min} characters or more` : undefined
}

export const max32 = maxLength(32)
export const min6 = minLength(6)
