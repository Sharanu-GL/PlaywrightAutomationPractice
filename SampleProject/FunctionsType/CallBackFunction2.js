// Anonymous Function 
console.log("Anonymous Function !!!!!")
let employee1=function(empid,ename,job,deptno,dname,loc,callback2){
    console.log("Employee Id :"+empid)
    console.log("Employee Name :"+ename)
    console.log("Employee jobName :"+job)
 
    callback2(deptno,dname,loc)
}
 
employee1(1001,"Santosh","Manager", 20,"Research","New York", function(deptno,dname,loc){
    console.log("Department Number :"+deptno)
    console.log("Department Number :"+dname)
    console.log("Department Number :"+loc)
})
console.log("-----------------------")