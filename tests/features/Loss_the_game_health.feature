Feature: Loss the game by health
    As a user I want to loss the game (based on my empirical knowledge about how to loss the game).

    Scenario: At the right place with the right starting values
        Given that I have started the game by navigating to "http://localhost:3000"
        And that my position is "outside the cafe"
        Then the value of my "Health" should be 50
        And the value of my "Money" should be 10
        And the value of my "Espressos" should be 0
        And my hipster bag should contain "nothing cool"


    Scenario Outline: Press the "Wait" button multiple times to lose health
        When I wait for the event "<event1>" or "<event2>" to take place
        Then the value of my "Health" should be "<health1>" or "<health2>"

        Examples:
            | event1                       | event2                       | health1 | health2 |
            | In the sun without Java      | The sun is burning your skin | 40      | 45      |
            | The sun is burning your skin | In the sun without Java      | 35      | 35      |
            | In the sun without Java      | The sun is burning your skin | 25      | 30      |
            | The sun is burning your skin | In the sun without Java      | 20      | 20      |
            | In the sun without Java      | The sun is burning your skin | 10      | 15      |
            | The sun is burning your skin | In the sun without Java      | 5       | 5       |


    Scenario: press the "Wait" button to loss
        When I wait for the event "You health has deteriorated too much" to take place
        Then the value of my "Health" should be "0"
        And the text should contain "you feel almost dead"
        And I should be given the new choice "Play again"
