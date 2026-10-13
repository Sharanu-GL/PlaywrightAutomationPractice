let arr=["Mango","Lotus","sunflower","Banana","Apple","Tulip","Aster", "Bluebell"]
 
// First Approach
let [a1,a2,a3] = arr
console.log(a1, a2, a3)
 
// Second Approach skipping Elements
let [b1,,,b2,,,b3,b4]= arr
console.log(b1, b2, b3, b4)
 
// Rest Operator
let [c1,c2,c3,...c4] = arr
console.log(c1,c2,c3)
console.log(c4)
 