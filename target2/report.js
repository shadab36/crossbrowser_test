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
  "duration": 43089527675,
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
  "duration": 150303312,
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
  "duration": 107906810,
  "status": "passed"
});
formatter.match({
  "location": "Login_Chromebrowser.click_on_signin_button()"
});
formatter.result({
  "duration": 6765312131,
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
  "duration": 26716802734,
  "status": "passed"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 397437418,
  "status": "passed"
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
  "duration": 122621497,
  "status": "passed"
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
  "duration": 100267245,
  "status": "passed"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "duration": 2343022235,
  "status": "passed"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_click_on_login()"
});
formatter.result({
  "duration": 516994911,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\AL Moin Webtech\\AppData\\Local\\Temp\\rust_mozprofile.AyqzacrJG0Nj, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d61.0.1, platformVersion\u003d10.0, moz:processID\u003d13676.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt, moz:webdriverClick\u003dtrue}]\nSession ID: 7013a779-90b0-450b-8662-beb9522c8f0a\n*** Element info: {Using\u003dcss selector, value\u003d.init-button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.Login_FirefoxBrowser.he_she_click_on_login(Login_FirefoxBrowser.java:71)\r\n\tat ✽.Then he/she click on login cta.(src/test/resources/Firefoxbrowser.feature:10)\r\n",
  "status": "failed"
});
});