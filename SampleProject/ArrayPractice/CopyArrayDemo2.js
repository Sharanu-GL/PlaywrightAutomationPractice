//Solution:
/*
3. Programmatically copy/Assign Elements from one Array to Another Array
Step 1: Create an Array Add some elements
Step 2: Create an Empty new Array
Step 3: Read Step 1 Array and Assign Elements into Step 2 Array
Step 4: Read Elements from New Array
 
*/
 
let flowers=["Tulip","Cosmos","Sumflower","Lotus","Aster"]
 
let flowersNew=[]
 
let k=0
for(let i=0;i<flowers.length;i++){
    flowersNew[k]=flowers[i]
    k++
}
 
//Read Elements from flowersNew
for(let x of flowersNew){
    console.log(x)
}