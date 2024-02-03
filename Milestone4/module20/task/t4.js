//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(string){
    let sum=[];
    let len  ; 
    for (const str of string) {
        if(str==='0'){
            sum.push(str);
            len = sum.length

        }
        // len=sum.length
    }
    return len; 
}
console.log(count_zero('000100100'));