

const restaurant = {
    name: 'Sultan\'s Dine',
    location: 'Dhanmondi',
    food: {
        'main': 'Kacchi',
        'secondary': 'Biriyani',
    },
    order() {
        console.log('order korse');
    },
    openingHours: {
       mon: {
            open: 8,
            close: 10
        },
        wed: {
            open: 0,
            close: 12
        },
        thu: {
            open: 12,
            close: 4
        }
    }
}


// console.log(restaurant?.food?.other ?? 'No food');
// console.log(restaurant?.food?.secondary ?? 'No food');

// restaurant.order?.() ?? 'Method does not exist';

const users = [
    { 
        name: 'Mohammad Naim',
        age: 24,
    },
    {
        profession: 'Software Engineer',
        address: 'Kamrangir Char, Dhaka',
    }
];

// console.log(users[0]?.name ?? 'No name');
// console.log(users[1]?.profession ?? 'No profession');

// if (users.length > 0) {
//     console.log('great length');
// }


const days = ['wed', 'sun', 'mon', 'thu'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`${day} open at: ${open}`);
}
