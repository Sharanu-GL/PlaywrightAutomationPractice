//Recursion in Functions:
//---------------------------
//A function can call itself that represents Recursion.
 
//function x(){
  //   .......
    // .......
    // x()
//}
 
//Case 1: Using Recursion find factorial of a given number
//Case 1: Using Recursion find factorial of a given number
 
function getFactorial(num){
    if(num==1){
        return 1
    }
    return num * getFactorial(num - 1)
}
 
console.log(getFactorial(4))
console.log(getFactorial(5))
console.log(getFactorial(6))

getFactorial(5)
 
//5 * getFactorial(5-1)
//5 * 4 * getFactorial(4-1)
//5 * 4 * 3 * getFactorial(3-1)
//5 * 4 * 3 * 2 *  getFactorial(2-1)
//=> 5 * 4 * 3 * 2 * 1

 
//Case 2: Without using any looping statements, print numbers from 10 to 20
// Case 2: Without using any looping statements, print numbers from 10 to 20
 
let k=10;
function displayNumbers(){
    if(k <= 20){
        console.log(k)
        k=k+1
        displayNumbers()
    }
}
 
displayNumbers()
console.log("--------------------------")
// case 3: Display Even numbers from 40 to 60
let i=40
function displayEvenNumbers(){
    if(i <= 60){
        if(i % 2 ==0){
            console.log(i)
        }
        i=i+1
        displayEvenNumbers()
    }
}
 
displayEvenNumbers()