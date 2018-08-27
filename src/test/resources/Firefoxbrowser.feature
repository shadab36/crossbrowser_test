 Feature: sign in Test On Web Application
 
 @firefox_browser_test
  Scenario Outline: login the application.
   Given navigates to integration-www-sandman.mobiusbookingengine.com  
    Then he/she click on login CTA.
    Then he/she provides the userEmail as "<UserEmail>".
    Then he/she provides the password "<Password>".
    Then he/she minimize the booking banner.
    Then he/she click on login cta.
    Examples: 
     | UserEmail                 | Password |
     | test+art01@2pventures.com | Test1234 |
     