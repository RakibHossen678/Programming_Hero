function findTallest(array){
    let tallest=array[0]
    // console.log(tallest);
    for (const num of array) {
        // console.log(num);
        if(num > tallest){
            tallest=num;
        }
    }
    return tallest
}
console.log(findTallest([34,67,98,100,500]));

