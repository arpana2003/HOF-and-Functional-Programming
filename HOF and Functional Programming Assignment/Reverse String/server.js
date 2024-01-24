
console.log("hello");
try{
setTimeout(((arr)=>{
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i]);
    }
})("arpana") ,2000)
}catch{
    console.log("Error")
}



