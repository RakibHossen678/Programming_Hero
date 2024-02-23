const products=[
    {id:1,name:'lenevo',pric3:65000},
    {id:1,name:'dell',pric3:45000},
    {id:1,name:'HP',pric3:40000},
    {id:1,name:'MAC',pric3:150000},
]

//with map

// const names = products.map(product=>product.name);
// console.log(names);

//ForEach

// products.forEach(product=>console.log(product.name))


//filter 

const filter=products.filter(p=>p.pric3>50000);
console.log(filter);



//find 
const find = products.find(p=>p.pric3<50000)
console.log(find);


//reduce

const total=products.reduce((p, c) => p + c.pric3,0)
console.log(total);