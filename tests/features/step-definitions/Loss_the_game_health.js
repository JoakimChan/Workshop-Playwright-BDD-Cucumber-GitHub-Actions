
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { getMenuChoiceElement } from './helpers.js';

When('I wait for the event {string} or {string} to take place', async function (event1, event2) {
  const waitButton = await getMenuChoiceElement(this, 'Wait');
  await waitButton.click();

  const descriptionElement = await this.get('.description');

  const descriptionText = await this.getText(descriptionElement);

  expect(descriptionText).to.include.oneOf([event1, event2]);
});

Then('the value of my Health should be {string} or {string}', async function (health1, health2) {
  const healthElement = await this.get('.health .progress');
  const currentHealth = parseInt(await healthElement.getText(), 10);

  expect(currentHealth).to.be.oneOf([Number(health1), Number(health2)]);
});

Then('the value of my Health should be 0', async function () {
  const healthElement = await this.get('.health .progress');
  const currentHealth = parseInt(await healthElement.getText(), 10);

  expect(currentHealth).to.be.equal(0)
});

Then('the text should contain {string}', async function (a) {
  const descriptionElement = await this.get('.description');

  const descriptionText = await this.getText(descriptionElement);

  expect(descriptionText).to.include(a);
});