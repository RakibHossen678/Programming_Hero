//Count how many times a string has the letter a
// let Name = 'Banana';
// let count =[];
// for (let i = 0; i < Name.length; i++) {
//     const element = Name[i];
//     // console.log(element);
//     if (element==='a'){
//         count.push(element)
//         // console.log(count);
        

//     }
    
// }
// console.log(count.length);

//If a given string has either x, replace x by y. if the given string has X, replace it by Y.


let word ='epoxy';

// for (const letter of word) {
//     // console.log(letter);  
//     if(letter=='x'){
//        let repx = letter.replace('x' ,'X');    
//        console.log(repx);
//     }  
//     else if(letter=='y'){
//        let repx2 = letter.replace('y' ,'Y');    
//        console.log(repx2);
//     }  
    
// }

// let repx = word.replace('x' ,'X');
// let repx2 = word.replace('y' ,'Y'); 

// console.log(repx);
// console.log(repx2)


// let vowel = ["a","i","e","u","o"];
// let str = "Hello";
// let isVowel = false;
// for (let i = 0; i < str.length; i++){
// if(str.includes(vowel[i])){
// isVowel = true;
// break;
// }
// }
// console.log(isVowel);


// Capitalize Every first Letter of each word in a String

// let string ='check whether a string contains all the vowels'
// let Split =string.split(' ');


// for (let word of Split) {
//     word = word[0].toUpperCase() + word.slice(1);
//     console.log(word);
  
// }
// let capitalizedString = word.join(' ');
// console.log(capitalizedString);


let string = 'check whether a string contains all the vowels';
let Split = string.split(' ');

for (let word of Split) {
    word = word[0].toUpperCase() + word.slice(1);
    // console.log(word);
}

// let capitalized = Split.join(' ');
// console.log(capitalized);


// let inputString = "check whether a string contains all the vowels";

// // Split the string into an array of words
// let words = inputString.split(' ');

// // Capitalize the first letter of each word
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }

// // Join the words back into a string
// let capitalizedString = words.join(' ');

// console.log(capitalizedString);









var inputString = "xxxxxxssssiiiibbXXXX nxme Xs xsib";
var modifiedString = "";
for (var i = 0; i < inputString.length; i++) {
var currentChar = inputString[i];
if (currentChar === "x") {
modifiedString += "y";
} else if (currentChar === "X") {
modifiedString += "Y";
} else {
modifiedString += currentChar;
}
}
console.log(modifiedString);