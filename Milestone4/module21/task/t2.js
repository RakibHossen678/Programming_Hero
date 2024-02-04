//You are given an array of numbers. Count how many times the a number is repeated in the array.

function countRepeatNum(array){
    let duplicate=[];
    for (const number of array) {
        if(number===5){
            duplicate.push(number)
        }
    }
    let count = duplicate.length;
    return count
}
console.log(countRepeatNum([5,6,11,12,98, 5,5]));


// function countRepeatNum(array){
//     let duplicate=[];
//     for (const number of array) {
//         if(number===25){
//             duplicate.push(number)
//         }
//     }
//     let count = duplicate.length;
//     return count
// }
// console.log(countRepeatNum([5,6,11,12,98, 5,5]));