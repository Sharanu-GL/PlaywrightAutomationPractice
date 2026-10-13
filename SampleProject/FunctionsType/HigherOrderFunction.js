let radius =[ 3,5,2,3,4,6]
function area(radius){
    return (Math.PI * radius * radius)
}
 
function circumference(radius){
    return (2 *  Math.PI * radius)
}
 
function diameter(radius){
    return (2 * radius)
}
 
let calculate=function(radius, callback){
    let output=[]
    for(let i=0;i<radius.length;i++){
        output.push(callback(radius[i]))
    }
    return output
}
 
console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))
 