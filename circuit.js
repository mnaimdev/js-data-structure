// OR
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || '');
// console.log(undefined || null);

const restaurant = {
    name: 'Sultans Dine',
    location: 'Dhanmondi',
}

// restaurant.isOpen = 0;

// const obj = restaurant.isOpen ? restaurant.isOpen: 10;
// const obj2 = restaurant.isOpen || 10;

// console.log(obj2);
// console.log(obj);

// console.log(undefined || null || 'hello' || 23 || 15);


// AND
console.log('------------ AND -------------');
// console.log(undefined && 10);
// console.log(0 && 10);

// console.log('hello' && 5 && undefined && 10);

if (restaurant.hours) {
    restaurant.hours('10');
}

restaurant.hours && restaurant.hours('10');



// Nullish operator
const people = {
    name: 'Mohammad Naim',
    age: 24,
    // number: 0,
    profession: 'Software Engineer',
};

const value = people.number ?? 10;
console.log(value);