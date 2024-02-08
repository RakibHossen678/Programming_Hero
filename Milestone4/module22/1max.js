// function maxScrore(n1 , n2 ,n3){
//     if(n1>n2 && n1>n3){
//         return n1
//     }
//     else if(n2>n3 && n2>n1){
//         return n2
//     }
//     else{
//         return n3
//     }

// }
// console.log((maxScrore(50,70,98)));


// const max = Math.max(50,70,98,102,99,103);
// console.log(max);




function getmax(number){
    let max=number[0];
    for (const num of number) {
        if(num>max){
            max=num;
        }
    }
    return max
}
const maxi=getmax([50,70,98,102,99,103]);
console.log(maxi);