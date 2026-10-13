let seventhTable=[]
let k=0;
let sum=0;
for(let i=1;i<=10;i++)
{
   seventhTable[k]=7*i;
   k++;

}
console.log("seventh table "+seventhTable)
for(let i=0;i<seventhTable.length;i++)
{
    sum=sum+seventhTable[i];
}
console.log("sum of all elements "+sum);