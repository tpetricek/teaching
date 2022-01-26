Feature: Fancy maths
  In order to count things
  As a user of a counting library
  I want to increment variables

  Scenario Outline: incrementing variable by various numbers
    Given a variable set to <var>
    When I increment the variable by <increment>
    Then the variable should contain <result>

    Examples:
      | var | increment | result |
      | 100 |         5 |    105 |
      |  99 |      1234 |   1333 |
      |  12 |         5 |     17 |