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

Person.hey = function () {
  console.log('yo yo yo');
};

// Person.hey();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car('BMW', 120);

Car.prototype.accelerate = function () {
  console.log(`'${this.make}' going at ${this.speed + 10}`);
};

Car.prototype.brake = function () {
  console.log(`'${this.make}' going at ${this.speed - 5}`);
};

// car1.accelerate();
// car1.brake();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('yo ya ye');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();
// PersonCl.hey();

const walter = new PersonCl('Walter was', 1965);

const account = {
  owner: 'Jonas',
  movements: [1, 2, 3, 4, 5],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
// console.log(account.latest);

account.latest = 98;
// console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init('Steven', 2002);
steven.calcAge();
