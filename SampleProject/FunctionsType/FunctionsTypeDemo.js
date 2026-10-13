//Types of Functions in JavaScript:
//-----------------------------------
 
//1. Named function
//2. Anonymous function
//3. Arrow Function
 
//Case 1: Find Factorial of a number
//Case 1: Find Factorial of a number
// Named function approach
function getFactorial1(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact*i
    }
    return fact
}
console.log("Factorial of a number using Named function :"+getFactorial1(4))
console.log("-------------------")
// Anonymous Function
 
let getFactorial2=function(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact*i
    }
    return fact
}
console.log("Factorial of a number using Anonymous function :"+getFactorial2(5))
console.log("-------------------")
//Arrow Function [ES6 Standard]
let getFactorial3=(num)=>{
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact*i
    }
    return fact
}
 
console.log("Factorial of a number using Arrow function :"+getFactorial3(6))
 
//Case2: The given Array assign into another array in reverse order and read Elements from second array.
// Case2: The given Array assign into another array in reverse order and read Elements from second array.
// Named function
function readElements1(arr){
    let b=[]
    let k=0
    for(let i=arr.length-1;i>=0;i--){
        b[k]=arr[i]
        k++
    }
    for(let x of b){
        console.log(x)
    }
}
readElements1([10,20,30,40,50,60,70])
console.log("--------------------------")
// Anonymous Function
let readElements2=function(arr){
    let b=[]
    let k=0
    for(let i=arr.length-1;i>=0;i--){
        b[k]=arr[i]
        k++
    }
    for(let x of b){
        console.log(x)
    }
}
readElements2([10,20,30,40,50,60,70])
console.log("--------------------------")
// Arrow Function
let readElements3=(arr)=>{
    let b=[]
    let k=0
    for(let i=arr.length-1;i>=0;i--){
        b[k]=arr[i]
        k++
    }
    for(let x of b){
        console.log(x)
    }
}
readElements3([5,10,15,20,25,30,35])
 
 