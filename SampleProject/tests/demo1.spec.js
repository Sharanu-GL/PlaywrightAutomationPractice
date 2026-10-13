const {test, expect}= require("@playwright/test")

test("First Playwright Test", function display()
{
  console.log("It is a First Playwright Test using Named Function!!!")
})

test("Second Playwright Test", function()
{
console.log("It is a First Playwright Test using Ananymous Function!!!")
})

test("Third Playwright Test", ()=>{
console.log("It is a First Playwright Test using Arrow Function !!!!")

})