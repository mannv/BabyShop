import Metrics from './Metrics'
const  { fontScale } = Metrics;
const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 38 * fontScale,
  h2: 34 * fontScale,
  h3: 30 * fontScale,
  h4: 26 * fontScale,
  h5: 20 * fontScale,
  h6: 19 * fontScale,
  input: 18 * fontScale,
  regular: 17 * fontScale,
  medium: 14 * fontScale,
  small: 12 * fontScale,
  tiny: 8.5 * fontScale
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}
