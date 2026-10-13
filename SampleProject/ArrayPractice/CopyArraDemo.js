let a=[1,2,3,4,5,6,7,8,9,10];
let b=[];
let k=0;
/*for(let x in a)
{
    console.log(a[x]);
    b[k]=a[x];
    k++;
}*/
for(let x of a)
{
    console.log(x);
   b[k]=x;
    k++;
}
console.log("array b "+b)