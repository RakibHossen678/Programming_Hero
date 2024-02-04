// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestWord(string) {
    let word = string.split(' ')
    let longWord = word[0];
    
    // console.log(longWord);
    for (let i = 0; i < word.length; i++) {
        // console.log(word[i]);
        // console.log(longWord);


        if (longWord.length < word[i].length) {
            longWord = word[i]
        }
    }
    return longWord

}
console.log(longestWord('I am learning Programming to become a programmerProgramming'));