class ComplexCalculator extends RealCalculator {
    add(a, b) {
        return new Complex(a.re + b.re, a.im + b.im)
    }
    sub(a, b) {
        return new Complex(a.re - b.re, a.im - b.im)
    }
    mult(a, b) {
        return new Complex(a.re * b.re, a.im * b.im)
    }
    div(a, b) {
        return new Complex(a.re / b.re, a.im / b.im)
    }
    pow(a, b) {
        return new Complex(Math.exp(a.re) * Math.cos(b.im),
                           Math.exp(a.re) * Math.sin(b.im));
    }
    one() {
        return new Complex (super.one());
    }
    zero() {
        return new Complex;
    }
}