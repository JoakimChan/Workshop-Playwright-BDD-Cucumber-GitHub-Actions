import { Given, When, Then, world } from '@cucumber/cucumber';
import { expect } from 'chai';
import {
  getWhereIAm,
  navigateTo,
  getAllCurrentMenuChoices,
  getMenuChoiceElement,
  checkIfDescriptionContainsString,
  cheatIfNeeded,
} from './helpers.js';

Then('the value of my {string} should be {float}', async function (statusType, expectedNumValue) {
  const selectorMap = {
    Health: '.health .progress',
    Money: '.money .progress',
    Espressos: '.espressocups .progress',
  };
  const cssSelector = selectorMap[statusType];
  const element = await this.get(cssSelector);
  const numValue = +(await element.getText());
  expect(numValue).to.equal(expectedNumValue);
});

Then('my hipster bag should contain {string}', async function (expectedBagContent) {
  const bagElement = await this.get('.bag-content');
  const bagContent = (await bagElement.getText()).trim();
  expect(bagContent).to.equal(expectedBagContent);
});

Given('that I make the choice to {string}', async function (choice) {
  const menuChoiceElement = await getMenuChoiceElement(this, choice);
  await menuChoiceElement.click();
});

Given('that I know my current health', async function () {
  const healthElement = await this.get('.health .progress');
  this.previousHealth = parseInt(await healthElement.getText(), 10);
});

When('I wait for the event {string} to take place', async function (eventDescription) {
  const waitButton = await getMenuChoiceElement(this, 'Wait');
  await waitButton.click();
  await checkIfDescriptionContainsString(this, eventDescription);
});

Then('my health should be {string}', async function (condition) {
  const healthElement = await this.get('.health .progress');
  const currentHealth = parseInt(await healthElement.getText(), 10);

  if (condition === 'unchanged') {
    expect(currentHealth).to.equal(this.previousHealth);
  } else if (condition === 'less or same as before') {
    expect(currentHealth).to.be.at.most(this.previousHealth);
  } else if (condition.includes('more than before')) {
    const increment = parseInt(condition.split(' ')[0], 10);
    expect(currentHealth).to.equal(this.previousHealth + increment);
  }
  this.previousHealth = currentHealth;
});

Given('that I know my current menu choices', async function () {
  const { choices } = await getAllCurrentMenuChoices(this);
  this.menuChoices = choices;
});

Then('I should be given the new choice {string}', async function (newChoice) {
  expect(this.menuChoices).to.include(newChoice);
});