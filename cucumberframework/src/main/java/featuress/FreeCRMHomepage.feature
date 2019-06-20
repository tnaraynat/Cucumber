Feature: FreeCRM Homepage

Scenario: check the title of the Home Page
Given Launch the browser
When Open FreeCRM Base URL
Then Verify the Title of the home page
Then Close the browser

Scenario Outline: Login to the application
Given Launch the browser
When Open FreeCRM Base URL
Then Click on Login
Then Enteru "<surname>"
Then Enterp "<password>"
Then Click on Submit
Then Verify Login Successfull

Examples:
|surname                | password |
|abcdef   | bbcdd |