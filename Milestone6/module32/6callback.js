function greetings(person,name){
    person(name);
}
// const name='Halim mama'
// const numbers=[45,54,78];
const laptop={
    name:'acer',
    price:40000,
    core:'i7'
}

function greetingHandler(name){
    console.log('Good morning',name);
}

function greetEvening(name){
    console.log('Good Evening',name
    );
}
greetings(greetingHandler,'Tom')
greetings(greetEvening,'Tomi')