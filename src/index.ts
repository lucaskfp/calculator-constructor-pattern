class Calculator {
  total: number;

  constructor(public num: number = 0) {
    this.total = num;
  }

  add(...nums: number[]) {
    for (let num of nums) {
      this.total += num;
    }
    return this.total;
  }

  subtract(...nums: number[]) {
    for (let num of nums) {
      this.total -= num;
    }
    return this.total;
  }

  multiply(...nums: number[]) {
    for (let num of nums) {
      this.total *= num;
    }
    return this.total;
  }

  divide(...nums: number[]) {
    for (let num of nums) {
      this.total /= num;
    }
    return this.total;
  }
}

const age = new Calculator(10);

age.add(1, 2, 3, 4, 5);
age.subtract(5);
age.multiply(2);
age.divide(2);

console.log(age.total);
