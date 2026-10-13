// concat: It combines Elements from first and Second Array
/*let s1=[10,20,30]
let s2=[40,50,60]
let s3=s1.concat(s2)
console.log(s3)
console.log("----------------")
// join : It joines each Element in an array using Delimiter
let fruits=["Mango","Banana","Orange","Apple"]
console.log(fruits.join("#"))
console.log("----------------")
// Reverse: It reverse the Elements from the Array
let s4=[10,20,30,40,50]
console.log(s4.reverse())
console.log("----------------")
// includes: It make sure wether an element exists in an array
let s5=["Bangalore","Mysore","Raichur","Bellary","Kolar"]
console.log(s5.includes("Kolar"))
console.log("----------------")
// toString : It converts an array into String
let s6=["Karnataka","Kerala","Assam","Gujarath"]
console.log(s6.toString())
console.log("----------------")*/
 
// indexOf - > It provides position of Elements from left to Right
 
let fruits=["Mango","Grapes","Banana","Orange","Musk Melon", "Grapes","Orange"]
console.log(fruits.indexOf("Orange"))
 
// lastIndexOf -> It provides position of Elememnts from Right to Left
let fruits2=["Mango","Grapes","Banana","Orange","Musk Melon", "Grapes","Orange"]
console.log(fruits2.lastIndexOf("Orange"))
 
// at - > It provides Element from specific index
let personnames=["Santosh","Adams","Allan","Jones","King"]
console.log(personnames.at(3))
//Slice: It fetches Elements from the Range of Index
let s1=[10,20,30,40,50,60,70,80]
let s2=s1.slice(2,5)
console.log(s2)
console.log("----------")
//splice -> It removes Elements based based on start and Delete count
let s3=[10,20,30,40,50,60,70,80]
console.log(s3.splice(2,5))
console.log(s3)