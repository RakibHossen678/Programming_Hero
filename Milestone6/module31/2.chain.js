//data access

// const data = [{id : 1 , name:'abul', address:'kochu khet'}];
// console.log(data[0].address);


const products ={
    count:5000,
    data:[
        {id:1,name:'lenvo laptop',price:65000},
        {id:1,name:'macbook',price:165000},
        {id:1,name:'acer',price:45000}
    ]

}

console.log(products.data[1].price);

const user={
    id : 1 ,
     name:'abul',
      address:{
        street:{
            first:'kochu khet',
            second:'khata bon',
            thrid:'bash bon'
        },
        city:'matir niche'
      }
        
}
console.log(user.address.street.second);