// string three

// split
const first = 'Mohammad Naim';
const second = 'Mir + Faisal';

console.log(first.split(' '));
console.log(second.split('+'));

const [f, l] = first.split(' ');
console.log(f, l);

// join
const newName = ['Mr', f, l.toUpperCase()].join(' ');
console.log(newName);


// capitalize
const capitalizeName = (name) => {
    const names = name.split(' ');

    const namesArray = [];
    
    for (const n of names) {
    //    namesArray.push(n[0].toUpperCase() + n.slice(1));
    namesArray.push(n.replace(n[0], n[0].toUpperCase()));
    }

    console.log(namesArray.join(' '));
}


capitalizeName('My country is Bangladesh');
capitalizeName('I am a Programmer');


// padStart, padEnd
console.log('After'.padStart(15, '-').padEnd(25, '-'));

const message = 'Hello man! How are you?';
console.log(message.padStart(30, '*'));
console.log(message.padEnd(35, '*'));

function maskingCreaditCard(number) {
    const str = String(number);
    const value = str.slice(-4);
    const card = value.padStart(11, '*');
    console.log(card);
    
};

maskingCreaditCard(01794556889);
maskingCreaditCard('0124323333333333');


// Repeat
const message2 = 'Weather is not good enough. So we can\'t move today \n';
console.log(message2.repeat(5));

function airPlane(count) {
    console.log(`There are; ${count} planes in our airport ${'✈️'.repeat(count)}`);
}

airPlane(5);
airPlane(10);
airPlane(15);