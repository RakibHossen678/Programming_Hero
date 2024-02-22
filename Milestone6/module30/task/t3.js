let sum=0;
let avg;
const sumSquare=(array)=>{
    for (const num of array) {
        let square = num*num
        sum += square
        


        
    }
    avg=sum/array.length
    return avg
}
console.log(sumSquare([2,3,4,6]));