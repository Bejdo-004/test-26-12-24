// Napisati program koji pronalazi sve brojeve u nizu koji su veći od prosjeka brojeva u istom nizu. 

// 	Ulaz: 
// 	[1, 2, 3, 4, 5]

// 	Izlaz: 
// 	[4, 5]


const niz = [1, 2, 3, 4, 5]
let suma = 0;
niz.forEach(e=>{
    suma+=e
})


let prosjecnaVrijednost = suma/niz.length
let noviNiz = niz.filter(e=>e>prosjecnaVrijednost)
console.log(noviNiz);

