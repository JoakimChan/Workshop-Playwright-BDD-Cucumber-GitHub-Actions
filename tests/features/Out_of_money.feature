Feature: Loss the game by health
  As a user I want to loss all the money i own.

  Scenario: buy espresso 1st
    Given that I have started the game by navigating to "http://localhost:3000"
    And that my position is "outside the cafe"
    And that I make the choice to "Enter the cafe"
    And that I know my current health
    When that I make the choice to "Buy an espresso"
    Then my health should be "10 more than before"
    And the value of my "Money" should be 5
    And the value of my "Espressos" should be 1

  Scenario: buy espresso 2nd
    And that I know my current health
    When that I make the choice to "Buy an espresso"
    Then my health should be "10 more than before"
    And the value of my "Money" should be 0
    And the value of my "Espressos" should be 2
    And the "Buy an espresso" should disappear