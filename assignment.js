// Assignment Operator
const res1 = {
    name: 'Sultan\'s Dine',
    location: 'Dhanmondi',
}

const res2 = {
    name: 'Kacchi Vai',
    owner: 0,
}

// res1.owner = res1.owner || 10;
// res2.owner = res1.owner || 10;

// res1.owner ||= 10;
// res2.owner ||= 10;
// res1.owner ??= 10;
// res2.owner ??= 10; // 0 because it excepts only null, undefined

res1.owner &&= 10;
res2.owner &&= 10;

console.log(res1);
console.log(res2);