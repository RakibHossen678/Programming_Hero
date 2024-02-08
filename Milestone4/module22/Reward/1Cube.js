function cubeNumber(number){
    if(typeof number !== 'number'){
        return 'Please provide a number..'
    }
    const cube=Math.pow(number,3)
    return cube;
    

}
console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber('Hello'));