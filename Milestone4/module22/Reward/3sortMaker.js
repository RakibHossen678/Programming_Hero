function sortMaker(array){
    let max=Math.min(...array);
    
    console.log(max);
    let sortNum=[];
    for(const num of array){
        // console.log(num);

        if(num<0){
            return 'invalid input'
        }
        else if (num > max){
            sortNum.unshift(num)
        }

    }
    // return num

    return sortNum

    // let descending=array.sort()
    // descending=descending.reverse()
    // return descending

}
console.log(sortMaker([4,2,6,7,3,8]));

// let numbers = [0, 1 , 11, 3, 10, 20, 30 ];
// numbers.sort().reverse();
// console.log(numbers);


// let arrayNUm=[4,2,6,7,3,8];
// console.log(...arrayNUm);