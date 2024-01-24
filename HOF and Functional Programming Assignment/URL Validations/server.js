
flag="g"

let urltoCheck=` https://www.0aAbcd019@.com `
let regExpression=new RegExp("((http|https)://)(www.)[a-z A-Z 0-9 @:% .]",flag)
let value=regExpression.test(urltoCheck)

if(value==true){
    console.log(value);
    console.log("Input is matched");
}else{
    console.log(" Unmatched");
}