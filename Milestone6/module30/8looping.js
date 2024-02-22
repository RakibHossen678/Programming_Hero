const nums =[1,2,3,4,5,6,7];
for (const num of nums) {
    console.log(num);
}

const str ='fffffff ssssssssss';
for (const string of str) {
    console.log(string);
    
}


const glass ={
    name : 'glass',
    color:'golden',
    price:12,
    isCleaned:true
}

for (const key in glass) {

        const element =glass[key];
        console.log(element);
        
    
}