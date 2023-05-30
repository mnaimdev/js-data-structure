// for of

const menus = ['Kacchi', 'Polao', 'Jorda', 'Firni', 'Biriyani', 'Coca cola', 'Borhani', 'Labang', 'Rejala', 'Roast', 'Morog Polao'];

// for (const item of menus.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [i, j] of menus.entries()) {
    console.log(`${i + 1}: ${j}`);
}


// console.log([...menus.entries()]);

