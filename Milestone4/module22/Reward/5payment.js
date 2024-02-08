function canPay(array , numbber){
    let sum=0;
    if(array.length===0){
        return 'Please input an array'
    }
    for (const num of array) {
        // console.log(num);
        sum+=num;
        // console.log(sum);
       
    }
    if(sum >= numbber){
        return true
    }
    else{
        return false
    }
}
console.log(canPay([1,5,5] , 10));
console.log(canPay([] ,10));