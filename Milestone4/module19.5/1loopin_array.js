// let freinds=['Elon','Bill','Mark','Warren']

// for(let i=0; i<freinds.length ; i++){
//     console.log(freinds[i]);
// }


// let friend = 'Bangladesh'
// let rev = friend.split('').reverse().join('')
// console.log(rev);

let friend = 'Bangladesh'
let rev_str=[];

for (const fr of friend) {
    rev_str.unshift(fr)
    
}
console.log(rev_str);