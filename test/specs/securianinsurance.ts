import { browser } from '@wdio/globals'
import LoginPage from '../pageobjects/insuranceObjects'

describe('Retirement page calculator', () => {
    it('should login page successfully', async () => {
      //Open method used to open the URL
        await LoginPage.open()
        //Below method is capturing the page header as part of validation
        await LoginPage.pageHeaderText();
        //Entering the current age and retirment age value 
        await LoginPage.loginCrntRetirmnt('40', '68')
        //Clicking and entering the value in Current annual income field
        await LoginPage.clickCrntAnl();
        await LoginPage.SetCrntAnl('100000');
       //Clicking and entering the value in Current spouse annual income field
        await LoginPage.clickspouseAnlIncm();
         await LoginPage.SetSpouseAnlIncm('75000');
      //Clicking and entering the value in Current retirement savings field    
        await LoginPage.clickcrnRetrmntSavings();
        await LoginPage.SetrnRetrmntSavings('500000');   
       //Clicking and entering the value in Current retirement contribution field 
        await LoginPage.clickCrntRetirmnt();
        await LoginPage.SetCrntRetirmnt('10');
       //Clicking and entering the value in Annual retirement contribution field 
        await LoginPage.clickAnlRetrmntCntrbtn();
        await LoginPage.setAnlRetrmntCntrbtn('2');
        //Alert method is used to accept the alerts on web page
        await LoginPage. alertaccept();
        //Clicking and selecting the Social Security Income 'YES' radio button 
        await LoginPage.clicksocialSecurityncmYes();
        await  browser.pause(3000);
       //Alert method is used to accept the alerts on web page
       await LoginPage. alertaccept();
       //Clicking and selecting the Smartial status radio button 
      await LoginPage.clickmartialStatus();
      //Clicking and entering the value in social security override field
      await LoginPage.clicksocialSecurityOverrideAmount();
      await LoginPage.setsocialSecurityOverrideAmount('4000');  
      //Clicking on default values field
       await LoginPage.clickadjustDefaultValues();
       await  browser.pause(3000);
      //Clicking and entering the value in Additional Income in Retirment field
      await LoginPage.clickadditionalIncmRetrmnt();
      await LoginPage.setadditionalIncmRetrmnt('500');
      //Clicking and entering the value in Dependent Retirment Income field
      await LoginPage.clickdependentRetirmntIncm();
      await LoginPage.setdependentRetirmntIncm('20'); 
      //Selecting the 'YES' radio button for inflation  
      await LoginPage.clickinflation();
      //Clicking and entering the value in Inflation Income Desired field
     await LoginPage.clickfnlIncmDesired();
     await LoginPage.setfnlIncmDesired('75');  
     await browser.pause(2000); 
    //Clicking and entering the value in Pre retirmrnt Income field
     await LoginPage.clickpreRetrmntReturn();
     await LoginPage.setpreRetrmntReturn('8')
    //Clicking and entering the value in Post retirmrnt Income field
    await LoginPage.clickpostRetrmntReturn();
   //Clicking and entering the value in expected inflation rate field
   await LoginPage.clickexpectedinflationRate();
    await LoginPage.setexpectedinflationRate('3');
    //Clicking and entering the value in Post retirmrnt Income field
    await LoginPage.clickpostRetrmntReturn();
   await LoginPage.setpostRetrmntReturn('5');
    await browser.pause(1000); 
    //Clicking on SAVE CHNAGES button  
    await LoginPage.clickbtnSaveChanges();
    await browser.pause(3000); 
    //CLicking on double click of calculate button
    await LoginPage.doubleclickCalculate();
    //Getting the text of result message
   await LoginPage.getTextResultMessage();
    
    })
})

