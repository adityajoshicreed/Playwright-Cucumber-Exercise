import { expect, Page } from "@playwright/test"

export class CheckOutPage {
    private readonly page: Page
    private readonly checkoutBtn: string = '#checkout'
    private readonly firstNameField: string = '#first-name'
    private readonly lastNameField: string = '#last-name'
    private readonly zipCodeField: string = '#postal-code'
    private readonly continueBtn: string = '#continue'
    private readonly finishBtn: string = '#finish'
    private readonly orderSuccessMessage: string = '.complete-header'
    expectedOrderSuccessMessage = 'Thank you for your order!'
    private readonly removeBtn: string = '.cart_button'
    private readonly productNameLabel: string = '.inventory_item_name'

    constructor(page: Page) {
        this.page = page;
    }

    public async clickCheckoutButton(){
        await this.page.locator(this.checkoutBtn).click()
    }

    public async enterInformationAndClickContinue(firstName: string, lastName: string, zipCode: string){
        await this.page.locator(this.firstNameField).fill(firstName)
        await this.page.locator(this.lastNameField).fill(lastName)
        await this.page.locator(this.zipCodeField).fill(zipCode)
        await this.page.locator(this.continueBtn).click()
    }

    public async clickFinishButton(){
        await this.page.locator(this.finishBtn).click()
    }

    public async validateOrderSuccessMessage() {
        const message = await this.page.locator(this.orderSuccessMessage).textContent()
        if (message !== this.expectedOrderSuccessMessage) {
          throw new Error(`Expected message to be ${this.expectedOrderSuccessMessage} but found ${message}`);
        }
    }

    public async clickRemoveButton(){
        await this.page.locator(this.removeBtn).click()
    }

    public async verifyCartIsEmpty(){
        await expect(this.page.locator(this.productNameLabel)).not.toBeVisible()
    }
}