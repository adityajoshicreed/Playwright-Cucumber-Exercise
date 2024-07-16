Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline:  Validate product sort by price <sort>
  Then I will login as 'standard_user'
  When I will sort the page by <sort>
  Then I will verify if the products are sorted as <sort>
  Examples:
    | sort |
    | "Price (low to high)" |
    | "Price (high to low)" |