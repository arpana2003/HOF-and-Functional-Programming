let flag="gi"

let regExpression= new RegExp("(https://www.linkedin.com/in/?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,})?",flag)

let url="https://www.linkedin.com/in/yashvi@9_2.com"

let value=regExpression.test(url)
console.log(value);