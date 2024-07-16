import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartBtn: string = 'a.shopping_cart_link'
    private readonly productPriceLabel: string = '.inventory_item_price'
    private readonly sortDropDown: string = '.product_sort_container'
    priceAscOption = 'Price (low to high)'
    priceDescOption = 'Price (high to low)'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async clickCartButton(){
        await this.page.locator(this.cartBtn).click()
    }

    public async sortTheProducts(sortType: string) {
        console.log(sortType)
        if(sortType === this.priceAscOption)
            await this.page.locator(this.sortDropDown).selectOption(this.priceAscOption)
        else if(sortType === this.priceDescOption)
            await this.page.locator(this.sortDropDown).selectOption(this.priceDescOption)
        else{
            throw new Error(`Plese provide correct sorting option`);
        }

    }

    public async verifyProductsAreSorted(sortType: string) {
        if(sortType === this.priceAscOption){
            const prices = await this.page.locator(this.productPriceLabel).allInnerTexts()
            for (let i = 0; i < prices.length-1; i++) {
                const pricei = parseFloat(prices[i].replace('$',''))
                const pricei1 = parseFloat(prices[i + 1].replace('$',''))
                if (pricei > pricei1) {     
                    throw new Error(`Products are not sorted in ${sortType} type`);
                }
            }
        }
        else if(sortType === this.priceDescOption) {
            const prices = await this.page.locator(this.productPriceLabel).allInnerTexts()
            for (let i = 0; i < prices.length-1; i++) {
                const pricei = parseFloat(prices[i].replace('$',''))
                const pricei1 = parseFloat(prices[i + 1].replace('$',''))
                if (pricei < pricei1) {
                    throw new Error(`Products are not sorted in ${sortType} type`);
                }
            }
        }
        else{
            throw new Error(`Plese provide correct sorting option`);
        }

    }
}