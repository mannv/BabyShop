/**
 * Created by man.nv on 1/3/18.
 */
module.exports = {
  getImageHeight: function (width, realWidth, realHeight) {
    return width * realHeight / realWidth;
  }
}
