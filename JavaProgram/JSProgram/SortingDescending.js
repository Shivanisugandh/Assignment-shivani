const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by spaces: ', (input) => {
    // Split the user input into an array of numbers
    const numbers = input.split(' ').map(Number);

    // Use the sort() method with a custom comparison function to sort in descending order
    numbers.sort((a, b) => b - a);

    console.log('Sorted in descending order:', numbers);
    rl.close();
});
