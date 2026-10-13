//Case 5: Write a Function to return a factorial of a given number
 
// Case 5: Write a Function to return a factorial of a given number
// without return value
 
function findFactorial(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact*i
    }
    console.log("The Factorial of "+num+" is "+fact)
}
 
console.log(findFactorial(4))  // it provides two output (it can not return value)
console.log("--------------------------")
// With return value
function getFactorial(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact*i
    }
    return fact
}
console.log(getFactorial(6))
 
//Rule 1: The return value of a function can be used as parameter to another function
// Rule 1: The return value of a function can be used as parameter to another function
function add1(x, y){
    return (x + y)
}
 
function sub1(a, b){
    let result=(a - b)
    return result
}
 
function multiplication(x, y){
    let result= (x * y)
    console.log("Multiplication Result :"+result)
}
// First Approach
let v1=add1(10,2)
let v2=sub1(45,35)
multiplication(v1, v2)
//Second Appraoch
multiplication(add1(7,8), sub1(10,5))
 
//Rule 2: The return value of function can be used within the body of another function
// Rule 2: The return value of function can be used within the body of another function
function add1(x, y){
    return (x + y)
}
 
function sub1(a, b){
    let result=(a - b)
    return result
}
 
function multiplication(){
    let p=add1(15,5)
    let q=sub1(25,15)
    let result=(p * q)
    console.log("Multiplication Result :"+result)
}
 
multiplication()