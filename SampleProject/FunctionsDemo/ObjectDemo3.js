//Case 7: Objects with properties and functions.
// Case 7: Objects with properties and functions.
let employee={
    "empid":101,
    "ename":"Santosh",
    "jobname":"Manager",
    "sal":40000,
    bonus: function(){
        return (this.sal*5)/100
    },
    commission: function(){
        return (this.sal*10)/100
    },
    "incentives": function(){
        return (this.bonus() + this.commission())
    }
}
 
console.log(employee.empid)
console.log(employee.ename)
console.log(employee.jobname)
console.log(employee.sal)
console.log(employee.bonus())
console.log(employee.commission())
console.log(employee.incentives())