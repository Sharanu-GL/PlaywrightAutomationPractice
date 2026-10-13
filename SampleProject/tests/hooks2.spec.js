//Case 2: the Execution of beforeAll & afterAll
const {test, expect} = require("@playwright/test")
 
test.beforeAll(()=>{
    console.log("Login into the Application successfully")
})
 
test.afterAll(() =>{
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
 