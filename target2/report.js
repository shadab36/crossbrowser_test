$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Firefoxbrowser.feature");
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
  "duration": 172775341,
  "status": "passed"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 6126675,
  "error_message": "java.lang.NullPointerException\r\n\tat TestRunner.loginSteps.Login_FirefoxBrowser.he_she_click_on_login_CTA(Login_FirefoxBrowser.java:59)\r\n\tat ✽.Then he/she click on login CTA.(src/test/resources/Firefoxbrowser.feature:6)\r\n",
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