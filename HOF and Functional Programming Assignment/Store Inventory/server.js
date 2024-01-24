let obj=new Object();
obj.kurkure=5
obj.colgate=10
obj.chocolate=7
obj.food=20
console.log(obj);

let answer=Object.values(obj)

let value=answer.map((element)=>{
     return element*80
})

console.log("Price in rupees is ",value);

