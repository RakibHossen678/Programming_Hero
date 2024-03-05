const user ={
    id:1,
    name:'sodor uddin',
    job:'nothing'
}

// javaScript object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(stringified)

const shop={
    ownwer:'sodor uddin',
    address:{
        street:'vooter goli',
        city:'kochu keth',
        country:'kolabagan'
    },
    product:['laptop','mic','monitor','mouse','motherboard','Keyboard'],
    revenue:450000,
    isOpened:true,
    isNew:false
}

const shopJSON=JSON.stringify(shop);//convert a javaScript object to a string
// console.log(shopJSON.length)
// console.log(shopJSON[2])
console.log(shopJSON)

const shopObj=JSON.parse(shopJSON)//convert a strint to an object
console.log(shopObj)