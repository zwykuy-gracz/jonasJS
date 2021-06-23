///////////////////////////////////////
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog no ${i + 1} is an adoult, and is ${dog} years old`);
    } else {
      console.log(`Dog no ${i + 1} is still a puppy`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `movemnt ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'}  ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;

// Max value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(max);

const dogs = [5, 2, 4, 1, 15, 8, 3];
// const dogs = [16, 6, 10, 5, 6, 1, 4];

const underAge = dogsAge => dogsAge * 2;
const overAge = dogsAge => 16 + dogsAge * 2;

const calcAverageHumanAge2 = function (dogsAge) {
  const humanAges = dogsAge.map(dog =>
    dog <= 2 ? underAge(dog) : overAge(dog)
  );
  const average =
    humanAges.reduce((acc, cur) => acc + cur, 0) / humanAges.length;
  return average;
};

const calcAverageHumanAge = dogs =>
  dogs.map(
    dog =>
      (dog <= 2 ? underAge(dog) : overAge(dog))
        .filter(dog => dog > 18)
        .reduce((acc, cur, i, arr) => acc + cur, 0) / arr.length
  );
console.log(calcAverageHumanAge(dogs));

// const over18 = calcAverageHumanAge.filter(dogi => dogi > 18);

// const average =
//   calcAverageHumanAge.reduce((acc, cur) => acc + cur, 0) /
//   calcAverageHumanAge.length;

// console.log(average);

const calcAverageHumanAge = dogs =>
  dogs
    .map(dog => (dog <= 2 ? underAge(dog) : overAge(dog)))
    .filter(dog => dog > 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
console.log(calcAverageHumanAge(dogis));
