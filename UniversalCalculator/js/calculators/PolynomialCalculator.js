class PolynomialCalculator {
    polynomial(members) {
        return new Polynomial(members);
    }

    div() { return null; }

    add(a,b) {
        const calc = new Calculator;
        const members = [];
        a.poly.forEach(elemA => {
            const member = b.poly.find(elemB => 
            elemB.power === elemA.power);
            if (member) {
                members.push(new Member(calc.add(elemA.value, member.value), elemA.power));
            } else {
                members.push(new Member(elemA.value, elemA.power));
            }
        });
        b.poly.forEach(elemB => {
            if(!members.find(elem =>
            elem.power === elemB.power)) {
                members.push(new Member(elemB.value, elemB.power));
            }
        });
        return new Polynomial(members);
    }

    sub(a,b) {
        const calc = new Calculator;
        const members = [];
        a.poly.forEach(elemA => {
            const member = b.poly.find(elemB => 
            elemB.power === elemA.power);
            if (member) {
                members.push(new Member(calc.sub(elemA.value, member.value), elemA.power));
            } else {
                members.push(new Member(elemA.value, elemA.power));
            }
        });
        b.poly.forEach(elemB => {
            if(!members.find(elem =>
            elem.power === elemB.power)) {
                members.push(new Member(calc.prod(elemB.value, -1), elemB.power));
            }
        });
        return new Polynomial(members);
    }

    mult(a, b) {
        const calc = new Calculator;
        let polynomial = new Polynomial;
        a.poly.forEach(elemA => {
            const members = [];
            b.poly.forEach(elemB => {
                members.push(new Member(calc.mult(elemA.value,elemB.value), elemA.power + elemB.power));
            });
            polynomial = this.add(Polynomial, new Polynomial(members));
        });
        return polynomial;
    }

    // pow(a, n) {
        
    // }

    // prod(a, p) {
    //     let polynomial = new Polynomial;

    //     return polynomial;
    // }

    // zero() {
    //     const calc = new Calculator;
    //     const members = [];

    //     return new polynomial;
    // }

    // one() {
    //     const calc = new Calculator;
    //     const members = [];

    //     return new polynomial;
    // }
    
}