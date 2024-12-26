
// Napiši funkciju koja vraća objekt s brojem pojavljivanja svakog elementa u nizu.

// 	Ulaz: 
// 	[1, 2, 2, 2, 3, 3, 4]

// 	Izlaz: 
// 	{ 1: 1, 2: 3, 3: 2, 4: 1 }





function brojPonavljanja(niz) {
    let brojPonavljanja = 1
    let objekat = new Object()

    let noviNiz = []
    niz.forEach((e, i) => {
        if (niz[i] === niz[i + 1]) {
            brojPonavljanja++
        }
        else {
            let key = niz[i];
            noviNiz.push([niz[i], brojPonavljanja])
            brojPonavljanja = 1
        }
    })
    // console.log(noviNiz);
    objekat = { ...noviNiz }
    return objekat;

}

let niz = [1, 2, 2, 2, 3, 3, 4]

let objekat = brojPonavljanja(niz)

console.log(objekat);
