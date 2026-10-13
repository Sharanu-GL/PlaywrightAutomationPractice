const{test,expect}=require('@playwright/test')


test("It is a first validation",()=>
{
expect(45).toBe(45)
})

test("It is a second validation ", ()=>
{
expect(75).toBeGreaterThan(50)
})

test("It is a third validation ",()=>
{
expect(45).toBeLessThanOrEqual(45)
})
test("It is a fourth validation",()=>
{
 expect(45).toBeGreaterThanOrEqual(20)
})
test("It is a sixth validation",()=>
{
expect("javaScript"=="javaScript").toBeTruthy
})
test("it is a seventh validation",()=>
{
   expect("Playwright Automation".startsWith("Playwright")).toBeTruthy
})
test.only("It is eighth validation",()=>
{
    expect("Welcome").toContain("Welcome") 
})