let delay = 5000;

let j = (delay/1000);
let count = 0;

setInterval(() => {
  if (j > 0) {
    count++;
    console.log("Time spents is ", count);
    j--
  }
}, 1000);


setTimeout(function numGen() {
    let arr=new Array(6)
  for (let i = 0; i < 6; i++) {
    let val =Math.floor(Math.random() * 10 );
    arr[i]=val
  }
  console.log("Random Number is",...arr);
},   delay)
