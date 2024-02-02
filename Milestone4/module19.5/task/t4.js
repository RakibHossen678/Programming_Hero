const statement = 'I am a hard working person';

let split = statement.split(' ')
// console.log(split);
let rev= [];

for (const stat of split) {
    // console.log(stat);
    rev.unshift(stat)
    
}
let Join= rev.join(' ');
console.log(Join);
