
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { getWhereIAm, getMenuChoiceElement } from './helpers.js';

Then('a intoduction of the character and the game will been showed', async function () {
  // Get the current location
  const currentLocation = await getWhereIAm(this);

  // Verify that the location matches "looking at the help page"
  expect(currentLocation).to.equal("looking at the help page");

  // Fetch the description text
  const descriptionElement = await this.get('.description'); // Ensure '.description' is the correct CSS selector for the text

  const descriptionText = await this.getText(descriptionElement);

  // Verify the description text matches the expected text
  expect(descriptionText).to.include(`You're a hipster.`);
});
