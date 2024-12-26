let nizNizova = [[1, 2, 3],
[4, 5, 6], 
[7, 8, 9]
]

//1,4,7

//2,5,8

//3,6,9

niz1 = []
niz2 = []
niz3 = []



nizNizova.forEach(e=>{
    
        niz1.push(e[0])
        niz2.push(e[1])
        niz3.push(e[2])
   
})



let konacniNizNizova = []
konacniNizNizova.push(niz1,niz2,niz3)

console.log(konacniNizNizova);
