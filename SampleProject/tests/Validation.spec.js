const {test,expect} = require('@playwright/test')

test("It is a First Validation", ()=>
{
  expect(45).toBe(45)
})

test("It is a Second Validation",  ()=>{
  expect(45).toBeLessThanOrEqual(45)
})

test("It is Third Validation", ()=>
{
 
})