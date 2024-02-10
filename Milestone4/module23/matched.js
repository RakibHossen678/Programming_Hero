// const numbers=[45,65,23,98,19]
// for (const number of numbers) {
//     console.log(number);
// }

const products=[
    {id:1 , name:'walton phone' , price:19000},
    {id:2 , name:'xiami phone' , price:19000},
    {id:3 , name:'mac book' , price:19000},
    {id:4 , name:'Acer' , price:19000},
    {id:5 , name:'hp' , price:19000},
    {id:6 , name:'lenobo' , price:19000},
    {id:7 , name:'dell inpspiron' , price:19000},
    {id:8 , name:'nothing phone' , price:19000},
    {id:9 , name:'samsung phone' , price:19000},
]

// for (const product of products) {
//     console.log(product.name);
// }

function matchedProducts(products , search ){
    const matched=[];
    for (const product of products) {
        // console.log(product.name);
        if(product.name.includes(search)){
            // matched.push(product.name)
            matched.push(product)
        }
    }
    return matched
        
}
console.log(matchedProducts(products ,'phone' ));