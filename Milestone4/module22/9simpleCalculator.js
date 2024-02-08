function add(num1,num2){
    let result=num1+num2;
    return result;
}
function sub(num1,num2){
    let result=num1-num2;
    return result;
}
function mul(num1,num2){
    let result=num1*num2;
    return result;
}
function div(num1,num2){
    let result=num1/num2;
    return result;
}
function Calcultor(a,b,operation){
    if(operation=='add'){
        const result=add(a,b);
        return result;
    }
    else if(operation=='sub'){
        const result=sub(a,b);
        return result;
    }
    else if(operation=='mul'){
        const result=mul(a,b);
        return result;
    }
    else if(operation=='div'){
        const result=div(a,b);
        return result;
    }
    else{
        return'operation is not allowed'
    }
}
console.log(Calcultor(10,20,'add'));
console.log(Calcultor(10,20,'sub'));
console.log(Calcultor(10,20,'mul'));
console.log(Calcultor(10,20,'div'));