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
  "duration": 5369499869,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.open_FreeCRM_Base_URL()"
});
formatter.result({
  "duration": 3461122343,
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
  "duration": 684028597,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.CloseBrowser()"
});
formatter.result({
  "duration": 901688544,
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
  "duration": 2835233684,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.open_FreeCRM_Base_URL()"
});
formatter.result({
  "duration": 4577490188,
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
  "duration": 7723640542,
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
  "duration": 121471448,
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
  "duration": 125588835,
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
  "duration": 4213048962,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_FreeCRMHomepageTitle.open_FreeCRM_Base_URL()"
});
formatter.result({
  "duration": 5799112600,
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
  "duration": 7409293125,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d75.0.3770.100)\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027PAVANK-PC\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: E:\\Users\\PavanK\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:27520}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4314080b9d45aafff8e88902b3c7f49d\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027icon icon-xs mdi-chart-bar\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat stepDefinitions.StepDefs_FreeCRMHomepageTitle.loginclick(StepDefs_FreeCRMHomepageTitle.java:56)\r\n\tat ✽.Then Click on Login(F:/nari/AutomationPractise/cucumberframework/src/main/java/featuress/FreeCRMHomepage.feature:16)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
});