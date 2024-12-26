// Napiši funkciju koja pronalazi razliku između najveće i najmanje vrijednosti u nizu.


// 	Ulaz:
// [7, 3, 10, 15, 2] 

// 	Izlaz: 
// 	13 //(15 - 2)

function pronaciRazlikuIzmeduNajvecegINajmanjeg (niz){
  let najmanji = 999999999;
  let najveci = 0;
  niz.forEach(e => {
    if(najmanji>e){
        najmanji=e
    }
    if(najveci<e )
    {
        najveci=e
    }
  });
    console.log(najveci-najmanji);
    
}




let niz = [7, 3, 10, 15, 2]
pronaciRazlikuIzmeduNajvecegINajmanjeg(niz)