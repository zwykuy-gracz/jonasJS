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

// paul.calcAge();
// console.log(paul.__proto__);

Person.prototype.species = 'Homo Sapiens';
// console.log(paul.species);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car('BMW', 120);

Car.prototype.accelerate = this.accelerate = function () {
  console.log(`'${this.make}' going at ${this.speed + 10}`);
};

Car.prototype.brake = this.brake = function () {
  console.log(`'${this.make}' going at ${this.speed - 5}`);
};

car1.accelerate();
car1.brake();
