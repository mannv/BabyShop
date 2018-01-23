/**
 * Created by man.nv on 1/23/18.
 */
import I18n from '../../I18n'
export const required = value => (value ? undefined : I18n.t('validate_required'))

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const email = value => (emailPattern.test(value) ? undefined : I18n.t('validate_email'))
