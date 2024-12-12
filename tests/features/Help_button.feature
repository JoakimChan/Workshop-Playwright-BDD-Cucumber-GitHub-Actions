Feature: help button
  As a user I want to know what the game are about.

  Scenario: press the "Help" button
    Given that I have started the game by navigating to "http://localhost:3000"
    And that my position is "outside the cafe"
    And that I make the choice to "Help"
    Then a intoduction of the character and the game will been showed