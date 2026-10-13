//Case 1: The execution of beforeEach & afterEach
const {test, expect} = require("@playwright/test")
 
test.beforeEach(()=>{
    console.log("Login into the Application successfully")
})
 
test.afterEach(() =>{
    console.log("Logout from the Application successfully")
})
 
test("First Test case playwright test", async({page})=>{
    console.log("It is a First Playwright Test")
})
 
test("Second Test case playwright test", async({page})=>{
    console.log("It is a Second Playwright Test")
})
 
test("Third Test case playwright test", async({page})=>{
    console.log("It is a Third Playwright Test")
})