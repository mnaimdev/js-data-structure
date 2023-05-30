// map

// const restaurant = new Map();

// restaurant.set('name', 'Kacchi Vai');
// restaurant.set('location', 'Dhanmondi');
// restaurant.set(1, 400);

// restaurant.set('open', 11)
//           .set('close', 23)
//           .set(true, 'We are open :(')
//           .set(false, 'We are close :)');

// console.log(restaurant.size);

// restaurant.delete('name');

// restaurant.clear();

// console.log(restaurant.set('age', 25));

// console.log(restaurant);

// console.log(restaurant.get('name'));

// const time = 21;
// console.log(restaurant.get(time > restaurant.get('open') && time < restaurant.get('close')));

// const arr = [1, 2];

// // restaurant.set([1, 3], 'Array');
// console.log(restaurant.set(arr, 'Array'));
// console.log(restaurant.get(arr));

// // console.log(restaurant.set({name: 'Mohammad Naim'}, 24));


// console.log(restaurant.set(document.querySelector("h2"), 'heading'));


// practical example

const quiz = new Map([
    [1, 'What is your name?'],
    [2, 'Your profession?'],
    [3, 'Your expectd salary?'],
    ['answer', 3],
    [true, 'You are correct'] 
]);


for (const [key, value] of quiz) {
    if (typeof key === 'number') {
        console.log(`You have answered: ${key}: ${value}`);
    }
}



// console.log(quiz);
// const answerValue = Number(prompt('Enter a number'));

// console.log(quiz.get(quiz.get('answer') === answerValue));

// convert map to array
console.log(...quiz);
console.log(...quiz.entries());
console.log(...quiz.values());
console.log(...quiz.keys());


// Convert Object to map
const food = {
    'name': 'Burger',
    'amount': 399,
    'location': 'Dhanmondi',
}

const foodArr = Object.entries(food);
const foodMap = new Map(foodArr);
console.log(foodMap);