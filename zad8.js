// Ulaz: 
// 	["Sings", "like", "Thunder"];
// const separator = "-";

// 	Izlaz: 
// 	“Sings-like-Thunder”

function ubaciSeparator(string){
    string.forEach(e => {
        if(e!=','){
            noviString+=e
        }
        else if(e===','){
            noviString+='-'
        }
        
    });
    console.log(noviString);}




let niz = ["Sings", "like", "Thunder"]
let string = niz.toString()
let noviString =""
string = [...string]
ubaciSeparator(string,noviString)

