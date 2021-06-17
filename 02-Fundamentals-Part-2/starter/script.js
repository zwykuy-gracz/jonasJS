"use strict";

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    const bmi = this.mass / this.height ** 2;
    return bmi;
  },
};

mark.calcBMI();
console.log(mark.bmi);
console.log(john);
console.log(mark);
