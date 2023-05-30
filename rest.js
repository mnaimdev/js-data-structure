// rest parameter
const myArr = [1, 2, 3, 4, 5];
const [x, y, ...newArr] = myArr;

// console.log(newArr);
// console.log(x, newArr);

const person = {
    age: 24,
    name: 'Mohammad Naim',
    address: 'Dhaka',
    calc: {
        first: 34,
        second: 35,
    }
}

const {a, ...b} = person;
// console.log(b);



function add(...parameter) {
    let sum = 0;
    for (let i = 0; i < parameter.length; i++) {
        sum += parameter[i];
    }
    console.log(sum);
}


// add(2, 3);
// add(2, 3, 4, 5, 6);

// const value = [2, 3, 4, 5, 6, 10];
// add(...value);



const restaurant = {
    a: [3, 4, 6],
    b: [5, 6],
}


const [first, second, ...third] = [...restaurant.a, ...restaurant.b];

// console.log(first, second, third);


function myFood(favourite, ...optional) {
    console.log(`My favourite food is ${favourite}, and optionals are ${optional}`);
    // console.log(optional);
    
}

// myFood('Kacchi', 'Borhani', 'Kabab', 'Halim');


const newValue = [4, 8, 12];

// console.log(`values are : ${...newValue}`);