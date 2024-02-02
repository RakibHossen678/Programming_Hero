/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

price=500;
let age =62;
let isStudent=true;

if (age<10 ){
    console.log('You can get free ticket');
}
else if (isStudent && (age>10 && age<=30)){
    price=price/2;
    console.log("You get a 50% discount.You have to pay "+price);
}
else if(age>=60 ){
    
    let discount =(price * 15)/100 ;
    payAmount = price -discount;
    console.log("You get a 15% discount.You have to pay "+payAmount);
}
else{
    console.log('You need to pay ' +price);
}
