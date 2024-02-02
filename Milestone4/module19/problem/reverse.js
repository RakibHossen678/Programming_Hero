const texts ='I am a hard working person';
// let rev = [];
// for (const text of texts) {
//     // console.log(text);
//     rev.unshift(text)   
//     // console.log(rev);
// }
// console.log(rev.join(''));


let rev = '';
for(let i = texts.length-1 ; i>=0 ; i--){

    rev += texts[i]
    // console.log(rev);
}
console.log(rev);
