//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function evenOdd(num){
    if(num%2===0){
        return 'even'
    }
    else{
        return 'odd'
    }
}
console.log(evenOdd(10));
console.log(evenOdd(11));