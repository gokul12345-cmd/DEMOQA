describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://thinqloudsolutionpvtltd2-dev-ed.my.salesforce.com/');
// receive url
      console.log(await browser.getUrl());
    })
    it('passing username and password', async  ()=>{
        //Username passing
    const userName = await $("//input[@name='username']").addValue("gokul.bhujbal@thinqloud.com");
       //Password passing
    const password = await $("//input[@name='pw']").addValue("Qa@12345");
      //Login button clicking
    const loginBtn =await $("//input[@name='Login']").click();


        //input[@name='username']
        //input[@name='pw']
        //input[@name='Login']
    })
})
