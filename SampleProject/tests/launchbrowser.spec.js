const{test,expect}=require('@playwright/test')


test("Launch browser and capture URL and Title ", async({page})=>
{
 await page.goto("https://sgtestinginstituteapp.onrender.com/")
 await page.waitForTimeout(3000);
 // capture URL and Title
 const url=await page.url();
 console.log("URL of the application "+url)
 const title=await page.title()
 console.log("Title of the application "+title)

})