/**
 * Created by man.nv on 1/19/18.
 */
export const currency = (number) => {
  return new Intl.NumberFormat('vi', {maximumSignificantDigits: 3, style: 'currency', currency: 'VND'}).format(number);
  // return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}

export const getImageHeight = (width, realWidth, realHeight) => {
  return width * realHeight / realWidth;
}
