$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/ChromeBrowse.feature");
formatter.feature({
  "line": 1,
  "name": "This is the login scenario",
  "description": "",
  "id": "this-is-the-login-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login into the application.",
  "description": "",
  "id": "this-is-the-login-scenario;login-into-the-application.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Chrome12_Browser"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "navigate website url.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \"\u003cUsername or Email\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter as \"\u003cpassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on signin button.",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "this-is-the-login-scenario;login-into-the-application.;",
  "rows": [
    {
      "cells": [
        "Username or Email",
        "password"
      ],
      "line": 9,
      "id": "this-is-the-login-scenario;login-into-the-application.;;1"
    },
    {
      "cells": [
        "shadab",
        "YY0807pp!"
      ],
      "line": 10,
      "id": "this-is-the-login-scenario;login-into-the-application.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Login into the application.",
  "description": "",
  "id": "this-is-the-login-scenario;login-into-the-application.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Chrome12_Browser"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "navigate website url.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter as \"YY0807pp!\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on signin button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Chromebrowser.navigate_website_url()"
});
formatter.result({
  "duration": 38744231659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 7
    }
  ],
  "location": "Login_Chromebrowser.enter(String)"
});
formatter.result({
  "duration": 139193964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YY0807pp!",
      "offset": 10
    }
  ],
  "location": "Login_Chromebrowser.enter_as(String)"
});
formatter.result({
  "duration": 161706438,
  "status": "passed"
});
formatter.match({
  "location": "Login_Chromebrowser.click_on_signin_button()"
});
formatter.result({
  "duration": 1765297020,
  "status": "passed"
});
formatter.uri("src/test/resources/Firefoxbrowser.feature");
formatter.feature({
  "line": 1,
  "name": "sign in Test On Web Application",
  "description": "",
  "id": "sign-in-test-on-web-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login the application.",
  "description": "",
  "id": "sign-in-test-on-web-application;login-the-application.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@firefox_browser_test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "he/she provides the userEmail as \"\u003cUserEmail\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "he/she provides the password \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "sign-in-test-on-web-application;login-the-application.;",
  "rows": [
    {
      "cells": [
        "UserEmail",
        "Password"
      ],
      "line": 12,
      "id": "sign-in-test-on-web-application;login-the-application.;;1"
    },
    {
      "cells": [
        "test+art01@2pventures.com",
        "Test1234"
      ],
      "line": 13,
      "id": "sign-in-test-on-web-application;login-the-application.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "login the application.",
  "description": "",
  "id": "sign-in-test-on-web-application;login-the-application.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@firefox_browser_test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "he/she provides the userEmail as \"test+art01@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "he/she provides the password \"Test1234\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_FirefoxBrowser.navigate_website_url_test()"
});
formatter.result({
  "duration": 535556,
  "status": "passed"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 704445,
  "error_message": "java.lang.NullPointerException\r\n\tat TestRunner.loginSteps.Login_FirefoxBrowser.he_she_click_on_login_CTA(Login_FirefoxBrowser.java:63)\r\n\tat ✽.Then he/she click on login CTA.(src/test/resources/Firefoxbrowser.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+art01@2pventures.com",
      "offset": 34
    }
  ],
  "location": "Login_FirefoxBrowser.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 30
    }
  ],
  "location": "Login_FirefoxBrowser.he_she_pass_the_app(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
});