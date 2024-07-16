import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I will click cart button', async () => {
  await new Product(getPage()).clickCartButton();
});

When('I will sort the page by {string}', async (sort) => {
  await new Product(getPage()).sortTheProducts(sort);
});

Then('I will verify if the products are sorted as {string}', async (sort) => {
  await new Product(getPage()).verifyProductsAreSorted(sort);
});
