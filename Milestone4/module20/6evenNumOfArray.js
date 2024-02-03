function evenNumOArray(array){
    let even=[];
    let sum=0
    for (const n  of array) {
        if (n%2===0){
            even.push(n)
            sum+=n
        }
       
    }
    return sum
}

console.log(evenNumOArray([1,2,3,4,5,6,7,8,9,10]));