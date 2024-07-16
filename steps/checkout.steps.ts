import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { CheckOutPage } from '../pages/checkout.page';

When('I will click checkout button', async () => {
    await new CheckOutPage(getPage()).clickCheckoutButton();
  });

  When('I will enter first name as {string}, last name as {string} and zip code as {string} and click continue', async (firstName, lastName, zipCode) => {
    await new CheckOutPage(getPage()).enterInformationAndClickContinue(firstName, lastName, zipCode);
  });  

  When('I will click finish button', async () => {
    await new CheckOutPage(getPage()).clickFinishButton();
  });

  Then('I will get order success message', async () => {
    await new CheckOutPage(getPage()).validateOrderSuccessMessage();
  });

  When('I remove the product from cart', async () => {
    await new CheckOutPage(getPage()).clickRemoveButton();
  });

  Then('Cart is empty', async () => {
    await new CheckOutPage(getPage()).verifyCartIsEmpty();
  });
