// coding challenge five

// first solution
// function convertToCamelCase(text) {
//     const txt = text.toLowerCase();
//     const newText = txt.split('_');
//     console.log(newText[0] + newText[1].slice(0, 1).toUpperCase() + newText[1].slice(1));
// }

// convertToCamelCase('underscore_case');



// second solution
const textarea = document.getElementById('textarea');
const button = document.getElementById('click');

button.addEventListener('click', function() {

    if (textarea.value == '') {
        alert('write something...');
    }

    const text = textarea.value;
    const formatText = text.split('\n');

    for (const [index, data] of  formatText.entries()) {
       
        const [first, second] = data.toLowerCase().trim().split('_');

      const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    
      const final = `${output.padEnd(20, ' ')}`;

      console.log(`${final} ${'✅'.repeat(index + 1)}`);
    }
});

