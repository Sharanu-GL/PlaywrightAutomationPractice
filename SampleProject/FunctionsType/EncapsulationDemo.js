class Person{
    #emailid
    #password
 
    setEmailId(emailid){
        this.#emailid=emailid
    }
 
    setPassword(password){
        this.#password=password
    }
 
    getEmailId(){
        return this.#emailid
    }
 
    getPassword(){
        return this.#password
    }
}
 
let o=new Person()
o.setEmailId("santosh@sg.com")
o.setPassword("India@12345")
console.log(o.getEmailId())
console.log(o.getPassword())