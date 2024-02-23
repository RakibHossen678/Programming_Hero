const instructior=[
    {name:'nodi',age:20,position:'Senior'},
    {name:'Akil',age:15,position:'Junior'},
    {name:'Shobuj',age:22,position:'Senior'},
]

const getSum=instructior.reduce((p,c)=>p+c.age,0)
console.log(getSum);