import { $ } from '@wdio/globals';
import Page from './page';
import { browser } from '@wdio/globals';




/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageHeader()
{
return $("//*[@id='calculator-intro-section']/h2");
}
get currentAge()
{
    return $('#current-age');
}
get retiremenetAge()
{
    return  $('#retirement-age');
}
get currentAnnualIncome()
{
    return $('#current-income');
}
get spouseAnnualIncome()
{
return $('#spouse-income');
}
get currentRetirementSavings()
{
return $('#current-total-savings');
}
get currentRetirementContribution()
{
    return $('#current-annual-savings');
}
get annualRetiremnetContributionIncrease()
{
return $('#savings-increase-rate');
}
get socialSecurityncmYes()
{
    return $("//label[@for='yes-social-benefits']");
}


get socialSecurityncmNo()
{
    return $("//label[@for='no-social-benefits']");}
get martialStatus()
{
    return $("//label[@for='married']");
}
get socialSecurityOverrideAmount()
{
    return $("//*[@id='social-security-override']");
}

get adjustDefaultValues(){
    return $("//a[text()='Adjust default values']");
}
get additionalIncmRetrmnt()
{
    return $("//*[@id='additional-income']");
}

get dependentRetirmntIncm()
{
    return $("//*[@id='retirement-duration']");
}
get inflation()
{
    return $("//*[@for='include-inflation']");
}
get expectedinflationRate()
{
    return $("//*[@id='expected-inflation-rate']");
}

get fnlIncmDesired()
{
    return $("//*[@id='retirement-annual-income']");
}
get preRetrmntReturn()
{
    return $("//*[@id='pre-retirement-roi']");
}
get postRetrmntReturn()
{
    return $("//*[@id='post-retirement-roi']");
}
get btnSaveChanges()
{
    return $("//*[text()='Save changes']");
}
get btnCalculate()
{
    return $("//*[text()='Calculate']");
}

get resultmessage()
{
    return $("//*[@id='result-message']");
}

 //Below method is capturing the page header as part of validation
 public async pageHeaderText () {
  
 let SecurianHeaderText =  await this.pageHeader.getText();
 console.log('PAGEHEADERTEXTIS:',SecurianHeaderText); 

 }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using current age and retirement age    * 
     */
    public async loginCrntRetirmnt (crntage: string, rtrmntage: string) {
        await this.currentAge.setValue(crntage);
        await this.retiremenetAge.setValue(rtrmntage);
        
    }
    /**
     * a method to encapsule automation code to interact by sending the data with the page
     * e.g. to clicking and sending data to  using current retirement field
     * 
     */
 
    public async clickCrntRetirmnt(){
        await this.currentRetirementContribution.click();
    }
    public async SetCrntRetirmnt(crntRerirmntContribution: string){
        await this.currentRetirementContribution.setValue(crntRerirmntContribution);
    }
   /**
     * a method to encapsule automation code to interact by sending the data with the page
     * e.g. to clicking and sending data to  using Annual retirement field
     * 
     */
 
    public async clickAnlRetrmntCntrbtn () {
       
        await this.annualRetiremnetContributionIncrease.click();
}  
public async setAnlRetrmntCntrbtn (AnnualRetrmntCntrbtn: string) {
       
    await this.annualRetiremnetContributionIncrease.setValue(AnnualRetrmntCntrbtn);


} 
 /**
* a method to encapsule automation code to interact by sending the data with the page
* e.g. to clicking and sending data to  using current annual income field
* 
*/

    public async clickCrntAnl(){
        await this.currentAnnualIncome.click();
    }
    public async SetCrntAnl(crntAnnualIncm: string){
        await this.currentAnnualIncome.setValue(crntAnnualIncm);
    }
   /**
     * a method to encapsule automation code to interact by sending the data with the page
     * e.g. to clicking and sending data to  using spouse annual income field
     * 
     */
 
    public async clickspouseAnlIncm(){
        await this.spouseAnnualIncome.click();
    }
    public async SetSpouseAnlIncm(spouseAnlIncm: string){
        await this.spouseAnnualIncome.setValue(spouseAnlIncm);  }
   /**
     * a method to encapsule automation code to interact by sending the data with the page
     * e.g. to clicking and sending data to  using current retirement savingsfield
     * 
     */
 
    public async clickcrnRetrmntSavings(){
        await this.currentRetirementSavings.click();
    }
    public async SetrnRetrmntSavings(crntRetirmntSavings: string){
        await this.currentRetirementSavings.setValue(crntRetirmntSavings);  }
   /**
     * a method to encapsule automation code to interact by selecting the option
     *     * e.g. By selecting radio button field
     * 
     */
 
        public async radiosocialSecurityncmYes(){
            await this.socialSecurityncmYes.isSelected();
        }
        public async radiosocialSecurityncmNo(){
            await this.socialSecurityncmNo.isSelected();
        }
        public async clicksocialSecurityncmYes(){
            await this.socialSecurityncmYes.click();
        }
        public async clickocialSecurityncmNo(){
            await this.socialSecurityncmNo.click();
        }
      
        /**
     * a method to encapsule automation code to interact by selecting the option
     *     * e.g. By selecting radio button field
     * 
     */
 
        public async clickmartialStatus(){
            await this.martialStatus.click();
        }

        /**
     * a method to encapsule automation code to interact by sending the data with the page
     * e.g. to clicking and sending data to  using social security override amount     * 
     */
        public async clicksocialSecurityOverrideAmount(){
            await this.socialSecurityOverrideAmount.click();
        }
        public async setsocialSecurityOverrideAmount(override: string){
            await this.socialSecurityOverrideAmount.setValue(override);  }
     /**
     * a method to encapsule automation code to interact by clicking on link
     *      * e.g. to clicking default values link     * 
     */        
            public async clickadjustDefaultValues(){
                await this.adjustDefaultValues.click();
            }

             /**
     * a method to encapsule automation code to interact by sending the data with the page
     * e.g. to clicking and sending data to  using Additional Income Retirement amount     * 
     */
            public async clickadditionalIncmRetrmnt(){
                await this.additionalIncmRetrmnt.click();
            }
            public async setadditionalIncmRetrmnt(adtnl: string){
                await this.additionalIncmRetrmnt.setValue(adtnl);  }
                 /**
     * a method to encapsule automation code to interact by sending the data with the page
     * e.g. to clicking and sending data to  using Dependent Income Retirement amount     * 
     */
            public async clickdependentRetirmntIncm(){
                    await this.dependentRetirmntIncm.click();
                }
            public async setdependentRetirmntIncm(depednt: string){
                    await this.dependentRetirmntIncm.setValue(depednt); 
             }
              /**
     * a method to encapsule automation code to interact by sending the data with the page
     * e.g. to clicking and sending data to  using Inflation     * 
     */
             public async clickinflation(){
                        await this.inflation.click();
                    }

             public async clickexpectedinflationRate(){
                        await this.expectedinflationRate.click();
                    }
            
            public async setexpectedinflationRate(infltn: string){
                        await this.expectedinflationRate.setValue(infltn);  
                    }
                              /**
     * a method to encapsule automation code to interact by sending the data with the page
     * e.g. to clicking and sending data to  using final income desired field value     * 
     */
            public async clickfnlIncmDesired(){                     
                        await this.fnlIncmDesired.click();  }
                      
             public async setfnlIncmDesired(infltn: string){
                 await this.fnlIncmDesired.setValue(infltn); 
                 }
    /** a method to encapsule automation code to interact by sending the data with the page
                 * e.g. to clicking and sending data to  using Pre retirement field value     * 
   */
                public async clickpreRetrmntReturn(){
                await this.preRetrmntReturn.click();  }
                          
                 public async setpreRetrmntReturn(infltn: string){
                 await this.preRetrmntReturn.setValue(infltn);  }
     /** a method to encapsule automation code to interact by sending the data with the page
                 * e.g. to clicking and sending data to  using Post retirement field value     * 
   */
               public async clickpostRetrmntReturn(){
                     await this.postRetrmntReturn.click();  }
                     public async setpostRetrmntReturn(post: string){
                    await this.postRetrmntReturn.setValue(post);  }
        /** a method to encapsule automation code to interact by sending the data with the page
                 * e.g. to clicking on SAVE CHANGES BUTTON   & CALCULATE button   * 
   */
                     public async clickbtnSaveChanges()
                     {
                    await this.btnSaveChanges.click();  }
                     public async clcikbtnCalculate(){
                         await this.btnCalculate.click();  }
  /** a method to encapsule automation code to interact by sending the data with the page
                 * e.g. to clicking and getting the text from result message field 
   */                                          
                     public async getTextResultMessage(){
                    await (await this.resultmessage).click();
                    console.log(await this.resultmessage.getText());
                                            }
                    //CLicking on double click of calculate button
                 public async doubleclickCalculate(){
             const e = await browser.$("//*[text()='Calculate']");
                await  e.doubleClick();
                await browser.pause(10000);}
   
    //Scroll to particular field
                      public async scrolldowntillAdjust(){
                     const elem = await $('#adjustDefaultValues');
                    // scroll to specific element
                     await elem.scrollIntoView();
                                        }
           //This method helps to accept the alerts                             
                       public async alertaccept(){  
                        browser.execute('window.alert()');
                  await browser.acceptAlert(); 
                await browser.pause(2000);//accepts the alert popup
            
                                        }                             
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
