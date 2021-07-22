// Importing module
// import { addToCart, tq, totalPrice as price } from './shoppingCart.js';

// import * as shoppingCart from './shoppingCart.js';
console.log('Importing module');

// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice, shoppingCart.tq);

// import add from './shoppingCart.js';
// add('pizza', 2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 234;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizzas', 2);
console.log(ShoppingCart2);
