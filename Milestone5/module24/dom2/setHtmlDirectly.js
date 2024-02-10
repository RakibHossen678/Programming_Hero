const mainheader = document.getElementById('main');
const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1>My Dress sectoin</h1>
<ul>
    <li>T-shirt</li>
    <li>Shirt </li>
    <li>pant</li>
</ul>
`
mainheader.append(sectionDress)