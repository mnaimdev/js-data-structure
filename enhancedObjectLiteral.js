'use strict';

// first
const food = {
    main: 'Kacchi',
    secondary: 'Biriyani',
    optional: 'Borhani',
    lowBudget: 'Coca cola',
    highBudget: 'Full Mutton Leg Piece',
};

const restaurant = {
    name: 'Food Hungry',
    location: 'USA',
    food,

    order() {
        console.log('Hello there');
    }

}

// restaurant.order();

// second

const weekdays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];


const openingHours = {
    [weekdays[5]]: {
        open: 8,
        close: 10
    },
    [weekdays[2]]: {
        open: 8,
        close: 12
    },
    [weekdays[3]]: {
        open: 12,
        close: 4
    },
    [2 + 2]: {
        open: 'null',
    }
}

console.log(openingHours);
