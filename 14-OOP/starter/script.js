'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const paul = new Person('Paul', 1988);

// Prototypes
Person.prototype.calcAge = this.calcAge = function () {
  console.log(2037 - this.birthYear);
};

paul.calcAge();
console.log(paul.__proto__);

Person.prototype.species = 'Homo Sapiens';
console.log(paul.species);
