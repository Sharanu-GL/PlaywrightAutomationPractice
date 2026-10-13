//Promise in JavaScript:
//--------------------------
//Example of Promise :
let myPromise=new Promise(function (resolved, rejected){
 
    let status=true
    if(status){
        resolved("The Action has resolved successfully")
    }else{
        rejected("The Action has not resolved successfully")
    }
})
 
myPromise.then((result)=>{
    console.log(result)
 
}).catch(error =>{
    console.log(error)
}).finally(always =>{
    console.log("It executes always ")
})
console.log("---------------------")
let loginPromise=new Promise((resolved, rejected)=>{
    let status=false
    if(status){
        resolved("the Login Functionality has executed successfully")
    }else{
        rejected("the Login Functionality has not executed successfully")
    }
})
 
loginPromise.then((result)=>{
    console.log(result)
}).catch(error =>{
    console.log(error)
}).finally(always =>{
    console.log("It executes always (Login) ")
})
 
//Typical Example to Execute Promise in a Traditional Approach:
//------------------------------------------------------------
 
fetch("https://fakestoreapi.com/products/1")
.then((response) =>{
    response.json()
    .then(data =>{
        console.log(data)
    }).catch(error=>{
        console.log(error)
    })
}).catch(error =>{
    console.log(error)
})