//Explore map(), filter() & reduce() Higher Order functions:
//----------------------------------------------------------
 
//map():
//This function provides a transformation of an array.
 
//Example:
// map() function
let nums=[1,2,3,4,5,6,7,8,9,10]
//get square of ech numbers
 
let square=nums.map(function(x){
    return (x * x)
})
console.log(square)
console.log("--------------------")
function square1(x){
    return (x * x)
}
console.log(nums.map(square1))
console.log("--------------------")
let cube=nums.map(function(x){
    return(x* x * x)
})
console.log(cube)
console.log("------------------------------")
 
//filter():
//it filters the given array elements.
//Example:
// filter() function
let nums1=[1,2,3,4,5,6,7,8,9,10]
 
// filter even numbers
let evennumbers=nums1.filter(function(a){
    if(a % 2 ==0) return a
})
 
console.log(evennumbers)
console.log("--------------------")
// filter odd numbers
let oddnumbers1=nums.filter(function(x){
    if (x % 2 ==1) return x
})
 
console.log(oddnumbers1)
console.log("--------------------")
let greaterthan5=nums.filter(function(q){
    if(q > 5) return q
})
console.log(greaterthan5)