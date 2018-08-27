Feature: This is the login scenario
 @Chrome12_Browser
Scenario Outline: Login into the application. 
	Given navigate website url. 
	Then Enter "<Username or Email>". 
	Then Enter as "<password>". 
	Then click on signin button. 
	Examples: 
		| Username or Email | password  |
		| shadab            | YY0807pp! |