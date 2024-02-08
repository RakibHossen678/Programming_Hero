const product=[
    {name:'shampo' , price:300},
    {name:'Chiruni' , price:100},
    {name:'shirt' , price:700},
    {name:'pant' , price:1000}
]

function sumOfObject(Object){
    let sum=0
    for (const obj of product) {
        sum+=obj.price
    }
    return sum
    
}
console.log(sumOfObject(product));
