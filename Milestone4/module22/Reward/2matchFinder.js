// function matchFinder(str1, str2) {
//     if(str1.includes(str2)){
//         return true;
//     }
//     else{
//         return false
//     }

// }
// console.log(matchFinder('The quick brown fox jumps over the lazy dog.' , 'quick'));


function matchFinder(str1, str2) {
    let result=str1.includes(str2);
    return result

}
console.log(matchFinder('The quick brown fox jumps over the lazy dog.' , 'TTT'));