Feature: signup Test On Web Application

  @login_the_application
  Scenario Outline: Login into the application.
    Given navigates to website url.
    Then Enter user name as "<Username or Email>".
    Then Enter user password as "<password>".
    Then click on sign in button.
    And After login see the logout button.
 Then Click Settings from the top nav on app site after login.
    Then Click Users button.
    Examples: 
      | Username or Email | password  |
      | shadab            | YY0807pp! |

  #@Verfiy_the_AllField_validation
  #Scenario Outline: 
     #Then Click Settings from the top nav on app site after login.
    #Then Click Users button.
    #Then Click the New User button.
    #Then Click on role drop down option and select consultant
    #Then Click on Status filed and select Active
    #Then Enter login "<Login Name>".
    #Then Enter first name as "<First Name>".
    #Then Enter last name as "<Last Name>".
    #Then Enter email as "<Email>".
    #Then Enter password as "<Password>".
    #Then Enter confirm password as "<Confirm Password>".
    #Then Click on confirm button.
    #Then Verify "<Login NameValTest>" for the validation message of Login name.
    #Then Verify "<EmailValTest>" for the validation message of the email address field.
    #Then Verify  "<PasswordValTest>" for the validation message of the password field.
    #Then Verify  "<Confirm PasswordValTest>" for the validation message of confirm password field.
    #Examples: 
      #| Login Name | First Name | Last Name | Email              | Password   | Confirm Password | Login NameValTest       | EmailValTest                        | PasswordValTest                                                                                                                           | Confirm PasswordValTest                                 |
      #|            | test       | test      | shadab@gmail.com   | Qwe12345   | Qwe12345         | This value is required. |                                     |                                                                                                                                           |                                                         |
      #| shadab     | test       | test      | shadab@@gmail.com  | Qwe12345   | Qwe12345         |                         | This value should be a valid email. |                                                                                                                                           |                                                         |
      #| shadab     | test       | test      | shadab@gmail.com   | qwe12345   |                  |                         |                                     | Please enter a password between 8 and 30 characters, including one uppercase, one lowercase and one digit, and do not include login name. |                                                         |
      #| shadab     | test       | test      | shadab98@gmail.com | Qatest.123 | Qatest.1234      |                         |                                     |                                                                                                                                           | The password and password confirmation are not the same |
  @create_new_user
  Scenario Outline: 
    Then Click the New User button.
    Then Click on role drop down option and select consultant
    Then Click on Status filed and select Active
    Then Enter login name as "<Login Name>".
    Then Enter first name as "<First Name>".
    Then Enter last name as "<Last Name>".
    Then Enter Enter email test "<Email>".
    Then Enter password as "<Password>".
    Then Enter confirm password as "<Confirm Password>".
    Then Click on confirm button.

    Examples: 
      | Login Name | First Name | Last Name | Email            | Password   | Confirm Password |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
      | shadab     | test       | test      | shadab@gmail.com | Qatest.123 | Qatest.123       |
  #Scenario: 
    #And See the user added successfully message.
    #And Search the created user with Login name.
    #And Compare the added user email with seach result.
    #And Check the user created Login name.
    #And Check the user registered email.
