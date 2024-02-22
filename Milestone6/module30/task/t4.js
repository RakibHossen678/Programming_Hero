let combined=(array,arrr1)=>{
    let Array=[...array, ...arrr1]
    let maxi=Math.max(...Array)
    return maxi
}
console.log(combined([2,5,34,6],[9,77,9,5]));