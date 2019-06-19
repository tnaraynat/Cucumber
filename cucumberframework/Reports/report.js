$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/nari/AutomationPractise/cucumberframework/src/main/java/featuress/FreeCRMHomepage.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Homepage",
  "description": "",
  "id": "freecrm-homepage",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Open FreeCRM Base URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.launch_the_browser()"
});
formatter.result({
  "duration": 5461019225,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.open_FreeCRM_Base_URL()"
});
formatter.result({
  "duration": 5593079565,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "check the title of the Home Page",
  "description": "",
  "id": "freecrm-homepage;check-the-title-of-the-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Verify the Title of the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "this is foring test",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.verify_the_Title_of_the_home_page()"
});
formatter.result({
  "duration": 379468097,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.CloseBrowser()"
});
formatter.result({
  "duration": 1455497773,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Login to the application",
  "description": "",
  "id": "freecrm-homepage;login-to-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "Click on Login",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enteru \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enterp \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "freecrm-homepage;login-to-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "freecrm-homepage;login-to-the-application;;1"
    },
    {
      "cells": [
        "Funame",
        "fpassword"
      ],
      "line": 23,
      "id": "freecrm-homepage;login-to-the-application;;2"
    },
    {
      "cells": [
        "luname",
        "lpassword"
      ],
      "line": 24,
      "id": "freecrm-homepage;login-to-the-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Open FreeCRM Base URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.launch_the_browser()"
});
formatter.result({
  "duration": 3158392552,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.open_FreeCRM_Base_URL()"
});
formatter.result({
  "duration": 2836776054,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login to the application",
  "description": "",
  "id": "freecrm-homepage;login-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "Click on Login",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enteru \"Funame\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enterp \"fpassword\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.loginclick()"
});
formatter.result({
  "duration": 8721415931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funame",
      "offset": 8
    }
  ],
  "location": "StepDefs_FreeCRMHomepageTitle.Enterusername(String)"
});
formatter.result({
  "duration": 514899074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fpassword",
      "offset": 8
    }
  ],
  "location": "StepDefs_FreeCRMHomepageTitle.Enterpassword(String)"
});
formatter.result({
  "duration": 150097180,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Open FreeCRM Base URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.launch_the_browser()"
});
formatter.result({
  "duration": 3314142648,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.open_FreeCRM_Base_URL()"
});
formatter.result({
  "duration": 5472346070,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login to the application",
  "description": "",
  "id": "freecrm-homepage;login-to-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "Click on Login",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enteru \"luname\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enterp \"lpassword\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.loginclick()"
});
formatter.result({
  "duration": 7107547597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "luname",
      "offset": 8
    }
  ],
  "location": "StepDefs_FreeCRMHomepageTitle.Enterusername(String)"
});
formatter.result({
  "duration": 143291886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lpassword",
      "offset": 8
    }
  ],
  "location": "StepDefs_FreeCRMHomepageTitle.Enterpassword(String)"
});
formatter.result({
  "duration": 186056502,
  "status": "passed"
});
});