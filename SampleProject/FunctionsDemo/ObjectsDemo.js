//Objects in JavaScript:
//------------------------------
//Objects contains properties and Methods.
 
//In JavaScript Object can store data in the form of Key and Value Pair, here keys should be unique.
//It supports named keys.
 
//Case 1: Create a JavaScript object to store the data
// Case 1: Create a JavaScript object to store the data
 
let product={
    "pid":101,
    "productname":"Leveno Desktop",
    "qunatity":10,
    "price":45000
}
 
// Read Data
console.log(product["pid"])
console.log(product["productname"])
console.log(product["qunatity"])
console.log(product["price"])
console.log("----")
console.log(product.pid)
console.log(product.productname)
console.log(product.qunatity)
console.log(product.price)
 
//Case 2: How to update the properties in a Object
// Case 2: How to update the properties in a Object
let student={
    "firstname":"Santosh",
    "age":22,
    "cityname":"Mangalore"
}
// Read Data
console.log(student.firstname)
console.log(student.age)
console.log(student.cityname)
// update Student object
student.course="Science and Maths"
console.log(student)
student.cityname="Hassan"
console.log(student)
 
//Case 3: Read Data from Objects
// Case 3: Read Data from Objects
 
/*let customer={
    "customerid":101,
    "customername":"Dell Supports",
    "location":"Dallas",
    "description":"It provides services on Laptop and Desktops"
}*/
// Read Data using Loop
/*for(let x in customer){
    console.log(customer[x])
}*/
 
//Case 4: Delete a property or an object
// Case 4: Delete a property or an object
 
let customer={
    "customerid":101,
    "customername":"Dell Supports",
    "location":"Dallas",
    "description":"It provides services on Laptop and Desktops"
}
console.log(customer)
// Delete a Property
delete customer["location"]
console.log(customer)
 
//has context menu