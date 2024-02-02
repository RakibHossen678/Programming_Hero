let division = 'Chattogram';

//upper & lower

console.log(division.toLowerCase());
console.log(division.toUpperCase());

//trim 
let Division = '  Chattogram  ';

console.log(Division.trim());


// slice
let address = 'Nasirabad';
console.log(address.slice(2,8));

//split
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.split(' '));


const nameStr='rakib , akib , sakib , labib , saad '

console.log(nameStr.split(","));

// join 
let Join =[ 'rakib ', ' akib ', ' sakib ', ' labib ', ' saad ' ]  
console.log(Join.join('|'));

//concat

let str1='Rakib';
let str2='Rakib';

// console.log(str1 + ' ' + str2);

console.log(str1.concat(str2));

//includes

console.log(str1.includes('b'));