const OPERATIONS = {
    add: "+",
    sub: "-",
    mult: "*",
    div: "/",
    pow: "^",
    prod: "prod",
    one: "one",
    zero: "zero"
}

function calculate ({ a, b, operation }) {
    const realCalculator = new RealCalculator;
    
    switch(operation) {

        case OPERATIONS.add:
            return realCalculator.add(a,b);

        case OPERATIONS.sub:
            return realCalculator.sub(a,b);

        case OPERATIONS.mult:
            return realCalculator.mult(a,b);

        case OPERATIONS.div:
            return realCalculator.div(a,b);

        case OPERATIONS.pow:
            return realCalculator.pow(a,b);

        case OPERATIONS.prod:
            return realCalculator.prod(a,b);

        case OPERATIONS.one:
            return realCalculator.one();

        case OPERATIONS.zero:
            return realCalculator.zero();

        default:
            break;
    }
}