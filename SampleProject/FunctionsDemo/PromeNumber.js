
for(let i=10;i<=40;i++)
{
  let flag=0;
  for(let j=2;j<i;j++)
  {
    if(i%j==0)
    {
        flag=flag+1;
        break;
    }
  }
 if(flag==0)
 {
    console.log(i)
 }
}
console.log("-----------------------------")
//