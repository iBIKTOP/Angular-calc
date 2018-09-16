export class Calc {
  constructor() {
  }
  sum(a, b) {
    return parseFloat(a) + parseFloat(b);
  }
  diff(a, b) {
    return parseFloat(a) - parseFloat(b);
  }
  mult(a, b) {
    return parseFloat(a) * parseFloat(b);
  }
  divide(a, b) {
    return parseFloat(a) / parseFloat(b);
  }
}
