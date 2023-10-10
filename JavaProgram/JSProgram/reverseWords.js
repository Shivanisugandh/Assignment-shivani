const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (inputSentence) => {
    const reversed = reverseWords(inputSentence);
    console.log("Reversed sentence:", reversed);
    rl.close();
});

function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => {
        // Reverse the word using array functions
        return word.split('').reverse().join('');
    });

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

