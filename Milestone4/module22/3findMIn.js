function findlowest(array){
    let lowest=array[0]
    // console.log(tallest);
    for (const num of array) {
        // console.log(num);
        if(num < lowest){
            lowest=num;
        }
    }
    return lowest
}
console.log(findlowest([20,34,67,98,100,500]));
