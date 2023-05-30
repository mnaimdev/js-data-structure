// array destructure //

const orderFood = {
    foodName: 'Kacchi',
    amount: 299,
    location: 'Dhanmondi',
    others: ['Borhani', 'Coca Cola', 'Salad'],
}


// const [koke, salad] = orderFood.others;

let arr = [2, 3, 5];
let [a, b] = arr;

[b, a] = [a, b];
// console.log(a, b);


const restaurant = {
    name: 'Sultans Dine',
    location: 'Dhanmondi',
    food: ['Kacchi', 'Borhani', 'Coca Cola'],
    other: ['Biriyani', 'Labang', 'Pepsi'],
    order: function(startIndex, endIndex) {
        return [this.food[startIndex], this.other[endIndex]];
    }
}


// console.log(restaurant.order(0, 2));
// console.log(restaurant.order(1, 0));

const nested = [2, 3, [5, 7]];

// const [x, ,y, z] = nested;
const [x, ,[y, z]] = nested;
// console.log(x, y, z);


// const [p, q, r] = [8, 9];
const [p = 1, q = 4, r = 3] = [8, 9];
console.log(p, q, r);
