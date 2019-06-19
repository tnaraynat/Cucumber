Feature: FreeCRM Homepage

Background:

Given Launch the browser
When Open FreeCRM Base URL

Scenario: check the title of the Home Page

Then Verify the Title of the home page
Then Close the browser
Then this is foring test

Scenario Outline: Login to the application

Then Click on Login
Then Enteru "<username>"
Then Enterp "<password>"


Examples:
|username | password |
|Funame   | fpassword |
|luname   | lpassword  |







