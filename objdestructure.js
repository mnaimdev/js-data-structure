
// object destructure //
const restaurant = {
    name: 'Sultans Dine',
    location: 'Dhanmondi',
    food: ['Kacchi', 'Borhani', 'Coca Cola'],
    other: ['Biriyani', 'Labang', 'Pepsi'],
    order: function(startIndex, endIndex) {
        return [this.food[startIndex], this.other[endIndex]];
    },
    startMenu: {
        a: 'Kacchi',
        b: 'Pizza'
    },
    endMenu: {
        a: 'Biriyani',
        b: 'Coca Cola'
    }
}

const {startMenu, endMenu} = restaurant;
const {startMenu: eat, endMenu: rest} = restaurant; // variable with different name
// console.log(startMenu, endMenu);
// console.log(eat, rest);


// mutating variables
let a = 11;
let b = 23;

({a, b} = {a: 100, b: 50});
// console.log(a, b);


// default

const {menu = [], startMenu: hello = []} = restaurant;
// console.log(menu, hello);

// nested

const foodOrder = {
    name: 'Kacchi Vai',
    location: 'Gulsan',
    openingHours: {
        open: '08: 00 am',
        close: '11: 00 pm'
    },
    fri: {
        open: '07: 00 am',
        close: '07: 00 pm',
    },
    // orderNow: function({name, location}) {
    //     console.log(name, location);
        
    // }
    orderNow: function({name = 'Mohammad Naim', location = 'Dhaka', age = 24}) {
        console.log(name, location, age);
        
    }
};

// const {open, close} = foodOrder.openingHours;
// console.log(open, close);
const {fri: {open, close}} = foodOrder;
// console.log(open, close);


// last example

foodOrder.orderNow({
    name: 'Mohammad Naim',
    location: 'Dhaka',
});