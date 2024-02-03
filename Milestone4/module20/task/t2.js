//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOddNum(number){
    let result
    if(number%2===1){
         result = number*2;
    }
    else{
         result = number/2;
    }
    return result;
}
console.log(evenOddNum(50));
console.log(evenOddNum(45));