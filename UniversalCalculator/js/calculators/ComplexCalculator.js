class ComplexCalculator extends RealCalculator {
    add(a, b) {
        return new Complex(a.re + b.re, a.im + b.im);
    }
    sub(a, b) {
        return new Complex(a.re - b.re, a.im - b.im);
    }
    mult(a, b) {
        return new Complex(
            a.re * b.re - a.im * b.im,
            a.re * b.im + a.im * b.re
        );
    }
    prod(a, p) {
        return new Complex(a.re * p.re, a.im * p.re);
    }
    div(a, b) {
        const m = (b.re ** 2 + b.im ** 2);
        return new Complex(
            (a.re * b.re + a.im * b.im) / m,
            (a.im * b.re - a.re * b.im) / m
        );
    }
    pow(a, n) {
        let S = this.one();
        for (let i = 0; i < n.re; i++) {
            S = this.mult(S, a);
            console.log(S);
        }
        return S;
    }
    one() {
        return new Complex(super.one());
    }
    zero() {
        return new Complex;
    }
}