/**
 * Created by man.nv on 1/19/18.
 */
import I18n from '../I18n'
export const currency = (number) => {
  options = {
    unit: "đ",
    precision: 0
  };

  return I18n.toCurrency(number, options);

  // if (I18n.locales.get()[0] == 'vi') {
  //
  // }
  // return new Intl.NumberFormat('vi', {
  //   maximumSignificantDigits: 3,
  //   style: 'currency',
  //   currency: 'VND'
  // }).format(number);
  // return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(number/23000)
}

export const getImageHeight = (width, realWidth, realHeight) => {
  return width * realHeight / realWidth;
}
