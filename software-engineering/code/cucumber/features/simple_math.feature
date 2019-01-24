Feature: Simple maths
  In order to count things
  As a user of a counting library
  I want to increment variables

  Scenario: incrementing one by one
    Given a variable set to 1
    When I increment the variable by 1
    Then the variable should contain 2

  Scenario: incrementing fourty by two
    Given a variable set to 40
    When I increment the variable by 2
    Then the variable should contain 42
