//b) Functions which return value:
//------------------------------------
//These kind of function has return keyword in the function body, A function can return only one value at a time.
 
//Case 1: Function which return your native place name
 
// Note 2: Function which do not return your native place name
function showNativePlace(){
    let placename="Mangalore"
    console.log("My native palce name :"+placename)
}
showNativePlace()
// Note 2: Function which return your native place name
 
function getNativePlaceName(){
    let placename="Mysore"
    return placename
}
 
let v1=getNativePlaceName()
console.log(v1)
console.log("My Place name is :"+v1)
console.log("I have spent my childhood in the city  :"+v1)
console.log("I completed my Engineering at :"+v1)
 
 
//Case 2: Write a function for given two arrays elements concatenate it and return the result
// Case 2: Write a function for given two arrays elements concatenate it and return the result
 
function concate1(a, b){
    let arr=[]
    let k=0
    for(let i=0;i<a.length;i++){
        arr[k]=a[i]
        k++
    }
 
    for(let j=0;j<b.length;j++){
        arr[k]=b[j]
        k++
    }
 
    return arr
}
 
// print Return value
x=[10,20,30]
y=[40,50,60,70]
let result=concate1(x, y)
console.log(result)
console.log("-----------")
// find sum of All Elements from concat array value
let sum=0
for(let i=0;i<result.length;i++){
    sum=sum+result[i]
}
console.log("Sum of All Elements :"+sum)
console.log("-----------")
// Read Firs half of Elements from concat array value
for(let i=0;i<result.length/2;i++){
    console.log(result[i])
}
console.log("-----------")
// Read Elements in Reverse order
for(let i=result.length-1;i>=0;i--){
    console.log(result[i])
}