Feature: change loction
  As a user I want to be able to change loction when pressing "Go north", "Go south" and "Enter cafe"

  Scenario: press the "<choice>" button
    Given that I have started the game by navigating to "http://localhost:3000"
    And that my position is "outside the cafe"
    Given that I make the choice to "<choice>"
    Then my position should be "<position>"

    Examples:
      | choice         | position            |
      | Go north       | on an empty street  |
      | Go south       | in the country-side |
      | Enter the cafe | inside the cafe     |