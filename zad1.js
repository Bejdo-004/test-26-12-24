// Ulaz: nums = [2,7,11,15], target = 9
// Izlaz: [0,1]
// Objašnjenje: Pošto nums[0] + nums[1] == 9, vraćamo [0, 1].

const nums = [2,7,11,15]
const target = 9
const  noviNiz = []
nums.forEach((e,i )=> {
    nums.forEach((f,j)=>{
        if(e+f==target){
            noviNiz.push(i,j)
            
        }
    })
    
});

const set = new Set(noviNiz)
console.log(set);
