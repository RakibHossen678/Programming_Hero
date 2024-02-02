const sentence ='I am  learning wev Dev.'
// let reverse = ' ' ;
// for (const letter of sentence) {
//     reverse= letter + reverse ; 
//     console.log(reverse);
// }

//shortcut
let reverse=sentence.split('').reverse().join('')
console.log(reverse);