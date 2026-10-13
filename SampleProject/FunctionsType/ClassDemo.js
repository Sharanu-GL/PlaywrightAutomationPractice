class Employee{
    empid=101
    empname="Santosh"
    jobname="Sales Manager"
    sal=43000
    email="santosh@sg.com"
 
    showDetails(){
        console.log(this.empid)
        console.log(this.empname)
        console.log(this.jobname)
        console.log(this.sal)
        console.log(this.email)
    }
 
}
let o1=new Employee()
o1.showDetails()
 console.log(o1.empid)
let o2=new Employee()
o2.showDetails()