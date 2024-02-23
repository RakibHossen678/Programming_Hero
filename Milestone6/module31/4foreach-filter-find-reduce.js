//forEach

const nums=[3,5,4,6,7,8,10];
// const result=nums.forEach(n=>console.log(n*2))

//filter
const numbers=[3,5,4,6,7,8,10];
const player=[75,66,67,72,55,66];
// const selected=player.filter( p=> p>70);
const selected=player.filter( p=> p%2===0);
console.log(selected);



//find
const players=[75,66,67,72,55,66];
const find=players.find(player => player>70)
console.log(find);



//reduce
const Nums=[1,2,3,4];
const total = Nums.reduce((pre , cur)=>pre+cur ,0)
console.log(total);

