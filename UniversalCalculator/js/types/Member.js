class Member {
  constructor(value = 0, power = 0) {
    this.value = value;
    this.power = power;
  }

  // member -> 2*x^3
  toString() {
    return this.power === 0
      ? this.value.toString()
      : `${this.value}*x^${this.power}`;
  }
}
