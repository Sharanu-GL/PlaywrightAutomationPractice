//Callback functions in JavaScript:
//------------------------------------
//If you pass a function as parameter to another function that represents callback functions.
 
 
//Example:
// callback function with named function example
 
function display(firstname, callback){
    console.log("first Name of Student :"+firstname)
    callback(76)
}
 
function showmarks(marks){
    console.log("Marks of the Student :"+marks)
}
 
display("Santosh", showmarks)
console.log("----------------------------")
// callback function with Anonymous function example
 
let display2=function(firstname,callback){
    console.log("first Name of Student :"+firstname)
    callback(54)
}
 
let showmarks2=function(marks){
    console.log("Marks of the Student :"+marks)
}
 
display2("Vinith",showmarks2)
console.log("----------------------------")
// callback function with Arrow function example
let display3=(firstname,callback)=>{
    console.log("first Name of Student :"+firstname)
    callback(45)
}
 
let showmarks3=(marks)=>{
    console.log("Marks of the Student :"+marks)
}
display3("Srinivasa",showmarks3)
 
/*Case 1: Passing callback function directly as parameter to another function:
// callback function with named function example
 
function display(firstname, callback){
    console.log("first Name of Student :"+firstname)
    callback(76)
}
 
 
display("Santosh", function showmarks(marks){
    console.log("Marks of the Student :"+marks)
})
console.log("----------------------------")
// callback function with Anonymous function example
 
let display2=function(firstname,callback){
    console.log("first Name of Student :"+firstname)
    callback(54)
}
 
 
display2("Vinith",function(marks){
    console.log("Marks of the Student :"+marks)
})
console.log("----------------------------")
// callback function with Arrow function example
let display3=(firstname,callback)=>{
    console.log("first Name of Student :"+firstname)
    callback(45)
}
 
 
display3("Srinivasa",(marks)=>{
    console.log("Marks of the Student :"+marks)
})*/
 