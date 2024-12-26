// Ulaz je string koji sadrži samo znakove '(', ')', '{', '}', '[', ']', odredi da li je ulazni string validan.

// Ulazni string je validan ako:

// Otvorene zagrade moraju biti zatvorene istim tipom zagrada.
// Otvorene zagrade moraju biti zatvorene u ispravnom redoslijedu.
// Svaka zatvorena zagrada mora imati odgovarajuću otvorenu zagradu istog tipa.

// Primjer 1:
// Ulaz: s = "([])"
// Izlaz: true

// Primjer 2:
// Ulaz: s = "()]{}"
// Izlaz: false


let s = "()]{}";
let p = [...s];

let malaPocetak = '('
let malaKraj = ')'

let srednjaPocetak = '['
let srednjaKraj = ']'

let velikaPocetak = '{'
let velikaKraj = '}'

let kraj = ""


p.forEach((e,i)=>{
    if(p[0]===malaPocetak){
        kraj = malaKraj
    }    
    else if(p[0]===srednjaPocetak){
        kraj = srednjaKraj
    }
    else if(p[0]===velikaPocetak){
        kraj=velikaKraj
    }
    

})
if(p[0]==="(" && p[p.length-1]===')'){
    console.log(true);
    
}
else if(p[0]==="[" && p[p.length-1]===']'){
    console.log(true);
}
else if(p[0]==="{" && p[p.length-1]==='}'){
    console.log(true);
    
}
else {
    console.log(false);
    
}

