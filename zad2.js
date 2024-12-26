// Napiši funkciju koja pronalazi najduži zajednički prefiks među nizom stringova.
// Ako ne postoji zajednički prefiks, vrati prazan string "".
// Primjer:
// Ulaz: strs = ["flower", "flow", "flight"]
// 	Izlaz: "fl"


const strs = ["flower", "flow", "flight"]

const [prvi,drugi,treci]=strs;

let prefix = ""
let najkracaRijec=""
strs.forEach((e,i)=>{
    strs.forEach((f,j)=>{
        if(e.length<f.length)
            najkracaRijec = [...e]
    })
    
})

let prviString = [...prvi];
let drugiString = [...drugi]
let treciString = [...treci]
let pocetak = 0;
najkracaRijec.forEach((e,i)=>{

    if(prviString[i]===drugiString[i] && drugiString[i] ===treciString[i] && pocetak === 0){
        prefix+=prviString[i]
    }
    else{
        pocetak++
    }
})

console.log(prefix);

    


    
