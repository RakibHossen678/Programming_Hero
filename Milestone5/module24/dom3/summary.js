// const allLI=document.getElementsByTagName('li')
// console.log(allLI);

// const withClass=document.getElementsByClassName('sect_title');
// // for (const clas of withClass) {
// //     console.log(clas.innerText);
// // }
// console.log(withClass);

// const withId=document.getElementById('section_2')
// // console.log(withId.innerText);
// // console.log(withId.innerHTML);
// withId.style.color='red'
// withId.style.border= ' 2px solid teal '
// withId.style.borderRadius='20px'
// withId.style.padding='20px'


const main=document.getElementById('main_container');
const section=document.createElement('section');
section.innerHTML=`
    <h1>My dynamic section</h1>
    <ul>
        <li>first </li>
        <li>first </li>
        <li>first </li>
        <li>first </li>
    </ul>
`
main.append(section)
// main_container.append(section)
