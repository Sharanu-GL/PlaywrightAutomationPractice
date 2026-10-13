let str="GENTECHACADEMY"
let [a1,b1,c1] = str
console.log(a1, b1, c1)
 
//Second Approach skipping
let [x1,,x2,,x3,,x4,,x5]= str
console.log(x1,x2,x3,x4,x5)
 
//rest operator
let [s1,s2,s3,...s4]= str
console.log(s1,s2,s3)
console.log(s4)
 
/*Output:
G E N
G N E H C
G E N
[
  'T', 'E', 'C', 'H',
  'A', 'C', 'A', 'D',
  'E', 'M', 'Y'
]*/
 