let list={"Akanksha":2003,"Tri":2004,"SuSu":2005,"Preity":2011,"Anamika":2022}
console.log(list);

let arr=Object.entries(list)

let val=arr.filter((element)=>{
    if(element[1]<=2010){
        element[0]=((element[0]).toUpperCase());
        return element;
    }
})

console.log(val);









