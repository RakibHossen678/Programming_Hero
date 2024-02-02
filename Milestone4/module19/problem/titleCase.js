// const sentence ='I am a haRd worKing peRson';

// let splitSentence=sentence.split(' ');
// console.log(splitSentence);

// let capitalizedString = '';

// for (let word  of splitSentence) {
//     // console.log(word);
    
//     // console.log(word);
//     capitalizedString+=word[0].toUpperCase() + word.slice(1).toLowerCase()+' '
// }
// console.log(capitalizedString);


//2

const sentence ='I am a hard woRking person';
let splitSentence=sentence.split(' ');

for (let i =0 ; i<splitSentence.length ; i++){
    splitSentence[i]=splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1).toLowerCase();
}
console.log(splitSentence.join(' '));
