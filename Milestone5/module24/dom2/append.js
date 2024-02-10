// //where do aadd
// const appendList=document.getElementById('append')
// // console.log(appendList);
// //what to add 
// const li = document.createElement('li')
// li.innerText='Manipulation'

// //add the child

// append.append(li)


// const li2 = document.createElement('li')
// li2.innerText='Model'
// append.append(li2)


// const properties = document.getElementById('property');

// const p1=document.createElement('li')
// p1.innerText='remove';

// property.append(p1)

const mainHeader=document.getElementById('main');
const section = document.createElement('section');
const h1 = document.createElement('H1');
h1.innerText='My food list'
section.appendChild(h1)
const ul = document.createElement('ul');

const li1 = document.createElement('li')
li1.innerText='biriyani'
ul.appendChild(li1)
const li2 = document.createElement('li')
li2.innerText='egg'
ul.appendChild(li2)
const li3 = document.createElement('li')
li3.innerText='salad'
ul.appendChild(li3)
const li4 = document.createElement('li')
li4.innerText='borhani'
ul.appendChild(li4)

section.appendChild(ul)


main.appendChild(section)