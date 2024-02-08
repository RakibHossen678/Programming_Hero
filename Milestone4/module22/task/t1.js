// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function findLowest(array){
    let lowest=array[0];
    for (const num  of array) {
        if(num<lowest){
            lowest=num;
        }
    }
    return lowest;
}
console.log(findLowest([167, 110, 120, 165, 137]));