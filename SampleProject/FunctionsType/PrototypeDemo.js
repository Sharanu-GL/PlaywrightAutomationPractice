//ProtoType in JavaScript:
//----------------------------
 
// prototype
 
function showEmployee(){
        this.empid=101
        this.ename="Santosh"
        this.jobname="Sales Executive"
}
 
showEmployee.prototype.salary=21000
showEmployee.prototype.getLocation=function(){
                                        console.log("Location is Bangalore")
                                    }
let obj=new showEmployee()
console.log(obj.empid)
console.log(obj.ename)
console.log(obj.jobname)
console.log(obj.salary)
obj.getLocation()
 
let obj2=new showEmployee()
console.log(obj2.empid)
console.log(obj2.ename)
console.log(obj2.jobname)
console.log(obj2.salary)
obj2.getLocation()