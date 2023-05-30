// set

const orderList = new Set([
    'Pizza',
    400,
    'Pasta',
    'Kacchi',
    'Pizza',
    400,
    'Pizza'
]);

console.log(orderList);
console.log(orderList.size);

for (const order of orderList) {
    console.log(order);
}

console.log('after....');
orderList.add('Burger');
orderList.delete('Kacchi');
orderList.clear();
console.log(orderList);

console.log(new Set('Mohammad Naim').size);

console.log(...orderList);
