class Maths{
    addition(x, y){
        let result=(x + y)
        console.log("Addition Result :"+result)
    }
 
    substraction(a,b){
        let result=(a - b)
        console.log("Substraction Result :"+result)
    }
 
    multiplication(x, y){
        let result=(x * y)
        console.log("Multiplication Result :"+result)
    }
}
 
let o=new Maths()
o.addition(45,40)
o.substraction(35,25)
o.multiplication(13,10)