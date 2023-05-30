// spread operator //

'use strict';

// const arr = [2, 4, 6];
// const newArray = [...arr, 100];
// console.log(arr);
// console.log(...newArray);

// const str = 'Mohammad Naim';
// const letters = [...str];
// console.log(...letters);


// const restaurant = {
//     name: 'Sultan\'s Dine',
//     order: function (a, b, c) {
//         console.log(a, b, c);
//     }
// }

// const food = [
//     prompt('first food: '),
//     prompt('second food: '),
//     prompt('third food: '),
// ];

// restaurant.order(...food);


const orderFood = {
    name: 'Kacchi',
    price: 300,
}

const newFood = {...orderFood, age: 24};

console.log(newFood);
console.log(orderFood);



