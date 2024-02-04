//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values

function make_avg(array){
    let len = array.length
    // console.log(len);
    let avg;
    let sum=0;
    
    for (const num of array) {
        // console.log(num);
        sum+=num
        // console.log(sum);
        avg=sum/len;
        // console.log(avg);
    }

    return  avg 
}
console.log(make_avg([10,20,40,50]));