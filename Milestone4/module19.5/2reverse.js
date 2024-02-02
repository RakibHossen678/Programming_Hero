//1
const nums = [1,2,3,4,5,6,7];
// nums.reverse();
// console.log(nums);


//2

// const rev = [];
// for (const num of nums) {
//     rev.unshift(num)
// }
// console.log(rev);

//3
const rev = [];
for (let i=nums.length-1; i>=0 ; i--){
    rev.push(nums[i])
    // console.log(rev);
}
console.log(rev);

