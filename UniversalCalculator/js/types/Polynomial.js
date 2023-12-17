class Polynomial {
    constructor(poly = []) {
        this.poly = poly;
        this.poly.sort((a,b) => b.power - a.power);
    }

    getValue(x) {
        const calc = new Calculator;
        return this.poly.reduce((S, elem) => 
        calc.add(S, calc.mult(elem.value, calc.pow(x, elem.power)), calc.zedro(null, x))
        );
    }

    // Polynomial -> 1*x^3+2*x^2+3*x^1+4
    // toString() {
    
    // }
}