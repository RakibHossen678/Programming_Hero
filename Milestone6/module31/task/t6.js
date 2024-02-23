const instructior=[
    {name:'nodi',age:28,position:'Senior'},
    {name:'Akil',age:28,position:'Junior'},
    {name:'Shobuj',age:28,position:'Senior'},
]

const filter = instructior.filter(info=>info.position==='Senior');
console.log(filter);