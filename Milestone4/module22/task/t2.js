// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(array){
    let smallest=array[0];
    for (const name of array) {
        if(name.length<smallest.length){
            smallest=name
        }
    }
    return smallest
}
console.log(smallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed','ra']));