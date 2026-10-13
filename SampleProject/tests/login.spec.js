const {test, expect} = require("@playwright/test")
 
test("Invalid Credentails in Login Page", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Login with Invalid Credentials
    await page.locator("//input[@name='username']").fill("pgudi123")
    await page.locator("//input[@name='password']").fill("pgudi123")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    // Validations
    await expect(page.locator("//p[normalize-space()='Invalid username or password']")).toHaveText("Invalid username or password")
    const errorMessage=await page.locator("//p[normalize-space()='Invalid username or password']").textContent()
    await expect(errorMessage.includes("Invalid")).toBeTruthy()
    await expect(errorMessage).toContain("Invalid")
    await expect(errorMessage==="Invalid username or password").toBeTruthy()
 
})