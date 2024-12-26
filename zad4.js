let rijec = "mjau u mjua cer"
let niz = [...rijec]

let noviString = ""

niz.forEach((e,i)=>{
    if(niz[i]!= ' '){
        noviString += niz[i]
        
    }
    else if(niz[i]===' '){
        noviString = ""
    }
})

console.log(noviString.length);

