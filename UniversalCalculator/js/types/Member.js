class Member {
    constructor(value = 0, power = 0) {
        this.value = value;
        this.power = power;
    }
    
    // member -> 2*x^3
    toString() {
        return this.power ? 
            this.power > 0 ?
                `${this.value}*x^${this.power}` :
                `${this.value}*x^${-this.power}` :
            this.value.toString();
    }
}