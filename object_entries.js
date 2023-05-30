

const openingHours = {
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

// const properties = Object.keys(openingHours);
// let openStr = `The restaurant opens ${properties.length} days per week: `

// for (const key of properties) {
//     openStr += `${key},`;
// }
// console.log(openStr);


// const values = Object.values(openingHours);
// console.log(values);

const entries = Object.entries(openingHours);
// for (const [key, value] of entries) {
//     // console.log(key, value);
// }

for (const [key, {open, close}] of entries) {
    console.log(`The restaurant open ${key} at: ${open} & close at: ${close}`);
}