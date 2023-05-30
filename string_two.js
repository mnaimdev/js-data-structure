// string part two


// practical example
const firstName = 'jOnAS';
const lowerName = firstName.toLowerCase();
const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
// console.log(correctName);


const email = '  Hello@Jonas.io  \n';
const emailLower = email.toLowerCase();
const correctEmail = emailLower.trim();
// console.log(correctEmail);


// toUpperCase(), toLowerCase()
const name = 'JONAS';
const profession = 'software engineer';

// console.log(name.toLowerCase());
// console.log(profession.toUpperCase());

// trim()
const address = ' Kamrangir Char ';
// console.log(address.trim());


// replace()
const money = '2,000tk, hello, tk';
const dollar = money.replace('tk', '$');
// console.log(dollar.replace(',', '.'))

console.log(money.replaceAll('tk', 'dollar'));

const txt = 'Hello Bangladesh People Are Really Well';
// console.log(txt.replace(/Hello/g, 'Hi'));
// console.log(txt.replace(/HELLO/i, 'Hi'));


const country = 'My country name is Bangladesh and it has over 170 millions people';

// console.log(country.startsWith('M'));
// console.log(country.includes('is'));
// console.log(country.endsWith('people'));


function checkBaggage(items) {
    const item = items.toLowerCase();
    if (item.includes('knife') || item.includes('gun')) {
        console.log('You are not allowed in plane');
    } else {
        console.log('You are allowed in plane');
    }
}

// checkBaggage('Hey I have a Gun, some foods and a guiter');
// checkBaggage('I have a knife, some dresses and some cake');
// checkBaggage('I have a box and some fruits');