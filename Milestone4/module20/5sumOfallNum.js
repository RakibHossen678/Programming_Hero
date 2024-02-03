function sumOfArraNums(array){
    let sum=0
    for (const num of array) {
        sum+=num;
        // return sum
        
    }
    return sum
}

let sumArray= sumOfArraNums([1,2,3,4,5,6]);
console.log(`Sum of numbers is ${sumArray}`);


