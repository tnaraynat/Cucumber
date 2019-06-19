Feature: FreeCRM Homepage

Background:

Given Launch the browser
When Open FreeCRM Base URL

Scenario: check the title of the Home Page

Then Verify the Title of the home page
Then Close the browser


Scenario Outline: Login to the application

Then Click on Login
Then Enteru "<surname>"
Then Enterp "<password>"
Then Click on Submit
Then Verify Login Successfull


Examples:
|surname                | password |
|tnarayanat@gmail.com   | Pawan@123 |







