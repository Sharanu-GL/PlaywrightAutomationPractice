let eveArray=[];
//let k=0;
for(let i=20;i<=40;i++)
{
  if(i%2==0)
  {
  // arr[k]=i;
   //k=k+1;
   eveArray.push(i);
  }

}
console.log("even array "+eveArray)
for(let i=0;i<eveArray.length/2;i++)
{
    console.log(eveArray[i]);
}