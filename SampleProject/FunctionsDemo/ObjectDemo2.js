//Case 5: JavaScript object array / Array of JavaScript objects
//example
let nums=[10,20,30,40,50]
 
// Case 5: JavaScript object array / Array of JavaScript objects
 
/*let employees=[
    {
        "eid":101,
        "ename":"Santosh",
        "jobname":"Sales Executive"
    },
    {
        "eid":102,
        "ename":"Jones",
        "jobname":"Sales Reprentative"
    },
    {
        "eid":103,
        "ename":"Allan",
        "jobname":"Sales Man"
    }
]
 
console.log(employees)
// Read Specific key value
console.log(employees[0].eid)
console.log(employees[0].ename)
console.log(employees[0].jobname)
console.log(employees[1].eid)
console.log(employees[1].ename)
console.log(employees[1].jobname)
console.log(employees[2].eid)
console.log(employees[2].ename)
console.log(employees[2].jobname)*/
 
//Case 6: Nested JavaScript Objects
// 
let employees={
    "santu" :{
        "eid":101,
        "ename":"Santosh",
        "jobname":"Sales Executive"
    },
     "joe":{
        "eid":102,
        "ename":"Jones",
        "jobname":"Sales Reprentative"
    },
    "allan":{
        "eid":103,
        "ename":"Allan",
        "jobname":"Sales Man"
    }
}
//Read Data
console.log(employees.santu.eid)
console.log(employees.santu.ename)
console.log(employees.santu.jobname)
console.log(employees.joe.eid)
console.log(employees.joe.ename)
console.log(employees.joe.jobname)
console.log(employees.allan.eid)
console.log(employees.allan.ename)
console.log(employees.allan.jobname)

//has context menu