function avgOfOdd(array){
    let odds=[];
    for (const num of array) {
        if(num%2===1){
            odds.push(num)
        }
        
    }
    let sum=0;
        for (const item of odds) {
            sum+=item;
            

        }
    
        let len=odds.length;
        return len
        // let avg=sum/len;
        // return avg;
}
console.log(avgOfOdd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17]));