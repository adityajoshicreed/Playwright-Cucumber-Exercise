Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  When I will click cart button
  And I will click checkout button
  And I will enter first name as 'Michal', last name as 'Scott' and zip code as '12345' and click continue
  And I will click finish button
  Then I will get order success message

  Scenario:  Validate that I am able to remove the product from cart
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  When I will click cart button
  And I remove the product from cart
  Then Cart is empty